import test from 'node:test';
import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import MiniSearch from 'minisearch';
import { createEditionSearchIndex, renderedPassages } from '../src/lib/editionSearchIndex.js';
import { SEARCH_OPTIONS, searchStories, resultPassage, resultHref, highlightParts, normalizeQuery } from '../src/lib/storySearch.js';
import { storyAnchor } from '../src/lib/storyAnchors.js';
import { matchesStoryFilters } from '../src/lib/storyFilters.js';

const stories = [
  { id: 'pg', title: 'PostgreSQL replication', social_post: 'Reliable **PostgreSQL** replication uses `write-ahead` logs &amp; checkpoints.\n\nRecovery keeps data safe.', source: 'HN', authors: ['Ada Lovelace'], interest_score: 8 },
  { id: 'repo', title: 'Database tooling', social_post: 'New releases make PostgreSQL inspection easier.', source: 'github', authors: ['Grace Hopper'], why_read: 'Quorum diagnosis', interest_score: 9 },
  { id: 'legacy', title: 'Storage research', social_post: 'PostgreSQL experiments.', source: 'arxiv' },
  { id: 'news', title: 'Storage announcement', social_post: 'PostgreSQL release.', source: 'news', interest_score: 10 },
];
const editions = [{ date: '2026-01-01', stories }, { date: '2026-01-02', stories: [stories[0]] }];
const index = createEditionSearchIndex(editions);

test('extracts rendered Markdown text, decodes entities and preserves block boundaries', () => {
  assert.deepEqual(renderedPassages('Hello **bold** and [linked](https://example.com) `code` &amp; &#8212; text.\n\n- First\n- Second\n\n<script>secret</script>\n\n![hidden alt](image.png)'), ['Hello bold and linked code & — text.', 'First', 'Second']);
  assert.deepEqual(renderedPassages('One<br>two'), ['One two']);
});

test('searches titles, body, authors and tooltip notes with prefix and typo matching', () => {
  assert.equal(searchStories(index, 'Postgre')[0].title, 'PostgreSQL replication');
  assert.equal(searchStories(index, 'PostgreSGL').length, 5);
  assert.equal(searchStories(index, 'Ada Lovelace').length, 2);
  assert.equal(searchStories(index, 'quorum')[0].title, 'Database tooling');
  assert.equal(searchStories(index, 'replication nonexistent').length, 0);
});

test('preserves source, edition and original signal filter semantics', () => {
  assert.equal(matchesStoryFilters('hn', 11, 'all', '9'), false);
  assert.equal(searchStories(index, 'PostgreSQL', { source: 'hn' }).length, 3);
  assert.equal(searchStories(index, 'PostgreSQL', { source: 'github' }).length, 1);
  assert.equal(searchStories(index, 'PostgreSQL', { source: 'news' }).length, 1);
  assert.equal(searchStories(index, 'PostgreSQL', { signal: '8' }).length, 2);
  assert.equal(searchStories(index, 'PostgreSQL', { signal: '9' }).length, 2);
  assert.equal(searchStories(index, 'PostgreSQL', { edition: '2026-01-02' }).length, 1);
});

test('links to literal visible passages and falls back for hidden metadata', () => {
  const match = searchStories(index, 'write-ahead')[0];
  const passage = resultPassage(match);
  assert.ok(passage.fragment.includes('write-ahead'));
  assert.ok(!passage.fragment.includes('**'));
  assert.ok(match.passages.some((text) => text.includes(passage.fragment)));
  assert.ok(resultHref(match, passage.fragment).includes('write%2Dahead'));
  const hidden = searchStories(index, 'quorum')[0];
  assert.equal(resultPassage(hidden).fragment, '');
  assert.equal(resultHref(hidden, ''), '/2026-01-01/#story-repo');
});

test('story IDs keep anchors stable across edits, ordering and repeated dates', () => {
  assert.equal(storyAnchor(stories[0]), storyAnchor({ ...stories[0], title: 'Edited title' }));
  const matches = searchStories(index, 'Ada');
  assert.equal(new Set(matches.map((match) => match.href)).size, 2);
  assert.equal(matches[0].editionDate, '2026-01-02');
});

test('highlighting preserves text literally and does not match inside words', () => {
  const text = '<img src=x onerror=alert(1)> PostgreSQL postgresqlx';
  const parts = highlightParts(text, ['postgresql']);
  assert.equal(parts.map((part) => part.text).join(''), text);
  assert.deepEqual(parts.filter((part) => part.match).map((part) => part.text), ['PostgreSQL']);
  assert.equal(normalizeQuery('  two   words  '), 'two words');
  for (const query of ['', 'a', '!!']) assert.deepEqual(searchStories(index, query), []);
});

test('indexes the complete real archive and supports async serialization roundtrip', async () => {
  const dir = new URL('../src/content/editions/', import.meta.url);
  const archive = await Promise.all((await readdir(dir)).filter((file) => file.endsWith('.json')).map(async (file) => JSON.parse(await readFile(new URL(file, dir), 'utf8'))));
  const total = archive.reduce((sum, edition) => sum + edition.stories.length, 0);
  const full = createEditionSearchIndex(archive);
  assert.equal(full.documentCount, total);
  for (const edition of archive) {
    assert.equal(new Set(edition.stories.map(storyAnchor)).size, edition.stories.length);
    for (const story of edition.stories) assert.ok(full.has(`/${edition.date}/#${storyAnchor(story)}`));
  }
  const loaded = await MiniSearch.loadJSONAsync(JSON.stringify(full), SEARCH_OPTIONS);
  assert.equal(loaded.documentCount, total);
  assert.deepEqual(searchStories(loaded, 'postgres').map((match) => match.id), searchStories(full, 'postgres').map((match) => match.id));
});
