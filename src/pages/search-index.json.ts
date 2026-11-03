import { getCollection } from 'astro:content';
import { createEditionSearchIndex } from '../lib/editionSearchIndex.js';

export async function GET() {
  const editions = await getCollection('editions');
  const index = createEditionSearchIndex(editions.map(({ data }) => data));
  return new Response(JSON.stringify(index), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
