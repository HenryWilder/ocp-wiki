import { z, defineCollection } from 'astro:content';

const objectCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    author: z.string().default('Uniconwizard'), // Uni made like 90% of the content, so he's the default author
    version: z.number(),
    title: z.string(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    notes: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    visibility: z.enum(['visible','blurred','redacted','hidden']).default('visible'),
  }),
});

const authorCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    title: z.string(),
    category: z.string(),
  })
});

export const collections = {
    'objects': objectCollection,
    'authors': authorCollection,
  };
