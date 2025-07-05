import { defineCollection, z } from "astro:content";

const hero = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    sections: z.array(
      z.object({
        title: z.string(),
        subtitles: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
          })
        ),
      })
    ),
  }),
});

const dev = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    important: z.boolean().optional(),
    image: z.string(),
    desktop: z.string().optional(),
    mobile: z.string().optional(),
    date: z.date(),
    description: z.string(),
    actions: z.object({
      github: z.string().url().optional(),
      demo: z.string().url().optional(),
    }),
    tech: z.array(z.string()).min(1),
    type: z.enum(["completed", "wip"]),
  }),
});

const design = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    images: z.array(z.string()).min(1),
  }),
});

export const collections = {
  hero,
  dev,
  design,
};
