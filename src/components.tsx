import { useCallback, useEffect, useState } from 'react'
import type { ReactNode, MouseEvent } from 'react'
import { CaretLeft, CaretRight, Check, X } from '@phosphor-icons/react'
import { fetchImage } from './lib/api'

/* -------------------------------------------------------------------------- */
/*  Brand mark — official PNG asset                                           */
/* -------------------------------------------------------------------------- */

/* The official Arrivo mark, rendered straight from the PNG asset so it always
   matches the brand exactly — white on transparent, reads on dark surfaces.
   No filters or recolouring: the logo is shown as-is. (`variant` is retained
   for call-site compatibility but no longer alters the asset.) */
export function ArrivoMark({
  size = 28,
  variant = 'mono',
  className = '',
}: {
  size?: number
  variant?: 'mono' | 'silver'
  className?: string
}) {
  void variant
  return (
    <img
      src="/arrivo-mark.png"
      alt="Arrivo"
      width={size}
      height={size}
      draggable={false}
      className={`block select-none ${className}`}
      style={{ width: size, height: size, objectFit: 'contain' }}
    />
  )
}

export function Wordmark({
  className = '',
  weight = 'semibold',
}: {
  className?: string
  weight?: 'regular' | 'medium' | 'semibold' | 'bold'
}) {
  const w =
    weight === 'regular'
      ? 'font-normal'
      : weight === 'medium'
        ? 'font-medium'
        : weight === 'bold'
          ? 'font-bold'
          : 'font-semibold'
  return (
    <span className={`font-display ${w} tracking-[-0.025em] ${className}`}>
      Arrivo
    </span>
  )
}

/* Lockup: mark + wordmark on a shared baseline, optical-tight gap. */
export function ArrivoLockup({
  markSize = 32,
  textClass = 'text-[28px]',
  variant = 'mono',
}: {
  markSize?: number
  textClass?: string
  variant?: 'mono' | 'silver'
}) {
  return (
    <div className="flex items-center gap-2 text-mist">
      <ArrivoMark size={markSize} variant={variant} />
      <Wordmark className={textClass} weight="semibold" />
    </div>
  )
}

/* App-icon style mark: rounded-square chip with the silver mark on dark. */
export function ArrivoAppIcon({ size = 56 }: { size?: number }) {
  return (
    <div
      className="relative flex items-center justify-center overflow-hidden shadow-card"
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.24,
        background:
          'linear-gradient(160deg, #1B2736 0%, #0E1520 70%, #07090E 100%)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <ArrivoMark size={Math.round(size * 0.92)} variant="silver" />
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Buttons                                                                   */
/* -------------------------------------------------------------------------- */

export function Primary({
  children,
  onClick,
  disabled,
  className = '',
}: {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
  className?: string
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`tappable no-select inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-mist px-6 text-[14px] font-semibold leading-[18px] text-ink shadow-card transition disabled:bg-slate disabled:text-smoke ${className}`}
    >
      {children}
    </button>
  )
}

export function Secondary({
  children,
  onClick,
  className = '',
}: {
  children: ReactNode
  onClick?: () => void
  className?: string
}) {
  return (
    <button
      onClick={onClick}
      className={`tappable no-select inline-flex h-13 items-center justify-center gap-2 rounded-full border border-border-default bg-white/[0.07] px-5 text-[14px] font-semibold leading-[18px] text-mist ${className}`}
      style={{ height: 52 }}
    >
      {children}
    </button>
  )
}

export function IconButton({
  children,
  onClick,
  className = '',
  ariaLabel,
}: {
  children: ReactNode
  onClick?: (e: MouseEvent) => void
  className?: string
  ariaLabel?: string
}) {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={`tappable inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.07] text-fog ${className}`}
    >
      {children}
    </button>
  )
}

/* -------------------------------------------------------------------------- */
/*  Chips & pills                                                             */
/* -------------------------------------------------------------------------- */

