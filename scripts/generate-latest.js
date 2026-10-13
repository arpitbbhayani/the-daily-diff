import fs from 'fs';
import path from 'path';

const editionsDir = path.join(process.cwd(), 'src/content/editions');
const storiesDir = path.join(process.cwd(), 'src/content/stories');

let latestDay = null;
let editionData = null;

if (fs.existsSync(editionsDir)) {
  const editionFiles = fs.readdirSync(editionsDir)
    .filter(file => file.endsWith('.json'))
    .sort();
  if (editionFiles.length > 0) {
    const latestFile = editionFiles[editionFiles.length - 1];
    latestDay = latestFile.replace('.json', '');
    editionData = JSON.parse(fs.readFileSync(path.join(editionsDir, latestFile), 'utf8'));
  }
}

if (!latestDay && fs.existsSync(storiesDir)) {
  const days = fs.readdirSync(storiesDir)
    .filter(file => fs.statSync(path.join(storiesDir, file)).isDirectory())
    .sort();
  if (days.length > 0) {
    latestDay = days[days.length - 1];
  }
}

if (!latestDay) {
  console.error('No editions or stories found');
  process.exit(1);
}

console.log(`Latest day: ${latestDay}`);

// Read and parse site metadata from src/config.ts
const configContent = fs.readFileSync(path.join(process.cwd(), 'src/config.ts'), 'utf8');
const nameMatch = configContent.match(/name:\s*['"]([^'"]+)['"]/);
const descriptionMatch = configContent.match(/description:\s*['"]([^'"]+)['"]/);
const curatorMatch = configContent.match(/curator:\s*['"]([^'"]+)['"]/);
const curatorUrlMatch = configContent.match(/curatorUrl:\s*['"]([^'"]+)['"]/);

const siteName = nameMatch ? nameMatch[1] : 'Engineering Newspaper';
const curator = curatorMatch ? curatorMatch[1] : 'Arpit Bhayani';
const curatorUrl = curatorUrlMatch ? curatorUrlMatch[1] : 'https://arpitbhayani.me/';
const siteDescription = descriptionMatch ? descriptionMatch[1] : 'A daily newspaper for software engineers who value depth over noise, curated by Arpit Bhayani.';

const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const separator = '\n\n' + '-'.repeat(80) + '\n\n';

if (editionData) {
  const rawStories = editionData.stories.map(story => {
    let preamble = `---\ntitle: ${story.title}\nsource: ${story.source}\nurl: ${story.url}\ndate: '${editionData.date}'\n`;
    if (story.authors && story.authors.length > 0) {
      preamble += 'authors:\n' + story.authors.map(a => `- ${a}`).join('\n') + '\n';
    }
    if (story.why_read) {
      preamble += `why_read: ${story.why_read}\n`;
    }
    if (story.hn_id) {
      preamble += `hn_id: '${story.hn_id}'\ncomments: https://news.ycombinator.com/item?id=${story.hn_id}\n`;
    }
    if (story.image) {
      preamble += `image: ${story.image}\n`;
    }
    preamble += '---\n\n' + (story.social_post || '').trim();
    return preamble;
  });

  const concatenated = rawStories.join(separator);
  const targetPathMD = path.join(publicDir, 'md');
  fs.writeFileSync(targetPathMD, `---\nname: ${siteName}\ncurator: ${curator}\ncurator_url: ${curatorUrl}\ndescription: ${siteDescription}\ndate: ` + latestDay + "\n--- \n\n" + '-'.repeat(80) + "\n\n" + concatenated + '\n', 'utf8');
  console.log(`Successfully generated ${targetPathMD}`);

  const storiesJson = editionData.stories.map(story => ({
    title: story.title,
    source: story.source,
    url: story.url,
    date: editionData.date,
    authors: story.authors || [],
    why_read: story.why_read,
    hn_id: story.hn_id,
    comments: story.hn_id ? `https://news.ycombinator.com/item?id=${story.hn_id}` : undefined,
    image: story.image,
    content: (story.social_post || '').trim()
  }));

  const jsonOutput = {
    name: siteName,
    curator,
    curator_url: curatorUrl,
    description: siteDescription,
    date: latestDay,
    stories: storiesJson
  };

  const targetPathJSON = path.join(publicDir, 'json');
  fs.writeFileSync(targetPathJSON, JSON.stringify(jsonOutput, null, 2) + '\n', 'utf8');
  console.log(`Successfully generated ${targetPathJSON}`);
} else {
  const latestDayDir = path.join(storiesDir, latestDay);
  const files = fs.readdirSync(latestDayDir)
    .filter(file => file.endsWith('.md'))
    .sort();

  if (files.length === 0) {
    console.error(`No md files found for ${latestDay}`);
    process.exit(1);
  }

  const rawStories = files.map(file => {
    const content = fs.readFileSync(path.join(latestDayDir, file), 'utf8');
    return {
      filename: file,
      rawContent: content.trim()
    };
  });

  const concatenated = rawStories.map(a => a.rawContent).join(separator);
  const targetPathMD = path.join(publicDir, 'md');
  fs.writeFileSync(targetPathMD, `---\nname: ${siteName}\ncurator: ${curator}\ncurator_url: ${curatorUrl}\ndescription: ${siteDescription}\ndate: ` + latestDay + "\n--- \n\n" + '-'.repeat(80) + "\n\n" + concatenated + '\n', 'utf8');
  console.log(`Successfully generated ${targetPathMD}`);

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
    curator,
    curator_url: curatorUrl,
    description: siteDescription,
    date: latestDay,
    stories: storiesJson
  };

  const targetPathJSON = path.join(publicDir, 'json');
  fs.writeFileSync(targetPathJSON, JSON.stringify(jsonOutput, null, 2) + '\n', 'utf8');
  console.log(`Successfully generated ${targetPathJSON}`);
}
