import type { Metadata } from 'next'
import SpringLocationPage from '@/views/services/SpringLocationPage'

export const metadata: Metadata = {
  title: 'Home Care Agency in Spring, TX | Bloom Home Care',
  description: 'Bloom Home Care is a trusted home care agency in Spring, TX. Screened caregivers, flexible schedules, free in-home assessments. Call 281-975-6044.',
  alternates: { canonical: 'https://bloomhomecare.org/locations/spring-tx' },
  openGraph: { title: 'Home Care Agency in Spring, TX | Bloom Home Care', url: 'https://bloomhomecare.org/locations/spring-tx', type: 'website', siteName: 'Bloom Home Care' },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://bloomhomecare.org/locations/spring-tx#business',
  name: 'Bloom Home Care',
  description: 'Licensed home care agency providing personal care, companion care, dementia care, respite, and 24-hour home care in Spring, TX and north Houston.',
  url: 'https://bloomhomecare.org/locations/spring-tx',
  telephone: '+12819756044',
  priceRange: '$$',
  address: { '@type': 'PostalAddress', addressLocality: 'Spring', addressRegion: 'TX', addressCountry: 'US' },
  areaServed: [
    { '@type': 'City', name: 'Spring', sameAs: 'https://en.wikipedia.org/wiki/Spring,_Texas' },
    '77373', '77379', '77386', '77388', '77389',
  ],
  sameAs: [
    'https://www.instagram.com/bloomhomecare/',
    'https://www.facebook.com/bloomhomecare',
  ],
  parentOrganization: { '@id': 'https://bloomhomecare.org/#business' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a home care agency in Spring, TX actually do?',
      acceptedAnswer: { '@type': 'Answer', text: "A home care agency places trained caregivers in the home so a person can go on living there safely. In Spring, Bloom Home Care covers personal care such as bathing and dressing, meal preparation, medication reminders, light housekeeping, transportation, and companionship. It is non-medical help, arranged around the client's life instead of the reverse." },
    },
    {
      '@type': 'Question',
      name: 'How quickly can home care start in Spring?',
      acceptedAnswer: { '@type': 'Answer', text: "Bloom Home Care replies within one business day, and care can often begin two to five business days after the free in-home assessment and completed service agreement, depending on the schedule, care needs, location, and caregiver availability. For urgent situations like a discharge from HCA Houston Healthcare Northwest or St. Luke's Health Springwoods Village, call and we will push to move faster." },
    },
    {
      '@type': 'Question',
      name: 'Are Bloom Home Care caregivers background checked?',
      acceptedAnswer: { '@type': 'Answer', text: "They are. Before anyone is assigned to a client, Bloom runs a criminal-history check, the required employee-registry screening, and reference checks. Texas licenses agencies like ours on top of that, and Bloom's license number 024086 can be confirmed with Texas Health and Human Services." },
    },
    {
      '@type': 'Question',
      name: 'Do you provide 24-hour home care in Spring?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Bloom Home Care provides overnight, extended-hour, and 24-hour home care throughout Spring using rotating caregiver shifts, including awake overnight caregivers for anyone at risk of falls or wandering. The shift structure and start date are settled after the in-home assessment.' },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between home care and home health care?',
      acceptedAnswer: { '@type': 'Answer', text: 'Home care is non-medical help with everyday life: bathing, meals, errands, and company. Home health care is skilled nursing or therapy ordered by a doctor, usually for a short stretch after illness or surgery, and often billed to Medicare. Many Spring families use both at once, and Bloom coordinates its schedule with the home health team.' },
    },
    {
      '@type': 'Question',
      name: 'Does Medicare or insurance pay for home care in Texas?',
      acceptedAnswer: { '@type': 'Answer', text: "Usually not. Traditional Medicare does not pay for non-medical home care, and Bloom Home Care does not accept Medicaid or STAR+PLUS. Many Spring families instead apply an active long-term care insurance policy toward the cost, and Bloom's team helps sort out what applies at the free assessment." },
    },
    {
      '@type': 'Question',
      name: 'Which Spring neighborhoods does Bloom Home Care serve?',
      acceptedAnswer: { '@type': 'Answer', text: 'All of them. Caregivers work across the 77373, 77379, 77386, 77388, and 77389 zip codes, including Gleannloch Farms, Augusta Pines, Klein, Windrose, Auburn Lakes, Spring Trails, Benders Landing, and Imperial Oaks, plus the areas around Old Town Spring and the I-45 and Grand Parkway corridors.' },
    },
    {
      '@type': 'Question',
      name: 'Is there a minimum number of hours, and can the schedule change?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most services carry a four-hour minimum per visit, though shorter visits may be workable depending on location, the services requested, and caregiver availability. Hours can be added, reduced, or paused as needs change, and there is no fixed-term contract to sign.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomhomecare.org' },
    { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://bloomhomecare.org/locations' },
    { '@type': 'ListItem', position: 3, name: 'Home Care in Spring, TX', item: 'https://bloomhomecare.org/locations/spring-tx' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SpringLocationPage />
    </>
  )
}
