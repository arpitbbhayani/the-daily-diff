import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { SITE_METADATA } from '../config';

export async function getStaticPaths() {
	const editions = await getCollection('editions');
	return editions.map((edition) => ({
		params: { day: edition.data.date },
		props: { edition: edition.data },
	}));
}

export const GET: APIRoute = async ({ props }) => {
	const { edition } = props as { edition: any };
	const day = edition.date;

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

	for (const story of edition.stories) {
		output += `## [${story.title}](${story.url})\n\n`;
		if (story.authors && story.authors.length > 0) {
			output += `**By:** ${story.authors.join(', ')}  \n`;
		}
		if (story.why_read) {
			output += `**Why read:** ${story.why_read}  \n`;
		}
		const comments = story.comments || (story.hn_id ? `https://news.ycombinator.com/item?id=${story.hn_id}` : undefined);
		if (comments) {
			output += `**Discussion:** [HN Thread](${comments})  \n`;
		}
		output += `\n`;

		if (story.social_post) {
			output += `${story.social_post.trim()}\n\n`;
		}
		output += `---\n\n`;
	}

	return new Response(output, {
		headers: {
			'Content-Type': 'text/markdown; charset=utf-8',
		},
	});
};
