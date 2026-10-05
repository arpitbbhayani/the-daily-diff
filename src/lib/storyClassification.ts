export type StorySection = 'hn' | 'news' | 'github';
export type StorySource = StorySection;

export interface StoryMetadata {
	source?: string;
	section?: string;
}

/**
 * Resolves the canonical edition tab ('hn' | 'news' | 'github') for a story based on source.
 * Defaults to 'hn' for legacy stories unless source is 'github' or 'news'.
 */
export function getStorySource(story: StoryMetadata): StorySection {
	const src = story.source?.toLowerCase();
	if (src === 'news') {
		return 'news';
	}
	if (src === 'github') {
		return 'github';
	}
	return 'hn';
}

export const getStorySection = getStorySource;

/**
 * Determines whether a story belongs to the "NEWS" section based on source.
 */
export function isNewsStory(story: StoryMetadata): boolean {
	return getStorySource(story) === 'news';
}