export function StatusChip({
  children,
  tone = 'steel',
}: {
  children: ReactNode
  tone?: 'steel' | 'warm' | 'fog' | 'tertiary' | 'complete'
}) {
  const tones: Record<string, string> = {
    // Cool — ready / active / on-track
    steel:
      'border-[rgba(129,147,168,0.32)] bg-[rgba(129,147,168,0.14)] text-fog',
    // Bright cool blue-gray — done / confirmed / locked-in
    complete:
      'border-[rgba(168,181,195,0.40)] bg-[rgba(168,181,195,0.16)] text-[#dbe2ec]',
    // Warm sand — action required / urgent / now
    tertiary:
      'border-[rgba(226,193,154,0.34)] bg-[rgba(226,193,154,0.12)] text-tertiary',
    // Muted warm-gray — softer warning, fallback
    warm: 'border-[rgba(155,139,128,0.36)] bg-[rgba(155,139,128,0.18)] text-[#d8c8be]',
    // Neutral — upcoming / unbooked
    fog: 'border-[rgba(141,153,168,0.28)] bg-[rgba(141,153,168,0.08)] text-smoke',
  }
  return (
    <span
      className={`inline-flex items-center gap-1.5 h-7 rounded-full border px-2.5 text-[12px] font-semibold leading-4 ${tones[tone]}`}
    >
      {children}
    </span>
  )
}

export function MetaTag({ children }: { children: ReactNode }) {
  return (
    <span className="text-[12px] font-medium text-smoke">{children}</span>
  )
}

/* -------------------------------------------------------------------------- */
/*  Status dots                                                               */
/* -------------------------------------------------------------------------- */

