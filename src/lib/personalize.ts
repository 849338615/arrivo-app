/* -------------------------------------------------------------------------- */
/*  Personalization engine.                                                    */
/*                                                                            */
/*  Turns onboarding answers into a plan the traveler can SEE themselves in.   */
/*  `selectBasePlan` picks the richest available base (China sample, a curated */
/*  country, or the templated fallback); `personalizePlan` then runs a         */
/*  pipeline of small, deterministic transforms — one per onboarding promise — */
/*  that re-sequence, filter, annotate, and cost the plan around the answers.  */
/*                                                                            */
/*  Pure + synchronous + offline so the live onboarding preview and the final  */
/*  generated plan are produced by the exact same code and always agree.       */
/* -------------------------------------------------------------------------- */

import {
  reconcileCategoryTotals,
  totalSteps,
  type Personalization,
  type Task,
  type TripAnswers,
  type TripPlan,
} from './plan'
import { CHINA_PLAN } from '../data'
import {
  ACCESS_IDS,
  DIETARY_IDS,
  EXPERIENCE_OPTIONS,
  PACE_OPTIONS,
  needLabel,
  tripTypeById,
} from '../data'
import { CURATED_PLANS } from './curatedPlans'
import { buildTemplatedPlan } from './templatePlan'
import { factsFor } from './facts'

/* The fixed category names shared by every plan (see CATEGORY_IDS in plan.ts). */
const CAT = {
  visa: 'Visa & documents',
  flights: 'Flights & stay',
  transport: 'Local transport',
  money: 'Money & payments',
  connectivity: 'Connectivity',
  culture: 'Culture & etiquette',
  landing: 'Landing Day Hub',
} as const

/* -------------------------------------------------------------------------- */
/*  Budget helpers — single source of truth shared with the onboarding slider. */
/* -------------------------------------------------------------------------- */

/** Map the 0..100 budget slider to a daily USD target ($80–$600). */
export function budgetUsdPerDay(budget: number): number {
  return Math.round(80 + (clamp01(budget) / 100) * 520)
}

export function budgetTier(budget: number): string {
  const b = clamp01(budget)
  return b < 30 ? 'Budget' : b < 65 ? 'Mid-range' : b < 90 ? 'Comfort' : 'Premium'
}

function clamp01(n: number): number {
  return Math.max(0, Math.min(100, Number.isFinite(n) ? n : 0))
}

/* -------------------------------------------------------------------------- */
/*  Base-plan selection                                                        */
/* -------------------------------------------------------------------------- */

/** Pick the richest base plan for the chosen country. China and curated
    countries return shared singletons — callers MUST clone before mutating
    (personalizePlan does). */
export function selectBasePlan(answers: TripAnswers): TripPlan {
  const code = (answers.countryCode || '').toUpperCase()
  if (code === 'CN') return CHINA_PLAN
  return (
    CURATED_PLANS[code] ??
    buildTemplatedPlan(factsFor(answers.countryCode, answers.countryName), answers, {})
  )
}

/* -------------------------------------------------------------------------- */
/*  Public entry points                                                        */
/* -------------------------------------------------------------------------- */

/** Apply the full personalization pipeline to a base plan. */
export function personalizePlan(base: TripPlan, answers: TripAnswers): TripPlan {
  const plan = deepClone(base)

  withBudgetTarget(plan, answers)
  withInterestFlavor(plan, answers)
  withTravelerAdaptations(plan, answers)
  withNeeds(plan, answers)
  withPaceItinerary(plan, answers)
  withDates(plan, answers)
  withPrepSequencing(plan, answers)
  withExperienceDepth(plan, answers)
  withUrgencyBuckets(plan, answers)
  recomputeCategoryProgress(plan)
  withPersonalizationSummary(plan, answers)

  return reconcileCategoryTotals(plan)
}

/** Lightweight stats for the live onboarding preview. Identical numbers to the
    final plan because it runs the very same pipeline. Returns null until a
    country is chosen. */
export function previewStats(answers: TripAnswers): {
  briefings: number
  ready: number
  perDayUsd: number
  focus: string[]
  paceLabel: string
} | null {
  if (!answers.countryCode) return null
  const plan = personalizePlan(selectBasePlan(answers), answers)
  return {
    briefings: totalSteps(plan),
    ready: plan.briefingBuckets.now.length,
    perDayUsd: plan.budgetTarget?.perDayUsd ?? budgetUsdPerDay(answers.budget),
    focus: plan.personalization?.focus ?? [],
    paceLabel: plan.personalization?.paceLabel ?? '',
  }
}

