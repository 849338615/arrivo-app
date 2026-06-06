/* Keyless destination photography, resolved directly in the browser.

   Wikipedia's APIs send `Access-Control-Allow-Origin: *`, so the client can
   fetch a place's lead photo with no serverless function and no API key. This
   is the fallback that lets imagery work on ANY deployment — a static host, a
   `vite preview`, or a Vercel function cold-start — not just when the
   `/api/image` proxy is reachable. The proxy stays the preferred path (it can
   add Unsplash-quality results when a key is configured); this guarantees a
   real photo when the proxy returns nothing.

   Mirrors the server filter in api/_lib/photos.ts so flags, crests and other
   vector lead images never surface as "destination photography". */

/* Flags render as "...Flag_of_X.svg.png", so the .svg test also catches the
   common flag thumbnails. */
function isNonPhoto(url: string): boolean {
  return /flag_of|coat_of_arms|\.svg|_seal|_logo/i.test(url)
}

async function getJson(url: string): Promise<unknown | null> {
  try {
    const ctrl = new AbortController()
    const timer = setTimeout(() => ctrl.abort(), 6000)
    const res = await fetch(url, { signal: ctrl.signal })
    clearTimeout(timer)
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}

/* MediaWiki pageimages — the page's representative photo at a requested width.
   `origin=*` is required for an anonymous CORS request. */
async function viaPageImages(subject: string): Promise<string | null> {
  const url =
    'https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*' +
    '&redirects=1&prop=pageimages&piprop=thumbnail&pithumbsize=1280&titles=' +
    encodeURIComponent(subject)
  const data = (await getJson(url)) as {
    query?: { pages?: Record<string, { thumbnail?: { source?: string } }> }
  } | null
  const pages = data?.query?.pages
  if (!pages) return null
  const source = Object.values(pages)[0]?.thumbnail?.source
  if (!source || isNonPhoto(source)) return null
  return source
}

/* REST summary — a different lead-image pipeline that often has a usable photo
   when pageimages is missing or returned a flag (e.g. a country title). */
async function viaRestSummary(subject: string): Promise<string | null> {
  const url =
    'https://en.wikipedia.org/api/rest_v1/page/summary/' +
    encodeURIComponent(subject.replace(/\s+/g, '_'))
  const data = (await getJson(url)) as {
    originalimage?: { source?: string }
    thumbnail?: { source?: string }
  } | null
  const source = data?.thumbnail?.source || data?.originalimage?.source
  if (!source || isNonPhoto(source)) return null
  return source
}

/* Resolve a hero-sized photo URL for a place, or null if nothing usable is
   found (the caller then shows the branded gradient). */
export async function wikipediaImage(subject: string): Promise<string | null> {
  const s = subject.trim()
  if (!s) return null
  return (await viaPageImages(s)) ?? (await viaRestSummary(s))
}
