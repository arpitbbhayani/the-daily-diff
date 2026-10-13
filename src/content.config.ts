import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const editionStorySchema = z.object({
  id: z.string(),
  url: z.string(),
  source: z.string(),
  hn_id: z.string().optional(),
  title: z.string(),
  authors: z.array(z.string()).default([]),
  event_type: z.string().optional(),
  social_post: z.string().default(''),
  why_read: z.string().optional(),
  image: z.string().nullable().optional(),
  section: z.string().optional(),
  interest_score: z.number().optional(),
  comments: z.string().url().optional(),
  depth_score: z.number().optional(),
  novelty_score: z.number().optional(),
  utility_score: z.number().optional(),
}).passthrough();

const editions = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/editions' }),
  schema: z.object({
    date: z.string(),
    stories: z.array(editionStorySchema),
  }).passthrough(),
});

export const collections = { editions, edition: editions };

