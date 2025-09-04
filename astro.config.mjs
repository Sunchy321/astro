// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
    adapter: cloudflare(),
    site:    'https://tcg.cards',
    vite:    {
        plugins: [tailwindcss()],
    },
});
