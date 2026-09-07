// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://udbhavdevelopers.com',
  trailingSlash: 'ignore',
  output: 'server', // This explicitly enables Server-Side Rendering
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
  integrations: [react(), sitemap()],
});
