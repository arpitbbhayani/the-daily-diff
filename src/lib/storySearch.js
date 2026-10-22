import MiniSearch from 'minisearch';
import { matchesStoryFilters } from './storyFilters.js';

/** @type {import('minisearch').Options} */
export const SEARCH_OPTIONS = {
  fields: ['title', 'body', 'authors', 'why_read'],
  storeFields: ['title', 'summary', 'authors', 'editionDate', 'source', 'interest_score', 'href', 'passages'],
  searchOptions: {
    boost: { title: 4, authors: 2 },
    combineWith: 'AND',
    prefix: (_term, index, terms) => index === terms.length - 1,
    fuzzy: (term) => term.length >= 5 ? 0.2 : false,
  },
};

/** @param {string} value */
export function normalizeQuery(value) {
  return value.trim().replace(/\s+/g, ' ').slice(0, 160);
}

/** @param {MiniSearch} index @param {string} query
 * @param {{ source?: string, signal?: string, edition?: string }} filters
 */
export function searchStories(index, query, filters = {}) {
  const q = normalizeQuery(query);
  if (q.length < 2 || !/[\p{L}\p{N}]/u.test(q)) return [];
  return index.search(q, {
    filter: (result) => matchesStoryFilters(result.source, result.interest_score, filters.source || 'all', filters.signal || 'all')
      && (!filters.edition || filters.edition === 'all' || result.editionDate === filters.edition),
  }).sort((a, b) => b.score - a.score || b.editionDate.localeCompare(a.editionDate));
}

/** @param {string[]} terms */
function termPattern(terms) {
  const escaped = [...new Set(terms)].filter(Boolean).sort((a, b) => b.length - a.length)
    .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  return escaped.length ? new RegExp(`(?<![\\p{L}\\p{N}_])(?:${escaped.join('|')})(?![\\p{L}\\p{N}_])`, 'giu') : null;
}

/** Only link to literal, visible text; fuzzy query spellings need not occur on the page.
 * @param {import('minisearch').SearchResult} result
 */
export function resultPassage(result) {
  const pattern = termPattern(result.terms);
  let passage = '';
  let bestScore = 0;
  if (pattern) {
    for (const text of /** @type {string[]} */ (result.passages)) {
      const matches = [...text.matchAll(pattern)];
      const score = new Set(matches.map((match) => match[0].toLowerCase())).size;
      if (score > bestScore) {
        passage = text;
        bestScore = score;
      }
    }
  }
  // Metadata can be searchable without being visible in the article body.
  // Use the story anchor alone instead of linking into a hidden tooltip.
  if (!passage) return { text: result.summary, fragment: '' };
  const firstMatch = pattern ? [...passage.matchAll(pattern)][0] : undefined;
  const matchStart = firstMatch?.index ?? 0;
  let start = Math.max(0, matchStart - 65);
  if (start > 0) {
    while (start > 0 && !/\s/u.test(passage[start - 1])) start--;
  }
  let end = Math.min(passage.length, Math.max(start + 210, matchStart + (firstMatch?.[0].length ?? 0)));
  while (end < passage.length && !/\s/u.test(passage[end])) end++;
  const excerpt = passage.slice(start, end).trim();
  let fragment = excerpt;
  // The reader floats the first letter of the first paragraph. That creates a
  // separate text block for native fragment matching: don't span that boundary.
  if (passage === result.passages[0] && start === 0) {
    const afterFirstWord = fragment.replace(/^\S+\s*/u, '');
    fragment = pattern && afterFirstWord.match(pattern)?.length ? afterFirstWord
      : pattern && result.title.match(pattern)?.length ? result.title : '';
  }
  return { text: `${start ? '…' : ''}${excerpt}${end < passage.length ? '…' : ''}`, fragment };
}

/** @param {string} value */
function encodeFragment(value) {
  // '-' is a delimiter in text-fragment context syntax, even though encodeURIComponent leaves it alone.
  return encodeURIComponent(value).replace(/-/g, '%2D');
}

/** @param {import('minisearch').SearchResult} result @param {string} fragment */
export function resultHref(result, fragment) {
  return result.href + (fragment ? `:~:text=${encodeFragment(fragment)}` : '');
}

/** Safe DOM rendering can create <mark> elements without interpolating HTML.
 * @param {string} text @param {string[]} terms
 */
export function highlightParts(text, terms) {
  const pattern = termPattern(terms);
  const parts = [];
  let end = 0;
  if (pattern) {
    for (const match of text.matchAll(pattern)) {
      parts.push({ text: text.slice(end, match.index), match: false }, { text: match[0], match: true });
      end = match.index + match[0].length;
    }
  }
  parts.push({ text: text.slice(end), match: false });
  return parts;
}
