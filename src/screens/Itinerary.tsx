import { useCallback, useRef, useState } from 'react'
import {
  AirplaneTilt,
  ArrowRight,
  Boat,
  Bus,
  CalendarBlank,
  Car,
  CheckCircle,
  MapPin,
  MapPinLine,
  Moon,
  Sun,
  SunHorizon,
  TrainSimple,
  type Icon as PIcon,
} from '@phosphor-icons/react'
import { usePlan } from '../lib/PlanContext'
import type { DayBlock, DayCard, Leg, TransitMode } from '../lib/plan'
import { StatusChip, Dot, Pip, DestinationImage } from '../components'

const MODE_ICON: Record<TransitMode, PIcon> = {
  plane: AirplaneTilt,
  rail: TrainSimple,
  car: Car,
  bus: Bus,
  ferry: Boat,
}

export function Itinerary(_props: { onBack: () => void }) {
  void _props
  const plan = usePlan()
  const { routeTitle, dateRange, cities, legs } = plan.itinerary
  const totalDays = cities.reduce((acc, c) => acc + (c.days || 0), 0)

  // Booking status is editable in-session: travelers tap a leg to mark what
  // they've actually booked. Seeded from the plan, kept by leg index.
  const [booked, setBooked] = useState<Record<number, boolean>>(() =>
    Object.fromEntries(legs.map((l, i) => [i, l.status === 'booked'])),
  )
  const toggleLeg = useCallback((i: number) => {
    setBooked((prev) => ({ ...prev, [i]: !prev[i] }))
  }, [])

  // "Open day plan" jumps to the first day card for that city and flashes it.
  const scrollRef = useRef<HTMLDivElement>(null)
  const dayRefs = useRef<Map<string, HTMLDivElement>>(new Map())
  const daySectionRef = useRef<HTMLDivElement>(null)
  const [flashCity, setFlashCity] = useState<string | null>(null)

  const openDayPlan = useCallback((cityName: string) => {
    const target = dayRefs.current.get(cityName) ?? daySectionRef.current
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setFlashCity(cityName)
    window.setTimeout(() => setFlashCity(null), 1600)
  }, [])

  const seenCity = new Set<string>()

  return (
    <div className="slide-in flex h-full w-full flex-col bg-ink no-select">
      <div className="px-6 pt-[148px]">
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-smoke">
          Itinerary
        </div>

        <h1 className="mt-2 font-display text-[26px] font-bold leading-[32px] tracking-[-0.01em] text-mist">
          {routeTitle}
        </h1>
        <div className="mt-2.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-fog">
          <span className="inline-flex items-center gap-1.5">
            <CalendarBlank size={15} className="text-smoke" />
            {dateRange}
          </span>
          {totalDays > 0 && (
            <>
              <Dot variant="smoke" />
              <span className="whitespace-nowrap">{totalDays} days</span>
            </>
          )}
          {plan.personalization?.countdownDays != null && (
            <>
              <Dot variant="smoke" />
              <span className="whitespace-nowrap text-steel-soft">
                {plan.personalization.countdownDays} days to go
              </span>
            </>
          )}
        </div>

        {plan.personalization && (plan.personalization.focus.length > 0 || plan.personalization.paceLabel) && (
          <div className="mt-3 flex flex-wrap gap-2">
            {plan.personalization.focus.map((f) => (
              <span
                key={f}
                className="inline-flex items-center rounded-full border border-steel-soft/40 bg-steel-soft/10 px-2.5 py-1 text-[11.5px] font-medium text-mist"
              >
                {f}
              </span>
            ))}
            <span className="inline-flex items-center rounded-full border border-border-default bg-white/[0.05] px-2.5 py-1 text-[11.5px] font-medium text-fog">
              {plan.personalization.paceLabel} pace
            </span>
          </div>
        )}
      </div>

      <div
        ref={scrollRef}
        className="scroll-area mt-6 flex-1 overflow-y-auto px-6 pb-12"
      >
        {/* Cities */}
        <div className="space-y-3">
          {cities.map((city, i) => (
            <div
              key={`${city.code}-${i}`}
              className="fade-up relative overflow-hidden rounded-3xl border border-border-default bg-slate shadow-card"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="relative h-32 w-full overflow-hidden">
                <DestinationImage
                  src={city.image}
                  query={`${city.name} ${plan.country.name} travel`}
                  place={city.name}
                  className="h-full w-full object-cover"
                />
                <div className="hero-overlay absolute inset-0" />
                <div className="absolute inset-x-4 bottom-3 flex items-end justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-fog/90">
                      Stop {i + 1}
                    </div>
                    <div className="truncate font-display text-[22px] font-semibold text-mist">
                      {city.name}
                    </div>
                  </div>
                  <div
                    className="shrink-0 rounded-full px-3 py-1 text-[12px] font-semibold text-mist backdrop-blur"
                    style={{ background: 'rgba(14,21,32,0.7)' }}
                  >
                    {city.days} {city.days === 1 ? 'day' : 'days'}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 px-4 py-3.5">
                <div className="flex min-w-0 items-center gap-2 text-[13px] text-fog">
                  <MapPinLine size={15} className="shrink-0 text-smoke" />
                  <span className="truncate">{city.stayLabel ?? 'Central stay'}</span>
                </div>
                <button
                  onClick={() => openDayPlan(city.name)}
                  className="tappable inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border border-border-default bg-white/[0.06] px-3 text-[12.5px] font-semibold text-mist hover:border-steel-soft/70"
                >
                  Day plan
                  <ArrowRight size={13} weight="bold" className="text-fog" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Legs — vertical route rows: long city names wrap on their own line
            and never collide with the status chip. Tap to mark booked. */}
        {legs.length > 0 && (
          <>
            <div className="mt-8 flex items-baseline justify-between">
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-smoke">
                Getting around
              </h3>
              <span className="text-[11px] font-medium text-smoke">
                Tap to mark booked
              </span>
            </div>
            <div className="mt-3 space-y-2.5">
              {legs.map((leg, i) => (
                <RouteLeg
                  key={i}
                  leg={leg}
                  booked={booked[i]}
                  onToggle={() => toggleLeg(i)}
                  delay={i * 60}
                />
              ))}
            </div>
          </>
        )}

        {/* Day-by-day */}
        {plan.itineraryDays.length > 0 && (
          <div ref={daySectionRef} className="scroll-mt-4">
            <h3 className="mt-9 text-[12px] font-semibold uppercase tracking-[0.14em] text-smoke">
              Day-by-day · sample
            </h3>
            <div className="mt-3 space-y-3 pb-12">
              {plan.itineraryDays.map((d, i) => {
                const firstForCity = !seenCity.has(d.city)
                if (firstForCity) seenCity.add(d.city)
                return (
                  <div
                    key={`${d.dayNumber}-${i}`}
                    ref={(el) => {
                      if (el && firstForCity) dayRefs.current.set(d.city, el)
                    }}
                    className={`scroll-mt-4 rounded-2xl ${
                      flashCity === d.city ? 'flash-ring' : ''
                    }`}
                  >
                    <DayCardView day={d} delay={i * 80} />
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Route leg — origin/destination stacked with a connector rail.             */
/* -------------------------------------------------------------------------- */

function RouteLeg({
  leg,
  booked,
  onToggle,
  delay,
}: {
  leg: Leg
  booked: boolean
  onToggle: () => void
  delay: number
}) {
  const Icon = MODE_ICON[leg.mode] ?? AirplaneTilt
  return (
    <button
      onClick={onToggle}
      aria-pressed={booked}
      className="tappable border-trans fade-up flex w-full gap-3.5 rounded-2xl border border-border-default bg-slate p-4 text-left shadow-card hover:border-steel-soft/60"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Connector rail: mode icon → line → arrival marker */}
      <div className="flex flex-col items-center pt-0.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.07] text-fog">
          <Icon size={17} weight="fill" />
        </span>
        <span className="my-1 w-px flex-1 bg-border-default" />
        <MapPin size={16} weight="fill" className="mb-0.5 text-steel-soft" />
      </div>

      <div className="min-w-0 flex-1">
        {/* Origin row + status chip */}
        <div className="flex items-start justify-between gap-2.5">
          <span className="min-w-0 break-words font-display text-[15.5px] font-semibold leading-[20px] tracking-[-0.005em] text-mist">
            {leg.from}
          </span>
          {booked ? (
            <StatusChip tone="complete">
              <CheckCircle size={11} weight="fill" />
              Booked
            </StatusChip>
          ) : (
            <StatusChip tone="fog">
              <Pip tone="smoke" hollow />
              To book
            </StatusChip>
          )}
        </div>

        {/* Meta between origin and destination */}
        <div className="my-1.5 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[12px] font-medium text-smoke">
          <span className="text-fog">{leg.duration}</span>
          {leg.stops && (
            <>
              <span className="text-smoke/60">·</span>
              <span>{leg.stops}</span>
            </>
          )}
        </div>

        {/* Destination row */}
        <span className="block break-words font-display text-[15.5px] font-semibold leading-[20px] tracking-[-0.005em] text-mist">
          {leg.to}
        </span>
      </div>
    </button>
  )
}

const SLOT_ICON: Record<DayBlock['slot'], PIcon> = {
  morning: Sun,
  afternoon: SunHorizon,
  evening: Moon,
}

const SLOT_LABEL: Record<DayBlock['slot'], string> = {
  morning: 'Morning',
  afternoon: 'Afternoon',
  evening: 'Evening',
}

function DayCardView({ day, delay }: { day: DayCard; delay: number }) {
  // The day-type marker only earns its place on the exceptional days (arriving,
  // moving cities). Ordinary explore days carry no badge, so the title leads.
  const kindLabel =
    day.kind === 'arrival'
      ? 'Arrival'
      : day.kind === 'transit'
        ? 'Transit'
        : null
  return (
    <article
      className="fade-up rounded-3xl border border-border-default bg-slate p-5 shadow-card"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Header — the date is the eyebrow, the place is the anchor, and the
          day-type sits quietly beside it instead of competing as a loud pill. */}
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-smoke">
            Day {day.dayNumber}
            {day.date && <span className="text-smoke/70"> · {day.date}</span>}
          </div>
          <h4 className="mt-1.5 truncate font-display text-[19px] font-semibold leading-[24px] tracking-[-0.01em] text-mist">
            {day.city}
          </h4>
        </div>
        {kindLabel && (
          <span className="mt-1 inline-flex shrink-0 items-center rounded-full bg-white/[0.05] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-fog">
            {kindLabel}
          </span>
        )}
      </div>

      {/* Day as a calm sequence — one hairline rail, light time-of-day stations.
          The icon carries the time of day; the activity title leads each stop. */}
      <ol className="mt-5">
        {day.blocks.map((b, idx) => {
          const Icon = SLOT_ICON[b.slot]
          const last = idx === day.blocks.length - 1
          return (
            <li key={`${b.slot}-${idx}`} className="relative flex gap-3.5 pb-5 last:pb-0">
              {!last && (
                <span
                  aria-hidden
                  className="absolute left-4 top-8 bottom-0 w-px -translate-x-1/2 bg-border-default/60"
                />
              )}
              <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-2 text-fog ring-1 ring-inset ring-white/[0.05]">
                <Icon size={15} weight="fill" aria-label={SLOT_LABEL[b.slot]} />
              </span>
              <div className="min-w-0 flex-1 pt-1.5">
                <div className="font-display text-[15px] font-semibold leading-[20px] tracking-[-0.005em] text-mist">
                  {b.label}
                </div>
                <div className="mt-1 text-[13px] leading-[18px] text-fog">
                  {b.detail}
                </div>
                {b.meta && (
                  <div className="mt-2 flex items-start gap-2 text-[12px] leading-[16px] text-fog">
                    <Pip tone="steel" className="mt-[5px]" />
                    <span className="min-w-0">{b.meta}</span>
                  </div>
                )}
              </div>
            </li>
          )
        })}
      </ol>
    </article>
  )
}
