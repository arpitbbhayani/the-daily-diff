export interface StoryMetadata {
	title?: string;
	why_read?: string;
	tags?: string[];
	url?: string;
	section?: string;
	is_news?: boolean;
	is_announcement?: boolean;
	categories?: string;
}

const NEWS_TAGS = new Set([
	'news',
	'announcement',
	'announcements',
	'launch',
	'launches',
	'product-launch',
	'release',
	'releases',
	'new-release',
	'new-model',
	'model-release',
	'breakthrough',
	'open-weight-models',
]);

const STRONG_VERB_REGEX = /\b(releases?|released|announced?|announces?|announcing|unveils?|unveiled|open-weight-models?|breakthrough)\b/i;
const INTRO_VERB_REGEX = /\b(introduces?|adds?)\b.+\b(model|framework|library|tool|runtime|engine|api|benchmark|compiler|algorithm|dataset|system|support)\b/i;
const PHRASE_REGEX = /\b(new model|new library|new tool|new framework|major release)\b/i;
const LAUNCH_VERB_REGEX = /\b([A-Z][a-zA-Z0-9_.-]*\s+)+(launches|launched)\b/;

/**
 * Determines whether a story belongs to the "NEWS" section.
 * Supports explicit frontmatter flags (is_news, is_announcement, section: news),
 * tag-based taxonomy, URL release markers, and semantic title/summary detection.
 */
export function isNewsStory(story: StoryMetadata): boolean {
	// 1. Explicit frontmatter flags
	if (story.is_news === true || story.is_announcement === true) return true;
	if (story.section?.toLowerCase() === 'news' || story.section?.toLowerCase() === 'announcements') return true;
	if (story.categories?.toLowerCase() === 'news' || story.categories?.toLowerCase() === 'announcements') return true;

	// 2. Tag-based matching
	if (story.tags && story.tags.some((t) => NEWS_TAGS.has(t.toLowerCase()))) {
		return true;
	}

	// 3. URL release indicators (e.g. GitHub releases, announcement URLs)
	if (story.url && /\/(releases|tags?)\/|\/announc/i.test(story.url)) {
		return true;
	}

	// 4. Headline / title semantic classification
	if (story.title) {
		if (STRONG_VERB_REGEX.test(story.title)) return true;
		if (INTRO_VERB_REGEX.test(story.title)) return true;
		if (PHRASE_REGEX.test(story.title)) return true;
		if (LAUNCH_VERB_REGEX.test(story.title)) return true;
	}

	// 5. why_read summary cues
	if (story.why_read && /\b(release overview|product launch|announces?\b|unveils?\b|new model\b|major release\b)/i.test(story.why_read)) {
		return true;
	}

	return false;
}