/** Task ids the engine pre-completed (booked-flights, seasoned basics, …). The
    app seeds its "done" set from these so progress starts realistically. */
export function completedTaskIds(plan: TripPlan): string[] {
  return Object.values(plan.tasks)
    .filter((t) => t.status === 'complete')
    .map((t) => t.id)
}

/* -------------------------------------------------------------------------- */
/*  Transforms — each maps one answer to one visible change                    */
/* -------------------------------------------------------------------------- */

/* budget → real daily target + tier-appropriate stay copy. */
function withBudgetTarget(plan: TripPlan, a: TripAnswers): void {
  const perDayUsd = budgetUsdPerDay(a.budget)
  const tier = budgetTier(a.budget)
  const rate = plan.currency?.usdRate
  plan.budgetTarget = {
    perDayUsd,
    tier,
    localPerDay: rate && rate > 0 && rate !== 1 ? Math.round(perDayUsd * rate) : undefined,
  }

  // Nudge the hotel/stay task and city stay labels toward the tier.
  const stayNote =
    tier === 'Budget'
      ? 'On your budget: hostels, guesthouses, and well-located 2–3★ stays with free cancellation.'
      : tier === 'Premium'
        ? 'At your budget: design hotels and boutique or luxury stays in the best-connected districts.'
        : tier === 'Comfort'
          ? 'At your budget: comfortable 4★ hotels and boutiques in central neighborhoods.'
          : 'For your budget: solid 3–4★ hotels in central, well-connected neighborhoods.'
  const stay = findTask(plan, CAT.flights, /hotel|stay/i)
  if (stay) stay.headsUp = stayNote
}

/* interests → focus order + templated explore-day flavor. Curated/China day
   cards are left intact (they already span interests); the visible reflection
   is the focus line surfaced on the dashboard, itinerary, and review screen. */
const EXPLORE_FLAVOR: Record<string, { label: string; detail: string }> = {
  food: { label: 'Food markets & local flavors', detail: 'Graze the markets and find the dish this place is known for' },
  culture: { label: 'Museums, temples & landmarks', detail: 'The cultural heart — art, history, and sacred sites' },
  outdoors: { label: 'Parks, trails & viewpoints', detail: 'Get outside — green space and the best vantage points' },
  city: { label: 'Neighborhoods & skyline', detail: 'Wander the districts that define the modern city' },
  history: { label: 'Old town & heritage', detail: 'The historic quarter, monuments, and living history' },
  nightlife: { label: 'Sunset spots & nightlife', detail: 'Golden-hour views, then bars and late-night energy' },
  shopping: { label: 'Markets, boutiques & design', detail: 'Local makers, design districts, and standout shops' },
  relaxation: { label: 'Slow morning & downtime', detail: 'A gentle pace — café, garden, and nothing rushed' },
  offbeat: { label: 'Backstreets & local life', detail: 'Skip the postcards — where locals actually go' },
}

function withInterestFlavor(plan: TripPlan, a: TripAnswers): void {
  if (!plan.isTemplated) return
  const top = a.tripTypes[0]
  const flavor = top && EXPLORE_FLAVOR[top]
  if (!flavor) return
  // Re-theme the generic templated explore day around the strongest interest.
  for (const day of plan.itineraryDays) {
    if (day.kind !== 'explore') continue
    const morning = day.blocks.find((b) => b.slot === 'morning')
    if (morning) {
      morning.label = flavor.label
      morning.detail = flavor.detail
    }
    break
  }
}

