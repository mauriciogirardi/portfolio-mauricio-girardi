import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    SITE_NAME: z.string(),
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development')
  },

  client: {
    NEXT_PUBLIC_BASE_URL: z.string().url(),
    NEXT_PUBLIC_SKILL_ICONS_URL: z.string().url(),
    NEXT_PUBLIC_GITHUB_STATS_URL: z.string().url(),
    NEXT_PUBLIC_GITHUB_STREAK_STATS_URL: z.string().url()
  },

  runtimeEnv: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    SITE_NAME: process.env.SITE_NAME,
    NEXT_PUBLIC_SKILL_ICONS_URL: process.env.NEXT_PUBLIC_SKILL_ICONS_URL,
    NEXT_PUBLIC_GITHUB_STATS_URL: process.env.NEXT_PUBLIC_GITHUB_STATS_URL,
    NEXT_PUBLIC_GITHUB_STREAK_STATS_URL:
      process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL
  }
})
