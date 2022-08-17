import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import solidJs from "@astrojs/solid-js";
import netlify from '@astrojs/netlify/functions';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), solidJs(), tailwind()],
  output: 'server',
  adapter: netlify(),
});