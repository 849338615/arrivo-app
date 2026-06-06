import { useEffect, useRef, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  CalendarBlank,
  CalendarDots,
  CheckCircle,
  Compass,
  ForkKnife,
  HourglassMedium,
  Mountains,
  Buildings,
  BowlFood,
  User,
  UsersFour,
  UsersThree,
  Users,
  MagnifyingGlass,
  Microphone,
  Minus,
  Plus,
  X,
} from '@phosphor-icons/react'
import {
  COUNTRIES,
  HERO_IMAGE,
  ONBOARDING_BACKGROUNDS,
  PREP_ANCHORS,
  TRAVELERS,
  TRIP_TYPES,
  type ScreenId,
} from '../data'
import { flagEmoji, searchCountries } from '../lib/countries'
import {
  ArrivoMark,
  DestinationImage,
  IconButton,
  Primary,
  StepBar,
} from '../components'

import type { TripAnswers } from '../lib/plan'
export type Answers = TripAnswers

const TRIP_ICONS: Record<string, React.ComponentType<{ size?: number; weight?: 'regular' | 'fill' }>> = {
  Compass,
  ForkKnife,
  Mountains,
  Buildings,
  BowlFood,
}

const TRAVELER_ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
  User,
  Users,
  UsersThree,
  UsersFour,
}

/* -------------------------------------------------------------------------- */

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

  const countryLabel = answers.countryName || 'your destination'

  switch (screen) {
    case 'splash':
      return <Splash onSignup={() => go('country')} onLogin={onSkip} />
    case 'country':
      return (
        <CountryStep
          code={answers.countryCode}
          name={answers.countryName}
          onChange={(code, name) =>
            setAnswers({ ...answers, countryCode: code, countryName: name })
          }
          onBack={() => go('splash')}
          onNext={() => go('date')}
        />
      )
    case 'date':
      return (
        <DateStep
          value={answers.dateMode}
          onChange={(v) => update('dateMode', v)}
          onBack={() => go('splash')}
          onNext={() => go('duration')}
          step={0}
        />
      )
    case 'duration':
      return (
        <Duration
          value={answers.durationDays}
          onChange={(v) => update('durationDays', v)}
          onBack={() => go('date')}
          onNext={() => go('travelers')}
          step={1}
        />
      )
    case 'travelers':
      return (
        <Travelers
          value={answers.travelers}
          onChange={(v) => update('travelers', v)}
          onBack={() => go('duration')}
          onNext={() => go('tripType')}
          step={2}
        />
      )
    case 'tripType':
      return (
        <TripType
          value={answers.tripTypes}
          onChange={(v) => update('tripTypes', v)}
          onBack={() => go('travelers')}
          onNext={() => go('budget')}
          step={3}
          country={countryLabel}
        />
      )
    case 'budget':
      return (
        <Budget
          value={answers.budget}
          onChange={(v) => update('budget', v)}
          onBack={() => go('tripType')}
          onNext={() => go('preparedness')}
          step={4}
        />
      )
    case 'preparedness':
      return (
        <Preparedness
          value={answers.prep}
          onChange={(v) => update('prep', v)}
          onBack={() => go('budget')}
          onNext={() => go('loading')}
          step={5}
          country={countryLabel}
        />
      )
    default:
      return null
  }
}

/* -------------------------------------------------------------------------- */
/*  Splash                                                                    */
/* -------------------------------------------------------------------------- */

