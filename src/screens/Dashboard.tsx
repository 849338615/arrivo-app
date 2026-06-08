import { useEffect, useState } from 'react'
import {
  AirplaneTakeoff,
  ArrowRight,
  Compass,
  GlobeHemisphereWest,
  Heartbeat,
  IdentificationCard,
  MoonStars,
  TrainSimple,
  Wallet,
  WifiSlash,
  type Icon as PIcon,
} from '@phosphor-icons/react'
import { Progress, DestinationImage, Pip } from '../components'
import { usePlan } from '../lib/PlanContext'
import {
  categoryById,
  tasksForCategory,
  totalSteps,
  type Category,
  type TripPlan,
} from '../lib/plan'
import type { Answers } from './Onboarding'

const CATEGORY_ICON: Record<string, PIcon> = {
  visa: IdentificationCard,
  flights: AirplaneTakeoff,
  transport: TrainSimple,
  money: Wallet,
  connectivity: GlobeHemisphereWest,
  culture: Heartbeat,
  landing: Compass,
}

export function Dashboard({
  answers,
  doneTasks,
  onOpenTask,
  onOpenLanding,
  onOpenPredeparture,
}: {
  answers: Answers
  doneTasks: Set<string>
  onOpenTask: (id: string) => void
  onOpenLanding: () => void
  onOpenPredeparture: () => void
}) {
  const plan = usePlan()
  const country = plan.country
  const cat = (id: string): Category => categoryById(plan, id) ?? plan.categories[0]

  const total = totalSteps(plan)
  const done = doneTasks.size

  // Reveal: total animates 0 → N once, then stays. Showcases plan size.
  const [revealedTotal, setRevealedTotal] = useState(0)
  useEffect(() => {
    let n = 0
    const id = setInterval(() => {
      n += 1
      setRevealedTotal(n)
      if (n >= total) clearInterval(id)
    }, 36)
    return () => clearInterval(id)
  }, [total])

  const visa = cat('visa')
  const upNext = ['flights', 'transport', 'money', 'connectivity', 'culture']
    .map((id) => categoryById(plan, id))
    .filter((c): c is Category => Boolean(c))
  const landing = cat('landing')
  const arrival = plan.arrivalAirport.code || plan.arrivalAirport.city
  const pers = plan.personalization
  const budget = plan.budgetTarget

  return (
    <div className="relative h-full w-full overflow-hidden bg-ink no-select">
      <div className="scroll-area h-full overflow-y-auto pb-32">
        {/* Hero — full-bleed photo with eyebrow / title / progress */}
        <section className="relative h-[520px] w-full overflow-hidden">
          <DestinationImage
            src={plan.heroImage}
            query={`${plan.heroCity} ${country.name} skyline cinematic`}
            place={plan.heroCity}
            className="animate-hero-pan absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(14,21,32,0.10) 0%, rgba(14,21,32,0.30) 35%, rgba(14,21,32,0.78) 78%, rgba(14,21,32,1) 100%)',
            }}
          />

          <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-7">
            <div
              className="fade-up flex items-center text-[11px] font-semibold uppercase tracking-[0.22em] text-fog"
              style={{
                animationDelay: '60ms',
                textShadow:
                  '0 1px 3px rgba(7,9,14,0.6), 0 0 14px rgba(7,9,14,0.5)',
              }}
            >
              {country.name} <span className="mx-3 inline-block h-[10px] w-px bg-fog/70" /> {answers.durationDays} days <span className="mx-3 inline-block h-[10px] w-px bg-fog/70" /> <span className="capitalize">{answers.travelers}</span>
            </div>
            <h1
              className="fade-up mt-3 font-display text-[44px] font-bold leading-[52px] tracking-[-0.02em] text-mist"
              style={{ animationDelay: '120ms' }}
            >
              Your {country.name}
              <br /> plan is ready.
            </h1>

            {pers?.countdownDays != null && (
              <div
                className="fade-up mt-3 inline-flex items-center gap-1.5 self-start rounded-full border border-white/10 bg-white/[0.07] px-3 py-1 text-[12px] font-semibold text-mist backdrop-blur"
                style={{ animationDelay: '170ms' }}
              >
                <AirplaneTakeoff size={13} weight="fill" className="text-steel-soft" />
                {pers.countdownDays === 0
                  ? 'Departure day'
                  : `${pers.countdownDays} days to departure`}
              </div>
            )}

            <div className="fade-up mt-6" style={{ animationDelay: '220ms' }}>
              <div className="mb-2 flex items-baseline justify-between">
                <span className="text-[12px] font-semibold text-fog">
                  Readiness sequence
                </span>
                <span
                  className="font-display text-[14px] font-semibold tabular-nums text-mist"
                  aria-live="polite"
                >
                  <span className="text-fog">{done}</span>
                  <span className="px-0.5 text-smoke">/</span>
                  <span className="tabular-nums">{revealedTotal}</span>
                  <span className="ml-1 text-[12px] font-medium text-smoke">steps</span>
                </span>
              </div>
              <Progress value={Math.max(done, 1)} max={total} />
            </div>
          </div>
        </section>

        {/* Body */}
        <div className="px-6 pt-6">
          {/* TAILORED FOR YOU ---------------------------------------------- */}
          {pers && (
            <>
              <SectionLabel label="Tailored for you" delay={250} />
              <div className="mt-3 flex flex-wrap gap-2">
                {pers.focus.map((f) => (
                  <TailorChip key={f} accent>
                    {f}
                  </TailorChip>
                ))}
                <TailorChip>{pers.paceLabel} pace</TailorChip>
                {budget && (
                  <TailorChip>
                    ~${budget.perDayUsd}/day · {budget.tier}
                  </TailorChip>
                )}
                <TailorChip>{pers.experienceLabel}</TailorChip>
                {pers.dietary.length > 0 && (
                  <TailorChip>{pers.dietary.join(', ')}</TailorChip>
                )}
              </div>
            </>
          )}

          {/* READY NOW ----------------------------------------------------- */}
          <SectionLabel label="Ready now" delay={300} className={pers ? 'mt-7' : ''} />
          <div className="mt-3">
            <PrimaryActionCard
              plan={plan}
              cat={visa}
              onStart={() => onOpenTask(visa.nextTaskId)}
            />
          </div>

          {/* UP NEXT ------------------------------------------------------- */}
          <SectionLabel label="Up next" delay={420} className="mt-7" />
          <div className="mt-3 space-y-2.5">
            {upNext.map((c, i) => (
              <UpNextCard
                key={c.id}
                cat={c}
                onOpen={() => onOpenTask(c.nextTaskId)}
                delay={460 + i * 80}
              />
            ))}
          </div>

          {/* FOR LANDING DAY ----------------------------------------------- */}
          <SectionLabel label="For landing day" delay={920} className="mt-7" />
          <div className="mt-3">
            <LandingDayCard
              cat={landing}
              arrival={arrival}
              onOpenLanding={onOpenLanding}
              onOpenTask={() => onOpenTask(landing.nextTaskId)}
              delay={960}
            />
          </div>

          {/* TONIGHT TILE -------------------------------------------------- */}
          <button
            onClick={onOpenPredeparture}
            className="tappable border-trans mt-5 flex w-full items-center gap-3 rounded-2xl border border-border-default bg-midnight px-4 py-3.5 text-left fade-up"
            style={{ animationDelay: '1040ms' }}
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.07] text-fog">
              <MoonStars size={16} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-smoke">
                Tonight before you fly
              </div>
              <div className="text-[14px] font-semibold text-mist">
                Pre-departure checklist
              </div>
            </div>
            <ArrowRight size={16} className="text-smoke" />
          </button>
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section label                                                             */
/* -------------------------------------------------------------------------- */

