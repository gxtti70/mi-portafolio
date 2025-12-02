// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	output: 'static',
	site: 'https://gxtti70.github.io',
	base: '/mi-portafolio',
});