function Splash({
  onSignup,
  onLogin,
}: {
  onSignup: () => void
  onLogin?: () => void
}) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-ink no-select">
      {/* Warm Venice sunset — animated subtle pan. Self-healing: a rotted or
          offline source degrades to the branded gradient, never a broken icon. */}
      <DestinationImage
        src={HERO_IMAGE}
        className="animate-hero-pan absolute inset-0 h-full w-full object-cover"
      />

      {/* Heavy cool wash. Deeper across the whole frame, darkest at the CTAs. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(14,21,32,0.48) 0%, rgba(14,21,32,0.62) 28%, rgba(14,21,32,0.78) 56%, rgba(14,21,32,0.92) 82%, rgba(14,21,32,0.98) 100%)',
        }}
      />
      {/* Subtle flat tint baseline so even the brightest pixels stay restrained */}
      <div className="absolute inset-0 bg-ink/30" />

      <div className="relative flex h-full w-full flex-col px-6 pb-0 pt-[88px]">
        <div className="flex-[0.55]" />

        {/* Vertical rectangular brand lockup — hero composition */}
        <div className="flex flex-col items-center fade-up">
          <ArrivoMark size={140} variant="silver" />
          <span className="-mt-7 font-display text-[52px] font-semibold leading-none tracking-[-0.035em] text-mist">
            Arrivo
          </span>
        </div>

        {/* Glass search field — primary action, kicks off the sign-up flow */}
        <button
          onClick={onSignup}
          aria-label="Enter — start your trip"
          className="glass tappable mt-8 flex h-[52px] w-full items-center gap-3 rounded-full pl-5 pr-2 fade-up"
          style={{ animationDelay: '160ms' }}
        >
          <MagnifyingGlass size={16} className="text-smoke" />
          <span className="flex-1 text-left text-[14px] text-smoke">Enter</span>
          <span
            aria-hidden
            className="flex h-9 w-9 items-center justify-center rounded-full text-fog"
          >
            <Microphone size={16} />
          </span>
        </button>

        <div className="flex-1" />

        {/* Returning-user path */}
        <div
          className="fade-up pb-6"
          style={{ animationDelay: '400ms' }}
        >
          <button
            onClick={onLogin}
            className="glass-strong tappable inline-flex h-[58px] w-full items-center justify-center rounded-full border border-white/[0.10] text-[14.5px] font-semibold tracking-[0.04em] text-mist transition-colors hover:bg-white/[0.06]"
          >
            Log in
          </button>
        </div>
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

  return (
    <div className="slide-in relative flex h-full w-full flex-col overflow-hidden bg-ink no-select">
      {/* Atmospheric background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <DestinationImage
          src={ONBOARDING_BACKGROUNDS.tripType}
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
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <IconButton onClick={onBack} ariaLabel="Back">
            <ArrowLeft size={18} />
          </IconButton>
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-smoke">
            Destination
          </div>
          <div className="h-11 w-11" />
        </div>

        {/* Heading */}
        <div className="mt-7">
          <h2 className="font-display text-[34px] font-bold leading-[40px] tracking-[-0.015em] text-mist">
            Where are we going?
          </h2>
          <p className="mt-2.5 text-[15px] leading-[22px] text-fog/90">
            Search any country — Arrivo builds the readiness plan around it.
          </p>
        </div>

        {/* Search field */}
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

        {/* Body */}
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
                        selected
                          ? 'border-steel-soft bg-slate-2/80'
                          : 'border-white/[0.08] bg-slate/40'
                      }`}
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.07] text-[22px] leading-none">
                        {flagEmoji(c.code)}
                      </span>
                      <span className="flex-1 text-[16px] font-semibold text-mist">
                        {c.name}
                      </span>
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

        {/* Footer */}
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
  step,
  total = 6,
  title,
  subtitle,
  onBack,
  onNext,
  onSkip,
  nextLabel = 'Continue',
  disabled,
  children,
  backgroundImage,
}: {
  step: number
  total?: number
  title: React.ReactNode
  subtitle?: React.ReactNode
  onBack?: () => void
  onNext: () => void
  onSkip?: () => void
  nextLabel?: string
  disabled?: boolean
  children: React.ReactNode
  backgroundImage?: string
}) {
  return (
    <div className="slide-in relative flex h-full w-full flex-col overflow-hidden bg-ink no-select">
      {/* Atmospheric background — blurred & dimmed photography */}
      {backgroundImage && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        >
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
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <IconButton onClick={onBack} ariaLabel="Back">
            <ArrowLeft size={18} />
          </IconButton>
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-smoke">
            Step {step + 1} of {total}
          </div>
          <div className="h-11 w-11" />
        </div>

        <div className="mt-5">
          <StepBar step={step} total={total} />
        </div>

        {/* Heading */}
        <div className="mt-8">
          <h2 className="font-display text-[34px] font-bold leading-[40px] tracking-[-0.015em] text-mist">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2.5 text-[15px] leading-[22px] text-fog/90">
              {subtitle}
            </p>
          )}
        </div>

        {/* Body */}
        <div className="scroll-area mt-7 flex-1 overflow-y-auto">{children}</div>

        {/* Footer: primary + optional skip */}
        <div className="pt-6">
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
/*  Date                                                                      */
/* -------------------------------------------------------------------------- */

function DateStep({
  value,
  onChange,
  onBack,
  onNext,
  step,
}: {
  value: 'exact' | 'flexible' | 'within3'
  onChange: (v: 'exact' | 'flexible' | 'within3') => void
  onBack: () => void
  onNext: () => void
  step: number
}) {
  const opts: Array<{
    id: 'exact' | 'flexible' | 'within3'
    label: string
    sub: string
    icon: React.ReactNode
  }> = [
    {
      id: 'exact',
      label: 'Exact dates',
      sub: 'I know when I’m flying.',
      icon: <CalendarDots size={22} />,
    },
    {
      id: 'flexible',
      label: 'Flexible',
      sub: 'I have a window in mind.',
      icon: <CalendarBlank size={22} />,
    },
    {
      id: 'within3',
      label: 'Within 3 months',
      sub: 'Soon, but no exact dates yet.',
      icon: <HourglassMedium size={22} />,
    },
  ]
  return (
    <QuestionFrame
      step={step}
      title="When are you going?"
      subtitle="We sequence your tasks based on how soon you fly."
      onBack={onBack}
      onNext={onNext}
      onSkip={onNext}
      backgroundImage={ONBOARDING_BACKGROUNDS.date}
    >
      <div className="space-y-3">
        {opts.map((o) => {
          const selected = o.id === value
          return (
            <button
              key={o.id}
              onClick={() => onChange(o.id)}
              className={`tappable border-trans flex w-full items-center gap-4 rounded-2xl border p-4 text-left backdrop-blur-xl ${
                selected
                  ? 'border-steel-soft bg-slate-2/80'
                  : 'border-white/[0.08] bg-slate/40'
              }`}
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-full ${
                  selected ? 'bg-mist text-ink' : 'bg-white/[0.07] text-fog'
                }`}
              >
                {o.icon}
              </div>
              <div className="flex-1">
                <div className="text-[16px] font-semibold text-mist">
                  {o.label}
                </div>
                <div className="text-[13px] text-fog">{o.sub}</div>
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
    </QuestionFrame>
  )
}

