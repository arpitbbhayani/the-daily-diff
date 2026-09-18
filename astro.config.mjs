// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tdd.cat',
  integrations: [
    sitemap({
      serialize(item) {
        try {
          const url = new URL(item.url);
          const path = url.pathname;
          if (path === '/' || path === '') {
            item.changefreq = 'daily';
            item.priority = 1.0;
          } else if (path.startsWith('/archive')) {
            item.changefreq = 'daily';
            item.priority = 0.8;
          } else if (path.startsWith('/stats')) {
            item.changefreq = 'daily';
            item.priority = 0.5;
          } else {
            // Daily edition page
            item.changefreq = 'monthly';
            item.priority = 0.7;
          }
        } catch {
          if (item.url === '/' || item.url === '') {
            item.changefreq = 'daily';
            item.priority = 1.0;
          } else {
            item.changefreq = 'monthly';
            item.priority = 0.7;
          }
        }
        return item;
      }
    })
  ]
});