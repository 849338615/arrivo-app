import { useCallback, useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

/* Four-point guiding star — echoes the spark at the heart of the Arrivo mark. */
function Sparkle({
  className = '',
  style,
}: {
  className?: string
  style?: CSSProperties
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor" aria-hidden>
      <path d="M12 0c.45 6.4 5.15 11.1 11.55 11.55C17.15 12 12.45 16.7 12 23.1 11.55 16.7 6.85 12 .45 11.55 6.85 11.1 11.55 6.4 12 0Z" />
    </svg>
  )
}

/* -------------------------------------------------------------------------- */
/*  App launch — the brand moment shown on cold boot.                          */
/*                                                                            */
/*  Sequence: the arch traces upward to its peak (movement → arrival), the     */
/*  guiding star ignites, a horizon line draws, then the wordmark and tagline  */
/*  settle. Skippable by tap; respects reduced-motion.                         */
/* -------------------------------------------------------------------------- */

export function Launch({ onDone }: { onDone: () => void }) {
  const [exiting, setExiting] = useState(false)
  const [reduce] = useState(
    () =>
      typeof window !== 'undefined' &&
      Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches),
  )
  const doneRef = useRef(false)

  const finish = useCallback(() => {
    if (doneRef.current) return
    doneRef.current = true
    setExiting(true)
    window.setTimeout(onDone, 460) // let the dissolve play, then hand off
  }, [onDone])

  useEffect(() => {
    const t = window.setTimeout(finish, reduce ? 850 : 2650)
    return () => window.clearTimeout(t)
  }, [finish, reduce])

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={finish}
      aria-label="Arrivo — your whole trip, ready"
      className={`absolute inset-0 z-[60] flex flex-col items-center justify-center overflow-hidden bg-ink no-select ${
        exiting ? 'launch-out' : ''
      }`}
    >
      {/* Ambient breathing glow */}
      <div
        aria-hidden
        className="launch-glow pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 44%, rgba(129,147,168,0.18) 0%, transparent 62%)',
        }}
      />

      {/* Ambient sparkles */}
      <Sparkle
        className="launch-twinkle pointer-events-none absolute text-steel-soft/60"
        style={{ top: '25%', left: '21%', width: 12, height: 12, animationDelay: '300ms' }}
      />
      <Sparkle
        className="launch-twinkle pointer-events-none absolute text-steel-soft/50"
        style={{ top: '31%', right: '19%', width: 9, height: 9, animationDelay: '1200ms' }}
      />
      <Sparkle
        className="launch-twinkle pointer-events-none absolute text-mist/40"
        style={{ bottom: '29%', left: '29%', width: 7, height: 7, animationDelay: '2000ms' }}
      />

      {/* Mark + star bloom */}
      <div className="relative flex flex-col items-center">
        <div className="relative h-[128px] w-[128px]">
          <span
            aria-hidden
            className="launch-bloom pointer-events-none absolute left-1/2 top-1/2 h-[118px] w-[118px] rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(241,244,247,0.55) 0%, rgba(129,147,168,0.26) 36%, transparent 70%)',
            }}
          />
          <img
            src="/arrivo-mark.png"
            alt=""
            aria-hidden
            width={128}
            height={128}
            draggable={false}
            className="launch-mark absolute inset-0 h-full w-full object-contain"
          />
        </div>

        {/* Horizon line */}
        <span
          aria-hidden
          className="launch-line mt-3 h-px w-44"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(241,244,247,0.5), transparent)',
          }}
        />

        {/* Wordmark */}
        <span className="launch-word mt-5 font-display text-[42px] font-semibold leading-none text-mist">
          Arrivo
        </span>

        {/* Tagline */}
        <span className="launch-tag mt-3 text-[11px] font-medium uppercase tracking-[0.24em] text-fog/80">
          Your whole trip, ready
        </span>
      </div>

      {/* Slim launch progress */}
      <div className="absolute bottom-[58px] h-[3px] w-44 overflow-hidden rounded-full bg-white/[0.08]">
        <span aria-hidden className="launch-progress block h-full w-full bg-steel-soft" />
      </div>
    </div>
  )
}
