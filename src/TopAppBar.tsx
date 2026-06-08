import { useState } from 'react'
import {
  Compass,
  CloudSlash,
  GlobeHemisphereWest,
  MapPin,
  UserCircle,
  Wallet,
  type Icon as PIcon,
} from '@phosphor-icons/react'
import { ArrivoMark, Sheet, Primary } from './components'
import { usePlan } from './lib/PlanContext'
import { totalSteps } from './lib/plan'
import type { Answers } from './screens/Onboarding'

type Menu = 'trip' | 'profile' | null

const PREP_LABELS = ['Just dreaming', 'Picked dates', 'Booked flights', 'Fully booked']

/* Global top app bar — brand signature, persists across the 4 tab screens.
   Floats at the top via absolute positioning so screen content scrolls behind it.
   The header and the menu sheet are siblings so the sheet fills the phone frame
   (the nearest positioned ancestor is the tab container, not this header). */
export function TopAppBar({
  onHome,
  answers,
}: {
  onHome?: () => void
  answers?: Answers
}) {
  const [menu, setMenu] = useState<Menu>(null)

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-30 px-5 pt-[80px]">
        <div className="glass-strong flex h-12 items-center justify-between rounded-full px-3 shadow-card">
          <button
            onClick={() => setMenu('trip')}
            aria-label="Trip overview"
            className="tappable flex h-9 w-9 items-center justify-center rounded-full text-fog transition-colors hover:text-mist"
          >
            <Compass size={18} />
          </button>

          {/* Brand mark doubles as a reset — wipes the current plan and starts
              over from the splash screen. Optical-nudged 1px down to align with
              icon-button centers. */}
          <button
            type="button"
            onClick={onHome}
            aria-label="Start over — reset plan"
            title="Start over"
            className="tappable flex h-9 w-9 translate-y-[1px] items-center justify-center rounded-full transition-transform hover:scale-105 active:scale-95"
          >
            <ArrivoMark size={40} />
          </button>

          <button
            onClick={() => setMenu('profile')}
            aria-label="Profile and settings"
            className="tappable flex h-9 w-9 items-center justify-center rounded-full text-fog transition-colors hover:text-mist"
          >
            <UserCircle size={18} weight="fill" />
          </button>
        </div>
      </header>

      <TripSheet open={menu === 'trip'} onClose={() => setMenu(null)} answers={answers} />
      <ProfileSheet
        open={menu === 'profile'}
        onClose={() => setMenu(null)}
        onStartOver={() => {
          setMenu(null)
          onHome?.()
        }}
      />
    </>
  )
}

/* -------------------------------------------------------------------------- */
/*  Trip overview — orient the traveler from any tab                          */
/* -------------------------------------------------------------------------- */

