// test/index.spec.ts
import { SELF } from 'cloudflare:test';
import { describe, it, expect } from 'vitest';

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
