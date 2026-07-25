import fs from 'fs';
import path from 'path';

// Find the latest day directory under src/content/stories
const storiesDir = path.join(process.cwd(), 'src/content/stories');
const days = fs.readdirSync(storiesDir)
  .filter(file => fs.statSync(path.join(storiesDir, file)).isDirectory())
  .sort();

if (days.length === 0) {
  console.error('No stories found');
  process.exit(1);
}

const latestDay = days[days.length - 1];
console.log(`Latest day: ${latestDay}`);

const latestDayDir = path.join(storiesDir, latestDay);
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

const rawStories = files.map(file => {
  const content = fs.readFileSync(path.join(latestDayDir, file), 'utf8');
  return {
    filename: file,
    rawContent: content.trim()
  };
});

const concatenated = rawStories.map(a => a.rawContent).join(separator);

// Write to public/latest.md -> Wait, it writes to public/md!
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

const targetPathMD = path.join(publicDir, 'md');
fs.writeFileSync(targetPathMD, `---\nname: ${siteName}\ndescription: ${siteDescription}\ndate: ` + latestDay + "\n--- \n\n" + '-'.repeat(80) + "\n\n" + concatenated + '\n', 'utf8');
console.log(`Successfully generated ${targetPathMD}`);

// Now generate the JSON version
function parseFrontmatterAndContent(rawContent) {
  const match = rawContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    return {
      metadata: {},
      content: rawContent
    };
  }

  const yamlString = match[1];
  const bodyContent = match[2].trim();

  const metadata = parseYAML(yamlString);
  return {
    metadata,
    content: bodyContent
  };
}

function parseYAML(yamlString) {
  const result = {};
  const lines = yamlString.split(/\r?\n/);
  let currentKey = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim() === '') continue;

    const trimmedLine = line.trim();

    // Check if it's a list item
    if (currentKey && trimmedLine.startsWith('- ')) {
      if (!Array.isArray(result[currentKey])) {
        result[currentKey] = [];
      }
      let val = trimmedLine.slice(2).trim();
      if ((val.startsWith("'") && val.endsWith("'")) || (val.startsWith('"') && val.endsWith('"'))) {
        val = val.slice(1, -1);
      }
      result[currentKey].push(val);
      continue;
    }

    // Check if it's a continuation of a multiline value (indented but not a list item)
    const indentMatch = line.match(/^(\s*)/);
    const indent = indentMatch ? indentMatch[1].length : 0;
    if (currentKey && indent > 0) {
      if (typeof result[currentKey] === 'string') {
        result[currentKey] += ' ' + trimmedLine;
      } else {
        let val = trimmedLine;
        if ((val.startsWith("'") && val.endsWith("'")) || (val.startsWith('"') && val.endsWith('"'))) {
          val = val.slice(1, -1);
        }
        result[currentKey] = val;
      }
      continue;
    }

    // Otherwise, parse key: value
    const colonIndex = line.indexOf(':');
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      let val = line.slice(colonIndex + 1).trim();
      currentKey = key;

      if (val === '') {
        result[key] = null;
      } else {
        if ((val.startsWith("'") && val.endsWith("'")) || (val.startsWith('"') && val.endsWith('"'))) {
          val = val.slice(1, -1);
        } else if (!isNaN(val) && val !== '') {
          val = Number(val);
        } else if (val === 'true') {
          val = true;
        } else if (val === 'false') {
          val = false;
        }
        result[key] = val;
      }
    }
  }

  // Ensure default arrays for authors and tags if they are null
  if (result.hasOwnProperty('authors') && result.authors === null) {
    result.authors = [];
  }
  if (result.hasOwnProperty('tags') && result.tags === null) {
    result.tags = [];
  }

  return result;
}

const storiesJson = rawStories.map(story => {
  const parsed = parseFrontmatterAndContent(story.rawContent);
  return {
    ...parsed.metadata,
    content: parsed.content
  };
});

const jsonOutput = {
  name: siteName,
  description: siteDescription,
  date: latestDay,
  stories: storiesJson
};

const targetPathJSON = path.join(publicDir, 'json');
fs.writeFileSync(targetPathJSON, JSON.stringify(jsonOutput, null, 2) + '\n', 'utf8');
console.log(`Successfully generated ${targetPathJSON}`);
