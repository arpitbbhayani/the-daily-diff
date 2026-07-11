import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    source: z.string(),
    url: z.string().url(),
    date: z.string(),
    tags: z.array(z.string()).default([]),
    arxiv_id: z.string().optional(),
    categories: z.string().optional(),
    why_read: z.string().optional(),
    authors: z.array(z.string()).default([]),
  }),
});

export const collections = { articles };
