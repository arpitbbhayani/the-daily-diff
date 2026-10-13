import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE_METADATA } from '../config';

export async function GET(context: APIContext) {
  const editions = await getCollection('editions');

  // Sort days in descending order (newest first)
  const chronological = [...editions].sort((a, b) => b.data.date.localeCompare(a.data.date));

  const items = chronological.map((edition) => {
    const day = edition.data.date;
    const stories = edition.data.stories;

    const label = new Date(`${day}T00:00:00`).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    // Get up to top 5 stories
    const topStories = stories.slice(0, 5);
    const storyBullets = topStories
      .map((story) => `<li>${story.title}</li>`)
      .join('');

    const totalCount = stories.length;
    const countText = `${totalCount} high-signal ${
      totalCount === 1 ? 'engineering story and architectural breakdown' : 'engineering stories and architectural breakdowns'
    }`;

    const description = `<p><strong>Featured stories:</strong></p>` +
      `<ul>${storyBullets}</ul>` +
      `<p>A curation of ${countText} for ${label}, curated by ${SITE_METADATA.curator}. ` +
      `Built for software engineers who value depth over noise.</p>`;

    return {
      title: `${SITE_METADATA.name} — ${label}`,
      pubDate: new Date(`${day}T00:00:00`),
      description,
      link: `/${day}/`,
      author: SITE_METADATA.curator,
    };
  });

  return rss({
    title: `${SITE_METADATA.name} | Curated by ${SITE_METADATA.curator}`,
    description: SITE_METADATA.description,
    site: context.site || 'https://tdd.cat',
    items,
  });
}
