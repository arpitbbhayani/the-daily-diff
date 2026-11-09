import MiniSearch from 'minisearch';
import { marked } from 'marked';
import { parseFragment } from 'parse5';
import { getStorySource } from './storyClassification.ts';
import { SEARCH_OPTIONS } from './storySearch.js';
import { storyAnchor } from './storyAnchors.js';

const BLOCKS = new Set(['p', 'div', 'section', 'article', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'pre', 'blockquote', 'table', 'thead', 'tbody', 'tr', 'td', 'th']);
const IGNORED = new Set(['script', 'style', 'template', 'noscript']);

/** Extract literal text from the same Markdown rendering used by the reader.
 * Block boundaries stay separate so a text directive never spans two paragraphs.
 * @param {string} markdown
 */
export function renderedPassages(markdown) {
  const root = parseFragment(marked.parse(markdown, { async: false }));
  /** @type {string[]} */
  const passages = [];
  let buffer = '';
  const flush = () => {
    const text = buffer.replace(/\s+/gu, ' ').trim();
    if (text) passages.push(text);
    buffer = '';
  };
  /** @param {import('parse5').DefaultTreeAdapterTypes.Node} node */
  const visit = (node) => {
    if (node.nodeName === '#text' && 'value' in node) { buffer += node.value; return; }
    const tag = 'tagName' in node ? node.tagName : '';
    if (IGNORED.has(tag)) return;
    if (tag === 'br') { buffer += ' '; return; }
    if (BLOCKS.has(tag)) flush();
    if ('childNodes' in node) node.childNodes.forEach(visit);
    if (BLOCKS.has(tag)) flush();
  };
  visit(root);
  flush();
  return passages;
}

/** @typedef {{ id: string, title: string, social_post?: string, source?: string, authors?: string[], why_read?: string, interest_score?: number }} SearchStory */
/** @param {{ date: string, stories: SearchStory[] }[]} editions */
export function createEditionSearchIndex(editions) {
  const index = new MiniSearch(SEARCH_OPTIONS);
  index.addAll(editions.flatMap((edition) => edition.stories.map((story) => {
    const href = `/${edition.date}/#${storyAnchor(story)}`;
    const passages = renderedPassages(story.social_post || '');
    return {
      id: href, href, title: story.title,
      summary: passages[0] || story.why_read || story.title,
      body: passages.join('\n\n'),
      authors: story.authors || [],
      why_read: story.why_read || '',
      editionDate: edition.date,
      source: getStorySource(story),
      interest_score: story.interest_score,
      // Tooltip-only metadata is searchable but cannot be a visible text target.
      passages: [...passages, story.title],
    };
  })));
  return index;
}