export function Dot({
  variant,
  className = '',
}: {
  variant: 'mist' | 'steel' | 'smoke' | 'warm' | 'hollow'
  className?: string
}) {
  const map: Record<string, string> = {
    mist: 'bg-mist',
    steel: 'bg-steel-soft',
    smoke: 'bg-smoke/60',
    warm: 'bg-warm-gray',
    hollow: 'border border-smoke bg-transparent',
  }
  return (
    <span
      className={`inline-block h-2 w-2 rounded-full ${map[variant]} ${className}`}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*  Status system — on-brand, replaces generic status dots                    */
/*                                                                            */
/*  The brand sells a *sequenced* readiness plan, so status reads as steps    */
/*  and waypoints, not alert dots. Shapes are rounded-squares ("squircles")   */
/*  that echo the Arrivo app-icon, distinct from round typographic bullets.   */
/* -------------------------------------------------------------------------- */

/* Numbered step marker for sequence lists (briefings). */
export function StepNode({
  n,
  state,
  className = '',
}: {
  n: number
  state: 'ready' | 'upcoming' | 'done'
  className?: string
}) {
  if (state === 'done') {
    return (
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-[9px] bg-steel-soft text-ink ${className}`}
      >
        <Check size={15} weight="bold" />
      </span>
    )
  }
  const tone =
    state === 'ready'
      ? 'bg-mist text-ink'
      : 'border border-border-default bg-white/[0.03] text-smoke'
  return (
    <span
      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-[9px] text-[12px] font-semibold tabular-nums ${tone} ${className}`}
    >
      {String(n).padStart(2, '0')}
    </span>
  )
}

/* Small squircle status pip — for chips and inline state. */
export function Pip({
  tone = 'steel',
  hollow = false,
  size = 9,
  className = '',
}: {
  tone?: 'steel' | 'mist' | 'tertiary' | 'smoke'
  hollow?: boolean
  size?: number
  className?: string
}) {
  const fill: Record<string, string> = {
    steel: 'bg-steel-soft',
    mist: 'bg-mist',
    tertiary: 'bg-tertiary',
    smoke: 'bg-smoke',
  }
  const ring: Record<string, string> = {
    steel: 'border-steel-soft',
    mist: 'border-mist',
    tertiary: 'border-tertiary',
    smoke: 'border-smoke',
  }
  return (
    <span
      aria-hidden
      className={`inline-block shrink-0 rounded-[2.5px] ${
        hollow ? `border ${ring[tone]} bg-transparent` : fill[tone]
      } ${className}`}
      style={{ width: size, height: size }}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*  Cards                                                                     */
/* -------------------------------------------------------------------------- */

export function Card({
  children,
  className = '',
  onClick,
  selected = false,
}: {
  children: ReactNode
  className?: string
  onClick?: () => void
  selected?: boolean
}) {
  const base =
    'border-trans rounded-3xl border p-5 shadow-card text-left w-full no-select'
  const tone = selected
    ? 'bg-slate-2 border-steel-soft'
    : 'bg-slate border-border-default'
  return onClick ? (
    <button onClick={onClick} className={`tappable ${base} ${tone} ${className}`}>
      {children}
    </button>
  ) : (
    <div className={`${base} ${tone} ${className}`}>{children}</div>
  )
}

export function GlassCard({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`glass rounded-3xl p-5 shadow-card ${className}`}>
      {children}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Destination image — photo when available, branded gradient otherwise.     */
/*                                                                            */
/*  Self-healing: if the given `src` is missing or fails to load (a rotted    */
/*  URL, an offline source), it re-fetches a replacement through the photo     */
/*  proxy using `query`/`place`, and only then falls back to the branded      */
/*  gradient. This keeps a broken-image icon from ever showing.               */
/* -------------------------------------------------------------------------- */

export function DestinationImage({
  src,
  alt = '',
  className = '',
  query,
  place,
}: {
  src?: string
  alt?: string
  className?: string
  /* Free-text subject used to re-fetch a photo if `src` is absent or broken. */
  query?: string
  /* Concrete subject (e.g. a city) — improves the keyless fallback lookup. */
  place?: string
}) {
  const [resolved, setResolved] = useState<string | undefined>(src)
  const [prevSrc, setPrevSrc] = useState(src)
  // Whether we've already spent our single recovery attempt for this src.
  const [tried, setTried] = useState(false)

  // Reset during render whenever a fresh src arrives (e.g. the plan finishes
  // resolving). React's prop-change pattern — no effect, no extra commit.
  if (src !== prevSrc) {
    setPrevSrc(src)
    setResolved(src)
    setTried(false)
  }

  // Recover from a broken <img> once. On the second failure (or with no hint
  // to search on), drop to the branded gradient.
  const recover = useCallback(() => {
    const q = query ?? place
    if (tried || !q) {
      setResolved(undefined)
      return
    }
    setTried(true)
    fetchImage(q, place).then((url) => setResolved(url ?? undefined))
  }, [tried, query, place])

  // No source to begin with — source one before showing the gradient. setState
  // happens only in the async callback, so the effect stays non-cascading.
  useEffect(() => {
    if (src || !(query || place)) return
    let cancelled = false
    fetchImage(query ?? place ?? '', place).then((url) => {
      if (!cancelled && url) setResolved(url)
    })
    return () => {
      cancelled = true
    }
  }, [src, query, place])

  if (resolved) {
    return (
      <img
        src={resolved}
        alt={alt}
        aria-hidden={alt ? undefined : true}
        className={className}
        onError={recover}
      />
    )
  }
  return (
    <div
      aria-hidden
      className={className}
      style={{
        background:
          'radial-gradient(120% 100% at 50% 0%, #2A3950 0%, #1B2736 45%, #0E1520 100%)',
      }}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*  Bottom sheet — design system §10.7                                        */
/*                                                                            */
/*  Renders absolutely so it fills the phone frame (not the whole viewport).  */
/*  Closes on backdrop tap and Escape. Used for the trip/profile menus, the   */
/*  transit guide, and any progressive-disclosure surface.                    */
/* -------------------------------------------------------------------------- */

export function Sheet({
  open,
  onClose,
  title,
  eyebrow,
  children,
}: {
  open: boolean
  onClose: () => void
  title?: ReactNode
  eyebrow?: ReactNode
  children: ReactNode
}) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-end no-select">
      <button
        aria-label="Close"
        onClick={onClose}
        className="overlay-fade absolute inset-0 bg-black/55"
      />
      <div
        role="dialog"
        aria-modal="true"
        className="sheet-up shadow-modal relative flex max-h-[88%] flex-col overflow-hidden rounded-t-[28px] border-t border-white/[0.08] bg-midnight"
      >
        {/* Grab handle */}
        <div className="flex shrink-0 justify-center pt-3">
          <span className="h-1 w-9 rounded-full bg-white/15" />
        </div>

        {(title || eyebrow) && (
          <div className="flex shrink-0 items-start justify-between gap-3 px-6 pb-4 pt-4">
            <div className="min-w-0">
              {eyebrow && (
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-smoke">
                  {eyebrow}
                </div>
              )}
              {title && (
                <h2 className="mt-1 font-display text-[22px] font-bold leading-[28px] tracking-[-0.01em] text-mist">
                  {title}
                </h2>
              )}
            </div>
            <button
              aria-label="Close"
              onClick={onClose}
              className="tappable -mr-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.07] text-fog"
            >
              <X size={16} weight="bold" />
            </button>
          </div>
        )}

        <div className="scroll-area min-h-0 flex-1 overflow-y-auto px-6 pb-10">
          {children}
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Progress bar                                                              */
/* -------------------------------------------------------------------------- */

export function Progress({
  value,
  max,
  className = '',
}: {
  value: number
  max: number
  className?: string
}) {
  const pct = Math.round((value / max) * 100)
  return (
    <div
      className={`h-1.5 w-full overflow-hidden rounded-full bg-border-default/70 ${className}`}
    >
      <div
        className="h-full rounded-full bg-steel-soft transition-[width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section heading                                                           */
/* -------------------------------------------------------------------------- */

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-smoke">
      {children}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Onboarding step indicator                                                 */
/* -------------------------------------------------------------------------- */

export function StepBar({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex w-full gap-1.5">
      {Array.from({ length: total }).map((_, i) => {
        const state =
          i < step ? 'bg-steel-soft' : i === step ? 'bg-mist' : 'bg-border-default'
        return (
          <span
            key={i}
            className={`h-[3px] flex-1 rounded-full transition-colors duration-300 ${state}`}
          />
        )
      })}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Phase rail — grouped onboarding progress                                   */
/*                                                                            */
/*  Reads as a journey of named phases rather than an undifferentiated "step   */
/*  n of N". Completed phases fill steel-soft with a check; the current phase  */
/*  fills mist proportionally to its sub-progress; upcoming phases stay quiet. */
/* -------------------------------------------------------------------------- */

export function PhaseRail({
  phases,
  active,
  subProgress = 0,
}: {
  phases: readonly string[]
  active: number
  /** 0..1 progress through the active phase. */
  subProgress?: number
}) {
  return (
    <div className="flex w-full gap-2">
      {phases.map((label, i) => {
        const done = i < active
        const current = i === active
        const fill = done ? 1 : current ? Math.max(0.14, Math.min(1, subProgress)) : 0
        return (
          <div key={label} className="min-w-0 flex-1">
            <div className="h-[3px] overflow-hidden rounded-full bg-border-default">
              <div
                className={`h-full rounded-full transition-[width,background-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  done ? 'bg-steel-soft' : 'bg-mist'
                }`}
                style={{ width: `${fill * 100}%` }}
              />
            </div>
            <div
              className={`mt-2 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${
                current ? 'text-mist' : done ? 'text-fog' : 'text-smoke'
              }`}
            >
              {done && <Check size={10} weight="bold" className="shrink-0 text-steel-soft" />}
              <span className="truncate">{label}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Segmented control — design system §10.2                                    */
/* -------------------------------------------------------------------------- */

export function Segmented<T extends string>({
  options,
  value,
  onChange,
  ariaLabel,
}: {
  options: Array<{ id: T; label: string }>
  value: T
  onChange: (v: T) => void
  ariaLabel?: string
}) {
  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      className="glass-light flex w-full gap-1 rounded-full p-1"
    >
      {options.map((o) => {
        const selected = o.id === value
        return (
          <button
            key={o.id}
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(o.id)}
            className={`tappable border-trans h-11 flex-1 rounded-full border text-[13.5px] font-semibold ${
              selected
                ? 'border-steel-soft bg-slate-2 text-mist shadow-card'
                : 'border-transparent text-fog hover:text-mist'
            }`}
          >
            {o.label}
          </button>
        )
      })}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Month calendar — single-date picker for exact departure dates             */
/* -------------------------------------------------------------------------- */

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
const CAL_MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

function toISO(y: number, m: number, d: number): string {
  return `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
}

export function MonthCalendar({
  value,
  onChange,
}: {
  /** Selected date as ISO yyyy-mm-dd. */
  value?: string
  onChange: (iso: string) => void
}) {
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const selected = value ? parseLocalISO(value) : null

  const [view, setView] = useState(() => {
    const base = selected ?? today
    return { y: base.getFullYear(), m: base.getMonth() }
  })

  const firstDow = new Date(view.y, view.m, 1).getDay()
  const daysInMonth = new Date(view.y, view.m + 1, 0).getDate()
  // Don't let travelers page back before the current month.
  const atFloor = view.y === today.getFullYear() && view.m === today.getMonth()

  const shift = (delta: number) =>
    setView(({ y, m }) => {
      const d = new Date(y, m + delta, 1)
      return { y: d.getFullYear(), m: d.getMonth() }
    })

  return (
    <div className="rounded-3xl border border-border-default bg-slate p-4 shadow-card">
      <div className="flex items-center justify-between px-1">
        <button
          onClick={() => !atFloor && shift(-1)}
          disabled={atFloor}
          aria-label="Previous month"
          className="tappable flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.05] text-fog disabled:opacity-30"
        >
          <CaretLeft size={15} weight="bold" />
        </button>
        <div className="text-[14px] font-semibold text-mist">
          {CAL_MONTHS[view.m]} {view.y}
        </div>
        <button
          onClick={() => shift(1)}
          aria-label="Next month"
          className="tappable flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.05] text-fog"
        >
          <CaretRight size={15} weight="bold" />
        </button>
      </div>

      <div className="mt-3 grid grid-cols-7 gap-1">
        {WEEKDAYS.map((d, i) => (
          <div
            key={i}
            className="flex h-7 items-center justify-center text-[11px] font-semibold uppercase tracking-[0.04em] text-smoke"
          >
            {d}
          </div>
        ))}
        {Array.from({ length: firstDow }).map((_, i) => (
          <div key={`b-${i}`} />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1
          const date = new Date(view.y, view.m, day)
          const past = date < today
          const iso = toISO(view.y, view.m, day)
          const isSelected = value === iso
          const isToday = date.getTime() === today.getTime()
          return (
            <button
              key={day}
              disabled={past}
              onClick={() => onChange(iso)}
              className={`tappable flex h-9 items-center justify-center rounded-xl text-[13.5px] font-medium transition-colors ${
                isSelected
                  ? 'bg-mist font-semibold text-ink'
                  : past
                    ? 'text-smoke/30'
                    : isToday
                      ? 'border border-steel-soft/60 text-mist'
                      : 'text-fog hover:bg-white/[0.06]'
              }`}
            >
              {day}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function parseLocalISO(iso: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso)
  if (!m) return null
  return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]))
}
