import type { ServerResponse } from 'node:http'
import { queryParam, sendJson, type ApiReq } from './_lib/http'
import { searchPhoto } from './_lib/photos'

export default async function handler(req: ApiReq, res: ServerResponse) {
  const q = queryParam(req, 'q') ?? ''
  // Optional concrete subject (e.g. a city) used for the keyless lookup.
  const place = queryParam(req, 'place') ?? ''
  if (!q.trim() && !place.trim()) {
    sendJson(res, 400, { error: 'q is required' })
    return
  }
  const url = await searchPhoto(q, place)
  sendJson(res, 200, { url })
}
