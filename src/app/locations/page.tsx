import type { Metadata } from 'next'
import ServiceAreas from '@/views/services/ServiceAreas'

export const metadata: Metadata = {
  title: 'Home Care Service Areas | Greater Houston, TX | Bloom Home Care',
  description: 'Bloom Home Care provides in-home care across Greater Houston — Katy, Sugar Land, The Woodlands, Pearland, Galveston and more. Locally owned. Call 281-975-6044.',
  keywords: [
    'home care Greater Houston TX',
    'senior care Houston TX',
    'in-home care Katy TX',
    'home care service areas Houston',
    'non-medical home care Houston',
  ],
  alternates: { canonical: 'https://bloomhomecare.org/locations' },
  openGraph: {
    title: 'Home Care Service Areas | Greater Houston, TX | Bloom Home Care',
    description: 'In-home care for seniors across Greater Houston. Katy, Sugar Land, The Woodlands, Pearland, Galveston and 25+ more communities.',
    url: 'https://bloomhomecare.org/locations',
    type: 'website',
    siteName: 'Bloom Home Care',
  },
  twitter: {
    card: 'summary',
    title: 'Home Care Service Areas | Greater Houston | Bloom Home Care',
    description: 'In-home care across Greater Houston. Call 281-975-6044.',
  },
}

const allCities = [
  { name: 'Katy, TX', url: 'https://bloomhomecare.org/locations/katy-tx' },
  { name: 'Fulshear, TX', url: 'https://bloomhomecare.org/locations/fulshear-tx' },
  { name: 'Richmond, TX', url: 'https://bloomhomecare.org/locations/richmond-tx' },
  { name: 'Rosenberg, TX', url: 'https://bloomhomecare.org/locations/rosenberg-tx' },
  { name: 'Cinco Ranch, TX', url: 'https://bloomhomecare.org/locations/cinco-ranch-tx' },
  { name: 'Brookshire, TX', url: 'https://bloomhomecare.org/locations/brookshire-tx' },
  { name: 'Spring, TX', url: 'https://bloomhomecare.org/locations/spring-tx' },
  { name: 'The Woodlands, TX', url: 'https://bloomhomecare.org/locations/the-woodlands-tx' },
  { name: 'Conroe, TX', url: 'https://bloomhomecare.org/locations/conroe-tx' },
  { name: 'Tomball, TX', url: 'https://bloomhomecare.org/locations/tomball-tx' },
  { name: 'Cypress, TX', url: 'https://bloomhomecare.org/locations/cypress-tx' },
  { name: 'Humble, TX', url: 'https://bloomhomecare.org/locations/humble-tx' },
  { name: 'Kingwood, TX', url: 'https://bloomhomecare.org/locations/kingwood-tx' },
  { name: 'Pasadena, TX', url: 'https://bloomhomecare.org/locations/pasadena-tx' },
  { name: 'Baytown, TX', url: 'https://bloomhomecare.org/locations/baytown-tx' },
  { name: 'Channelview, TX', url: 'https://bloomhomecare.org/locations/channelview-tx' },
  { name: 'Deer Park, TX', url: 'https://bloomhomecare.org/locations/deer-park-tx' },
  { name: 'La Porte, TX', url: 'https://bloomhomecare.org/locations/la-porte-tx' },
  { name: 'Pearland, TX', url: 'https://bloomhomecare.org/locations/pearland-tx' },
  { name: 'Missouri City, TX', url: 'https://bloomhomecare.org/locations/missouri-city-tx' },
  { name: 'Sugar Land, TX', url: 'https://bloomhomecare.org/locations/sugar-land-tx' },
  { name: 'League City, TX', url: 'https://bloomhomecare.org/locations/league-city-tx' },
  { name: 'Friendswood, TX', url: 'https://bloomhomecare.org/locations/friendswood-tx' },
  { name: 'Alvin, TX', url: 'https://bloomhomecare.org/locations/alvin-tx' },
  { name: 'Manvel, TX', url: 'https://bloomhomecare.org/locations/manvel-tx' },
  { name: 'Webster, TX', url: 'https://bloomhomecare.org/locations/webster-tx' },
  { name: 'Clear Lake, TX', url: 'https://bloomhomecare.org/locations/clear-lake-tx' },
  { name: 'Galveston, TX', url: 'https://bloomhomecare.org/locations/galveston-tx' },
]

const serviceAreasSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Bloom Home Care Service Areas — Greater Houston, TX',
  description: 'Cities and communities served by Bloom Home Care across Greater Houston, TX.',
  url: 'https://bloomhomecare.org/locations',
  itemListElement: allCities.map((city, i) => ({ '@type': 'ListItem', position: i + 1, name: city.name, url: city.url })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomhomecare.org' },
    { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://bloomhomecare.org/locations' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreasSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServiceAreas />
    </>
  )
}
