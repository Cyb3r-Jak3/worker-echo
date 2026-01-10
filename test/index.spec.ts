// test/index.spec.ts
import { env, createExecutionContext, waitOnExecutionContext, SELF } from 'cloudflare:test';
import { describe, it, expect } from 'vitest';

// For now, you'll need to do something like this to get a correctly-typed
// `Request` to pass to `worker.fetch()`.
const IncomingRequest = Request<unknown, IncomingRequestCfProperties>;

describe('/', () => {
	it('200 /', async () => {
		const response = await SELF.fetch("http://example.com")
		expect(response.status).toBe(200);
	});
});

describe('/version', () => {
	it('200 /version', async () => {
		const response = await SELF.fetch("http://example.com/version")
		expect(response.status).toBe(200);
	});
});

describe('/v1/traces', () => {
	it('202 /v1/traces', async () => {
		const response = await SELF.fetch("http://example.com/v1/traces")
		expect(response.status).toBe(202);
	});
});
