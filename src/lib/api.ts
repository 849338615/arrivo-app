/* Client helper for destination photography.

   Resolution order, so a real photo shows with zero configuration on any host:
     1. Same-origin `/api/image` proxy — preferred. Keeps an optional Unsplash
        key server-side and benefits from same-origin caching.
     2. Wikipedia, fetched directly in the browser — keyless CORS fallback used
        when the proxy is unreachable or empty (static build, no serverless
        function, cold start). See lib/wikiImage.ts.
   Returns null only when both miss, in which case the UI shows the branded
   gradient. Plan content itself is fully bundled offline. */
import { wikipediaImage } from './wikiImage'

/* `place` is an optional concrete subject (e.g. a city name) that improves the
   keyless lookup; `query` is rich free-text that helps the Unsplash search. */
export async function fetchImage(
  query: string,
  place?: string,
): Promise<string | null> {
  const viaProxy = await fetchViaProxy(query, place)
  if (viaProxy) return viaProxy
  // Keyless browser fallback. `place` (a concrete subject like a city) makes a
  // far better Wikipedia title than the free-text query.
  return wikipediaImage(place || query)
}

async function fetchViaProxy(
  query: string,
  place?: string,
): Promise<string | null> {
  try {
    const params = new URLSearchParams({ q: query })
    if (place) params.set('place', place)
    const res = await fetch('/api/image?' + params.toString())
    // A static host with no function answers with the SPA's index.html (200,
    // text/html); treat anything that isn't JSON as "proxy unavailable".
    if (!res.ok) return null
    if (!res.headers.get('content-type')?.includes('application/json')) return null
    const data = (await res.json()) as { url?: string | null }
    return data.url ?? null
  } catch {
    return null
  }
}
