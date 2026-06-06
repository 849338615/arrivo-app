/* -------------------------------------------------------------------------- */
/*  Arrivo trip-plan data contract                                            */
/*                                                                            */
/*  Every screen renders from a single TripPlan payload. The prototype's      */
/*  hardcoded China constants are now just *one* TripPlan (CHINA_PLAN in      */
/*  data.ts); any country is generated at runtime into the same shape.        */
/* -------------------------------------------------------------------------- */

export type TaskStatus = 'ready' | 'upcoming' | 'complete' | 'critical'

export type Task = {
  id: string
  title: string
  category: string
  status: TaskStatus
  duration: string
  why: string
  steps: string[]
  cta: string
  needs?: string[]
  headsUp?: string
}

/* Category ids are a FIXED set across every plan so the dashboard layout,
   icons, and section ordering stay stable regardless of country. */
export type CategoryId =
  | 'visa'
  | 'flights'
  | 'transport'
  | 'money'
  | 'connectivity'
  | 'culture'
  | 'landing'

export const CATEGORY_IDS: CategoryId[] = [
  'visa',
  'flights',
  'transport',
  'money',
  'connectivity',
  'culture',
  'landing',
]

export type Category = {
  id: string
  name: string
  icon: string
  total: number
  done: number
  nextTaskId: string
  blurb: string
}

export type City = {
  code: string
  name: string
  days: number
  image: string
  stayLabel?: string
}

export type TransitMode = 'plane' | 'rail' | 'car' | 'bus' | 'ferry'

export type Leg = {
  from: string
  to: string
  mode: TransitMode
  duration: string
  stops: string
  status: 'booked' | 'planned'
}

export type DayBlock = {
  slot: 'morning' | 'afternoon' | 'evening'
  label: string
  detail: string
  meta?: string
}

export type DayCard = {
  dayNumber: number
  city: string
  date: string
  kind: 'arrival' | 'transit' | 'explore'
  blocks: DayBlock[]
}

export type Hotel = {
  name: string
  /** Local-script address — the big taxi-facing line. */
  addressLocal: string
  /** Romanization / pinyin line (omit for Latin-script languages). */
  roman?: string
  /** English / latin address line. */
  addressEn: string
  neighborhood?: string
  city: string
}

export type PhraseItem = { en: string; local: string; roman?: string }
export type PhraseGroup = { group: string; items: PhraseItem[] }

export type EmergencyContact = {
  label: string
  number: string
  kind: 'urgent' | 'consular'
}

export type PredepartureItem = {
  id: string
  label: string
  sub?: string
  linkedTaskId?: string
}
export type PredepartureGroup = { group: string; items: PredepartureItem[] }

export type Currency = { code: string; symbol: string; usdRate: number }

/** The onboarding answers that drive plan generation. */
export type TripAnswers = {
  countryCode: string
  countryName?: string
  dateMode: 'exact' | 'flexible' | 'within3'
  durationDays: number
  travelers: string
  tripTypes: string[]
  budget: number // 0..100
  prep: number // 0..3
}

export const DEFAULT_ANSWERS: TripAnswers = {
  countryCode: '',
  countryName: '',
  dateMode: 'flexible',
  durationDays: 14,
  travelers: 'solo',
  tripTypes: ['culture', 'food', 'city'],
  budget: 55,
  prep: 1,
}

export type CountryMeta = {
  code: string
  name: string
  capital: string
  region: string
  flag: string
}

export type TripPlan = {
  country: CountryMeta
  heroCity: string
  heroImage: string
  arrivalAirport: { code: string; city: string }
  currency: Currency
  languages: string[]
  phraseLang: { name: string; bcp47: string; hasRomanization: boolean }
  homeCountry: string
  summary: string
  /** Compact label for the Landing visa tile, e.g. "Schengen · 90 days". */
  visaLabel: string
  categories: Category[]
  tasks: Record<string, Task>
  briefingBuckets: { now: string[]; soon: string[]; final: string[] }
  itinerary: { routeTitle: string; dateRange: string; cities: City[]; legs: Leg[] }
  itineraryDays: DayCard[]
  hotel: Hotel
  phrases: PhraseGroup[]
  emergencyContacts: EmergencyContact[]
  predeparture: PredepartureGroup[]
  /** True when produced by the no-key templated fallback (less rich). */
  isTemplated?: boolean
}

/* -------------------------------------------------------------------------- */
/*  Small derived helpers used across screens                                 */
/* -------------------------------------------------------------------------- */

export function totalSteps(plan: TripPlan): number {
  return plan.categories.reduce((acc, c) => acc + c.total, 0)
}

export function categoryById(plan: TripPlan, id: string): Category | undefined {
  return plan.categories.find((c) => c.id === id)
}

/** Tasks belonging to a category, in plan order. */
export function tasksForCategory(plan: TripPlan, categoryName: string): Task[] {
  return Object.values(plan.tasks).filter((t) => t.category === categoryName)
}

/** Map a language *name* to a BCP-47 tag + whether it needs romanization.
   Used for the phrase card's `lang` attribute, speech synthesis, and to tell
   the UI when to show a romanization line. */
export function languageMeta(lang: string): {
  bcp47: string
  hasRomanization: boolean
} {
  const l = (lang || '').toLowerCase()
  const table: Array<[RegExp, string, boolean]> = [
    [/mandarin|chinese/, 'zh-CN', true],
    [/cantonese/, 'zh-HK', true],
    [/japanese/, 'ja-JP', true],
    [/korean/, 'ko-KR', true],
    [/arabic/, 'ar-SA', true],
    [/thai/, 'th-TH', true],
    [/hindi/, 'hi-IN', true],
    [/bengali/, 'bn-BD', true],
    [/russian|ukrainian/, 'ru-RU', true],
    [/greek/, 'el-GR', true],
    [/hebrew/, 'he-IL', true],
    [/persian|farsi/, 'fa-IR', true],
    [/spanish|castilian/, 'es-ES', false],
    [/french/, 'fr-FR', false],
    [/german/, 'de-DE', false],
    [/italian/, 'it-IT', false],
    [/portuguese/, 'pt-PT', false],
    [/dutch/, 'nl-NL', false],
    [/turkish/, 'tr-TR', false],
    [/vietnamese/, 'vi-VN', false],
    [/indonesian|malay/, 'id-ID', false],
    [/polish/, 'pl-PL', false],
    [/swedish/, 'sv-SE', false],
    [/english/, 'en-US', false],
  ]
  for (const [re, code, rom] of table) if (re.test(l)) return { bcp47: code, hasRomanization: rom }
  return { bcp47: '', hasRomanization: false }
}

/** Recompute each category's `total` from its tasks so counts never drift. */
export function reconcileCategoryTotals(plan: TripPlan): TripPlan {
  const counts: Record<string, number> = {}
  for (const t of Object.values(plan.tasks)) {
    const cat = plan.categories.find((c) => c.name === t.category)
    if (cat) counts[cat.id] = (counts[cat.id] ?? 0) + 1
  }
  return {
    ...plan,
    categories: plan.categories.map((c) => ({
      ...c,
      total: counts[c.id] ?? c.total,
    })),
  }
}
