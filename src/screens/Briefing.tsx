import { useState } from 'react'
import { ArrowLeft, BookmarkSimple, CheckCircle, Clock, Lightning } from '@phosphor-icons/react'
import { usePlan } from '../lib/PlanContext'
import { IconButton, StatusChip, Pip } from '../components'

export function Briefing({
  taskId,
  isDone = false,
  onBack,
  onMarkDone,
}: {
  taskId: string
  isDone?: boolean
  onBack: () => void
  onMarkDone: () => void
}) {
  const plan = usePlan()
  const task = plan.tasks[taskId]
  const [saved, setSaved] = useState(false)
  if (!task) return null
  return (
    <div className="slide-in flex h-full w-full flex-col bg-ink no-select">
      {/* Header */}
      <div className="px-6 pt-[80px]">
        <div className="flex items-center justify-between">
          <IconButton onClick={onBack} ariaLabel="Back">
            <ArrowLeft size={18} />
          </IconButton>
          <button
            onClick={() => setSaved((s) => !s)}
            aria-pressed={saved}
            aria-label={saved ? 'Saved for later' : 'Save for later'}
            className={`tappable inline-flex h-11 items-center gap-2 rounded-full px-3.5 text-[12.5px] font-semibold ${
              saved
                ? 'bg-mist/[0.12] text-mist'
                : 'bg-white/[0.07] text-fog'
            }`}
          >
            <BookmarkSimple size={17} weight={saved ? 'fill' : 'regular'} />
            {saved ? 'Saved' : 'Save'}
          </button>
        </div>

        <div className="mt-6 flex items-center gap-2">
          <StatusChip tone={isDone ? 'complete' : task.status === 'ready' ? 'steel' : 'fog'}>
            {isDone ? (
              <CheckCircle size={12} weight="fill" />
            ) : (
              <Pip
                tone={task.status === 'ready' ? 'steel' : 'smoke'}
                hollow={task.status !== 'ready'}
              />
            )}
            {isDone ? 'Done' : task.status === 'ready' ? 'Ready now' : 'Upcoming'}
          </StatusChip>
          <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-smoke">
            {task.category}
          </span>
        </div>

        <h1 className="mt-3 font-display text-[28px] font-bold leading-[34px] tracking-[-0.01em] text-mist">
          {task.title}
        </h1>

        <div className="mt-3 flex items-center gap-4 text-[13px] text-fog">
          <span className="inline-flex items-center gap-1.5">
            <Clock size={15} className="text-smoke" />
            {task.duration}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Lightning size={15} className="text-smoke" />
            {task.steps.length} quick step{task.steps.length === 1 ? '' : 's'}
          </span>
        </div>
      </div>

      <div className="scroll-area mt-6 flex-1 overflow-y-auto px-6 pb-44">
        <Section title="Why this matters" delay={0}>
          <p className="text-[15px] leading-[22px] text-fog">{task.why}</p>
        </Section>

        <Section title="What to do" delay={80}>
          <ol className="space-y-3">
            {task.steps.map((s, i) => (
              <li
                key={s}
                className="flex items-start gap-3.5 rounded-2xl border border-border-default bg-slate p-4"
              >
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-[9px] border border-steel-soft bg-slate-2 text-[13px] font-semibold tabular-nums text-mist">
                  {i + 1}
                </div>
                <span className="text-[14.5px] leading-[20px] text-mist">
                  {s}
                </span>
              </li>
            ))}
          </ol>
        </Section>

        {task.needs && task.needs.length > 0 && (
          <Section title="What you’ll need" delay={160}>
            <ul className="grid grid-cols-2 gap-2.5">
              {task.needs.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-2 rounded-xl border border-border-default bg-slate px-3 py-2.5 text-[13px] text-fog"
                >
                  <CheckCircle size={16} className="text-steel-soft" />
                  {s}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {task.headsUp && (
          <Section title="Heads up" delay={220}>
            <div className="rounded-2xl border border-border-default bg-slate p-4 text-[13.5px] leading-[20px] text-fog">
              {task.headsUp}
            </div>
          </Section>
        )}
      </div>

      {/* Footer */}
      <div className="glass-strong absolute inset-x-0 bottom-[88px] px-6 py-3.5 shadow-nav">
        <button
          onClick={isDone ? onBack : onMarkDone}
          className={`tappable inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-full text-[14px] font-semibold shadow-card ${
            isDone
              ? 'border border-mist/30 bg-mist/[0.12] text-mist'
              : 'bg-mist text-ink'
          }`}
        >
          <CheckCircle size={17} weight="fill" />
          {isDone ? 'Done — back to plan' : 'Mark as done'}
        </button>
      </div>
    </div>
  )
}

function Section({
  title,
  children,
  delay,
}: {
  title: string
  children: React.ReactNode
  delay: number
}) {
  return (
    <section
      className="fade-up mt-6 first:mt-0"
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-smoke">
        {title}
      </h3>
      <div className="mt-3">{children}</div>
    </section>
  )
}
