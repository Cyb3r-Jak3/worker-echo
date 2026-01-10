import { defineWorkersConfig } from '@cloudflare/vitest-pool-workers/config';

export default defineWorkersConfig({
	test: {
		coverage: {
            provider: 'istanbul',
            reporter: ['text', 'cobertura'],
        },
		reporters: ['default', 'junit'],
        outputFile: 'junit.xml',
		poolOptions: {
			workers: {
				wrangler: { configPath: './wrangler.toml' },
			},
		},
	},
});
