import type { Metadata } from 'next'
import OurStory from '@/views/OurStory'

export const metadata: Metadata = {
  title: 'Our Story | Bloom Home Care — Katy, TX',
  description: 'Learn the story behind Bloom Home Care. Founded in Katy, TX from personal experience, we exist to provide compassionate, relationship-centered in-home care for seniors and adults with dignity and heart.',
  keywords: [
    'Bloom Home Care story',
    'home care founded Katy TX',
    'about Bloom Home Care',
    'why we started home care',
    'compassionate senior care Katy TX',
    'home care mission Katy TX',
  ],
  alternates: { canonical: 'https://bloomhomecare.org/our-story' },
  openGraph: {
    title: 'Our Story | Bloom Home Care — Katy, TX',
    description: 'Bloom Home Care was founded in Katy, TX from a personal belief that every person deserves dignified, relationship-centered care at home.',
    url: 'https://bloomhomecare.org/our-story',
    type: 'website',
    siteName: 'Bloom Home Care',
  },
  twitter: {
    card: 'summary',
    title: 'Our Story | Bloom Home Care',
    description: 'The story behind Bloom Home Care — founded in Katy, TX with purpose, heart, and personal experience.',
  },
}

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Our Story — Bloom Home Care',
  description: 'The founding story of Bloom Home Care, a locally owned non-medical home care agency in Katy, TX.',
  url: 'https://bloomhomecare.org/our-story',
  mainEntity: {
    '@type': 'Organization',
    '@id': 'https://bloomhomecare.org/#business',
    name: 'Bloom Home Care',
    url: 'https://bloomhomecare.org',
    telephone: '+12819756044',
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Katy',
        addressRegion: 'TX',
        addressCountry: 'US',
      },
    },
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomhomecare.org' },
    { '@type': 'ListItem', position: 2, name: 'Our Story', item: 'https://bloomhomecare.org/our-story' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <OurStory />
    </>
  )
}
