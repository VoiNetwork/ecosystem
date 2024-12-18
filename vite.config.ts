import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
	plugins: [
		sveltekit(),
		nodePolyfills({
			include: ['buffer', 'crypto', 'util', 'stream'],
			globals: {
				Buffer: true,
				global: true,
				process: true
			}
		})
	],
	css: {
		// Enable CSS modules for all style blocks
		modules: {
			localsConvention: 'camelCase'
		}
	},
	build: {
		// Ensure CSS is extracted and inlined properly
		cssCodeSplit: true,
		rollupOptions: {
			output: {
				assetFileNames: 'assets/[name].[hash][extname]'
			}
		}
	}
});