function SectionLabel({
  label,
  sublabel,
  delay,
  className = '',
}: {
  label: string
  sublabel?: string
  delay: number
  className?: string
}) {
  return (
    <div
      className={`fade-up flex items-baseline justify-between ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-fog">
        {label}
      </span>
      {sublabel && (
        <span className="text-[11px] font-medium text-smoke">{sublabel}</span>
      )}
    </div>
  )
}

/* Compact chip for the "Tailored for you" strip. `accent` marks interest focus
   so it reads as the lead signal without resorting to a saturated color. */
function TailorChip({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1.5 text-[12.5px] font-medium ${
        accent
          ? 'border-steel-soft/40 bg-steel-soft/10 text-mist'
          : 'border-border-default bg-white/[0.05] text-fog'
      }`}
    >
      {children}
    </span>
  )
}

/* -------------------------------------------------------------------------- */
/*  Primary action — current focus category                                   */
/* -------------------------------------------------------------------------- */

function startLabel(name: string): string {
  const word = name.split(/[ &]/)[0]?.toLowerCase() || 'here'
  return `Start with ${word}`
}

function PrimaryActionCard({
  plan,
  cat,
  onStart,
}: {
  plan: TripPlan
  cat: Category
  onStart: () => void
}) {
  const Icon = CATEGORY_ICON[cat.id] ?? IdentificationCard
  const open = tasksForCategory(plan, cat.name).filter((t) => t.status !== 'complete')
  const previews = (open.length ? open : tasksForCategory(plan, cat.name)).slice(0, 3)
  const pending = Math.max(0, cat.total - cat.done)

  return (
    <article
      className="fade-up rounded-3xl border border-border-default bg-slate p-5 shadow-card"
      style={{ animationDelay: '340ms' }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/[0.06] text-fog">
            <Icon size={18} />
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-[18px] font-semibold leading-[22px] tracking-[-0.01em] text-mist">
              {cat.name}
            </h3>
            <p className="mt-0.5 text-[12px] text-smoke">
              Critical entry requirements
            </p>
          </div>
        </div>
        <div className="inline-flex h-7 shrink-0 items-center gap-1.5 rounded-full border border-tertiary/30 bg-tertiary/10 px-2.5">
          <Pip tone="tertiary" size={7} />
          <span className="whitespace-nowrap text-[11px] font-semibold tracking-[0.04em] text-tertiary">
            {pending} pending
          </span>
        </div>
      </div>

      {/* Task list */}
      <div className="mt-4 space-y-1.5">
        {previews.map((t) => (
          <TaskPreview
            key={t.id}
            icon={Icon}
            title={t.title}
            estimate={shortDuration(t.duration)}
          />
        ))}
      </div>

      <button
        onClick={onStart}
        className="tappable mt-4 flex h-[52px] w-full items-center justify-center gap-2 rounded-full bg-mist text-[14px] font-semibold text-ink shadow-card"
      >
        {startLabel(cat.name)}
        <ArrowRight size={16} weight="bold" />
      </button>
    </article>
  )
}

function shortDuration(d: string): string {
  // "30–45 min to start" → "30–45 min"
  return d.replace(/\s+to start$/i, '').trim()
}

function TaskPreview({
  icon: Icon,
  title,
  estimate,
}: {
  icon: PIcon
  title: string
  estimate: string
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-midnight px-3.5 py-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-steel-soft">
        <Icon size={14} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[13px] font-medium leading-[18px] text-fog">{title}</p>
        <p className="mt-0.5 text-[11px] leading-[14px] text-smoke">Est. {estimate}</p>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Up-next category card                                                     */
/* -------------------------------------------------------------------------- */

function UpNextCard({
  cat,
  onOpen,
  delay,
}: {
  cat: Category
  onOpen: () => void
  delay: number
}) {
  const Icon = CATEGORY_ICON[cat.id] ?? IdentificationCard
  const left = Math.max(0, cat.total - cat.done)
  const allDone = left === 0
  return (
    <button
      onClick={onOpen}
      className="tappable border-trans fade-up flex w-full items-center gap-4 rounded-2xl border border-border-default bg-slate px-4 py-4 text-left shadow-card transition-[transform,border-color] hover:border-steel-soft/70 active:scale-[0.985]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-fog">
        <Icon size={18} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="font-display text-[15.5px] font-semibold tracking-[-0.005em] text-mist">
            {cat.name}
          </span>
          <span className="text-[11px] font-medium text-smoke">
            {allDone ? 'Done' : `${left} ${left === 1 ? 'task' : 'tasks'}`}
          </span>
        </div>
        <div className="mt-0.5 truncate text-[13px] text-smoke">
          {allDone ? (
            <span className="text-fog">All set — nicely done.</span>
          ) : (
            <>
              Next: <span className="text-fog">{cat.blurb}</span>
            </>
          )}
        </div>
      </div>
      <ArrowRight size={16} className="shrink-0 text-smoke" />
    </button>
  )
}

/* -------------------------------------------------------------------------- */
/*  Landing Day Hub card — distinct treatment                                 */
/* -------------------------------------------------------------------------- */

function LandingDayCard({
  cat,
  arrival,
  onOpenLanding,
  onOpenTask,
  delay,
}: {
  cat: Category
  arrival: string
  onOpenLanding: () => void
  onOpenTask: () => void
  delay: number
}) {
  return (
    <article
      className="fade-up overflow-hidden rounded-2xl border border-border-default bg-midnight shadow-card"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="px-5 pt-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] text-fog">
            <Compass size={18} />
          </div>
          <span className="inline-flex h-7 shrink-0 items-center gap-1.5 rounded-full border border-white/[0.10] bg-white/[0.04] px-2.5">
            <WifiSlash size={11} className="text-fog" />
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-fog">
              Offline-ready
            </span>
          </span>
        </div>
        <h3 className="mt-3 font-display text-[17px] font-semibold tracking-[-0.005em] text-mist">
          {cat.name}
        </h3>
        <p className="mt-1 text-[13px] leading-[18px] text-smoke">
          What you’ll need at {arrival}, saved offline.
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 px-5">
        <button
          onClick={onOpenTask}
          className="tappable flex flex-col rounded-xl border border-white/[0.06] bg-slate px-3.5 py-3.5 text-left"
        >
          <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-smoke">
            {cat.total} {cat.total === 1 ? 'task' : 'tasks'}
          </div>
          <div className="mt-1 line-clamp-2 text-[13px] font-medium leading-[17px] text-fog">
            {cat.blurb}
          </div>
        </button>
        <button
          onClick={onOpenLanding}
          className="tappable flex flex-col rounded-xl border border-white/[0.06] bg-slate px-3.5 py-3.5 text-left"
        >
          <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-smoke">
            Open hub
          </div>
          <div className="mt-1 line-clamp-2 text-[13px] font-medium leading-[17px] text-fog">
            Hotel address &amp; phrases
          </div>
        </button>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] px-5 py-3">
        <span className="text-[11px] font-medium text-smoke">
          Available without internet
        </span>
        <ArrowRight size={14} className="text-smoke" />
      </div>
    </article>
  )
}