/* -------------------------------------------------------------------------- */
/*  Slider                                                                    */
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

const DURATION_PRESETS: Array<{ days: number; label: string }> = [
  { days: 7, label: '1 week' },
  { days: 10, label: '10 days' },
  { days: 14, label: '2 weeks' },
  { days: 21, label: '3 weeks' },
]

// 7-day floor reflects reality: a US→China trip burns ~3 days on flights and
// jet lag, so anything shorter can't be sequenced into a meaningful plan.
const DURATION_MIN = 7
const DURATION_MAX = 90
const SLIDER_MAX = 45

function Duration({
  value,
  onChange,
  onBack,
  onNext,
  step,
}: {
  value: number
  onChange: (v: number) => void
  onBack: () => void
  onNext: () => void
  step: number
}) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(String(value))
  const inputRef = useRef<HTMLInputElement>(null)

  const clamp = (n: number) => Math.max(DURATION_MIN, Math.min(DURATION_MAX, n))
  const nudge = (delta: number) => onChange(clamp(value + delta))

  const startEdit = () => {
    setDraft(String(value))
    setEditing(true)
    // Defer focus + select to after render
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
      step={step}
      title="For how long?"
      subtitle="Your readiness plan adapts to fit your timeline."
      onBack={onBack}
      onNext={onNext}
      backgroundImage={ONBOARDING_BACKGROUNDS.duration}
    >
      {/* Counter card */}
      <div className="rounded-3xl border border-white/[0.08] bg-slate/40 p-6 shadow-card backdrop-blur-xl">
        <div className="flex items-center justify-center gap-5">
          <NudgeButton
            icon={<Minus size={18} weight="bold" />}
            ariaLabel="Decrease by one day"
            onClick={() => nudge(-1)}
            disabled={value <= DURATION_MIN}
          />

          <button
            type="button"
            onClick={startEdit}
            className="tappable group flex flex-col items-center px-2"
          >
            {editing ? (
              <input
                ref={inputRef}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={draft}
                onChange={(e) =>
                  setDraft(e.target.value.replace(/\D/g, '').slice(0, 3))
                }
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
                {editing
                  ? ''
                  : value <= DURATION_MIN
                    ? `· min ${DURATION_MIN}`
                    : '· tap to edit'}
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

        {/* Slider */}
        <div className="mt-7">
          <Slider
            value={sliderValue}
            min={DURATION_MIN}
            max={SLIDER_MAX}
            onChange={onChange}
            ariaLabel="Trip length in days"
          />
          <div className="mt-1.5 flex justify-between text-[11px] font-medium text-smoke">
            <span>1 week</span>
            <span>2 weeks</span>
            <span>{value > SLIDER_MAX ? `${value} days` : '45+'}</span>
          </div>
        </div>
      </div>

      {/* Preset chips */}
      <div className="mt-4 grid grid-cols-4 gap-2">
        {DURATION_PRESETS.map((p) => {
          const selected = value === p.days
          return (
            <button
              key={p.days}
              onClick={() => onChange(p.days)}
              className={`tappable border-trans inline-flex h-10 items-center justify-center rounded-xl border px-1 text-[12.5px] font-semibold backdrop-blur-xl ${
                selected
                  ? 'border-steel-soft bg-slate-2/80 text-mist'
                  : 'border-white/[0.08] bg-slate/40 text-fog'
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

function Travelers({
  value,
  onChange,
  onBack,
  onNext,
  step,
}: {
  value: string
  onChange: (v: string) => void
  onBack: () => void
  onNext: () => void
  step: number
}) {
  return (
    <QuestionFrame
      step={step}
      title="Who’s traveling?"
      subtitle="Group size shapes hotels, transport, and pacing."
      onBack={onBack}
      onNext={onNext}
      onSkip={onNext}
      backgroundImage={ONBOARDING_BACKGROUNDS.travelers}
    >
      <div className="grid grid-cols-2 gap-3">
        {TRAVELERS.map((t) => {
          const Icon = TRAVELER_ICONS[t.icon]
          const selected = t.id === value
          return (
            <button
              key={t.id}
              onClick={() => onChange(t.id)}
              className={`tappable border-trans flex aspect-square flex-col justify-between rounded-2xl border p-4 text-left backdrop-blur-xl ${
                selected
                  ? 'border-steel-soft bg-slate-2/80'
                  : 'border-white/[0.08] bg-slate/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full ${
                    selected ? 'bg-mist text-ink' : 'bg-white/[0.07] text-fog'
                  }`}
                >
                  <Icon size={22} />
                </div>
                {selected && (
                  <CheckCircle size={20} weight="fill" className="text-mist" />
                )}
              </div>
              <div>
                <div className="text-[18px] font-semibold text-mist">
                  {t.label}
                </div>
                <div className="text-[13px] text-fog">{t.sub}</div>
              </div>
            </button>
          )
        })}
      </div>
    </QuestionFrame>
  )
}

/* -------------------------------------------------------------------------- */

function TripType({
  value,
  onChange,
  onBack,
  onNext,
  step,
  country,
}: {
  value: string[]
  onChange: (v: string[]) => void
  onBack: () => void
  onNext: () => void
  step: number
  country: string
}) {
  const toggle = (id: string) =>
    onChange(
      value.includes(id) ? value.filter((v) => v !== id) : [...value, id],
    )
  return (
    <QuestionFrame
      step={step}
      title="What kind of trip?"
      subtitle="Pick a few. We’ll weight your briefings and itinerary."
      onBack={onBack}
      onNext={onNext}
      onSkip={onNext}
      disabled={value.length === 0}
      backgroundImage={ONBOARDING_BACKGROUNDS.tripType}
    >
      <div className="flex flex-wrap justify-center gap-2.5 px-2">
        {TRIP_TYPES.map((t) => {
          const Icon = TRIP_ICONS[t.icon] ?? Compass
          const selected = value.includes(t.id)
          return (
            <button
              key={t.id}
              onClick={() => toggle(t.id)}
              className={`tappable border-trans flex h-11 items-center gap-2 rounded-full border px-4 text-[14px] font-semibold backdrop-blur-xl ${
                selected
                  ? 'border-steel-soft bg-slate-2/80 text-mist'
                  : 'border-white/[0.08] bg-slate/40 text-fog'
              }`}
            >
              <Icon size={16} weight={selected ? 'fill' : 'regular'} />
              {t.label}
            </button>
          )
        })}
      </div>
      <div className="mt-6 rounded-2xl border border-white/[0.08] bg-slate/40 p-4 text-[13px] leading-[20px] text-fog backdrop-blur-xl">
        Tap as many as feel right. We’ll weight your briefings and itinerary for{' '}
        {country} around them.
      </div>
    </QuestionFrame>
  )
}

/* -------------------------------------------------------------------------- */

function Budget({
  value,
  onChange,
  onBack,
  onNext,
  step,
}: {
  value: number
  onChange: (v: number) => void
  onBack: () => void
  onNext: () => void
  step: number
}) {
  // map 0..100 → daily USD 80..600
  const usd = Math.round(80 + (value / 100) * 520)
  const tier =
    value < 30 ? 'Budget' : value < 65 ? 'Mid-range' : value < 90 ? 'Comfort' : 'Premium'
  return (
    <QuestionFrame
      step={step}
      title="What’s your budget range?"
      subtitle="A rough daily target. You can change this later."
      onBack={onBack}
      onNext={onNext}
      onSkip={onNext}
      backgroundImage={ONBOARDING_BACKGROUNDS.budget}
    >
      <div className="rounded-3xl border border-white/[0.08] bg-slate/40 p-6 shadow-card backdrop-blur-xl">
        <div className="flex items-end justify-between">
          <div>
            <div className="font-display text-[36px] font-bold leading-none tracking-[-0.01em] text-mist">
              ~${usd}
              <span className="ml-1 text-[16px] font-medium text-fog">/day</span>
            </div>
            <div className="mt-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-smoke">
              {tier}
            </div>
          </div>
          <div className="text-right text-[12px] text-smoke">
            Per person
            <div className="text-[11px] text-smoke/70">excl. flights</div>
          </div>
        </div>
        <div className="mt-7">
          <Slider
            value={value}
            min={0}
            max={100}
            onChange={onChange}
            ariaLabel="Daily budget"
          />
          <div className="mt-1 flex justify-between text-[12px] text-smoke">
            <span>Budget</span>
            <span>Mid</span>
            <span>Premium</span>
          </div>
        </div>
      </div>
    </QuestionFrame>
  )
}

/* -------------------------------------------------------------------------- */

// Short forms of the prep anchors for the slider rail. The full label still
// shows above the slider; these are just for the tick markers below.
const PREP_SHORT = ['Dreaming', 'Dates', 'Flights', 'Booked']

function Preparedness({
  value,
  onChange,
  onBack,
  onNext,
  step,
  country,
}: {
  value: number
  onChange: (v: number) => void
  onBack: () => void
  onNext: () => void
  step: number
  country: string
}) {
  return (
    <QuestionFrame
      step={step}
      title="How prepared are you?"
      subtitle={`We’ll guide you through everything for ${country}.`}
      onBack={onBack}
      onNext={onNext}
      nextLabel="Generate my plan"
      backgroundImage={ONBOARDING_BACKGROUNDS.preparedness}
    >
      <div className="rounded-3xl border border-white/[0.08] bg-slate/40 p-6 shadow-card backdrop-blur-xl">
        <div className="font-display text-[20px] font-semibold leading-tight text-mist">
          {PREP_ANCHORS[value]}
        </div>
        <div className="mt-1 text-[13px] text-fog">
          {value === 0 && 'We’ll start with the big-picture sequence.'}
          {value === 1 && 'Great. Let’s lock in flights and visa first.'}
          {value === 2 && 'You’re ahead. Now the on-ground readiness.'}
          {value === 3 && 'Final pre-departure and Landing Day Hub for you.'}
        </div>
        <div className="mt-7">
          <Slider
            value={value}
            min={0}
            max={3}
            onChange={onChange}
            ariaLabel="Preparedness"
          />
          <div className="mt-2 flex justify-between text-[11px] font-semibold uppercase tracking-[0.12em] text-smoke">
            {PREP_SHORT.map((s, i) => (
              <span key={s} className={i === value ? 'text-mist' : ''}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </QuestionFrame>
  )
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

// Shown once the checklist has played but the plan is still generating.
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
}: {
  onDone: () => void
  ready?: boolean
}) {
  const [completed, setCompleted] = useState(0)
  const doneRef = useRef(false)

  // Advance the checklist on a cinematic cadence (independent of the fetch).
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

  // Finish only once the checklist has played AND the real plan is ready.
  useEffect(() => {
    if (doneRef.current) return
    if (ready && completed >= LOADING_STEPS.length) {
      doneRef.current = true
      const t = window.setTimeout(onDone, 360)
      return () => clearTimeout(t)
    }
  }, [ready, completed, onDone])

  // While the checklist is done but the plan is still generating, cycle a
  // reassuring caption so the wait reads as deliberate.
  const waiting = completed >= LOADING_STEPS.length && !ready
  const [tipIdx, setTipIdx] = useState(0)
  useEffect(() => {
    if (!waiting) return
    const id = window.setInterval(() => setTipIdx((i) => i + 1), 2600)
    return () => clearInterval(id)
  }, [waiting])

  return (
    <div className="relative h-full w-full overflow-hidden bg-ink no-select">
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          background:
            'radial-gradient(circle at 50% 35%, rgba(129,147,168,0.45) 0%, transparent 60%)',
        }}
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
          <p className="mt-2 max-w-[280px] text-[14px] leading-[20px] text-fog">
            We’re sequencing every task from now to landing day.
          </p>
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
                      done
                        ? 'bg-mist text-ink'
                        : active
                          ? 'border-2 border-steel-soft'
                          : 'border border-border-default'
                    }`}
                  >
                    {done && <CheckCircle size={16} weight="fill" />}
                    {active && (
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-steel-soft" />
                    )}
                  </div>
                  <span
                    className={`text-[15px] ${
                      done ? 'text-mist' : active ? 'text-mist' : 'text-fog'
                    }`}
                  >
                    {s}
                  </span>
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
          <p
            key={tipIdx}
            className="fade-up mt-6 text-center text-[13px] font-medium text-smoke"
            aria-live="polite"
          >
            {WAIT_MSGS[tipIdx % WAIT_MSGS.length]}
          </p>
        )}
      </div>
    </div>
  )
}

