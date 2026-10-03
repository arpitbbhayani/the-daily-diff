#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import os from 'os';
import http from 'http';
import puppeteer from 'puppeteer';

// Parse command line arguments
const args = process.argv.slice(2);
let targetDay = null;
let generateAll = false;
let shouldUpload = true;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--day' && args[i + 1]) {
    targetDay = args[i + 1];
    i++;
  } else if (args[i] === '--all') {
    generateAll = true;
  } else if (args[i] === '--no-upload') {
    shouldUpload = false;
  } else if (args[i] === '--upload') {
    shouldUpload = true;
  }
}

// Locate story days
const storiesDir = path.join(process.cwd(), 'src/content/stories');
if (!fs.existsSync(storiesDir)) {
  console.error(`Stories directory not found at ${storiesDir}`);
  process.exit(1);
}

const allDays = fs.readdirSync(storiesDir)
  .filter(file => fs.statSync(path.join(storiesDir, file)).isDirectory())
  .sort();

if (allDays.length === 0) {
  console.error('No story editions found.');
  process.exit(1);
}

const latestDay = allDays[allDays.length - 1];
const daysToProcess = generateAll ? allDays : [targetDay || latestDay];

console.log(`Processing PDF generation for ${daysToProcess.length} edition(s): ${daysToProcess.join(', ')}`);

// Check dist directory
const distDir = path.join(process.cwd(), 'dist');
if (!fs.existsSync(distDir)) {
  console.error('The dist/ directory does not exist. Please run "npm run build" first.');
  process.exit(1);
}

// Load Bunny credentials
function getBunnyConfig() {
  let zone = process.env.BUNNY_STORAGE_ZONE;
  let password = process.env.BUNNY_STORAGE_PASSWORD || process.env.BUNNY_API_KEY;

  if (!zone || !password) {
    try {
      const configPath = path.join(os.homedir(), '.brain/config.json');
      if (fs.existsSync(configPath)) {
        const brainConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
        zone = zone || brainConfig.bunny_storage_zone || 'tdd-4628544990-assets';
        password = password || brainConfig.bunny_storage_password;
      }
    } catch {
      // Ignore if ~/.brain/config.json doesn't exist or isn't readable
    }
  }

  zone = zone || 'tdd-4628544990-assets';
  return { zone, password };
}

const bunnyConfig = getBunnyConfig();

async function uploadToBunny(key, fileBuffer) {
  if (!bunnyConfig.password) {
    console.log(`[Bunny] Skipping upload for ${key}: no bunny_storage_password configured.`);
    return null;
  }

  const cleanKey = key.replace(/^\/+/, '');
  const endpoint = `https://storage.bunnycdn.com/${bunnyConfig.zone}/${cleanKey}`;
  const cdnUrl = `https://tdd-edge.b-cdn.net/${cleanKey}`;

  try {
    const res = await fetch(endpoint, {
      method: 'PUT',
      headers: {
        'AccessKey': bunnyConfig.password,
        'Content-Type': 'application/pdf',
      },
      body: fileBuffer,
    });

    if (res.status === 200 || res.status === 201) {
      console.log(`[Bunny] Successfully uploaded ${cleanKey} -> ${cdnUrl}`);
      return cdnUrl;
    } else {
      const errorText = await res.text();
      console.error(`[Bunny] Upload failed for ${cleanKey}: HTTP ${res.status} - ${errorText}`);
      return null;
    }
  } catch (err) {
    console.error(`[Bunny] Upload error for ${cleanKey}:`, err);
    return null;
  }
}

