import type { Metadata } from 'next'
import OurApproach from '@/views/OurApproach'

export const metadata: Metadata = {
  title: 'Our Approach to Senior Home Care | Bloom Home Care Katy, TX',
  description: "Discover Bloom Home Care's relationship-first approach to non-medical home care. Intentional, consistent, and deeply human care for seniors and adults across Prosper, Frisco, McKinney, Allen, and Katy, TX, TX.",
  keywords: [
    'home care approach Katy, TX',
    'relationship-first senior care',
    'intentional home care Texas',
    'dignified elder care Katy, TX',
    'Bloom Home Care values',
    'compassionate home care Prosper TX',
    'consistent caregiver Katy, TX',
    'non-medical home care philosophy',
  ],
  alternates: { canonical: 'https://bloomhomecare.org/approach' },
  openGraph: {
    title: 'Our Approach to Senior Home Care | Bloom Home Care',
    description: "Bloom Home Care's care is built on presence, patience, and consistency — not checklists. Learn the values that guide everything we do for families across Katy, TX.",
    url: 'https://bloomhomecare.org/approach',
    type: 'website',
    siteName: 'Bloom Home Care Home Care',
  },
  twitter: {
    card: 'summary',
    title: 'Our Approach to Senior Home Care | Bloom Home Care Katy, TX',
    description: 'Relationship-first home care built on presence, consistency, and dignity. Serving Prosper, Frisco, McKinney, Allen, and greater Katy, TX.',
  },
}

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Our Approach to Home Care — Bloom Home Care',
  description: "Bloom Home Care's approach to care is built on five core values: slowing down, listening closely, acting with intention, showing up consistently, and treating people as people — not tasks.",
  url: 'https://bloomhomecare.org/approach',
  mainEntity: {
    '@type': 'Organization',
    '@id': 'https://bloomhomecare.org/#business',
    name: 'Bloom Home Care Home Care',
    description: 'Compassionate non-medical home care for seniors and adults in Katy, TX, TX.',
    url: 'https://bloomhomecare.org',
    telephone: '+12819756044',
    founder: {
      '@type': 'Person',
      name: 'Bloom Home Care Founders',
    },
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Katy',
        addressRegion: 'TX',
        addressCountry: 'US',
      },
    },
    knowsAbout: [
      'Non-medical home care',
      'Companion care for seniors',
      'Personal care assistance',
      'Respite care for family caregivers',
      'Post-hospital recovery care',
      'Aging in place',
      'Dementia companion care',
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomhomecare.org' },
    { '@type': 'ListItem', position: 2, name: 'Our Approach', item: 'https://bloomhomecare.org/approach' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <OurApproach />
    </>
  )
}
