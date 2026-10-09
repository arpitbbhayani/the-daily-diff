# Agent Instructions & Conventions

This document outlines team-shared architecture, conventions, development commands, and workflows for The Daily Diff repository.

## Development Workflows

When starting the Astro development server, use background mode:

```bash
astro dev --background
```

Manage the background server with:
- `astro dev status` — Check server status
- `astro dev logs` — View dev server logs
- `astro dev stop` — Stop background server

Common project scripts:
- `npm run dev` — Launch the dev server
- `npm run build` — Compile digest (`scripts/generate-latest.js`) and build the Astro site
- `npm run preview` — Locally preview the production build
- `npm run preview:cf` — Preview build output using Wrangler Cloudflare Pages simulator
- `npm run deploy` — Deploy production build to Cloudflare Pages
- `npm run generate-pdf` — Generate printable A4 edition PDFs

## Pre-Commit Verification

Verify that the build is functional before committing any changes:

1. Run `npm run build` to verify there are no compilation, type, or content collection errors.
2. Resolve any build errors that occur during the build process.
3. If a build error is caused by a specific corrupted or invalid file in `src/content/stories/`, delete that file and its corresponding infographic image (if it exists).

## Architecture & Conventions

- **Astro Content Collections**: Daily editions are organized as Markdown content collections under `src/content/stories/YYYY-MM-DD/`.
- **Classification & Sections**:
  - Stories belong to distinct tabs/sources: **HN**, **NEWS**, and **GITHUB**, specified via frontmatter `source: 'hn' | 'github' | 'news'`.
  - The `section` frontmatter attribute is preserved for engineering topic classification (e.g. `ai`, `databases`, `systems`, `engineering`).
  - Stories classified under `source: 'news'` include product launches, new model releases, library announcements, and technical breakthroughs.
  - Tabs in the edition reader are mutually exclusive and ordered **HN**, **NEWS**, and **GITHUB**.
- **Styling**: Styles are authored in SASS (`src/styles/main.scss`) utilizing newsprint typography and CSS custom properties for Day (light) and Night (dark) themes.

## Documentation Reference

Full Astro documentation: https://docs.astro.build

Consult these guides when working on relevant tasks:
- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
