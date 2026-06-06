import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { PhoneFrame } from './PhoneFrame'
import { BottomNav } from './BottomNav'
import { TopAppBar } from './TopAppBar'
import { Loading, OnboardingHost, type Answers } from './screens/Onboarding'
import { Launch } from './screens/Launch'
import { DEFAULT_ANSWERS } from './lib/plan'
import { Dashboard } from './screens/Dashboard'
import { Briefing } from './screens/Briefing'
import { BriefingsList } from './screens/Briefings'
import { Itinerary } from './screens/Itinerary'
import { Predeparture } from './screens/Predeparture'
import { Landing } from './screens/Landing'
import type { ScreenId, Tab } from './data'
import { hasCachedSession, usePlanState } from './lib/PlanContext'
import { loadSession } from './lib/storage'

const ONBOARDING: ScreenId[] = [
  'splash',
  'country',
  'date',
  'duration',
  'travelers',
  'tripType',
  'budget',
  'preparedness',
  'loading',
]

type ExportRoute = {
  screen: ScreenId
  tab: Tab
  taskId: string | null
}

function readExportRoute(): ExportRoute | null {
  if (typeof window === 'undefined') return null
  const m = window.location.hash.match(/^#\/export\/([^/?]+)(?:\/([^/?]+))?/)
  if (!m) return null
  const key = m[1]
  const param = m[2] ?? null
  switch (key) {
    case 'splash':
    case 'country':
    case 'date':
    case 'duration':
    case 'travelers':
    case 'tripType':
    case 'budget':
    case 'preparedness':
    case 'loading':
      return { screen: key, tab: 'plan', taskId: null }
    case 'dashboard':
      return { screen: 'dashboard', tab: 'plan', taskId: null }
    case 'briefings':
      return { screen: 'dashboard', tab: 'briefings', taskId: null }
    case 'briefing':
      return { screen: 'briefing', tab: 'plan', taskId: param }
    case 'itinerary':
      return { screen: 'itinerary', tab: 'itinerary', taskId: null }
    case 'landing':
      return { screen: 'landing', tab: 'landing', taskId: null }
    case 'predeparture':
      return { screen: 'predeparture', tab: 'plan', taskId: null }
    default:
      return null
  }
}

export function App() {
  const exportRoute = readExportRoute()
  const isExport = exportRoute !== null
  const planState = usePlanState()

  // Brand launch animation on cold boot (skipped for export/demo routes).
  const [launching, setLaunching] = useState(!isExport)

  // Resume an in-progress trip from cache so a reload lands on the dashboard.
  const resumed = !isExport && hasCachedSession()

  const [screen, setScreen] = useState<ScreenId>(
    exportRoute?.screen ?? (resumed ? 'dashboard' : 'splash'),
  )
  const [tab, setTab] = useState<Tab>(exportRoute?.tab ?? 'plan')
  const [answers, setAnswers] = useState<Answers>(
    () => loadSession()?.answers ?? DEFAULT_ANSWERS,
  )
  const [activeTaskId, setActiveTaskId] = useState<string | null>(
    exportRoute?.taskId ?? null,
  )

  // Cross-screen completion state — links briefing "Mark done" with the
  // matching pre-departure checklist row in both directions.
  const [doneTasks, setDoneTasks] = useState<Set<string>>(new Set())
  const [donePredep, setDonePredep] = useState<Set<string>>(new Set())

  // Build briefing ↔ pre-departure links from the *active* plan.
  const predepGroups = planState.plan?.predeparture
  const { taskToPredep, predepToTask } = useMemo(() => {
    const t2p: Record<string, string[]> = {}
    const p2t: Record<string, string> = {}
    ;(predepGroups ?? []).forEach((g) =>
      g.items.forEach((it) => {
        if (it.linkedTaskId) {
          ;(t2p[it.linkedTaskId] ??= []).push(it.id)
          p2t[it.id] = it.linkedTaskId
        }
      }),
    )
    return { taskToPredep: t2p, predepToTask: p2t }
  }, [predepGroups])

  const isOnboarding = ONBOARDING.includes(screen)

  // Kick off real plan generation when we reach the loading screen.
  const genSig = useRef<string | null>(null)
  useEffect(() => {
    if (screen !== 'loading' || isExport) return
    const sig = JSON.stringify(answers)
    if (genSig.current === sig) return
    genSig.current = sig
    void planState.generate(answers)
  }, [screen, isExport, answers, planState])

  const openTask = useCallback((id: string) => {
    setActiveTaskId(id)
    setScreen('briefing')
  }, [])

  const markTaskDone = useCallback(
    (taskId: string) => {
      setDoneTasks((prev) => {
        const n = new Set(prev)
        n.add(taskId)
        return n
      })
      const linked = taskToPredep[taskId]
      if (linked && linked.length > 0) {
        setDonePredep((prev) => {
          const n = new Set(prev)
          linked.forEach((id) => n.add(id))
          return n
        })
      }
    },
    [taskToPredep],
  )

  const togglePredep = useCallback(
    (predepId: string) => {
      let nextChecked = false
      setDonePredep((prev) => {
        const n = new Set(prev)
        if (n.has(predepId)) {
          n.delete(predepId)
          nextChecked = false
        } else {
          n.add(predepId)
          nextChecked = true
        }
        return n
      })
      const linkedTaskId = predepToTask[predepId]
      if (linkedTaskId) {
        setDoneTasks((prev) => {
          const n = new Set(prev)
          if (nextChecked) n.add(linkedTaskId)
          else n.delete(linkedTaskId)
          return n
        })
      }
    },
    [predepToTask],
  )

  // Center brand mark → full reset: wipe the generated plan, answers and
  // progress, then return to the splash screen to start a brand-new trip.
  const goHome = useCallback(() => {
    planState.reset()
    setAnswers(DEFAULT_ANSWERS)
    setDoneTasks(new Set())
    setDonePredep(new Set())
    setActiveTaskId(null)
    genSig.current = null
    setScreen('splash')
    setTab('plan')
  }, [planState])

  const goTab = useCallback((t: Tab) => {
    setTab(t)
    if (t === 'plan') setScreen('dashboard')
    else if (t === 'briefings') setScreen('dashboard') // briefings rendered as overlay below
    else if (t === 'itinerary') setScreen('itinerary')
    else if (t === 'landing') setScreen('landing')
  }, [])

  return (
    <PhoneFrame>
      <div className="relative h-full w-full bg-ink">
        {/* Brand launch — overlays everything on first boot, then dissolves */}
        {launching && <Launch onDone={() => setLaunching(false)} />}

        {/* Onboarding stack */}
        {isOnboarding && screen !== 'loading' && (
          <OnboardingHost
            screen={screen}
            go={(s) => setScreen(s)}
            answers={answers}
            setAnswers={setAnswers}
            onSkip={() => {
              setScreen('dashboard')
              setTab('plan')
            }}
          />
        )}
        {screen === 'loading' && (
          <Loading
            ready={isExport || planState.status !== 'loading'}
            onDone={() => {
              if (isExport) return
              setScreen('dashboard')
              setTab('plan')
            }}
          />
        )}

        {/* Post-onboarding tabs */}
        {!isOnboarding && (
          <div className="relative h-full w-full">
            {/* Global top bar — visible on tab screens, hidden on detail overlays */}
            {screen !== 'briefing' && screen !== 'predeparture' && (
              <TopAppBar onHome={goHome} answers={answers} />
            )}

            {tab === 'plan' && screen === 'dashboard' && (
              <Dashboard
                answers={answers}
                doneTasks={doneTasks}
                onOpenTask={openTask}
                onOpenLanding={() => {
                  setTab('landing')
                  setScreen('landing')
                }}
                onOpenPredeparture={() => setScreen('predeparture')}
              />
            )}
            {tab === 'briefings' && screen === 'dashboard' && (
              <BriefingsList onOpenTask={openTask} doneTasks={doneTasks} />
            )}
            {tab === 'itinerary' && screen === 'itinerary' && (
              <Itinerary
                onBack={() => {
                  setTab('plan')
                  setScreen('dashboard')
                }}
              />
            )}
            {tab === 'landing' && screen === 'landing' && (
              <Landing
                onBack={() => {
                  setTab('plan')
                  setScreen('dashboard')
                }}
              />
            )}

            {/* Detail screens overlay */}
            {screen === 'briefing' && activeTaskId && (
              <Briefing
                taskId={activeTaskId}
                isDone={doneTasks.has(activeTaskId)}
                onBack={() => {
                  setScreen('dashboard')
                }}
                onMarkDone={() => {
                  markTaskDone(activeTaskId)
                  setScreen('dashboard')
                }}
              />
            )}
            {screen === 'predeparture' && (
              <Predeparture
                done={donePredep}
                onToggle={togglePredep}
                onBack={() => {
                  setScreen('dashboard')
                  setTab('plan')
                }}
              />
            )}

            {/* Bottom nav — always visible after onboarding */}
            <BottomNav active={tab} onChange={goTab} />
          </div>
        )}
      </div>
    </PhoneFrame>
  )
}
