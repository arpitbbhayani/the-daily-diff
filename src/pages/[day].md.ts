import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { SITE_METADATA } from '../config';

export async function getStaticPaths() {
	const entries = await getCollection('stories');
	const byDay = new Map<string, typeof entries>();
	for (const entry of entries) {
		const day = entry.id.split('/')[0];
		const list = byDay.get(day) ?? [];
		list.push(entry);
		byDay.set(day, list);
	}

	return [...byDay.keys()].map((day) => {
		const dayEntries = byDay.get(day)!;
		const sorted = [...dayEntries].sort(
			(a, b) => (b.data.interest_score ?? 0) - (a.data.interest_score ?? 0)
		);
		return {
			params: { day },
			props: { day, entries: sorted },
		};
	});
}

export const GET: APIRoute = async ({ props }) => {
	const { day, entries } = props as { day: string; entries: any[] };

	const label = new Date(`${day}T00:00:00`).toLocaleDateString('en-US', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	let output = `---\n`;
	output += `name: ${SITE_METADATA.name}\n`;
	output += `tagline: ${SITE_METADATA.tagline}\n`;
	output += `curator: ${SITE_METADATA.curator}\n`;
	output += `curator_url: ${SITE_METADATA.curatorUrl}\n`;
	output += `date: ${day}\n`;
	output += `edition_label: "${label}"\n`;
	output += `canonical_url: https://tdd.cat/${day}/\n`;
	output += `---\n\n`;

	output += `# ${SITE_METADATA.name} — ${label}\n\n`;
	output += `> An Engineering Newspaper curated by [${SITE_METADATA.curator}](${SITE_METADATA.curatorUrl})\n\n`;
	output += `--------------------------------------------------------------------------------\n\n`;

	for (const entry of entries) {
		const data = entry.data;
		output += `## [${data.title}](${data.url})\n\n`;
		if (data.authors && data.authors.length > 0) {
			output += `**By:** ${data.authors.join(', ')}  \n`;
		}
		if (data.why_read) {
			output += `**Why read:** ${data.why_read}  \n`;
		}
		if (data.comments) {
			output += `**Discussion:** [HN Thread](${data.comments})  \n`;
		}
		output += `\n`;

		if (entry.body) {
			output += `${entry.body.trim()}\n\n`;
		}
		output += `---\n\n`;
	}

	return new Response(output, {
		headers: {
			'Content-Type': 'text/markdown; charset=utf-8',
		},
	});
};
