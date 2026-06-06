import { ArrowLeft, CheckCircle, MoonStars } from '@phosphor-icons/react'
import { usePlan } from '../lib/PlanContext'
import { IconButton, Progress } from '../components'

export function Predeparture({
  done,
  onToggle,
  onBack,
}: {
  done: Set<string>
  onToggle: (id: string) => void
  onBack: () => void
}) {
  const plan = usePlan()
  const groups = plan.predeparture
  const all = groups.flatMap((g) => g.items)
  const total = all.length

  return (
    <div className="slide-in flex h-full w-full flex-col bg-ink no-select">
      <div className="px-6 pt-[80px]">
        <div className="flex items-center justify-between">
          <IconButton onClick={onBack} ariaLabel="Back">
            <ArrowLeft size={18} />
          </IconButton>
          <div className="flex items-center gap-2 rounded-full border border-border-default bg-white/[0.04] px-3 py-1 text-[12px] font-semibold text-fog">
            <MoonStars size={14} />
            Tonight
          </div>
          <div className="h-11 w-11" />
        </div>

        <h1 className="mt-5 font-display text-[28px] font-bold leading-[34px] tracking-[-0.01em] text-mist">
          Final pre-departure
          <br /> checklist.
        </h1>
        <p className="mt-2 text-[14px] leading-[20px] text-fog">
          Quiet last sweep so the morning is just a cab and a coffee.
        </p>

        <div className="mt-5 rounded-2xl border border-border-default bg-slate p-4 shadow-card">
          <div className="flex items-baseline justify-between">
            <div className="text-[13px] font-semibold text-mist">
              {done.size} of {total} ready
            </div>
            <div className="text-[12px] text-smoke">
              {total ? Math.round((done.size / total) * 100) : 0}%
            </div>
          </div>
          <Progress value={done.size} max={total} className="mt-3" />
        </div>
      </div>

      <div className="scroll-area mt-6 flex-1 overflow-y-auto px-6 pb-32">
        <div className="space-y-6">
          {groups.map((group, gi) => (
            <section
              key={group.group}
              className="fade-up"
              style={{ animationDelay: `${gi * 60}ms` }}
            >
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-smoke">
                {group.group}
              </h3>
              <ul className="mt-3 overflow-hidden rounded-2xl border border-border-default bg-slate shadow-card">
                {group.items.map((it, idx) => {
                  const isDone = done.has(it.id)
                  return (
                    <li
                      key={it.id}
                      className={`${
                        idx !== group.items.length - 1
                          ? 'border-b border-white/[0.06]'
                          : ''
                      }`}
                    >
                      <button
                        onClick={() => onToggle(it.id)}
                        className="tappable flex w-full items-center gap-4 px-4 py-3.5 text-left"
                      >
                        <div
                          className={`flex h-7 w-7 items-center justify-center rounded-full border transition-colors ${
                            isDone
                              ? 'border-mist bg-mist text-ink'
                              : 'border-border-default bg-transparent'
                          }`}
                        >
                          {isDone && <CheckCircle size={18} weight="fill" />}
                        </div>
                        <div className="flex-1">
                          <div
                            className={`text-[15px] font-medium ${
                              isDone ? 'text-fog line-through' : 'text-mist'
                            }`}
                          >
                            {it.label}
                          </div>
                          {it.sub && (
                            <div className="mt-0.5 text-[12px] text-smoke">
                              {it.sub}
                            </div>
                          )}
                          {it.linkedTaskId && (
                            <div className="mt-0.5 inline-flex items-center gap-1.5 text-[11px] text-smoke">
                              <span className="h-1 w-1 rounded-full bg-steel-soft/70" />
                              Linked to briefing
                            </div>
                          )}
                        </div>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
