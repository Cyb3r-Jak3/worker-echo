import { JSONResponse, } from '@cyb3r-jak3/workers-common'
import { Hono } from 'hono'
import { ENV } from './types'

const app = new Hono<{Bindings: ENV}>()

app.get('/', (c) => {
	return JSONResponse({
		headers: Object.fromEntries(c.req.raw.headers),
		cf: c.req.raw.cf,
	})
  })

app.get('/version', (c) => {
	return JSONResponse({
		version: c.env.BuiltTime,
		built: c.env.GitHash,
		commitUrl: `https://github.com/Cyb3r-Jak3/worker-echo/commit/${c.env.GitHash}`,
	})
})


export default app