/* travelers → a party-specific task + small copy tweaks. */
function withTravelerAdaptations(plan: TripPlan, a: TripAnswers): void {
  if (a.travelers === 'family') {
    addTask(plan, {
      id: 'p-family',
      title: 'Plan for traveling with kids',
      category: CAT.transport,
      status: 'upcoming',
      duration: '15 min',
      why: 'Kids change the logistics: family rooms, stroller-friendly routes, snack stops, and shorter days. A little planning keeps the trip fun instead of frantic.',
      steps: [
        'Book a family room or connecting rooms',
        'Map step-free metro routes and taxi car-seat options',
        'Build in daily downtime and snack breaks',
      ],
      cta: 'Open family checklist',
      headsUp: 'Carry a card with any allergies and your hotel address in the local script in case you get separated.',
    })
  } else if (a.travelers === 'group') {
    addTask(plan, {
      id: 'p-group',
      title: 'Coordinate group bookings',
      category: CAT.flights,
      status: 'upcoming',
      duration: '20 min',
      why: 'Groups get split across flights and hotels fast. Lock shared dates, book rooms together, and agree how you’ll split costs before anyone pays.',
      steps: [
        'Confirm everyone’s dates and budget band',
        'Book rooms on one reservation where possible',
        'Pick a cost-splitting app and a group chat',
      ],
      cta: 'Open group checklist',
    })
  } else if (a.travelers === 'solo') {
    const emerg = findTask(plan, CAT.landing, /emergency/i)
    if (emerg) {
      emerg.headsUp =
        'Solo tip: share your live location and daily plan with someone at home, and keep your hotel address saved offline.'
    }
  }

  // Couple: tilt the stay toward a central double; keep it light.
  if (a.travelers === 'couple') {
    const stay = findTask(plan, CAT.flights, /hotel|stay/i)
    if (stay && !/double|couple/i.test(stay.steps[0] ?? '')) {
      stay.steps = ['Pick a central, walkable neighborhood for two', ...stay.steps.slice(1)]
    }
  }
}

/* needs → dietary phrases + a dining note; accessibility notes. */
const DIETARY_PHRASE: Record<string, string> = {
  vegetarian: 'I’m vegetarian — no meat or fish, please.',
  vegan: 'I’m vegan — no meat, fish, eggs, or dairy.',
  halal: 'Is this halal? I don’t eat pork.',
  glutenfree: 'I can’t eat gluten or wheat.',
  allergy: 'I have a food allergy. This could make me very sick.',
}

function withNeeds(plan: TripPlan, a: TripAnswers): void {
  const dietary = a.needs.filter((n) => DIETARY_IDS.includes(n))
  if (dietary.length) {
    let group = plan.phrases.find((g) => /restaurant|food|dining/i.test(g.group))
    if (!group) {
      group = { group: 'Restaurant', items: [] }
      plan.phrases.push(group)
    }
    for (const d of dietary) {
      const en = DIETARY_PHRASE[d]
      if (en && !group.items.some((it) => it.en === en)) {
        group.items.unshift({ en, local: '' })
      }
    }
    const dining = findTask(plan, CAT.culture, /din|etiquette|tipping/i)
    if (dining) {
      const labels = dietary.map(needLabel).join(', ').toLowerCase()
      dining.headsUp = `You told us: ${labels}. Save the dietary phrase card to your Landing Hub and learn to show it — it travels better than explaining out loud.`
    }
  }

  const access = a.needs.filter((n) => ACCESS_IDS.includes(n))
  if (access.length) {
    const transfer = findTask(plan, CAT.transport, /transfer|transit|airport/i)
    if (transfer) {
      transfer.headsUp =
        'Accessibility: favor step-free metro entrances and accessible taxis; many transit apps flag elevator-equipped stations. Hotels can pre-arrange an accessible transfer.'
    }
  }
}

/* pace → itinerary density on explore days. */
function withPaceItinerary(plan: TripPlan, a: TripAnswers): void {
  const pace = PACE_OPTIONS.find((p) => p.id === a.pace)
  if (!pace) return

  for (const day of plan.itineraryDays) {
    if (day.kind !== 'explore') continue

    if (a.pace === 'relaxed') {
      // Trim to a calm two-stop day with the evening left open.
      const evening = day.blocks.find((b) => b.slot === 'evening')
      day.blocks = day.blocks.filter((b) => b.slot !== 'evening')
      const last = day.blocks[day.blocks.length - 1]
      if (last && !last.meta) {
        last.meta = evening
          ? 'Evening kept open — rest, or revisit a favorite at your own pace.'
          : 'Built-in downtime — no plans after this.'
      }
    } else if (a.pace === 'packed') {
      // Add an extra evening stop so the day reads fuller.
      const hasEvening = day.blocks.some((b) => b.slot === 'evening')
      day.blocks.push({
        slot: 'evening',
        label: hasEvening ? 'Optional nightcap' : 'Evening out',
        detail: hasEvening
          ? 'One more stop if you’ve got the energy — a bar, night market, or skyline view'
          : 'Dinner, then a night market or skyline view',
        meta: 'Packed pace — back-to-back; skip anything that drags.',
      })
    }
  }
}

