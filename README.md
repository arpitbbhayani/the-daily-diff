# The Daily Diff

The Daily Diff is an engineering newspaper curated by [Arpit Bhayani](https://arpitbhayani.me/) that delivers the highest-signal software engineering, distributed systems, system architecture, and technical insights. It organizes stories chronologically by day, ranks them by interest score, and provides a clean, distraction-free reading experience.

## Features

- Chronological edition-based browsing of curated software engineering stories and technical breakdowns.
- Dark and light theme support with an authentic newsprint-style layout.
- Search every edition at `/search/`, with prefix/typo matching, highlighted excerpts, and source, signal, and edition filters. **Ctrl+K / Cmd+K** opens search or focuses and selects an existing query.
- Detailed metadata for each story including author attribution, tags, and interest scores.
- Feeds available via RSS, Markdown (`/md`), and JSON (`/json`), optimized for readers and LLMs (GEO).

## Development

Run the following commands to install dependencies and run the local development server.

### Prerequisites

Ensure you have Node.js installed on your machine.

### Setup

Install the project dependencies.

```bash
npm install
```

### Run

Start the local development server.

```bash
npm run dev
```

The site will be available locally at `http://localhost:4321`.

### Build

Create a production-ready build.

```bash
npm run build
```

The compiled assets will be written to the `dist` directory.

### Search

Each build generates `/search-index.json` from the `editions` collection. MiniSearch searches headlines, rendered Markdown text, authors, and why-read notes in the browser. The index loads only when a query has at least two characters; results are shown in batches of 20. Queries and filters can be shared, for example `/search/?q=postgres&source=hn`.

Results link to `/<day>/#story-<id>:~:text=...` using literal rendered passages, including for fuzzy queries. Supporting browsers scroll to and highlight that passage; stable anchors fall back to the story. A linked story's source tab is selected automatically so GitHub stories remain reachable from the default HN reader. Metadata that appears only in a tooltip uses the story anchor alone. Existing source and signal rules are preserved: Recommended is score 8, Must-Read is 9–10, and unrated stories appear under All.

Run the search regression tests with `npm test`. They cover Markdown/HTML extraction, matching and ranking, filters, text-fragment encoding, stable anchors, and coverage of the edition archive. Search requires JavaScript; the archive remains available without it.

### Generate & Upload PDF Editions

Each daily edition can be compiled into an authentic, printable A4 newspaper PDF with newsprint styling and uploaded to Bunny CDN storage:

```bash
# 1. Build the static site first
npm run build

# 2. Generate and upload PDF for the latest edition
npm run generate-pdf
```

#### CLI Options

- `npm run generate-pdf`: Generates PDF for the latest edition and uploads it to Bunny CDN (`/pdf/${day}.pdf` and `/pdf/latest.pdf`).
- `npm run generate-pdf -- --day 2026-10-02`: Generates and uploads PDF for a specific date.
- `npm run generate-pdf -- --all`: Backfills and uploads PDFs for all historical editions.
- `npm run generate-pdf -- --no-upload`: Generates the PDF locally into `public/pdf/` and `dist/pdf/` without uploading to Bunny Storage.

## Deployment (Cloudflare Pages)

The project is configured for deployment on **Cloudflare Pages**.

### Git Integration (Recommended)
Connect your repository in the [Cloudflare Dashboard](https://dash.cloudflare.com/) under **Compute (Workers) > Pages**:
- **Framework preset:** Astro
- **Build command:** `npm run build`
- **Build output directory:** `dist`

### Wrangler CLI

You can also preview and deploy using Wrangler:

```bash
# Preview build output with Cloudflare Pages local simulator
npm run preview:cf

# Deploy to Cloudflare Pages
npm run deploy
```
