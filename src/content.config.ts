import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const texts = defineCollection({
  loader: glob({ base: './src/content/texts', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      kicker: z.string().optional().nullable(),

      tags: z.array(z.string()).default([]),
      date: z.coerce.date(),

      excerpt: z.string().optional(),

      director: z.string().optional(),
      year: z.number().or(z.string()).optional(),
      country: z.string().optional(),
      rating: z.string().optional(),
      rating_value: z.number().optional(),

      poster: image().optional(),
      camera: z.string().optional(),
      location: z.string().optional(),
    }).passthrough(),
});

export const collections = {
  texts,
};
