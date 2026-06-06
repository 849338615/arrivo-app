/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { TripAnswers, TripPlan } from './plan'
import { CHINA_PLAN } from '../data'
import { CURATED_PLANS } from './curatedPlans'
import { factsFor } from './facts'
import { buildTemplatedPlan } from './templatePlan'
import { clearSession, loadPlan, loadSession, savePlan, saveSession } from './storage'

export type PlanStatus = 'idle' | 'loading' | 'ready' | 'error'

type PlanContextValue = {
  plan: TripPlan | null
  status: PlanStatus
  /** Generate (or regenerate) the plan for the given answers. */
  generate: (answers: TripAnswers) => Promise<void>
  reset: () => void
}

const PlanContext = createContext<PlanContextValue | null>(null)

/* Rehydrate the last active plan synchronously so an offline reload lands
   straight on the dashboard / Landing Hub. */
function hydrate(): TripPlan | null {
  const session = loadSession()
  return session?.completed ? loadPlan(session.countryCode) : null
}

export function PlanProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<TripPlan | null>(hydrate)
  const [status, setStatus] = useState<PlanStatus>(plan ? 'ready' : 'idle')

  // Build the plan entirely from bundled offline content — instant, no
  // network, no API key. Curated countries get a rich hand-tuned plan; any
  // other country gets a sensible plan templated from bundled facts.
  const generate = useCallback(async (answers: TripAnswers) => {
    setStatus('loading')
    const code = (answers.countryCode || '').toUpperCase()
    const next: TripPlan =
      code === 'CN'
        ? CHINA_PLAN
        : CURATED_PLANS[code] ??
          buildTemplatedPlan(factsFor(answers.countryCode, answers.countryName), answers, {})
    setPlan(next)
    savePlan(next)
    saveSession({ countryCode: next.country.code, answers, completed: true })
    setStatus('ready')
  }, [])

  const reset = useCallback(() => {
    setPlan(null)
    setStatus('idle')
    clearSession()
  }, [])

  const value = useMemo(
    () => ({ plan, status, generate, reset }),
    [plan, status, generate, reset],
  )

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>
}

/** The active plan. Falls back to the China sample so screens always render
    (used by export/demo routes and before the first generation). */
export function usePlan(): TripPlan {
  const ctx = useContext(PlanContext)
  return ctx?.plan ?? CHINA_PLAN
}

/** Generation status + controls. */
export function usePlanState(): PlanContextValue {
  const ctx = useContext(PlanContext)
  if (!ctx) throw new Error('usePlanState must be used within <PlanProvider>')
  return ctx
}

/** True when a cached plan + completed session exist (for initial routing). */
export function hasCachedSession(): boolean {
  const session = loadSession()
  return Boolean(session?.completed && loadPlan(session.countryCode))
}
