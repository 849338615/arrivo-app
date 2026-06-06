/* Server-side destination photography.

   Resolves a hero-sized, cropped image URL for a place. Two sources, tried in
   order so the app shows real photography even with zero configuration:

     1. Unsplash search — best quality, used when UNSPLASH_ACCESS_KEY is set.
     2. Wikimedia (Wikipedia lead image) — keyless fallback, always available.

   Returns null only when nothing usable is found, in which case the UI falls
   back to a branded gradient. Keeps any access key off the client. */

/* `query` is rich free-text (good for Unsplash search). `place` is a specific
   page-title candidate, e.g. a city name (good for the Wikimedia lookup, which
   needs a concrete subject rather than a search phrase). */
export async function searchPhoto(
  query: string,
  place?: string,
): Promise<string | null> {
  const q = query.trim()
  const subject = (place || q).trim()
  if (!q && !subject) return null

  const fromUnsplash = await searchUnsplash(q || subject)
  if (fromUnsplash) return fromUnsplash

  return searchWikimedia(subject)
}

/* Unsplash search → null when no key, no result, or on any error. */
async function searchUnsplash(query: string): Promise<string | null> {
  const key = process.env.UNSPLASH_ACCESS_KEY
  if (!key || !query.trim()) return null
  try {
    const url =
      'https://api.unsplash.com/search/photos?per_page=1&orientation=landscape&content_filter=high&query=' +
      encodeURIComponent(query)
    const res = await fetch(url, {
      headers: { Authorization: `Client-ID ${key}`, 'Accept-Version': 'v1' },
    })
    if (!res.ok) return null
    const data = (await res.json()) as {
      results?: Array<{ urls?: { raw?: string; regular?: string } }>
    }
    const urls = data.results?.[0]?.urls
    if (!urls) return null
    return urls.raw
      ? `${urls.raw}&auto=format&fit=crop&w=1280&q=80`
      : urls.regular ?? null
  } catch {
    return null
  }
}

/* Wikimedia lead image — keyless. Uses the MediaWiki pageimages API, which
   returns the page's representative photo at a requested width. Flags, crests
   and other non-photographic SVGs are filtered out so a country whose lead
   image is its flag doesn't surface a flag as "destination photography". */
async function searchWikimedia(place: string): Promise<string | null> {
  const subject = place.trim()
  if (!subject) return null
  try {
    const url =
      'https://en.wikipedia.org/w/api.php?action=query&format=json&redirects=1' +
      '&prop=pageimages&piprop=thumbnail&pithumbsize=1280&titles=' +
      encodeURIComponent(subject)
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Arrivo/1.0 (travel readiness app)' },
    })
    if (!res.ok) return null
    const data = (await res.json()) as {
      query?: { pages?: Record<string, { thumbnail?: { source?: string } }> }
    }
    const pages = data.query?.pages
    if (!pages) return null
    const source = Object.values(pages)[0]?.thumbnail?.source
    if (!source || isNonPhoto(source)) return null
    return source
  } catch {
    return null
  }
}

/* Skip flags, coats of arms, seals and other vector lead images. Flag
   thumbnails render as ".svg.png", so the .svg test catches them too. */
function isNonPhoto(url: string): boolean {
  return /flag_of|coat_of_arms|\.svg|_seal|_logo/i.test(url)
}
