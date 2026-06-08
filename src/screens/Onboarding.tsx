import { useEffect, useMemo, useRef, useState } from 'react'
import {
  AirplaneTilt,
  ArrowLeft,
  ArrowRight,
  Bank,
  BookOpen,
  Buildings,
  CalendarDots,
  CheckCircle,
  Compass,
  ForkKnife,
  GlobeHemisphereWest,
  Martini,
  MagnifyingGlass,
  Microphone,
  Minus,
  Mountains,
  PencilSimple,
  Plus,
  ShoppingBag,
  Sparkle,
  User,
  Users,
  UsersFour,
  UsersThree,
  Waves,
  X,
} from '@phosphor-icons/react'
import {
  BUDGET_TIERS,
  COUNTRIES,
  EXPERIENCE_OPTIONS,
  HERO_IMAGE,
  NEEDS_GROUPS,
  ONBOARDING_BACKGROUNDS,
  ONBOARDING_FLOW,
  ONBOARDING_PHASES,
  PACE_OPTIONS,
  TRAVELERS,
  TRIP_TYPES,
  flowIndex,
  tripTypeById,
  type ScreenId,
} from '../data'
import { flagEmoji, searchCountries } from '../lib/countries'
import {
  budgetTier,
  budgetUsdPerDay,
  countdownDays,
  personalizePlan,
  previewStats,
  selectBasePlan,
} from '../lib/personalize'
import {
  ArrivoMark,
  DestinationImage,
  IconButton,
  MonthCalendar,
  PhaseRail,
  Primary,
  Segmented,
} from '../components'

import type { TripAnswers } from '../lib/plan'
export type Answers = TripAnswers

const TRIP_ICONS: Record<string, React.ComponentType<{ size?: number; weight?: 'regular' | 'fill' }>> = {
  Bank,
  ForkKnife,
  Mountains,
  Buildings,
  BookOpen,
  Martini,
  ShoppingBag,
  Waves,
  Compass,
}

const TRAVELER_ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
  User,
  Users,
  UsersThree,
  UsersFour,
}

const EXPERIENCE_ICONS: Record<string, React.ComponentType<{ size?: number; weight?: 'regular' | 'fill' }>> = {
  Sparkle,
  Compass,
  GlobeHemisphereWest,
}

/* -------------------------------------------------------------------------- */

/** Phase-rail props for a given question screen, derived from the flow map. */
function railFor(screen: ScreenId): { phases: readonly string[]; active: number; subProgress: number } {
  const idx = flowIndex(screen)
  const phase = ONBOARDING_FLOW[idx]?.phase ?? 0
  const inPhase = ONBOARDING_FLOW.filter((f) => f.phase === phase)
  const pos = inPhase.findIndex((f) => f.screen === screen)
  return {
    phases: ONBOARDING_PHASES,
    active: phase,
    subProgress: (pos + 1) / Math.max(1, inPhase.length),
  }
}

export function OnboardingHost({
  screen,
  go,
  setAnswers,
  answers,
  onSkip,
}: {
  screen: ScreenId
  go: (s: ScreenId) => void
  answers: Answers
  setAnswers: (a: Answers) => void
  onSkip?: () => void
}) {
  const update = <K extends keyof Answers>(k: K, v: Answers[K]) =>
    setAnswers({ ...answers, [k]: v })
  const patch = (p: Partial<Answers>) => setAnswers({ ...answers, ...p })

  const idx = flowIndex(screen)
  const goNext = () => go(ONBOARDING_FLOW[idx + 1]?.screen ?? 'loading')
  const goBack = () => go(idx > 0 ? ONBOARDING_FLOW[idx - 1].screen : 'splash')

  const countryLabel = answers.countryName || 'your destination'
  // The live preview becomes meaningful once we know the country (phase 0+).
  const phase = ONBOARDING_FLOW[idx]?.phase ?? 0
  const preview = phase >= 2 ? <PlanPreviewCard answers={answers} /> : undefined

  switch (screen) {
    case 'splash':
      return (
        <Splash
          onSelectCountry={(code, name) => {
            setAnswers({ ...answers, countryCode: code, countryName: name })
            go('date')
          }}
          onLogin={onSkip}
        />
      )
    case 'country':
      return (
        <CountryStep
          code={answers.countryCode}
          name={answers.countryName}
          onChange={(code, name) => patch({ countryCode: code, countryName: name })}
          onBack={() => go('splash')}
          onNext={goNext}
        />
      )
    case 'date':
      return <WhenStep answers={answers} onPatch={patch} onBack={goBack} onNext={goNext} onSkip={goNext} />
    case 'duration':
      return (
        <Duration value={answers.durationDays} onChange={(v) => update('durationDays', v)} onBack={goBack} onNext={goNext} />
      )
    case 'travelers':
      return <Travelers answers={answers} onPatch={patch} onBack={goBack} onNext={goNext} onSkip={goNext} />
    case 'interests':
      return (
        <Interests
          value={answers.tripTypes}
          onChange={(v) => update('tripTypes', v)}
          onBack={goBack}
          onNext={goNext}
          onSkip={goNext}
          country={countryLabel}
          preview={preview}
        />
      )
    case 'pace':
      return (
        <PaceStep value={answers.pace} onChange={(v) => update('pace', v)} onBack={goBack} onNext={goNext} onSkip={goNext} preview={preview} />
      )
    case 'budget':
      return (
        <Budget value={answers.budget} durationDays={answers.durationDays} onChange={(v) => update('budget', v)} onBack={goBack} onNext={goNext} onSkip={goNext} preview={preview} />
      )
    case 'profile':
      return <Profile answers={answers} onPatch={patch} onBack={goBack} onNext={goNext} onSkip={goNext} preview={preview} />
    case 'review':
      return <Review answers={answers} go={go} onBack={goBack} onGenerate={goNext} />
    default:
      return null
  }
}

/* -------------------------------------------------------------------------- */
/*  Splash                                                                    */
/* -------------------------------------------------------------------------- */

/* The splash search IS the destination picker. Idle, it's a cinematic brand
   moment; on focus it fluidly collapses the lockup and reveals live country
   results. Choosing a country sets it and slides on to the When step — no
   separate "where are we going" screen. */
