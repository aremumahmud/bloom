import type { Metadata } from 'next'
import SugarLandLocationPage from '@/views/services/SugarLandLocationPage'

export const metadata: Metadata = {
  title: 'Home Care Agency in Sugar Land, TX | Bloom Home Care',
  description: 'Bloom Home Care is a trusted home care agency in Sugar Land, TX. Screened caregivers, flexible schedules, free in-home assessments. Call 281-975-6044.',
  alternates: { canonical: 'https://bloomhomecare.org/locations/sugar-land-tx' },
  openGraph: { title: 'Home Care Agency in Sugar Land, TX | Bloom Home Care', url: 'https://bloomhomecare.org/locations/sugar-land-tx', type: 'website', siteName: 'Bloom Home Care' },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://bloomhomecare.org/locations/sugar-land-tx#business',
  name: 'Bloom Home Care',
  description: 'Licensed home care agency (Texas HHS License #024086) providing personal care, companion care, dementia care, respite, and 24-hour home care in Sugar Land, TX and Fort Bend County.',
  url: 'https://bloomhomecare.org/locations/sugar-land-tx',
  telephone: '+12819756044',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Katy',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Sugar Land', containedInPlace: { '@type': 'State', name: 'Texas' } },
    '77478',
    '77479',
    '77498',
  ],
  parentOrganization: { '@id': 'https://bloomhomecare.org/#business' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomhomecare.org' },
    { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://bloomhomecare.org/locations' },
    { '@type': 'ListItem', position: 3, name: 'Home Care in Sugar Land, TX', item: 'https://bloomhomecare.org/locations/sugar-land-tx' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a home care agency in Sugar Land, TX actually do?',
      acceptedAnswer: { '@type': 'Answer', text: "A home care agency places trained caregivers in the home so a person can keep living there safely. In Sugar Land, Bloom Home Care provides personal care such as bathing and dressing, meal preparation, medication reminders, light housekeeping, transportation, and companionship. It is non-medical help, arranged around the client's life rather than the other way around." },
    },
    {
      '@type': 'Question',
      name: 'How soon can home care begin in Sugar Land?',
      acceptedAnswer: { '@type': 'Answer', text: 'Bloom Home Care responds within one business day, and care can often begin two to five business days after the free in-home assessment and completed service agreement, depending on the schedule, level of care, location, and caregiver availability. For urgent situations like a discharge from Houston Methodist Sugar Land or Memorial Hermann Sugar Land, call and we will do our best to move quickly.' },
    },
    {
      '@type': 'Question',
      name: 'Do you screen your caregivers?',
      acceptedAnswer: { '@type': 'Answer', text: "Yes. Before any caregiver is placed with a client, they clear a criminal-history check, the required employee-registry screening, and reference checks. Texas also licenses agencies like Bloom, and Bloom's license number 024086 can be confirmed with Texas Health and Human Services." },
    },
    {
      '@type': 'Question',
      name: 'Do you offer 24-hour home care in Sugar Land?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Bloom provides overnight, extended-hour, and full 24-hour care across Sugar Land using rotating caregiver shifts, with awake overnight caregivers for anyone at risk of falls or wandering. The precise shift pattern and start date are settled after the assessment.' },
    },
    {
      '@type': 'Question',
      name: 'What separates home care from home health care?',
      acceptedAnswer: { '@type': 'Answer', text: 'The difference is medical versus non-medical. Bloom provides home care, the non-medical kind: bathing, meals, errands, and companionship. Home health care means skilled nursing or therapy on a doctor\'s order, usually for a short spell after surgery or illness and often billed to Medicare. Many Sugar Land families use the two side by side, and Bloom builds its schedule around the home health team so nothing clashes.' },
    },
    {
      '@type': 'Question',
      name: 'Will Medicare or insurance pay for home care in Texas?',
      acceptedAnswer: { '@type': 'Answer', text: 'Generally, no. Traditional Medicare does not pay for non-medical home care, and Bloom does not accept Medicaid or STAR+PLUS. Many Sugar Land families do put an active long-term care insurance policy toward the bill, which can cover a solid portion. Bloom goes through exactly what applies at the free assessment.' },
    },
    {
      '@type': 'Question',
      name: 'Which Sugar Land neighborhoods does Bloom Home Care serve?',
      acceptedAnswer: { '@type': 'Answer', text: 'All of them. Caregivers work across the 77478, 77479, and 77498 zip codes, including First Colony, Telfair, Riverstone, Greatwood, New Territory, Sugar Creek, Avalon, and Commonwealth, plus the Sugar Land Town Square area and the US-59, Highway 6, and Grand Parkway corridors.' },
    },
    {
      '@type': 'Question',
      name: 'Is there a minimum number of hours, and can the schedule change?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most visits have a four-hour minimum, though a shorter visit may be possible depending on location, the services requested, and caregiver availability. Hours can be increased, reduced, or paused as your situation changes, and there is no fixed-term contract to sign.' },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SugarLandLocationPage />
    </>
  )
}
