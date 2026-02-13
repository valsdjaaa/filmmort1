const entries = defineCollection({
  loader: glob({ base: './src/content', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().optional(),

      type: z.enum(['film', 'text', 'photo']),

      date: z.coerce.date(),

      // zajedničko
      excerpt: z.string().optional(),

      // film
      director: z.string().optional(),
      year: z.number().or(z.string()).optional(),
      country: z.string().optional(),
      rating: z.string().optional(),
      rating_value: z.number().optional(),

      // photo
      poster: image().optional(),
      camera: z.string().optional(),
      location: z.string().optional(),

      // text
      // (ništa dodatno, body je tekst)

    }).passthrough(),
});
