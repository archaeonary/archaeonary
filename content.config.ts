import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    terms: defineCollection({
      type: 'data',
      source: 'terms/**.json',
      schema: z.object({
        name: z.string(),
        transcription: z.string(),
        translation: z.string(),
        description: z.string().optional(),
      })
    })
  }
})