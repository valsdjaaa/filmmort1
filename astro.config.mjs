// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://filmmort1.pages.dev',  // ← STAVI CLOUDFLARE URL
  output: 'static',  // ← STATIC, ne server
  integrations: [mdx(), sitemap()],
  
});