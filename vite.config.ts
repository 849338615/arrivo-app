import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/* Serve the Vercel-style /api functions during `npm run dev` (no `vercel dev`
   needed). Each request is dispatched to api/<name>.ts's default handler via
   Vite's SSR module loader, so the same code runs locally and in production. */
const API_ROUTES = new Set(['image'])

function devApi(): Plugin {
  return {
    name: 'arrivo-dev-api',
    // Make the optional UNSPLASH_ACCESS_KEY (.env) visible to the image
    // handler during dev. Production reads Vercel env vars. Plan content is
    // fully bundled — no key required.
    config(_config, { mode }) {
      const env = loadEnv(mode, process.cwd(), '')
      for (const k of ['UNSPLASH_ACCESS_KEY']) {
        if (env[k] && !process.env[k]) process.env[k] = env[k]
      }
    },
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url ?? ''
        if (!url.startsWith('/api/')) return next()
        const name = url.slice('/api/'.length).split('?')[0].replace(/\/$/, '')
        if (!API_ROUTES.has(name)) return next()
        try {
          const mod = await server.ssrLoadModule(`/api/${name}.ts`)
          const handler = mod.default as
            | ((req: unknown, res: unknown) => Promise<void> | void)
            | undefined
          if (typeof handler !== 'function') return next()
          await handler(req, res)
        } catch (err) {
          server.ssrFixStacktrace?.(err as Error)
          res.statusCode = 500
          res.setHeader('content-type', 'application/json')
          res.end(JSON.stringify({ error: 'dev api error', detail: String(err) }))
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), devApi()],
})
