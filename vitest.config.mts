import { cloudflareTest } from "@cloudflare/vitest-pool-workers";
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
	coverage: {
            provider: 'istanbul',
            reporter: ['text', 'cobertura'],
        },
		reporters: ['default', 'junit'],
        outputFile: 'junit.xml',
	},
	plugins:
	[cloudflareTest({
				wrangler: { configPath: './wrangler.toml' },
	},
)]
});
