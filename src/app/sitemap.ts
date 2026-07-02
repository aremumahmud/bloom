import { MetadataRoute } from 'next'

const BASE_URL = 'https://bloomhomecare.org'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                       lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/services`,         lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/locations`,        lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/our-story`,        lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/approach`,         lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/faq`,              lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog`,             lastModified: now, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${BASE_URL}/careers`,          lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/contact`,          lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ]

  const servicePages: MetadataRoute.Sitemap = [
    'companion-care',
    'personal-care',
    'dementia-care',
    'respite-care',
    'post-hospital-care',
    'end-of-life-care',
    'in-facility-care',
    'specialized-care',
  ].map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const locationPages: MetadataRoute.Sitemap = [
    'katy-tx', 'fulshear-tx', 'richmond-tx', 'rosenberg-tx', 'cinco-ranch-tx', 'brookshire-tx',
    'spring-tx', 'the-woodlands-tx', 'conroe-tx', 'tomball-tx', 'cypress-tx', 'humble-tx', 'kingwood-tx',
    'pasadena-tx', 'baytown-tx', 'channelview-tx', 'deer-park-tx', 'la-porte-tx',
    'pearland-tx', 'missouri-city-tx', 'sugar-land-tx', 'league-city-tx', 'friendswood-tx',
    'alvin-tx', 'manvel-tx', 'webster-tx', 'clear-lake-tx', 'galveston-tx',
  ].map((slug) => ({
    url: `${BASE_URL}/locations/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...servicePages, ...locationPages]
}
