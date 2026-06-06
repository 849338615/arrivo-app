/* localStorage persistence: cache generated plans (offline + instant reload)
   and remember the active session so a reload lands back on the dashboard. */
import type { TripAnswers, TripPlan } from './plan'

const PLAN_PREFIX = 'arrivo:plan:'
const SESSION_KEY = 'arrivo:session'

export type Session = {
  countryCode: string
  answers: TripAnswers
  completed: boolean
}

function ls(): Storage | null {
  try {
    return typeof window !== 'undefined' ? window.localStorage : null
  } catch {
    return null
  }
}

export function savePlan(plan: TripPlan): void {
  const store = ls()
  if (!store) return
  try {
    store.setItem(PLAN_PREFIX + plan.country.code, JSON.stringify(plan))
  } catch {
    /* quota / serialization — non-fatal */
  }
}

export function loadPlan(code: string): TripPlan | null {
  const store = ls()
  if (!store || !code) return null
  try {
    const raw = store.getItem(PLAN_PREFIX + code.toUpperCase())
    return raw ? (JSON.parse(raw) as TripPlan) : null
  } catch {
    return null
  }
}

export function saveSession(session: Session): void {
  const store = ls()
  if (!store) return
  try {
    store.setItem(SESSION_KEY, JSON.stringify(session))
  } catch {
    /* ignore */
  }
}

export function loadSession(): Session | null {
  const store = ls()
  if (!store) return null
  try {
    const raw = store.getItem(SESSION_KEY)
    return raw ? (JSON.parse(raw) as Session) : null
  } catch {
    return null
  }
}

export function clearSession(): void {
  const store = ls()
  if (!store) return
  try {
    store.removeItem(SESSION_KEY)
  } catch {
    /* ignore */
  }
}
