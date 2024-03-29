import { z, defineCollection } from 'astro:content';

export const collections = {
    'objects': defineCollection({
      schema: z.object({
        name: z.string(),
        author: z.string(),
        version: z.number(),
        title: z.string(),
        category: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        related: z.array(z.object({
          name:z.string(),
          link:z.string(),
        })),
        image: z.string().optional(),
        postDocImage: z.string().optional(),
        notes: z.array(z.string()).optional(),
        draft: z.boolean().default(false),
        visibility: z.enum(['visible','blurred','redacted','hidden']).default('visible'),
      }),
    }),

    'authors': defineCollection({
      schema: z.object({
        name: z.string(),
        description: z.string(),
        icon: z.string(),
        ambient: z.string(),
      })
    }),

    'containment-classes': defineCollection({
      schema: z.object({
        name: z.string(),
        blurb: z.string(),
        order: z.number(),
      })
    }),

    'containment-sites':   defineCollection({
      schema: z.object({
        name: z.string(),
        blurb: z.string(),
      })
    }),

    'task-forces':  defineCollection({
      schema: z.object({
        name: z.string(),
        title: z.string(),
        blurb: z.string(),
      })
    }),

    'reports':  defineCollection({
      schema: z.object({
        type: z.string(),
        object: z.string().or(z.array(z.string())).optional(),
        instance: z.string(),
        label: z.string().optional(),
      })
    }),
  };
