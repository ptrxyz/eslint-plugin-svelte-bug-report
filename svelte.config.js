import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$lib: './src/lib/',
			$components: './src/lib/components'
		},
		typescript: {
			config: (config) => {
				config.compilerOptions.target = 'es2020';
				config.compilerOptions.lib = ['es2020', 'DOM', 'DOM.Iterable'];
				console.log(config);
				return config;
			}
		}
	}
};

export default config;
