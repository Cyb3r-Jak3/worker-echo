import { defineWorkersConfig } from '@cloudflare/vitest-pool-workers/config';
import { codecovVitePlugin } from "@codecov/vite-plugin";

export default defineWorkersConfig({
	plugins: [
		// Put the Codecov vite plugin after all other plugins
		codecovVitePlugin({
		  enableBundleAnalysis: process.env.CODECOV_TOKEN !== undefined,
		  bundleName: "worker-echo",
		  uploadToken: process.env.CODECOV_TOKEN,
		}),
	  ],
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