function Splash({
  onSelectCountry,
  onLogin,
}: {
  onSelectCountry: (code: string, name: string) => void
  onLogin?: () => void
}) {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const results = query.trim() ? searchCountries(query, 8) : []

  const cancel = () => {
    setQuery('')
    setActive(false)
    inputRef.current?.blur()
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-ink no-select">
      <DestinationImage
        src={HERO_IMAGE}
        className="animate-hero-pan absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(14,21,32,0.48) 0%, rgba(14,21,32,0.62) 28%, rgba(14,21,32,0.78) 56%, rgba(14,21,32,0.92) 82%, rgba(14,21,32,0.98) 100%)',
        }}
      />
      <div className="absolute inset-0 bg-ink/30" />

      <div className="relative flex h-full w-full flex-col px-6 pb-8 pt-[76px]">
        {/* Brand lockup — full hero when idle, collapses up when searching */}
        <div
          className={`flex shrink-0 flex-col items-center transition-[padding] duration-[600ms] ease-[var(--ease-out-expo)] ${
            active ? 'pt-1' : 'pt-[24vh]'
          }`}
        >
          <ArrivoMark
            size={active ? 54 : 132}
            variant="silver"
            className="transition-[width,height] duration-[600ms] ease-[var(--ease-out-expo)]"
          />
          <span
            className={`overflow-hidden font-display text-[48px] font-semibold leading-none tracking-[-0.035em] text-mist transition-all duration-[500ms] ease-[var(--ease-out-expo)] ${
              active ? 'mt-0 max-h-0 opacity-0' : '-mt-6 max-h-[64px] opacity-100'
            }`}
          >
            Arrivo
          </span>
        </div>

        {/* Real destination search */}
        <div className={`shrink-0 transition-[margin] duration-500 ${active ? 'mt-5' : 'mt-9'}`}>
          <div className="glass flex h-[52px] w-full items-center gap-3 rounded-full pl-5 pr-2">
            <MagnifyingGlass size={17} className="shrink-0 text-smoke" />
            <input
              ref={inputRef}
              value={query}
              onFocus={() => setActive(true)}
              onClick={() => setActive(true)}
              onChange={(e) => {
                setActive(true)
                setQuery(e.target.value)
              }}
              placeholder="Where are you going?"
              aria-label="Search a destination country"
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
              className="min-w-0 flex-1 bg-transparent text-[15px] text-mist outline-none placeholder:text-smoke"
            />
            {active ? (
              <button
                onClick={cancel}
                aria-label="Cancel search"
                className="tappable flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-fog"
              >
                <X size={15} weight="bold" />
              </button>
            ) : (
              <span aria-hidden className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-fog">
                <Microphone size={16} />
              </span>
            )}
          </div>
        </div>

        {/* Results / popular destinations — revealed while searching */}
        {active && (
          <div className="scroll-area mt-4 flex-1 overflow-y-auto fade-up">
            {results.length > 0 ? (
              <ul className="space-y-2">
                {results.map((c) => (
                  <li key={c.code}>
                    <button
                      onClick={() => onSelectCountry(c.code, c.name)}
                      className="tappable border-trans flex w-full items-center gap-3.5 rounded-2xl border border-white/[0.08] bg-slate/40 p-3.5 text-left backdrop-blur-xl hover:border-steel-soft/70"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.07] text-[22px] leading-none">
                        {flagEmoji(c.code)}
                      </span>
                      <span className="min-w-0 flex-1 text-[16px] font-semibold text-mist">{c.name}</span>
                      <ArrowRight size={16} className="shrink-0 text-smoke" />
                    </button>
                  </li>
                ))}
              </ul>
            ) : query.trim() ? (
              <div className="rounded-2xl border border-white/[0.08] bg-slate/40 p-5 text-center text-[14px] text-fog backdrop-blur-xl">
                No match for “{query.trim()}”. Try the country’s English name.
              </div>
            ) : (
              <>
                <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-smoke">
                  Popular right now
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {COUNTRIES.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => onSelectCountry(c.code, c.name)}
                      className="tappable border-trans relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/[0.08]"
                    >
                      <DestinationImage
                        src={c.image}
                        query={`${c.city} ${c.name} travel`}
                        place={c.city}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            'linear-gradient(180deg, rgba(14,21,32,0.05) 0%, rgba(14,21,32,0.45) 55%, rgba(14,21,32,0.92) 100%)',
                        }}
                      />
                      <div className="absolute inset-x-3 bottom-3">
                        <div className="font-display text-[18px] font-semibold leading-tight text-mist">
                          {c.name}
                        </div>
                        <div className="text-[12px] text-fog/85">{c.city}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Idle footer — brand breathing room + returning user */}
        {!active && (
          <>
            <div className="flex-1" />
            <div className="fade-up" style={{ animationDelay: '300ms' }}>
              <button
                onClick={onLogin}
                className="glass-strong tappable inline-flex h-[58px] w-full items-center justify-center rounded-full border border-white/[0.10] text-[14.5px] font-semibold tracking-[0.04em] text-mist transition-colors hover:bg-white/[0.06]"
              >
                Log in
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Country search — the entry point that drives the whole plan               */
/* -------------------------------------------------------------------------- */

function CountryStep({
  code,
  name,
  onChange,
  onBack,
  onNext,
}: {
  code: string
  name?: string
  onChange: (code: string, name: string) => void
  onBack: () => void
  onNext: () => void
}) {
  const [query, setQuery] = useState('')
  const results = query.trim() ? searchCountries(query, 8) : []
  const hasSelection = Boolean(code)
  const rail = railFor('country')

  return (
    <div className="slide-in relative flex h-full w-full flex-col overflow-hidden bg-ink no-select">
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <DestinationImage
          src={ONBOARDING_BACKGROUNDS.interests}
          className="h-full w-full scale-110 object-cover opacity-[0.30] blur-[3px]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,21,32,0.55) 0%, rgba(14,21,32,0.80) 46%, rgba(14,21,32,0.98) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 flex h-full w-full flex-col px-6 pb-8 pt-[80px]">
        <div className="flex items-center justify-between">
          <IconButton onClick={onBack} ariaLabel="Back">
            <ArrowLeft size={18} />
          </IconButton>
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-smoke">
            Destination
          </div>
          <div className="h-11 w-11" />
        </div>

        <div className="mt-5">
          <PhaseRail {...rail} />
        </div>

        <div className="mt-7">
          <h2 className="font-display text-[34px] font-bold leading-[40px] tracking-[-0.015em] text-mist">
            Where are we going?
          </h2>
        </div>

        <div className="mt-6">
          <div className="glass-light flex h-[52px] items-center gap-3 rounded-xl px-4">
            <MagnifyingGlass size={18} className="text-smoke" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search countries"
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
              className="flex-1 bg-transparent text-[15px] text-mist outline-none placeholder:text-smoke"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="tappable flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.06] text-fog"
              >
                <X size={13} weight="bold" />
              </button>
            )}
          </div>
        </div>

        <div className="scroll-area mt-5 flex-1 overflow-y-auto">
          {results.length > 0 ? (
            <ul className="space-y-2">
              {results.map((c) => {
                const selected = c.code === code
                return (
                  <li key={c.code}>
                    <button
                      onClick={() => onChange(c.code, c.name)}
                      className={`tappable border-trans flex w-full items-center gap-3.5 rounded-2xl border p-3.5 text-left backdrop-blur-xl ${
                        selected ? 'border-steel-soft bg-slate-2/80' : 'border-white/[0.08] bg-slate/40'
                      }`}
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.07] text-[22px] leading-none">
                        {flagEmoji(c.code)}
                      </span>
                      <span className="flex-1 text-[16px] font-semibold text-mist">{c.name}</span>
                      {selected ? (
                        <CheckCircle size={20} weight="fill" className="text-mist" />
                      ) : (
                        <div className="h-5 w-5 rounded-full border border-border-default" />
                      )}
                    </button>
                  </li>
                )
              })}
            </ul>
          ) : query.trim() ? (
            <div className="rounded-2xl border border-white/[0.08] bg-slate/40 p-5 text-center text-[14px] text-fog backdrop-blur-xl">
              No match for “{query.trim()}”. Try the country’s English name.
            </div>
          ) : (
            <>
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-smoke">
                Popular right now
              </div>
              <div className="grid grid-cols-2 gap-3">
                {COUNTRIES.map((c) => {
                  const selected = c.code === code
                  return (
                    <button
                      key={c.code}
                      onClick={() => onChange(c.code, c.name)}
                      className={`tappable border-trans relative aspect-[4/5] overflow-hidden rounded-2xl border text-left ${
                        selected ? 'border-steel-soft' : 'border-white/[0.08]'
                      }`}
                    >
                      <DestinationImage
                        src={c.image}
                        query={`${c.city} ${c.name} travel`}
                        place={c.city}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            'linear-gradient(180deg, rgba(14,21,32,0.05) 0%, rgba(14,21,32,0.45) 55%, rgba(14,21,32,0.92) 100%)',
                        }}
                      />
                      {selected && (
                        <span className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-mist text-ink">
                          <CheckCircle size={16} weight="fill" />
                        </span>
                      )}
                      <div className="absolute inset-x-3 bottom-3">
                        <div className="font-display text-[18px] font-semibold leading-tight text-mist">
                          {c.name}
                        </div>
                        <div className="text-[12px] text-fog/85">{c.city}</div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </>
          )}
        </div>

        <div className="pt-4">
          {hasSelection && (
            <div className="mb-3 flex items-center justify-center gap-2 text-[12.5px] text-fog">
              <span className="text-[16px] leading-none">{flagEmoji(code)}</span>
              <span>{name}</span>
            </div>
          )}
          <Primary disabled={!hasSelection} onClick={onNext}>
            Continue <ArrowRight size={18} weight="bold" />
          </Primary>
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Frame for question screens                                                */
/* -------------------------------------------------------------------------- */

function QuestionFrame({
  screen,
  title,
  subtitle,
  why,
  onBack,
  onNext,
  onSkip,
  nextLabel = 'Continue',
  disabled,
  children,
  preview,
  backgroundImage,
}: {
  screen: ScreenId
  title: React.ReactNode
  subtitle?: React.ReactNode
  why?: React.ReactNode
  onBack?: () => void
  onNext: () => void
  onSkip?: () => void
  nextLabel?: string
  disabled?: boolean
  children: React.ReactNode
  preview?: React.ReactNode
  backgroundImage?: string
}) {
  const rail = railFor(screen)
  return (
    <div className="slide-in relative flex h-full w-full flex-col overflow-hidden bg-ink no-select">
      {backgroundImage && (
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <DestinationImage
            src={backgroundImage}
            className="h-full w-full scale-110 object-cover opacity-[0.35] blur-[3px]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(14,21,32,0.42) 0%, rgba(14,21,32,0.62) 38%, rgba(14,21,32,0.86) 72%, rgba(14,21,32,0.98) 100%)',
            }}
          />
        </div>
      )}

      <div className="relative z-10 flex h-full w-full flex-col px-6 pb-8 pt-[80px]">
        <div className="flex items-center justify-between">
          <IconButton onClick={onBack} ariaLabel="Back">
            <ArrowLeft size={18} />
          </IconButton>
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-smoke">
            {ONBOARDING_PHASES[rail.active]}
          </div>
          <div className="h-11 w-11" />
        </div>

        <div className="mt-5">
          <PhaseRail {...rail} />
        </div>

        <div className="mt-8">
          <h2 className="font-display text-[34px] font-bold leading-[40px] tracking-[-0.015em] text-mist">
            {title}
          </h2>
          {subtitle && <p className="mt-2.5 text-[15px] leading-[22px] text-fog/90">{subtitle}</p>}
          {why && (
            <p className="mt-2 text-[12.5px] leading-[18px] text-smoke">
              {why}
            </p>
          )}
        </div>

        <div className="scroll-area mt-7 flex-1 overflow-y-auto">{children}</div>

        {preview && <div className="pt-3">{preview}</div>}

        <div className="pt-5">
          <Primary disabled={disabled} onClick={onNext}>
            {nextLabel} <ArrowRight size={18} weight="bold" />
          </Primary>
          {onSkip && (
            <div className="mt-3 text-center">
              <button
                onClick={onSkip}
                className="tappable inline-flex h-9 items-center px-3 text-[12px] font-medium tracking-[0.04em] text-smoke transition-colors hover:text-fog"
              >
                Skip for now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Live preview mini-card — appears from the Style phase onward               */
/* -------------------------------------------------------------------------- */

function PlanPreviewCard({ answers }: { answers: Answers }) {
  const stats = useMemo(() => previewStats(answers), [answers])
  if (!stats) return null
  return (
    <div className="glass scale-in flex items-center gap-3 rounded-2xl px-4 py-3 shadow-card">
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-smoke">
          <Sparkle size={11} weight="fill" className="text-steel-soft" />
          Your plan so far
        </div>
        <div className="mt-1 flex items-baseline gap-3">
          <span className="font-display text-[18px] font-bold leading-none tabular-nums text-mist">
            {stats.briefings}
            <span className="ml-1 text-[11px] font-medium text-smoke">briefings</span>
          </span>
          <span className="font-display text-[18px] font-bold leading-none tabular-nums text-mist">
            ~${stats.perDayUsd}
            <span className="ml-1 text-[11px] font-medium text-smoke">/day</span>
          </span>
        </div>
      </div>
      {stats.focus.length > 0 && (
        <div className="max-w-[40%] text-right text-[11px] leading-[15px] text-fog">
          <div className="text-[10px] uppercase tracking-[0.12em] text-smoke">Focus</div>
          <div className="truncate font-semibold text-mist">{stats.focus.slice(0, 2).join(' · ')}</div>
        </div>
      )}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  When — planning stage + exact dates                                       */
/* -------------------------------------------------------------------------- */

const PLANNING_STAGES: Array<{
  prep: number
  dateMode: Answers['dateMode']
  label: string
  sub: string
  icon: React.ReactNode
}> = [
  { prep: 0, dateMode: 'flexible', label: 'Just dreaming', sub: 'No dates yet', icon: <Sparkle size={22} /> },
  { prep: 1, dateMode: 'exact', label: 'Picked dates', sub: 'I know when I’m going', icon: <CalendarDots size={22} /> },
  { prep: 2, dateMode: 'exact', label: 'Booked flights', sub: 'Dates are locked in', icon: <AirplaneTilt size={22} /> },
  { prep: 3, dateMode: 'exact', label: 'Fully booked', sub: 'Flights and stay sorted', icon: <CheckCircle size={22} /> },
]

function WhenStep({
  answers,
  onPatch,
  onBack,
  onNext,
  onSkip,
}: {
  answers: Answers
  onPatch: (p: Partial<Answers>) => void
  onBack: () => void
  onNext: () => void
  onSkip: () => void
}) {
  const days = countdownDays(answers)
  return (
    <QuestionFrame
      screen="date"
      title="When are you going?"
      onBack={onBack}
      onNext={onNext}
      onSkip={onSkip}
      backgroundImage={ONBOARDING_BACKGROUNDS.date}
    >
      <div className="space-y-3">
        {PLANNING_STAGES.map((s) => {
          const selected = answers.prep === s.prep
          return (
            <button
              key={s.prep}
              onClick={() =>
                onPatch({
                  prep: s.prep,
                  dateMode: s.dateMode,
                  // Drop a stale start date if they fall back to "dreaming".
                  startDate: s.prep >= 1 ? answers.startDate : undefined,
                })
              }
              className={`tappable border-trans flex w-full items-center gap-4 rounded-2xl border p-4 text-left backdrop-blur-xl ${
                selected ? 'border-steel-soft bg-slate-2/80' : 'border-white/[0.08] bg-slate/40'
              }`}
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-full ${
                  selected ? 'bg-mist text-ink' : 'bg-white/[0.07] text-fog'
                }`}
              >
                {s.icon}
              </div>
              <div className="flex-1">
                <div className="text-[16px] font-semibold text-mist">{s.label}</div>
                <div className="text-[13px] text-fog">{s.sub}</div>
              </div>
              {selected ? (
                <CheckCircle size={20} weight="fill" className="text-mist" />
              ) : (
                <div className="h-5 w-5 rounded-full border border-border-default" />
              )}
            </button>
          )
        })}
      </div>

      {/* Flexible travelers can still flag a rough window. */}
      {answers.prep === 0 && (
        <button
          onClick={() => onPatch({ dateMode: answers.dateMode === 'within3' ? 'flexible' : 'within3' })}
          className={`tappable border-trans mt-3 flex w-full items-center justify-between rounded-2xl border p-4 text-left backdrop-blur-xl ${
            answers.dateMode === 'within3' ? 'border-steel-soft bg-slate-2/80' : 'border-white/[0.08] bg-slate/40'
          }`}
        >
          <span className="text-[14px] font-medium text-fog">Likely within the next 3 months</span>
          <span
            className={`flex h-5 w-5 items-center justify-center rounded-md border ${
              answers.dateMode === 'within3' ? 'border-mist bg-mist text-ink' : 'border-border-default'
            }`}
          >
            {answers.dateMode === 'within3' && <CheckCircle size={14} weight="fill" />}
          </span>
        </button>
      )}

      {/* Exact date picker for anyone past the dreaming stage. */}
      {answers.prep >= 1 && (
        <div className="mt-4 fade-up">
          <div className="mb-2 flex items-center justify-between">
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-smoke">
              Departure date
            </div>
            {days != null && (
              <div className="text-[12px] font-semibold text-steel-soft">
                {days === 0 ? 'Today' : `${days} days to go`}
              </div>
            )}
          </div>
          <MonthCalendar
            value={answers.startDate}
            onChange={(iso) => onPatch({ startDate: iso, dateMode: 'exact' })}
          />
        </div>
      )}
    </QuestionFrame>
  )
}

/* -------------------------------------------------------------------------- */
/*  Slider (shared)                                                           */
/* -------------------------------------------------------------------------- */

function Slider({
  value,
  min,
  max,
  step = 1,
  onChange,
  ariaLabel,
}: {
  value: number
  min: number
  max: number
  step?: number
  onChange: (v: number) => void
  ariaLabel: string
}) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div className="relative h-12 w-full">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-border-default" />
      <div
        className="pointer-events-none absolute left-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-steel-soft"
        style={{ width: `${pct}%` }}
      />
      <input
        type="range"
        aria-label={ariaLabel}
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(Number(e.target.value))}
        className="absolute inset-0 h-full w-full cursor-pointer appearance-none bg-transparent
          [&::-webkit-slider-thumb]:h-7 [&::-webkit-slider-thumb]:w-7 [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-mist
          [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-steel-soft
          [&::-webkit-slider-thumb]:shadow-card
          [&::-moz-range-thumb]:h-7 [&::-moz-range-thumb]:w-7 [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:bg-mist [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-steel-soft"
      />
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Duration                                                                  */
/* -------------------------------------------------------------------------- */

const DURATION_PRESETS: Array<{ days: number; label: string }> = [
  { days: 7, label: '1 week' },
  { days: 10, label: '10 days' },
  { days: 14, label: '2 weeks' },
  { days: 21, label: '3 weeks' },
]

const DURATION_MIN = 7
const DURATION_MAX = 90
const SLIDER_MAX = 45

function Duration({
  value,
  onChange,
  onBack,
  onNext,
}: {
  value: number
  onChange: (v: number) => void
  onBack: () => void
  onNext: () => void
}) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(String(value))
  const inputRef = useRef<HTMLInputElement>(null)

  const clamp = (n: number) => Math.max(DURATION_MIN, Math.min(DURATION_MAX, n))
  const nudge = (delta: number) => onChange(clamp(value + delta))

  const startEdit = () => {
    setDraft(String(value))
    setEditing(true)
    requestAnimationFrame(() => {
      inputRef.current?.focus()
      inputRef.current?.select()
    })
  }

  const commitEdit = () => {
    const parsed = parseInt(draft, 10)
    const next = Number.isFinite(parsed) ? clamp(parsed) : value
    onChange(next)
    setDraft(String(next))
    setEditing(false)
  }

  const sliderValue = Math.min(value, SLIDER_MAX)

  return (
    <QuestionFrame
      screen="duration"
      title="For how long?"
      onBack={onBack}
      onNext={onNext}
      backgroundImage={ONBOARDING_BACKGROUNDS.duration}
    >
      <div className="rounded-3xl border border-white/[0.08] bg-slate/40 p-6 shadow-card backdrop-blur-xl">
        <div className="flex items-center justify-center gap-5">
          <NudgeButton
            icon={<Minus size={18} weight="bold" />}
            ariaLabel="Decrease by one day"
            onClick={() => nudge(-1)}
            disabled={value <= DURATION_MIN}
          />

          <button type="button" onClick={startEdit} className="tappable group flex flex-col items-center px-2">
            {editing ? (
              <input
                ref={inputRef}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={draft}
                onChange={(e) => setDraft(e.target.value.replace(/\D/g, '').slice(0, 3))}
                onBlur={commitEdit}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    commitEdit()
                  }
                  if (e.key === 'Escape') {
                    setDraft(String(value))
                    setEditing(false)
                  }
                }}
                className="w-[140px] bg-transparent text-center font-display text-[64px] font-bold leading-none tracking-[-0.02em] text-mist caret-steel-soft outline-none"
                aria-label="Days"
              />
            ) : (
              <span className="font-display text-[64px] font-bold leading-none tracking-[-0.02em] text-mist">
                {value}
              </span>
            )}
            <span className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-smoke">
              Days
              <span className="ml-1.5 inline-block text-[10px] tracking-[0.04em] text-fog/50 transition-opacity group-hover:text-fog">
                {editing ? '' : value <= DURATION_MIN ? `· min ${DURATION_MIN}` : '· tap to edit'}
              </span>
            </span>
          </button>

          <NudgeButton
            icon={<Plus size={18} weight="bold" />}
            ariaLabel="Increase by one day"
            onClick={() => nudge(1)}
            disabled={value >= DURATION_MAX}
          />
        </div>

        <div className="mt-7">
          <Slider value={sliderValue} min={DURATION_MIN} max={SLIDER_MAX} onChange={onChange} ariaLabel="Trip length in days" />
          <div className="mt-1.5 flex justify-between text-[11px] font-medium text-smoke">
            <span>1 week</span>
            <span>2 weeks</span>
            <span>{value > SLIDER_MAX ? `${value} days` : '45+'}</span>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2">
        {DURATION_PRESETS.map((p) => {
          const selected = value === p.days
          return (
            <button
              key={p.days}
              onClick={() => onChange(p.days)}
              className={`tappable border-trans inline-flex h-10 items-center justify-center rounded-xl border px-1 text-[12.5px] font-semibold backdrop-blur-xl ${
                selected ? 'border-steel-soft bg-slate-2/80 text-mist' : 'border-white/[0.08] bg-slate/40 text-fog'
              }`}
            >
              {p.label}
            </button>
          )
        })}
      </div>
    </QuestionFrame>
  )
}

function NudgeButton({
  icon,
  onClick,
  ariaLabel,
  disabled,
}: {
  icon: React.ReactNode
  onClick: () => void
  ariaLabel: string
  disabled?: boolean
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className="tappable flex h-11 w-11 items-center justify-center rounded-full border border-border-default bg-white/[0.05] text-fog transition-colors hover:bg-white/[0.10] hover:text-mist disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white/[0.05] disabled:hover:text-fog"
    >
      {icon}
    </button>
  )
}

/* -------------------------------------------------------------------------- */
/*  Travelers (+ optional party size)                                         */
/* -------------------------------------------------------------------------- */

function Travelers({
  answers,
  onPatch,
  onBack,
  onNext,
  onSkip,
}: {
  answers: Answers
  onPatch: (p: Partial<Answers>) => void
  onBack: () => void
  onNext: () => void
  onSkip: () => void
}) {
  const value = answers.travelers
  const showCount = value === 'couple' || value === 'family' || value === 'group'
  const minCount = value === 'group' ? 3 : 2
  const count = answers.partySize ?? (value === 'couple' ? 2 : value === 'family' ? 3 : 4)

  return (
    <QuestionFrame
      screen="travelers"
      title="Who’s traveling?"
      onBack={onBack}
      onNext={onNext}
      onSkip={onSkip}
      backgroundImage={ONBOARDING_BACKGROUNDS.travelers}
    >
      <div className="grid grid-cols-2 gap-3">
        {TRAVELERS.map((t) => {
          const Icon = TRAVELER_ICONS[t.icon]
          const selected = t.id === value
          return (
            <button
              key={t.id}
              onClick={() =>
                onPatch({ travelers: t.id, partySize: t.id === 'solo' ? 1 : undefined })
              }
              className={`tappable border-trans flex aspect-square flex-col justify-between rounded-2xl border p-4 text-left backdrop-blur-xl ${
                selected ? 'border-steel-soft bg-slate-2/80' : 'border-white/[0.08] bg-slate/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className={`flex h-11 w-11 items-center justify-center rounded-full ${selected ? 'bg-mist text-ink' : 'bg-white/[0.07] text-fog'}`}>
                  <Icon size={22} />
                </div>
                {selected && <CheckCircle size={20} weight="fill" className="text-mist" />}
              </div>
              <div>
                <div className="text-[18px] font-semibold text-mist">{t.label}</div>
                <div className="text-[13px] text-fog">{t.sub}</div>
              </div>
            </button>
          )
        })}
      </div>

      {showCount && (
        <div className="fade-up mt-4 flex items-center justify-between rounded-2xl border border-white/[0.08] bg-slate/40 px-5 py-4 backdrop-blur-xl">
          <div className="text-[14px] font-medium text-fog">How many of you?</div>
          <div className="flex items-center gap-4">
            <NudgeButton
              icon={<Minus size={16} weight="bold" />}
              ariaLabel="Fewer travelers"
              onClick={() => onPatch({ partySize: Math.max(minCount, count - 1) })}
              disabled={count <= minCount}
            />
            <span className="w-7 text-center font-display text-[22px] font-bold tabular-nums text-mist">{count}</span>
            <NudgeButton
              icon={<Plus size={16} weight="bold" />}
              ariaLabel="More travelers"
              onClick={() => onPatch({ partySize: Math.min(12, count + 1) })}
              disabled={count >= 12}
            />
          </div>
        </div>
      )}
    </QuestionFrame>
  )
}

/* -------------------------------------------------------------------------- */
/*  Interests (weighted by selection order)                                  */
/* -------------------------------------------------------------------------- */

function Interests({
  value,
  onChange,
  onBack,
  onNext,
  onSkip,
  country,
  preview,
}: {
  value: string[]
  onChange: (v: string[]) => void
  onBack: () => void
  onNext: () => void
  onSkip: () => void
  country: string
  preview?: React.ReactNode
}) {
  const toggle = (id: string) =>
    onChange(value.includes(id) ? value.filter((v) => v !== id) : [...value, id])

  return (
    <QuestionFrame
      screen="interests"
      title="What kind of trip?"
      onBack={onBack}
      onNext={onNext}
      onSkip={onSkip}
      disabled={value.length === 0}
      preview={preview}
      backgroundImage={ONBOARDING_BACKGROUNDS.interests}
    >
      <div className="flex flex-wrap justify-center gap-2.5 px-1">
        {TRIP_TYPES.map((t) => {
          const Icon = TRIP_ICONS[t.icon] ?? Compass
          const rank = value.indexOf(t.id)
          const selected = rank >= 0
          return (
            <button
              key={t.id}
              onClick={() => toggle(t.id)}
              className={`tappable border-trans flex h-11 items-center gap-2 rounded-full border px-4 text-[14px] font-semibold backdrop-blur-xl ${
                selected ? 'border-steel-soft bg-slate-2/80 text-mist' : 'border-white/[0.08] bg-slate/40 text-fog'
              }`}
            >
              {selected ? (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-mist text-[11px] font-bold tabular-nums text-ink">
                  {rank + 1}
                </span>
              ) : (
                <Icon size={16} weight="regular" />
              )}
              {t.label}
            </button>
          )
        })}
      </div>
      <div className="mt-6 rounded-2xl border border-white/[0.08] bg-slate/40 p-4 text-[13px] leading-[20px] text-fog backdrop-blur-xl">
        {value.length === 0
          ? `Tap as many as feel right. We’ll weight your briefings and itinerary for ${country} around them.`
          : `Weighting ${country} toward ${value
              .slice(0, 3)
              .map((id) => tripTypeById(id)?.label)
              .filter(Boolean)
              .join(', ')}.`}
      </div>
    </QuestionFrame>
  )
}

/* -------------------------------------------------------------------------- */
/*  Pace                                                                      */
/* -------------------------------------------------------------------------- */

function PaceStep({
  value,
  onChange,
  onBack,
  onNext,
  onSkip,
  preview,
}: {
  value: Answers['pace']
  onChange: (v: Answers['pace']) => void
  onBack: () => void
  onNext: () => void
  onSkip: () => void
  preview?: React.ReactNode
}) {
  const opt = PACE_OPTIONS.find((p) => p.id === value) ?? PACE_OPTIONS[1]
  return (
    <QuestionFrame
      screen="pace"
      title="What’s your pace?"
      onBack={onBack}
      onNext={onNext}
      onSkip={onSkip}
      preview={preview}
      backgroundImage={ONBOARDING_BACKGROUNDS.pace}
    >
      <Segmented
        options={PACE_OPTIONS.map((p) => ({ id: p.id, label: p.label }))}
        value={value}
        onChange={onChange}
        ariaLabel="Trip pace"
      />

      <div className="mt-5 rounded-3xl border border-white/[0.08] bg-slate/40 p-6 shadow-card backdrop-blur-xl">
        <div className="font-display text-[20px] font-semibold text-mist">{opt.label}</div>
        <div className="mt-1 text-[14px] leading-[20px] text-fog">{opt.sub}</div>
        <div className="mt-4 flex items-center gap-1.5" aria-hidden>
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className={`h-2.5 flex-1 rounded-full ${i < opt.blocksPerDay ? 'bg-steel-soft' : 'bg-border-default'}`}
            />
          ))}
        </div>
        <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.14em] text-smoke">
          ≈ {opt.blocksPerDay} stops per day
        </div>
      </div>
    </QuestionFrame>
  )
}

/* -------------------------------------------------------------------------- */
/*  Budget                                                                    */
/* -------------------------------------------------------------------------- */

function Budget({
  value,
  durationDays,
  onChange,
  onBack,
  onNext,
  onSkip,
  preview,
}: {
  value: number
  durationDays: number
  onChange: (v: number) => void
  onBack: () => void
  onNext: () => void
  onSkip: () => void
  preview?: React.ReactNode
}) {
  const usd = budgetUsdPerDay(value)
  const tier = budgetTier(value)
  const days = Math.max(1, durationDays)
  const total = usd * days
  const activeTier = BUDGET_TIERS.find((t) => t.id === tier)
  return (
    <QuestionFrame
      screen="budget"
      title="What’s your budget range?"
      onBack={onBack}
      onNext={onNext}
      onSkip={onSkip}
      preview={preview}
      backgroundImage={ONBOARDING_BACKGROUNDS.budget}
    >
      <div className="rounded-3xl border border-white/[0.08] bg-slate/40 p-6 shadow-card backdrop-blur-xl">
        <div className="flex items-end justify-between">
          <div>
            <div className="font-display text-[36px] font-bold leading-none tracking-[-0.01em] text-mist">
              ~${usd}
              <span className="ml-1 text-[16px] font-medium text-fog">/day</span>
            </div>
            <div className="mt-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-smoke">{tier}</div>
          </div>
          <div className="text-right text-[12px] text-smoke">
            Per person
            <div className="text-[11px] text-smoke/70">excl. flights</div>
          </div>
        </div>
        <div className="mt-7">
          <Slider value={value} min={0} max={100} onChange={onChange} ariaLabel="Daily budget" />
        </div>

        {/* Estimated trip total — the number travelers actually plan against */}
        <div className="mt-6 flex items-end justify-between border-t border-white/[0.08] pt-4">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-smoke">
              Est. trip total
            </div>
            <div className="mt-1 font-display text-[22px] font-bold leading-none tracking-[-0.01em] text-mist">
              ≈ ${total.toLocaleString('en-US')}
            </div>
          </div>
          <div className="text-right text-[12px] text-smoke">
            {days} {days === 1 ? 'day' : 'days'}
            <div className="text-[11px] text-smoke/70">per person</div>
          </div>
        </div>
      </div>

      {/* Tier presets — snap the slider to a band in one tap */}
      <div className="mt-4 grid grid-cols-4 gap-2">
        {BUDGET_TIERS.map((t) => {
          const selected = t.id === tier
          return (
            <button
              key={t.id}
              onClick={() => onChange(t.value)}
              className={`tappable border-trans inline-flex h-10 items-center justify-center whitespace-nowrap rounded-xl border px-1 text-[11px] font-semibold backdrop-blur-xl ${
                selected
                  ? 'border-steel-soft bg-slate-2/80 text-mist'
                  : 'border-white/[0.08] bg-slate/40 text-fog'
              }`}
            >
              {t.id}
            </button>
          )
        })}
      </div>

      {/* What this tier buys */}
      {activeTier && (
        <p className="mt-4 px-1 text-[13px] leading-[19px] text-fog">{activeTier.blurb}</p>
      )}
    </QuestionFrame>
  )
}

/* -------------------------------------------------------------------------- */
/*  Profile — experience + optional needs                                     */
/* -------------------------------------------------------------------------- */

function Profile({
  answers,
  onPatch,
  onBack,
  onNext,
  onSkip,
  preview,
}: {
  answers: Answers
  onPatch: (p: Partial<Answers>) => void
  onBack: () => void
  onNext: () => void
  onSkip: () => void
  preview?: React.ReactNode
}) {
  const toggleNeed = (id: string) =>
    onPatch({
      needs: answers.needs.includes(id)
        ? answers.needs.filter((n) => n !== id)
        : [...answers.needs, id],
    })

  return (
    <QuestionFrame
      screen="profile"
      title="A little about you"
      onBack={onBack}
      onNext={onNext}
      onSkip={onSkip}
      preview={preview}
      backgroundImage={ONBOARDING_BACKGROUNDS.profile}
    >
      <div className="space-y-2.5">
        {EXPERIENCE_OPTIONS.map((e) => {
          const Icon = EXPERIENCE_ICONS[e.icon] ?? Compass
          const selected = answers.experience === e.id
          return (
            <button
              key={e.id}
              onClick={() => onPatch({ experience: e.id })}
              className={`tappable border-trans flex w-full items-center gap-3.5 rounded-2xl border p-4 text-left backdrop-blur-xl ${
                selected ? 'border-steel-soft bg-slate-2/80' : 'border-white/[0.08] bg-slate/40'
              }`}
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-full ${selected ? 'bg-mist text-ink' : 'bg-white/[0.07] text-fog'}`}>
                <Icon size={19} weight={selected ? 'fill' : 'regular'} />
              </div>
              <div className="flex-1">
                <div className="text-[15.5px] font-semibold text-mist">{e.label}</div>
                <div className="text-[12.5px] text-fog">{e.sub}</div>
              </div>
              {selected && <CheckCircle size={19} weight="fill" className="text-mist" />}
            </button>
          )
        })}
      </div>

      <div className="mt-6">
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-smoke">
          Anything we should know? <span className="text-smoke/60">Optional</span>
        </div>
        <div className="mt-3 space-y-4">
          {NEEDS_GROUPS.map((g) => (
            <div key={g.group}>
              <div className="mb-2 text-[12px] font-medium text-fog">{g.group}</div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => {
                  const selected = answers.needs.includes(it.id)
                  return (
                    <button
                      key={it.id}
                      onClick={() => toggleNeed(it.id)}
                      className={`tappable border-trans inline-flex h-9 items-center gap-1.5 rounded-full border px-3.5 text-[13px] font-medium backdrop-blur-xl ${
                        selected ? 'border-steel-soft bg-slate-2/80 text-mist' : 'border-white/[0.08] bg-slate/40 text-fog'
                      }`}
                    >
                      {selected && <CheckCircle size={13} weight="fill" className="text-steel-soft" />}
                      {it.label}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </QuestionFrame>
  )
}

/* -------------------------------------------------------------------------- */
/*  Review & personalize                                                      */
/* -------------------------------------------------------------------------- */

function Review({
  answers,
  go,
  onBack,
  onGenerate,
}: {
  answers: Answers
  go: (s: ScreenId) => void
  onBack: () => void
  onGenerate: () => void
}) {
  const plan = useMemo(() => personalizePlan(selectBasePlan(answers), answers), [answers])
  const p = plan.personalization
  const total = plan.categories.reduce((a, c) => a + c.total, 0)
  const ready = plan.briefingBuckets.now.length

  const chips: Array<{ label: string; screen: ScreenId }> = [
    { label: `${flagEmoji(answers.countryCode)} ${answers.countryName || plan.country.name}`, screen: 'country' },
    { label: `${answers.durationDays} days`, screen: 'duration' },
    {
      label:
        p?.countdownDays != null ? `${p.countdownDays} days out` : answers.dateMode === 'within3' ? 'Within 3 months' : 'Flexible dates',
      screen: 'date',
    },
    { label: travelerLabel(answers), screen: 'travelers' },
    ...(p?.focus.length ? [{ label: p.focus.join(' · '), screen: 'interests' as ScreenId }] : []),
    { label: `${p?.paceLabel ?? 'Balanced'} pace`, screen: 'pace' },
    { label: `${p?.budgetTier ?? budgetTier(answers.budget)} · ~$${plan.budgetTarget?.perDayUsd}/day`, screen: 'budget' },
    { label: p?.experienceLabel ?? 'A few trips in', screen: 'profile' },
    ...(p?.dietary.length ? [{ label: p.dietary.join(', '), screen: 'profile' as ScreenId }] : []),
  ]

  const includes: string[] = [
    `${total} sequenced briefings, ${ready} ready now`,
    p?.focus.length ? `Itinerary & briefings weighted toward ${p.focus.join(' & ').toLowerCase()}` : 'A balanced, all-round itinerary',
    `~$${plan.budgetTarget?.perDayUsd}/day ${(p?.budgetTier ?? '').toLowerCase()} target`,
    ...(p?.dietary.length ? [`Dietary phrase card (${p.dietary.join(', ').toLowerCase()})`] : []),
    ...(p?.countdownDays != null ? [`A live ${p.countdownDays}-day countdown to departure`] : []),
    `Offline Landing Day Hub for ${plan.arrivalAirport.city || plan.heroCity}`,
  ]

  return (
    <QuestionFrame
      screen="review"
      title="Review & personalize"
      onBack={onBack}
      onNext={onGenerate}
      nextLabel="Generate my plan"
    >
      {/* Summary chips — each jumps back to its step to edit. */}
      <div className="rounded-3xl border border-border-default bg-slate p-5 shadow-card">
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-smoke">Tailored for you</div>
        <div className="mt-3 flex flex-wrap gap-2">
          {chips.map((c, i) => (
            <button
              key={`${c.screen}-${i}`}
              onClick={() => go(c.screen)}
              className="tappable border-trans inline-flex items-center gap-1.5 rounded-full border border-white/[0.10] bg-white/[0.05] px-3 py-1.5 text-[12.5px] font-medium text-fog hover:border-steel-soft/70 hover:text-mist"
            >
              {c.label}
              <PencilSimple size={11} className="text-smoke" />
            </button>
          ))}
        </div>
      </div>

      {/* What the plan will include — real computed numbers. */}
      <div className="mt-4 rounded-3xl border border-border-default bg-slate p-5 shadow-card">
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-smoke">Your plan will include</div>
        <ul className="mt-3 space-y-2.5">
          {includes.map((line, i) => (
            <li key={i} className="fade-up flex items-start gap-3" style={{ animationDelay: `${i * 60}ms` }}>
              <CheckCircle size={18} weight="fill" className="mt-0.5 shrink-0 text-steel-soft" />
              <span className="text-[14px] leading-[19px] text-fog">{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </QuestionFrame>
  )
}

function travelerLabel(a: Answers): string {
  const base =
    a.travelers === 'solo'
      ? 'Solo'
      : a.travelers === 'couple'
        ? 'Couple'
        : a.travelers === 'family'
          ? 'Family'
          : 'Group'
  return a.partySize && a.partySize > 1 && a.travelers !== 'couple'
    ? `${base} · ${a.partySize}`
    : base
}

/* -------------------------------------------------------------------------- */
/*  Loading                                                                   */
/* -------------------------------------------------------------------------- */

const LOADING_STEPS = [
  'Visa & documents',
  'Flights & stay',
  'Local transport',
  'Money & payments',
  'Connectivity',
  'Landing Day Hub',
]

const WAIT_MSGS = [
  'Tailoring your briefings…',
  'Mapping your route…',
  'Translating arrival-day phrases…',
  'Saving offline essentials…',
  'Almost ready…',
]

export function Loading({
  onDone,
  ready = true,
  sequencedFor,
  focus,
}: {
  onDone: () => void
  ready?: boolean
  /** Optional personalization captions from the just-generated plan. */
  sequencedFor?: string
  focus?: string[]
}) {
  const [completed, setCompleted] = useState(0)
  const doneRef = useRef(false)

  useEffect(() => {
    let cancelled = false
    const timeouts: number[] = []
    const schedule = (i: number, delay: number) => {
      const t = window.setTimeout(() => {
        if (cancelled || i >= LOADING_STEPS.length) return
        setCompleted(i + 1)
        schedule(i + 1, 520 + i * 90)
      }, delay)
      timeouts.push(t)
    }
    schedule(0, 480)
    return () => {
      cancelled = true
      timeouts.forEach((t) => clearTimeout(t))
    }
  }, [])

  useEffect(() => {
    if (doneRef.current) return
    if (ready && completed >= LOADING_STEPS.length) {
      doneRef.current = true
      const t = window.setTimeout(onDone, 360)
      return () => clearTimeout(t)
    }
  }, [ready, completed, onDone])

  const waiting = completed >= LOADING_STEPS.length && !ready
  const [tipIdx, setTipIdx] = useState(0)
  useEffect(() => {
    if (!waiting) return
    const id = window.setInterval(() => setTipIdx((i) => i + 1), 2600)
    return () => clearInterval(id)
  }, [waiting])

  const caption =
    focus && focus.length
      ? `Weighting toward ${focus.slice(0, 2).join(' & ').toLowerCase()}`
      : sequencedFor
        ? `Sequencing for ${sequencedFor}`
        : 'We’re sequencing every task from now to landing day.'

  return (
    <div className="relative h-full w-full overflow-hidden bg-ink no-select">
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{ background: 'radial-gradient(circle at 50% 35%, rgba(129,147,168,0.45) 0%, transparent 60%)' }}
      />
      <div className="relative flex h-full w-full flex-col px-6 pb-10 pt-[100px]">
        <div className="flex flex-col items-center text-center">
          <div className="animate-pulse-soft">
            <ArrivoMark size={120} variant="silver" />
          </div>
          <h2 className="mt-6 font-display text-[26px] font-bold leading-tight tracking-[-0.01em] text-mist">
            Generating your
            <br /> personalized plan…
          </h2>
          <p className="mt-2 max-w-[300px] text-[14px] leading-[20px] text-fog">{caption}</p>
        </div>

        <div className="glass mt-10 rounded-3xl p-5">
          <ul className="space-y-3.5">
            {LOADING_STEPS.map((s, i) => {
              const done = i < completed
              const active = i === completed
              return (
                <li key={s} className="flex items-center gap-3">
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-full transition-colors ${
                      done ? 'bg-mist text-ink' : active ? 'border-2 border-steel-soft' : 'border border-border-default'
                    }`}
                  >
                    {done && <CheckCircle size={16} weight="fill" />}
                    {active && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-steel-soft" />}
                  </div>
                  <span className={`text-[15px] ${done ? 'text-mist' : active ? 'text-mist' : 'text-fog'}`}>{s}</span>
                  {active && (
                    <span className="ml-auto text-[12px] font-semibold uppercase tracking-[0.12em] text-steel-soft">
                      Working
                    </span>
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        {waiting && (
          <p key={tipIdx} className="fade-up mt-6 text-center text-[13px] font-medium text-smoke" aria-live="polite">
            {WAIT_MSGS[tipIdx % WAIT_MSGS.length]}
          </p>
        )}
      </div>
    </div>
  )
}
