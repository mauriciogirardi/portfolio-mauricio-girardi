import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://portfolio-mauricio-girardi.vercel.app/',
      changeFrequency: 'never',
      priority: 1,
      lastModified: '2024-05-23T21:27:31+00:00'
    },
    {
      url: 'https://portfolio-mauricio-girardi.vercel.app/about',
      changeFrequency: 'never',
      priority: 0.8,
      lastModified: '2024-05-23T21:27:31+00:00'
    },
    {
      url: 'https://portfolio-mauricio-girardi.vercel.app/projects',
      changeFrequency: 'monthly',
      priority: 0.7,
      lastModified: '2024-05-23T21:27:31+00:00'
    },
    {
      url: 'https://portfolio-mauricio-girardi.vercel.app/contact',
      changeFrequency: 'never',
      priority: 0.6,
      lastModified: '2024-05-23T21:27:31+00:00'
    },
    {
      url: 'https://portfolio-mauricio-girardi.vercel.app/resume-mauricio-girardi-2024.pdf',
      changeFrequency: 'never',
      priority: 0.8,
      lastModified: '2024-05-23T21:27:31+00:00'
    }
  ]
}
