/* Minimal Node req/res helpers shared by the API handlers. Works under both
   Vercel (which may pre-parse req.body) and the Vite dev middleware (raw
   IncomingMessage stream). Kept outside /src so it is never typechecked
   against the browser-only app tsconfig. */
import type { IncomingMessage, ServerResponse } from 'node:http'

export type ApiReq = IncomingMessage & { body?: unknown }

export async function readJson<T>(req: ApiReq): Promise<T | null> {
  if (req.body && typeof req.body === 'object') return req.body as T
  if (typeof req.body === 'string' && req.body) {
    try {
      return JSON.parse(req.body) as T
    } catch {
      return null
    }
  }
  const chunks: Buffer[] = []
  for await (const chunk of req) chunks.push(chunk as Buffer)
  const raw = Buffer.concat(chunks).toString('utf8')
  if (!raw) return null
  try {
    return JSON.parse(raw) as T
  } catch {
    return null
  }
}

export function sendJson(res: ServerResponse, status: number, data: unknown): void {
  res.statusCode = status
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.setHeader('cache-control', 'no-store')
  res.end(JSON.stringify(data))
}

export function queryParam(req: IncomingMessage, key: string): string | null {
  try {
    const url = new URL(req.url ?? '', 'http://localhost')
    return url.searchParams.get(key)
  } catch {
    return null
  }
}