/* exact start date → anchor the itinerary date range to it. Curated city day
   counts are left intact, so the range spans the itinerary's own length. */
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function withDates(plan: TripPlan, a: TripAnswers): void {
  if (a.dateMode !== 'exact' || !a.startDate) return
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(a.startDate)
  if (!m) return
  const start = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]))
  const span = plan.itinerary.cities.reduce((s, c) => s + (c.days || 0), 0) || a.durationDays || 1
  const end = new Date(start)
  end.setDate(end.getDate() + span - 1)
  const fmt = (d: Date) => `${MONTHS[d.getMonth()]} ${d.getDate()}`
  plan.itinerary.dateRange = `${fmt(start)} – ${fmt(end)}`
}

/* prep → mark already-handled bookings complete. */
function withPrepSequencing(plan: TripPlan, a: TripAnswers): void {
  const prep = clampPrep(a.prep)
  if (prep >= 2) {
    // Flights booked: comparing/booking/seats are behind them.
    markComplete(plan, CAT.flights, /flight|seat|compare/i)
  }
  if (prep >= 3) {
    // Fully booked: stay + intercity transport are done too.
    markComplete(plan, CAT.flights, /hotel|stay/i)
    markComplete(plan, CAT.transport, /book|rail|reserve|train/i)
  }
}

/* experience → collapse the basics for seasoned travelers. */
function withExperienceDepth(plan: TripPlan, a: TripAnswers): void {
  if (a.experience === 'seasoned') {
    markComplete(plan, CAT.visa, /passport/i)
    markComplete(plan, CAT.connectivity, /offline map|download/i)
    markComplete(plan, CAT.landing, /offline map/i)
  }
}

/* dateMode/dates + worries → rebuild the now/soon/final buckets by urgency. */
const CONCERN_TARGET: Record<string, { cat: string; match: RegExp }> = {
  language: { cat: CAT.culture, match: /phrase|greeting|language/i },
  connectivity: { cat: CAT.connectivity, match: /vpn|esim|sim|data|connect/i },
  money: { cat: CAT.money, match: /pay|card|cash|wechat|alipay|wallet/i },
  safety: { cat: CAT.landing, match: /emergency/i },
}

function withUrgencyBuckets(plan: TripPlan, a: TripAnswers): void {
  const b = plan.briefingBuckets
  const buckets: Record<'now' | 'soon' | 'final', string[]> = {
    now: [...b.now],
    soon: [...b.soon],
    final: [...b.final],
  }

  const promote = (id?: string | null) => {
    if (!id || !plan.tasks[id]) return
    buckets.soon = buckets.soon.filter((x) => x !== id)
    buckets.final = buckets.final.filter((x) => x !== id)
    if (!buckets.now.includes(id)) buckets.now.unshift(id)
  }

  // Worries jump their category's lead task to the top of "now".
  for (const need of a.needs) {
    const t = CONCERN_TARGET[need]
    if (t) promote(findTaskId(plan, t.cat, t.match))
  }

  // A near, locked-in departure pulls visa + flight decisions forward.
  const days = countdownDays(a)
  const soon = (a.dateMode === 'exact' && days != null && days <= 30) || a.prep >= 1
  if (soon) {
    promote(findTaskId(plan, CAT.visa, /visa|entry/i))
    if (a.prep < 2) promote(findTaskId(plan, CAT.flights, /compare|book/i))
  }

  plan.briefingBuckets = buckets
}

/* -------------------------------------------------------------------------- */
/*  Derived progress + summary                                                 */
/* -------------------------------------------------------------------------- */

/** Recompute each category's done count and next-up task from task status. */
function recomputeCategoryProgress(plan: TripPlan): void {
  const rank = bucketRank(plan)
  for (const cat of plan.categories) {
    const tasks = Object.values(plan.tasks)
      .filter((t) => t.category === cat.name)
      .sort((x, y) => (rank[x.id] ?? 999) - (rank[y.id] ?? 999))
    cat.done = tasks.filter((t) => t.status === 'complete').length
    const next = tasks.find((t) => t.status !== 'complete')
    if (next) cat.nextTaskId = next.id
  }
}

