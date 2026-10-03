# The Daily Diff

The Daily Diff is an engineering newspaper curated by [Arpit Bhayani](https://arpitbhayani.me/) that delivers the highest-signal software engineering, distributed systems, system architecture, and technical insights. It organizes stories chronologically by day, ranks them by interest score, and provides a clean, distraction-free reading experience.

## Features

- Chronological edition-based browsing of curated software engineering stories and technical breakdowns.
- Dark and light theme support with an authentic newsprint-style layout.
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