function TripSheet({
  open,
  onClose,
  answers,
}: {
  open: boolean
  onClose: () => void
  answers?: Answers
}) {
  const plan = usePlan()
  const total = totalSteps(plan)
  const cities = plan.itinerary.cities
  const pers = plan.personalization

  const facts: Array<{ icon: PIcon; label: string; value: string }> = [
    { icon: GlobeHemisphereWest, label: 'Languages', value: plan.languages.slice(0, 2).join(', ') || '—' },
    { icon: Wallet, label: 'Currency', value: plan.currency.code || '—' },
    { icon: MapPin, label: 'Arrival', value: plan.arrivalAirport.code || plan.arrivalAirport.city },
  ]

  return (
    <Sheet
      open={open}
      onClose={onClose}
      eyebrow={`${plan.country.flag} Your trip`}
      title={`${plan.country.name}`}
    >
      {/* Trip parameters */}
      <div className="flex flex-wrap gap-2">
        <TripChip>{plan.itinerary.dateRange}</TripChip>
        {answers && <TripChip>{answers.durationDays} days</TripChip>}
        {answers && <TripChip className="capitalize">{answers.travelers}</TripChip>}
        {pers?.focus.map((f) => <TripChip key={f}>{f}</TripChip>)}
        {pers && <TripChip>{pers.paceLabel} pace</TripChip>}
        {plan.budgetTarget && <TripChip>~${plan.budgetTarget.perDayUsd}/day</TripChip>}
        {pers && <TripChip>{pers.experienceLabel}</TripChip>}
        {answers && <TripChip>{PREP_LABELS[answers.prep] ?? 'Planning'}</TripChip>}
        {pers?.dietary.map((d) => <TripChip key={d}>{d}</TripChip>)}
      </div>

      {/* Route */}
      {cities.length > 0 && (
        <div className="mt-5 rounded-2xl border border-border-default bg-slate p-4">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-smoke">
            Route · {cities.length} {cities.length === 1 ? 'stop' : 'stops'}
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[14px] font-semibold text-mist">
            {cities.map((c, i) => (
              <span key={`${c.code}-${i}`} className="inline-flex items-center gap-1.5">
                {c.name}
                {i < cities.length - 1 && (
                  <span className="text-smoke/70">→</span>
                )}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Quick facts */}
      <div className="mt-3 grid grid-cols-3 gap-2">
        {facts.map((f) => {
          const Icon = f.icon
          return (
            <div
              key={f.label}
              className="rounded-2xl border border-border-default bg-slate p-3"
            >
              <Icon size={16} className="text-smoke" />
              <div className="mt-2 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-smoke">
                {f.label}
              </div>
              <div className="mt-0.5 line-clamp-2 break-words text-[13px] font-semibold leading-[16px] text-mist">
                {f.value}
              </div>
            </div>
          )
        })}
      </div>

      {/* What's covered */}
      <div className="mt-3 rounded-2xl border border-border-default bg-slate p-4">
        <div className="flex items-baseline justify-between">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-smoke">
            What’s covered
          </div>
          <div className="text-[12px] font-semibold text-fog">{total} steps</div>
        </div>
        <ul className="mt-3 space-y-2">
          {plan.categories.map((c) => (
            <li key={c.id} className="flex items-center justify-between gap-3">
              <span className="truncate text-[13.5px] text-fog">{c.name}</span>
              <span className="shrink-0 text-[12px] font-medium tabular-nums text-smoke">
                {c.total} {c.total === 1 ? 'step' : 'steps'}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Sheet>
  )
}

function TripChip({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-border-default bg-white/[0.05] px-3 py-1.5 text-[12.5px] font-medium text-fog ${className}`}
    >
      {children}
    </span>
  )
}

/* -------------------------------------------------------------------------- */
/*  Profile & settings                                                        */
/* -------------------------------------------------------------------------- */

function ProfileSheet({
  open,
  onClose,
  onStartOver,
}: {
  open: boolean
  onClose: () => void
  onStartOver: () => void
}) {
  const plan = usePlan()

  return (
    <Sheet open={open} onClose={onClose} eyebrow="Arrivo" title="Profile & settings">
      <div className="rounded-2xl border border-border-default bg-slate p-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.07] text-steel-soft">
            <CloudSlash size={18} weight="fill" />
          </span>
          <div className="min-w-0">
            <div className="text-[14px] font-semibold text-mist">Saved offline</div>
            <div className="text-[12px] text-smoke">
              Your {plan.country.name} plan works without internet.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 rounded-2xl border border-border-default bg-slate p-4">
        <div className="flex items-center justify-between">
          <span className="text-[13px] text-smoke">Travelling from</span>
          <span className="text-[13.5px] font-semibold text-mist">
            {plan.homeCountry || 'United States'}
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-white/[0.06] pt-3">
          <span className="text-[13px] text-smoke">Destination</span>
          <span className="text-[13.5px] font-semibold text-mist">
            {plan.country.flag} {plan.country.name}
          </span>
        </div>
      </div>

      <p className="mt-5 text-[13px] leading-[20px] text-fog">
        Arrivo doesn’t book for you. We sequence what to do, when to do it, and
        what to have ready the moment you land.
      </p>

      <div className="mt-5">
        <Primary onClick={onStartOver}>Start a new trip</Primary>
      </div>
      <p className="mt-3 text-center text-[11px] text-smoke">
        Your whole trip, ready. · Arrivo
      </p>
    </Sheet>
  )
}
