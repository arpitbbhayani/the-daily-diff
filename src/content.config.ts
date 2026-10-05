import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const stories = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    source: z.string(),
    url: z.string().url(),
    date: z.string(),
    tags: z.array(z.string()).default([]),
    arxiv_id: z.string().optional(),
    hn_id: z.string().optional(),
    categories: z.string().optional(),
    why_read: z.string().optional(),
    authors: z.array(z.string()).default([]),
    interest_score: z.number().optional(),
    image: z.string().optional(),
    comments: z.string().url().optional(),
    section: z.string().optional(),
    depth_score: z.number().optional(),
    novelty_score: z.number().optional(),
    utility_score: z.number().optional(),
  }),
});

export const collections = { stories };
