// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://the-daily-diff.arpitbhayani.me',
  integrations: [
    sitemap({
      serialize(item) {
        try {
          const url = new URL(item.url);
          if (url.pathname === '/') {
            item.changefreq = 'daily';
          } else {
            item.changefreq = 'monthly';
          }
        } catch {
          if (item.url === '/' || item.url === '') {
            item.changefreq = 'daily';
          } else {
            item.changefreq = 'monthly';
          }
        }
        return item;
      }
    })
  ]
});