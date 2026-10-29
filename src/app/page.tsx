import type { Metadata } from 'next'
import { HomePage } from '@/views/homepage'

export const metadata: Metadata = {
  title: 'Home Care Agency Katy, TX | Bloom Home Care',
  description: 'Nurse-owned and nurse-led non-medical home care in Katy, TX. Personal care, companion care, dementia support, respite care, and post-hospital support for local families.',
  keywords: [
    'home care Katy TX',
    'senior home care Katy TX',
    'companion care Katy TX',
    'personal care Katy TX',
    'respite care Katy TX',
    'non-medical home care',
    'in-home care services',
    'home care agency Harris County',
    'Bloom Home Care',
    'elderly care Katy TX',
  ],
  alternates: {
    canonical: 'https://bloomhomecare.org',
  },
  openGraph: {
    title: 'Bloom Home Care — Trusted In-Home Care in Katy, TX',
    description: 'Compassionate non-medical home care for seniors and adults in Katy, TX and surrounding areas. Locally owned and operated.',
    type: 'website',
    locale: 'en_US',
    url: 'https://bloomhomecare.org',
    siteName: 'Bloom Home Care',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bloom Home Care — Senior Care in Katy, TX',
    description: 'Compassionate non-medical home care in Katy, TX and surrounding areas. Call 281-975-6044.',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://bloomhomecare.org/#business',
  name: 'Bloom Home Care',
  description: 'Compassionate non-medical home care services for seniors and adults in Katy, TX and surrounding areas.',
  url: 'https://bloomhomecare.org',
  telephone: '+12819756044',
  priceRange: '$$',
  image: 'https://bloomhomecare.org/og-image.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4338 San Pellegrino Pl',
    addressLocality: 'Katy',
    addressRegion: 'TX',
    postalCode: '77493',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Katy', 'containedInPlace': { '@type': 'State', name: 'Texas' } },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Home Care Services',
    itemListElement: [
      'Companion Care',
      'Personal Care',
      'Meal Preparation',
      'Medication Reminders',
      'Transitional Care',
      'Respite Care',
      'End-of-Life Care',
      'In-Facility Support',
    ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
  },
  sameAs: [
    'https://www.instagram.com/bloomhomecare/',
    'https://www.facebook.com/bloomhomecare',
  ],
  employee: {
    '@type': 'Person',
    name: 'Jackeline Herrera',
    url: 'https://bloomhomecare.org/our-story',
    jobTitle: 'RN, BSN, Administrator',
    worksFor: { '@id': 'https://bloomhomecare.org/#business' },
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://bloomhomecare.org/#website',
  name: 'Bloom Home Care',
  url: 'https://bloomhomecare.org',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://bloomhomecare.org/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <HomePage />
    </>
  )
}
