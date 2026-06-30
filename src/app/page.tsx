import type { Metadata } from 'next'
import { HomePage } from '@/views/homepage'

export const metadata: Metadata = {
  title: 'Bloom Home Care | Senior & Adult Home Care in Katy, TX',
  description: 'Bloom Home Care provides compassionate, non-medical home care for seniors and adults in Katy, TX. Companion care, personal care, respite care & more. Locally owned. Call 281-975-6044.',
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
  '@type': 'HomeAndConstructionBusiness',
  '@id': 'https://bloomhomecare.org/#business',
  name: 'Bloom Home Care',
  description: 'Compassionate non-medical home care services for seniors and adults in Katy, TX and surrounding areas.',
  url: 'https://bloomhomecare.org',
  telephone: '+12819756044',
  priceRange: '$$',
  image: 'https://bloomhomecare.org/og-image.jpg',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Katy',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Katy', 'containedInPlace': { '@type': 'State', name: 'Texas' } },
  ],
  serviceType: [
    'Companion Care',
    'Personal Care',
    'Meal Preparation',
    'Medication Reminders',
    'Transitional Care',
    'Respite Care',
    'End-of-Life Care',
    'In-Facility Support',
  ],
  sameAs: [
    'https://www.instagram.com/bloomhomecare/',
    'https://www.facebook.com/bloomhomecare',
  ],
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
