import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://portfolio-mauricio-girardi.vercel.app/',
      changeFrequency: 'never',
      priority: 1
    },
    {
      url: 'https://portfolio-mauricio-girardi.vercel.app/about',
      changeFrequency: 'never',
      priority: 0.8
    },
    {
      url: 'https://portfolio-mauricio-girardi.vercel.app/projects',
      changeFrequency: 'never',
      priority: 0.7
    },
    {
      url: 'https://portfolio-mauricio-girardi.vercel.app/contact',
      changeFrequency: 'never',
      priority: 0.6
    }
  ]
}
