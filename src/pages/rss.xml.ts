import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE_METADATA } from '../config';

export async function GET(context: APIContext) {
  const entries = await getCollection('articles');
  
  // Group entries by day
  const byDay = new Map<string, typeof entries>();
  for (const entry of entries) {
    const day = entry.id.split('/')[0];
    const list = byDay.get(day) ?? [];
    list.push(entry);
    byDay.set(day, list);
  }

  // Sort days in descending order (newest first)
  const chronological = [...byDay.keys()].sort((a, b) => b.localeCompare(a));

  const items = chronological.map((day) => {
    const dayEntries = byDay.get(day)!;
    
    // Sort articles by interest score to find top stories
    const sorted = [...dayEntries].sort(
      (a, b) => (b.data.interest_score ?? 0) - (a.data.interest_score ?? 0)
    );
    
    const label = new Date(`${day}T00:00:00`).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    // Get up to top 5 stories
    const topStories = sorted.slice(0, 5);
    const storyBullets = topStories
      .map((entry) => `<li>${entry.data.title}</li>`)
      .join('');

    const totalCount = dayEntries.length;
    const countText = `${totalCount} high-signal ${
      totalCount === 1 ? 'paper, discussion, or insight' : 'papers, discussions, and insights'
    }`;

    const description = `<p><strong>Featured stories:</strong></p>` +
      `<ul>${storyBullets}</ul>` +
      `<p>A curation of ${countText} for ${label}. ` +
      `Built for software engineers who value depth over noise.</p>`;

    return {
      title: `${SITE_METADATA.name} — ${label}`,
      pubDate: new Date(`${day}T00:00:00`),
      description,
      link: `/${day}/`,
    };
  });

  return rss({
    title: SITE_METADATA.name,
    description: SITE_METADATA.description,
    site: context.site || 'https://tdd.cat',
    items,
  });
}
