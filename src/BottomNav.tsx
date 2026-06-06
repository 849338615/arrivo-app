import {
  House,
  ListChecks,
  MapTrifold,
  PaperPlaneTilt,
  type Icon as PIcon,
} from '@phosphor-icons/react'
import type { Tab } from './data'

const TABS: Array<{ id: Tab; label: string; icon: PIcon }> = [
  { id: 'plan', label: 'Plan', icon: House },
  { id: 'briefings', label: 'Briefings', icon: ListChecks },
  { id: 'itinerary', label: 'Itinerary', icon: MapTrifold },
  { id: 'landing', label: 'Landing', icon: PaperPlaneTilt },
]

export function BottomNav({
  active,
  onChange,
}: {
  active: Tab
  onChange: (t: Tab) => void
}) {
  return (
    // Full-width tray that only catches taps on the dock itself, so the empty
    // space beside the floating pill stays transparent to the content behind.
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center px-4"
      style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}
    >
      <nav
        aria-label="Primary"
        className="nav-dock pointer-events-auto flex items-center gap-1 rounded-full p-1.5"
      >
        {TABS.map((t) => {
          const Icon = t.icon
          const isActive = t.id === active
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => onChange(t.id)}
              aria-label={t.label}
              aria-current={isActive ? 'page' : undefined}
              className="tappable relative isolate flex items-center rounded-full px-3 py-2.5 outline-none focus-visible:ring-2 focus-visible:ring-mist/60"
            >
              {/* Lifted frosted chip — the "hovered layer" for the active tab. */}
              <span
                aria-hidden
                className={`nav-chip absolute inset-0 -z-10 rounded-full transition-[opacity,transform] duration-300 ease-[var(--ease-out-expo)] ${
                  isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                }`}
              />
              <Icon
                size={22}
                weight={isActive ? 'fill' : 'regular'}
                className={`shrink-0 transition-colors duration-300 ease-[var(--ease-out-expo)] ${
                  isActive ? 'text-mist' : 'text-smoke'
                }`}
              />
              {/* Label reveal: the grid track grows 0fr→1fr so the dock width
                  redistributes from the old tab to the new one, reading as the
                  pill flowing across. overflow-hidden clips the label while it
                  collapses; the inner span fades + slides in just behind. */}
              <span
                className="grid transition-[grid-template-columns] duration-[420ms] ease-[var(--ease-out-expo)]"
                style={{ gridTemplateColumns: isActive ? '1fr' : '0fr' }}
              >
                <span className="overflow-hidden">
                  <span
                    className={`block whitespace-nowrap pl-2 pr-0.5 text-[13px] font-semibold leading-none tracking-tight text-mist transition-[opacity,transform] duration-300 ease-[var(--ease-out-expo)] ${
                      isActive
                        ? 'translate-x-0 opacity-100 delay-75'
                        : '-translate-x-1 opacity-0'
                    }`}
                  >
                    {t.label}
                  </span>
                </span>
              </span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}
