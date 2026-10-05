export type StorySection = 'hn' | 'news' | 'github';

export interface StoryMetadata {
	section?: string;
	is_news?: boolean;
	is_announcement?: boolean;
	source?: string;
}

/**
 * Resolves the canonical section ('hn' | 'news' | 'github') for a story.
 * Prioritizes explicit frontmatter section or is_news flags set by LLM metadata extraction,
 * with fallbacks for legacy stories.
 */
export function getStorySection(story: StoryMetadata): StorySection {
	const sec = story.section?.toLowerCase();
	if (sec === 'news' || sec === 'announcements' || story.is_news === true || story.is_announcement === true || story.source?.toLowerCase() === 'news') {
		return 'news';
	}
	if (sec === 'github') {
		return 'github';
	}
	if (sec === 'hn') {
		return 'hn';
	}
	// Fallback for legacy stories where section was a topic (ai, systems, databases, etc.)
	if (story.source?.toLowerCase() === 'github') {
		return 'github';
	}
	return 'hn';
}

/**
 * Determines whether a story belongs to the "NEWS" section.
 * Relies directly on the categorization assigned in frontmatter by the LLM
 * (e.g. section: 'news', is_news: true, or source: 'news').
 * No build-time heuristics, regex, or keyword sniffing.
 */
export function isNewsStory(story: StoryMetadata): boolean {
	return getStorySection(story) === 'news';
}
