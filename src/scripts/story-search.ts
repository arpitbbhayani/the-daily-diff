import MiniSearch, { type SearchResult } from 'minisearch';
import { SEARCH_OPTIONS, normalizeQuery, searchStories, resultPassage, resultHref, highlightParts } from '../lib/storySearch.js';

const form = document.querySelector<HTMLFormElement>('#story-search')!;
const query = document.querySelector<HTMLInputElement>('#search-query')!;
const source = document.querySelector<HTMLSelectElement>('#search-source')!;
const signal = document.querySelector<HTMLSelectElement>('#search-signal')!;
const edition = document.querySelector<HTMLSelectElement>('#search-edition')!;
const status = document.querySelector<HTMLElement>('#search-status')!;
const results = document.querySelector<HTMLOListElement>('#search-results')!;
const retry = document.querySelector<HTMLButtonElement>('#search-retry')!;
const more = document.querySelector<HTMLButtonElement>('#search-more')!;
let currentMatches: SearchResult[] = [];
let shown = 0;
const pageSize = 20;
let indexPromise: Promise<MiniSearch> | undefined;
let revision = 0;
let timer: ReturnType<typeof setTimeout>;

function loadIndex() {
  return indexPromise ??= fetch('/search-index.json').then(async (response) => {
    if (!response.ok) throw new Error('Search index unavailable');
    return MiniSearch.loadJSONAsync(await response.text(), SEARCH_OPTIONS);
  }).catch((error) => {
    indexPromise = undefined;
    throw error;
  });
}

function restoreURL() {
  const params = new URLSearchParams(location.search);
  query.value = normalizeQuery(params.get('q') || '');
  for (const control of [source, signal, edition]) {
    const value = params.get(control.name) || 'all';
    control.value = Array.from(control.options).some((option) => option.value === value) ? value : 'all';
  }
}

function updateURL() {
  const url = new URL(location.href);
  url.search = '';
  const q = normalizeQuery(query.value);
  if (q) url.searchParams.set('q', q);
  for (const control of [source, signal, edition]) {
    if (control.value !== 'all') url.searchParams.set(control.name, control.value);
  }
  history.replaceState(null, '', url);
}

function appendHighlighted(element: HTMLElement, text: string, terms: string[]) {
  for (const part of highlightParts(text, terms)) {
    if (part.match) {
      const mark = document.createElement('mark');
      mark.textContent = part.text;
      element.append(mark);
    } else element.append(document.createTextNode(part.text));
  }
}

function appendNextResults() {
  const fragment = document.createDocumentFragment();
  for (const match of currentMatches.slice(shown, shown + pageSize)) {
    const item = document.createElement('li');
    const article = document.createElement('article');
    const meta = document.createElement('p');
    meta.className = 'search-result-meta';
    const time = document.createElement('time');
    time.dateTime = match.editionDate;
    time.textContent = match.editionDate;
    meta.append(time, ` · ${match.source.toUpperCase()}`);
    if (match.authors.length) meta.append(` · ${match.authors.join(", ")}`);
    const heading = document.createElement('h2');
    const link = document.createElement('a');
    const passage = resultPassage(match);
    link.href = resultHref(match, passage.fragment);
    appendHighlighted(link, match.title, match.terms);
    heading.append(link);
    const excerpt = document.createElement('p');
    excerpt.className = 'search-result-excerpt';
    appendHighlighted(excerpt, passage.text, match.terms);
    article.append(meta, heading, excerpt);
    item.append(article);
    fragment.append(item);
  }
  results.append(fragment);
  shown = results.children.length;
  more.hidden = shown >= currentMatches.length;
  more.textContent = `Show next ${Math.min(pageSize, currentMatches.length - shown)} stories`;
}

async function renderSearch() {
  const current = ++revision;
  const q = normalizeQuery(query.value);
  results.replaceChildren();
  retry.hidden = true;
  more.hidden = true;
  currentMatches = [];
  shown = 0;
  if (q.length < 2 || !/[\p{L}\p{N}]/u.test(q)) {
    status.textContent = 'Enter at least two characters to search.';
    results.removeAttribute('aria-busy');
    return;
  }
  status.textContent = 'Searching all editions…';
  results.setAttribute('aria-busy', 'true');
  try {
    const index = await loadIndex();
    if (current !== revision) return;
    const matches = searchStories(index, q, { source: source.value, signal: signal.value, edition: edition.value });
    status.textContent = matches.length ? `${matches.length} ${matches.length === 1 ? 'story' : 'stories'} found for “${q}”.`
      : `No stories found for “${q}”. Try another term or broaden the filters.`;
    currentMatches = matches;
    appendNextResults();
  } catch {
    if (current !== revision) return;
    status.textContent = 'Search could not load. Please retry, or browse the archive.';
    retry.hidden = false;
  } finally {
    if (current === revision) results.removeAttribute('aria-busy');
  }
}

query.addEventListener('input', () => {
  clearTimeout(timer);
  // Invalidate an in-flight request immediately, before the debounce expires.
  revision++;
  timer = setTimeout(() => { updateURL(); void renderSearch(); }, 180);
});
form.addEventListener('submit', (event) => {
  event.preventDefault();
  clearTimeout(timer);
  updateURL();
  void renderSearch();
});
for (const control of [source, signal, edition]) control.addEventListener('change', () => {
  clearTimeout(timer);
  updateURL();
  void renderSearch();
});
retry.addEventListener('click', () => { void renderSearch(); });
more.addEventListener('click', () => {
  const previous = shown;
  appendNextResults();
  results.children[previous]?.querySelector<HTMLAnchorElement>('a')?.focus();
  status.textContent = `${shown} of ${currentMatches.length} matching stories shown.`;
});
window.addEventListener('popstate', () => { clearTimeout(timer); restoreURL(); void renderSearch(); });
restoreURL();
query.focus({ preventScroll: true });
void renderSearch();
