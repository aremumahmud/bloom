import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Blog | Bloom Home Care',
  robots: { index: false },
}

export default function Page() {
  notFound()
}
