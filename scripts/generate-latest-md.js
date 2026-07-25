import fs from 'fs';
import path from 'path';

// Find the latest day directory under src/content/articles
const articlesDir = path.join(process.cwd(), 'src/content/articles');
const days = fs.readdirSync(articlesDir)
  .filter(file => fs.statSync(path.join(articlesDir, file)).isDirectory())
  .sort();

if (days.length === 0) {
  console.error('No articles found');
  process.exit(1);
}

const latestDay = days[days.length - 1];
console.log(`Latest day: ${latestDay}`);

const latestDayDir = path.join(articlesDir, latestDay);
const files = fs.readdirSync(latestDayDir)
  .filter(file => file.endsWith('.md'))
  .sort();

if (files.length === 0) {
  console.error(`No md files found for ${latestDay}`);
  process.exit(1);
}

// Separate by 80 "-" and preamble.
// Each file's content starts with its YAML preamble (frontmatter).
// We separate consecutive files with 80 "-" characters.
const separator = '\n\n' + '-'.repeat(80) + '\n\n';

const concatenated = files.map(file => {
  const content = fs.readFileSync(path.join(latestDayDir, file), 'utf8');
  return content.trim();
}).join(separator);

// Write to public/latest.md
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Read and parse site metadata from src/config.ts
const configContent = fs.readFileSync(path.join(process.cwd(), 'src/config.ts'), 'utf8');
const nameMatch = configContent.match(/name:\s*['"]([^'"]+)['"]/);
const descriptionMatch = configContent.match(/description:\s*['"]([^'"]+)['"]/);

const siteName = nameMatch ? nameMatch[1] : 'The Daily Diff';
const siteDescription = descriptionMatch ? descriptionMatch[1] : 'A daily newspaper for software engineers who value depth over noise.';

const targetPath = path.join(publicDir, 'md');
fs.writeFileSync(targetPath, `---\nname: ${siteName}\ndescription: ${siteDescription}\ndate: ` + latestDay + "\n--- \n\n" + '-'.repeat(80) + "\n\n" + concatenated + '\n', 'utf8');
console.log(`Successfully generated ${targetPath}`);
