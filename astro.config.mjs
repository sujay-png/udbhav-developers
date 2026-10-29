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
  site: 'https://www.udbhavdevelopers.com',
  trailingSlash: 'always',
  redirects: {
    '/services/building-maintenance/': '/',
    '/blog/why-kadri-is-one-of-mangalurus-most-sought-after-residential-locations/': '/blog/why-kadri-is-best-residential-area-mangalore/',
    '/blog/list-of-the-most-popular-cities-for-real-estate-investment-in-mangalore/': '/blog/best-residential-areas-in-mangalore/',
    '/blog/kadri-mangalore-apartments-with-resort-style-amenities/': '/blog/must-have-amenities-in-modern-apartments/',
    '/blog/vaastu-compliant-homes-how-udbhav-chinmaya-is-designed-for-positive-living/': '/blog/vaastu-compliant-flats-mangalore/',
  },
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