// Start lightweight static HTTP server for dist/
function startStaticServer() {
  const mimeMap = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.mjs': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
  };

  const server = http.createServer((req, res) => {
    let reqUrl = (req.url || '/').split('?')[0];
    if (reqUrl.endsWith('/')) reqUrl += 'index.html';
    
    let filePath = path.join(distDir, reqUrl);
    if (!fs.existsSync(filePath) && fs.existsSync(filePath + '.html')) {
      filePath += '.html';
    } else if (!fs.existsSync(filePath) && fs.existsSync(path.join(filePath, 'index.html'))) {
      filePath = path.join(filePath, 'index.html');
    }

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': mimeMap[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  });

  return new Promise((resolve, reject) => {
    server.listen(0, '127.0.0.1', () => {
      const addr = server.address();
      resolve({
        port: addr.port,
        close: () => server.close(),
      });
    });
    server.on('error', reject);
  });
}

// Generate PDF for a day
async function generatePdfForDay(page, day, port) {
  console.log(`\nGenerating A4 printable PDF with 18mm balanced margins for edition: ${day}...`);
  const url = `http://127.0.0.1:${port}/${day}/`;
  
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 45000 });
  await page.evaluateHandle('document.fonts.ready');

  // Ensure all photos are eagerly loaded, decoded, and rendered
  const imageCount = await page.evaluate(async () => {
    const images = Array.from(document.querySelectorAll('img'));
    images.forEach(img => {
      img.loading = 'eager';
      img.decoding = 'sync';
    });

    // Scroll through the entire page to trigger any lazy observers
    await new Promise((resolve) => {
      let y = 0;
      const distance = 400;
      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        y += distance;
        if (y >= document.body.scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 35);
    });

    // Await all images to complete loading
    await Promise.all(
      images.map(img => {
        if (img.complete && img.naturalHeight !== 0) {
          img.classList.remove('loading');
          img.parentElement?.classList.remove('is-loading');
          return Promise.resolve();
        }
        return new Promise((resolve) => {
          img.onload = () => {
            img.classList.remove('loading');
            img.parentElement?.classList.remove('is-loading');
            resolve();
          };
          img.onerror = resolve;
          setTimeout(resolve, 8000);
        });
      })
    );

    return images.length;
  });

  console.log(`Loaded and verified all ${imageCount} photos.`);
  await new Promise(r => setTimeout(r, 400));

  // Polish print-specific CSS so it guarantees the tdd.cat warm newsprint theme
  await page.addStyleTag({
    content: `
      @page {
        size: A4 portrait;
        margin: 18mm 18mm 18mm 18mm;
        background: #f8f4e8;
        background-color: #f8f4e8;
      }

      :root, [data-theme="dark"] {
        --bg-page: #f8f4e8 !important;
        --bg-sheet: #f8f4e8 !important;
        --bg-sheet-alt: #efe8d4 !important;
        --bg-well: #ffffff !important;
        --ink: #1b1a17 !important;
        --ink-soft: #45423a !important;
        --ink-faint: #7c7563 !important;
        --rule: #201e19 !important;
        --rule-soft: rgba(32, 30, 25, 0.28) !important;
        --rule-hair: rgba(32, 30, 25, 0.16) !important;
        --accent: #8a1f11 !important;
        --accent-soft: rgba(138, 31, 17, 0.08) !important;
        --accent-ink: #8a1f11 !important;
      }

      html, body {
        background: #f8f4e8 !important;
        background-color: #f8f4e8 !important;
        color: #1b1a17 !important;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
        margin: 0 !important;
        padding: 0 !important;
      }

      #theme-toggle,
      .rail-btn,
      .masthead-nav-btn,
      .masthead-archive-link,
      .masthead-pdf-btn,
      .edition-rail,
      .filter-bar,
      .no-stories-message,
      .pwa-install-banner,
      #image-modal {
        display: none !important;
      }

      .newspaper-sheet {
        box-shadow: none !important;
        padding: 0 !important;
      }

      .page-container {
        max-width: none !important;
        padding: 0 !important;
        margin: 0 !important;
      }

      .newspaper-columns {
        column-count: 2 !important;
      }

      .lead-story .story-body,
      .story.is-lead .story-body {
        column-count: 1 !important;
      }

      .story {
        break-inside: avoid !important;
        page-break-inside: avoid !important;
      }

      .story-headline {
        break-after: avoid !important;
        page-break-after: avoid !important;
      }
    `,
  });

  const pdfBuffer = await page.pdf({
    preferCSSPageSize: true,
    printBackground: true,
    displayHeaderFooter: false,
    timeout: 60000,
  });

  // Target directories for local output
  const publicPdfDir = path.join(process.cwd(), 'public/pdf');
  const distPdfDir = path.join(process.cwd(), 'dist/pdf');
  const publicEditionsDir = path.join(process.cwd(), 'public/editions');
  const distEditionsDir = path.join(process.cwd(), 'dist/editions');
  fs.mkdirSync(publicPdfDir, { recursive: true });
  fs.mkdirSync(distPdfDir, { recursive: true });
  fs.mkdirSync(publicEditionsDir, { recursive: true });
  fs.mkdirSync(distEditionsDir, { recursive: true });

  // Save to both /pdf/ and /editions/
  fs.writeFileSync(path.join(publicPdfDir, `${day}.pdf`), pdfBuffer);
  fs.writeFileSync(path.join(distPdfDir, `${day}.pdf`), pdfBuffer);
  fs.writeFileSync(path.join(publicEditionsDir, `${day}.pdf`), pdfBuffer);
  fs.writeFileSync(path.join(distEditionsDir, `${day}.pdf`), pdfBuffer);

  console.log(`Saved local PDF (${(pdfBuffer.length / 1024).toFixed(1)} KB):`);
  console.log(`  -> public/pdf/${day}.pdf`);
  console.log(`  -> public/editions/${day}.pdf`);

  // If latest day, also create latest.pdf
  if (day === latestDay) {
    fs.writeFileSync(path.join(process.cwd(), 'public/latest.pdf'), pdfBuffer);
    fs.writeFileSync(path.join(process.cwd(), 'dist/latest.pdf'), pdfBuffer);
    fs.writeFileSync(path.join(publicPdfDir, 'latest.pdf'), pdfBuffer);
    fs.writeFileSync(path.join(distPdfDir, 'latest.pdf'), pdfBuffer);
    console.log(`  -> public/latest.pdf`);
  }

  // Upload to Bunny Storage (both /pdf/ and /editions/ paths)
  if (shouldUpload) {
    await uploadToBunny(`pdf/${day}.pdf`, pdfBuffer);
    await uploadToBunny(`editions/${day}.pdf`, pdfBuffer);
    if (day === latestDay) {
      await uploadToBunny(`pdf/latest.pdf`, pdfBuffer);
      await uploadToBunny(`editions/latest.pdf`, pdfBuffer);
    }
  }

  return pdfBuffer;
}

async function run() {
  const server = await startStaticServer();
  console.log(`Static server running on port ${server.port}`);

  const browser = await puppeteer.launch({
    headless: true,
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--font-render-hinting=none',
    ],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 2 });

    for (const day of daysToProcess) {
      await generatePdfForDay(page, day, server.port);
    }

    console.log('\nAll PDF generation completed successfully!');
  } finally {
    await browser.close();
    server.close();
  }
}

run().catch((err) => {
  console.error('Fatal error during PDF generation:', err);
  process.exit(1);
});
