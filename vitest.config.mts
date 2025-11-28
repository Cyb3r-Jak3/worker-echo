import { defineWorkersConfig } from '@cloudflare/vitest-pool-workers/config';
import { codecovVitePlugin } from "@codecov/vite-plugin";

export default defineWorkersConfig({
	plugins: [
		// Put the Codecov vite plugin after all other plugins
		codecovVitePlugin({
		  enableBundleAnalysis: true,
		  bundleName: "worker-echo",
		  oidc: {
			useGitHubOIDC: true,
		  },
		  telemetry: false,
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
