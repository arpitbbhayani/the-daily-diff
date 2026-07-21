// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://thedailydiff.arpitbhayani.me',
  // The homepage is a redirect stub (canonicalized to the latest edition),
  // not a real page — keep it out of the sitemap.
  integrations: [sitemap({ filter: (page) => page !== 'https://thedailydiff.arpitbhayani.me/' })]
});