import type { Metadata } from 'next'
import Blog from '@/views/Blog'

export const metadata: Metadata = {
  title: 'Bloom Home Care Journal | Home Care Insights for Houston Families',
  description: "Read Bloom Home Care's blog for expert guidance on home care, aging in place, caregiver resources, and supporting loved ones across Prosper, Frisco, McKinney, Allen, and Katy, TX.",
  keywords: [
    'home care blog Katy, TX',
    'senior care tips',
    'aging in place Katy, TX TX',
    'caregiver resources',
    'home care advice Prosper TX',
    'family caregiver support',
    'elder care insights',
    'senior living tips Texas',
    'Bloom Home Care blog',
    'home care journal',
  ],
  alternates: { canonical: 'https://bloomhomecare.org/blog' },
  openGraph: {
    title: 'The Bloom Home Care Journal | Home Care Insights',
    description: 'Expert guidance on home care, aging with dignity, caregiver support, and family resources from the Bloom Home Care team in Katy, TX.',
    url: 'https://bloomhomecare.org/blog',
    type: 'website',
    siteName: 'Bloom Home Care',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bloom Home Care Journal | Home Care Insights for Houston Families',
    description: 'Thoughtful insights on home care, aging with dignity, and walking alongside the ones you love.',
  },
}

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'The Bloom Home Care Journal',
  description: 'Thoughtful insights on home care, aging with dignity, caregiver support, and family resources from Bloom Home Care in Katy, TX.',
  url: 'https://bloomhomecare.org/blog',
  publisher: {
    '@type': 'Organization',
    name: 'Bloom Home Care',
    '@id': 'https://bloomhomecare.org/#business',
    logo: {
      '@type': 'ImageObject',
      url: 'https://bloomhomecare.org/bloom-logo.png',
    },
  },
  inLanguage: 'en-US',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomhomecare.org' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://bloomhomecare.org/blog' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Blog />
    </>
  )
}
