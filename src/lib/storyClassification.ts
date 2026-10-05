export interface StoryMetadata {
	section?: string;
	is_news?: boolean;
	is_announcement?: boolean;
	source?: string;
}

/**
 * Determines whether a story belongs to the "NEWS" section.
 * Relies directly on the categorization assigned in frontmatter by the LLM
 * (e.g. section: 'news', is_news: true, or source: 'news').
 * No build-time heuristics, regex, or keyword sniffing.
 */
export function isNewsStory(story: StoryMetadata): boolean {
	if (story.section?.toLowerCase() === 'news' || story.section?.toLowerCase() === 'announcements') {
		return true;
	}
	if (story.is_news === true || story.is_announcement === true) {
		return true;
	}
	if (story.source?.toLowerCase() === 'news') {
		return true;
	}
	return false;
}
