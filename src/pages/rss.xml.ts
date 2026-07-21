import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

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
    
    // Sort articles by interest score to find the lead story
    const sorted = [...dayEntries].sort(
      (a, b) => (b.data.interest_score ?? 0) - (a.data.interest_score ?? 0)
    );
    const lead = sorted[0];
    
    const label = new Date(`${day}T00:00:00`).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const description = `${dayEntries.length} curated engineering ${
      dayEntries.length === 1 ? 'read' : 'reads'
    } from arXiv and Hacker News for ${label}${lead ? `, including "${lead.data.title}"` : ''}.`;

    return {
      title: `The Daily Diff — ${label}`,
      pubDate: new Date(`${day}T00:00:00`),
      description,
      link: `/${day}/`,
    };
  });

  return rss({
    title: 'The Daily Diff',
    description: 'The Daily Diff is a daily digest of curated arXiv papers and Hacker News threads for engineers — signal, not noise.',
    site: context.site || 'https://thedailydiff.arpitbhayani.me',
    items,
  });
}
