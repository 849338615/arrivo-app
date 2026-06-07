import { ArrowRight, Clock, WifiSlash } from '@phosphor-icons/react'
import { usePlan } from '../lib/PlanContext'
import { totalSteps } from '../lib/plan'
import { StepNode } from '../components'

type Tone = 'now' | 'soon' | 'final'

const BUCKET_META: Array<{
  id: 'now' | 'soon' | 'final'
  label: string
  sublabel: string
  tone: Tone
}> = [
  { id: 'now', label: 'Now', sublabel: 'Start this week', tone: 'now' },
  { id: 'soon', label: 'Within 30 days', sublabel: 'Book and prepare', tone: 'soon' },
  {
    id: 'final',
    label: 'Pre-departure & landing',
    sublabel: '',
    tone: 'final',
  },
]

export function BriefingsList({
  onOpenTask,
  doneTasks,
}: {
  onOpenTask: (id: string) => void
  doneTasks: Set<string>
}) {
  const plan = usePlan()
  const totalCount = totalSteps(plan)
  const readyCount = plan.briefingBuckets.now.length
  const doneCount = doneTasks.size

  const buckets = BUCKET_META.map((b) => ({
    ...b,
    taskIds: plan.briefingBuckets[b.id] ?? [],
  }))

  return (
    <div className="slide-in flex h-full w-full flex-col bg-ink no-select">
      <div className="px-6 pt-[148px]">
        <PlanMetrics total={totalCount} ready={readyCount} done={doneCount} />
        <h1 className="mt-4 font-display text-[36px] font-bold leading-[44px] tracking-[-0.01em] text-mist">
          Briefings
        </h1>
        <p className="mt-2 text-[15px] leading-[22px] text-fog">
          Your sequenced roadmap, from now to landing day.
        </p>
      </div>

      <div className="scroll-area mt-7 flex-1 overflow-y-auto px-6 pb-32">
        <div className="relative pl-9">
          <div className="pointer-events-none absolute left-[12px] top-2 bottom-4 w-px bg-border-default" />

          <div className="space-y-10">
            {buckets.map((b, i) => (
              <BucketBlock
                key={b.id}
                startIndex={buckets
                  .slice(0, i)
                  .reduce((s, x) => s + x.taskIds.length, 0)}
                label={b.label}
                sublabel={b.sublabel}
                tone={b.tone}
                taskIds={b.taskIds}
                onOpenTask={onOpenTask}
                doneTasks={doneTasks}
                delay={i * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* Plan metrics — a compact KPI cluster with value/label hierarchy. The number
   carries the weight; the label recedes. Tone encodes meaning: tertiary = ready
   to start now (design-system accent), steel-soft = completed. "Done" stays
   muted at zero and lights up cool as progress is earned. */
function PlanMetrics({
  total,
  ready,
  done,
}: {
  total: number
  ready: number
  done: number
}) {
  return (
    <div className="flex items-stretch gap-3.5">
      <Metric value={total} label="Steps" numClass="text-mist" />
      <MetricRule />
      <Metric value={ready} label="Ready" numClass="text-tertiary" />
      <MetricRule />
      <Metric
        value={done}
        label="Done"
        numClass={done > 0 ? 'text-steel-soft' : 'text-smoke'}
      />
    </div>
  )
}

function Metric({
  value,
  label,
  numClass,
}: {
  value: number
  label: string
  numClass: string
}) {
  return (
    <div className="flex flex-col">
      <span
        className={`font-display text-[19px] font-bold leading-none tabular-nums ${numClass}`}
      >
        {value}
      </span>
      <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-smoke">
        {label}
      </span>
    </div>
  )
}

function MetricRule() {
  return <span aria-hidden className="w-px self-stretch bg-border-default/70" />
}

function BucketBlock({
  startIndex,
  label,
  sublabel,
  tone,
  taskIds,
  onOpenTask,
  doneTasks,
  delay,
}: {
  startIndex: number
  label: string
  sublabel: string
  tone: Tone
  taskIds: string[]
  onOpenTask: (id: string) => void
  doneTasks: Set<string>
  delay: number
}) {
  const isNow = tone === 'now'
  return (
    <section className="fade-up relative" style={{ animationDelay: `${delay}ms` }}>
      {/* Timeline waypoint — squircle marker, no alert pulse */}
      {isNow ? (
        <span
          className="absolute -left-[30px] top-[5px] h-3.5 w-3.5 rounded-[5px] bg-tertiary"
          style={{ boxShadow: '0 0 0 4px #0E1520' }}
        />
      ) : (
        <span
          className="absolute -left-[29px] top-[8px] h-3 w-3 rounded-[4px] border border-border-default bg-ink"
          style={{ boxShadow: '0 0 0 4px #0E1520' }}
        />
      )}

      {/* Header */}
      <div className="mb-4">
        <h2
          className={
            isNow
              ? 'font-display text-[22px] font-semibold tracking-[-0.005em] text-mist'
              : 'font-display text-[18px] font-semibold tracking-[-0.005em] text-fog'
          }
        >
          {label}
          <span className="ml-2 text-[12px] font-medium uppercase tracking-[0.14em] text-smoke">
            {taskIds.length} {taskIds.length === 1 ? 'step' : 'steps'}
          </span>
        </h2>
        {sublabel && <p className="mt-0.5 text-[12.5px] text-smoke">{sublabel}</p>}
      </div>

      <div className="space-y-2">
        {taskIds.map((id, i) => (
          <TaskRow
            key={id}
            taskId={id}
            index={startIndex + i + 1}
            tone={tone}
            isDone={doneTasks.has(id)}
            onOpen={() => onOpenTask(id)}
            delay={delay + 60 + i * 30}
          />
        ))}
      </div>
    </section>
  )
}

function TaskRow({
  taskId,
  index,
  tone,
  isDone,
  onOpen,
  delay,
}: {
  taskId: string
  index: number
  tone: Tone
  isDone: boolean
  onOpen: () => void
  delay: number
}) {
  const plan = usePlan()
  const task = plan.tasks[taskId]
  if (!task) return null
  const isLanding = task.category === 'Landing Day Hub'

  return (
    <button
      onClick={onOpen}
      className={
        tone === 'now'
          ? 'tappable border-trans fade-up flex w-full items-start gap-3 rounded-2xl border border-steel-soft/60 bg-slate-2 p-4 text-left shadow-card hover:border-steel-soft active:scale-[0.99]'
          : 'tappable border-trans fade-up flex w-full items-start gap-3 rounded-2xl border border-border-default bg-slate p-4 text-left hover:border-steel-soft/60 active:scale-[0.99]'
      }
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Sequence step marker */}
      <StepNode
        n={index}
        state={isDone ? 'done' : tone === 'now' ? 'ready' : 'upcoming'}
        className="mt-0.5"
      />

      {/* Body */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-smoke">
            {task.category}
          </span>
          {isLanding && (
            <span className="inline-flex items-center gap-1 rounded-full bg-white/[0.04] px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-fog">
              <WifiSlash size={9} />
              Offline
            </span>
          )}
          {isDone && (
            <span className="inline-flex items-center gap-1 rounded-full bg-mist/[0.10] px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-mist">
              Done
            </span>
          )}
        </div>
        <h3
          className={
            isDone
              ? 'mt-1 text-[14.5px] font-medium leading-[19px] text-fog line-through'
              : tone === 'now'
              ? 'mt-1 text-[15.5px] font-semibold leading-[20px] tracking-[-0.005em] text-mist'
              : 'mt-1 text-[14.5px] font-medium leading-[19px] text-mist/95'
          }
        >
          {task.title}
        </h3>
        <div className="mt-1.5 flex items-center gap-3 text-[12px] text-smoke">
          <span className="inline-flex items-center gap-1">
            <Clock size={12} />
            {compactDuration(task.duration)}
          </span>
        </div>
      </div>

      {/* Trailing arrow */}
      <ArrowRight
        size={16}
        className={tone === 'now' ? 'mt-1 shrink-0 text-fog' : 'mt-1 shrink-0 text-smoke'}
      />
    </button>
  )
}

function compactDuration(d: string): string {
  return d.replace(/\s+to start$/i, '').replace(/\s+to order$/i, '').trim()
}
