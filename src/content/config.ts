import { defineCollection, z } from "astro:content";
const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: ({image}) => z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image(),
    featured: z.boolean(),
    series: z.string().optional().nullable()
  }),
});

export const collections = { blog };
