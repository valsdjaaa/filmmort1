// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://example.com',
  output: 'server',  // ← PROMENI U server
  adapter: netlify(),
  integrations: [mdx(), sitemap()],
});