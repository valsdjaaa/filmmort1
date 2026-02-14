// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://example.com',
  output: 'hybrid',  // ← DODAJ OVO
  adapter: netlify(), // ← DODAJ OVO
  integrations: [mdx(), sitemap()],
});