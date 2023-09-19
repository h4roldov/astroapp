import { defineCollection, z } from 'astro:content';

const articleCollection = defineCollection({
    schema: z.object({
        date: z.string(),
        image: z.string(),
        title: z.string()
    })
});

export const collections = {
    articles: articleCollection
};