function withPersonalizationSummary(plan: TripPlan, a: TripAnswers): void {
  const focus = a.tripTypes
    .map((id) => tripTypeById(id)?.label)
    .filter((x): x is string => Boolean(x))
    .slice(0, 3)
  const paceLabel = PACE_OPTIONS.find((p) => p.id === a.pace)?.label ?? 'Balanced'
  const experienceLabel =
    EXPERIENCE_OPTIONS.find((e) => e.id === a.experience)?.label ?? 'A few trips in'
  const dietary = a.needs.filter((n) => DIETARY_IDS.includes(n)).map(needLabel)
  const tier = plan.budgetTarget?.tier ?? budgetTier(a.budget)
  const days = countdownDays(a)

  const travelerWord =
    a.travelers === 'solo'
      ? 'solo trip'
      : a.travelers === 'couple'
        ? 'trip for two'
        : a.travelers === 'family'
          ? 'family trip'
          : 'group trip'

  const prepWord =
    a.prep >= 3
      ? 'fully booked'
      : a.prep >= 2
        ? 'booked flights'
        : a.prep >= 1
          ? 'picked dates'
          : 'early planning'

  const sequencedFor = [prepWord, `${paceLabel.toLowerCase()} pace`]
    .concat(days != null ? [`${days} days out`] : [])
    .join(' · ')

  const focusPhrase = focus.length ? listJoin(focus.map((f) => f.toLowerCase())) : 'all-round'
  const stops = plan.itinerary.cities.length > 1 ? ` across ${plan.itinerary.cities.length} stops` : ''

  plan.personalization = {
    focus,
    paceLabel,
    budgetTier: tier,
    experienceLabel,
    dietary,
    countdownDays: days ?? undefined,
    summaryLine: `A ${paceLabel.toLowerCase()} ${focusPhrase} ${travelerWord} · ${tier.toLowerCase()}`,
    sequencedFor,
  } satisfies Personalization

  plan.summary = `A ${paceLabel.toLowerCase()} ${travelerWord} through ${plan.country.name}${stops}, weighted toward ${focusPhrase} and sequenced from now to landing day.`
}

/* -------------------------------------------------------------------------- */
/*  Low-level helpers                                                          */
/* -------------------------------------------------------------------------- */

function deepClone<T>(x: T): T {
  return JSON.parse(JSON.stringify(x)) as T
}

function clampPrep(n: number): number {
  return Math.max(0, Math.min(3, Math.round(Number.isFinite(n) ? n : 0)))
}

/** Oxford-style list: ["a","b","c"] → "a, b & c". */
function listJoin(items: string[]): string {
  if (items.length <= 1) return items[0] ?? ''
  if (items.length === 2) return `${items[0]} & ${items[1]}`
  return `${items.slice(0, -1).join(', ')} & ${items[items.length - 1]}`
}

/** Whole days from today (UTC midnight) until the chosen start date, or null. */
export function countdownDays(a: TripAnswers): number | null {
  if (a.dateMode !== 'exact' || !a.startDate) return null
  const start = new Date(a.startDate + 'T00:00:00Z').getTime()
  if (Number.isNaN(start)) return null
  const now = new Date()
  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  return Math.max(0, Math.round((start - today) / 86_400_000))
}

function findTask(plan: TripPlan, category: string, match: RegExp): Task | undefined {
  return Object.values(plan.tasks).find(
    (t) => t.category === category && match.test(t.title),
  )
}

function findTaskId(plan: TripPlan, category: string, match: RegExp): string | null {
  return findTask(plan, category, match)?.id ?? null
}

function markComplete(plan: TripPlan, category: string, match: RegExp): void {
  for (const t of Object.values(plan.tasks)) {
    if (t.category === category && match.test(t.title)) t.status = 'complete'
  }
}

/** Insert a task and place it in a briefing bucket so it surfaces. */
function addTask(plan: TripPlan, task: Task, bucket: 'now' | 'soon' | 'final' = 'soon'): void {
  if (plan.tasks[task.id]) return
  plan.tasks[task.id] = task
  if (!plan.briefingBuckets[bucket].includes(task.id)) {
    plan.briefingBuckets[bucket].push(task.id)
  }
}

/** Map task id → its position in the flattened now→soon→final order. */
function bucketRank(plan: TripPlan): Record<string, number> {
  const order = [
    ...plan.briefingBuckets.now,
    ...plan.briefingBuckets.soon,
    ...plan.briefingBuckets.final,
  ]
  const rank: Record<string, number> = {}
  order.forEach((id, i) => (rank[id] = i))
  return rank
}
