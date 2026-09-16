import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogPost from '@/views/BlogPost'
import { getAllBlogPosts, getBlogPostBySlug, getRelatedBlogPosts } from '@/content/blog-posts'

const BASE_URL = 'https://bloomhomecare.org'

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) {
    return { title: 'Blog | Bloom Home Care', robots: { index: false } }
  }

  const url = `${BASE_URL}/blog/${post.slug}`

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      type: 'article',
      siteName: 'Bloom Home Care',
      images: post.cover_image_url ? [{ url: `${BASE_URL}${post.cover_image_url}` }] : undefined,
      publishedTime: post.published_at,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
    },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  const relatedPosts = getRelatedBlogPosts(post.slug)
  const url = `${BASE_URL}/blog/${post.slug}`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    image: post.cover_image_url ? `${BASE_URL}${post.cover_image_url}` : undefined,
    datePublished: post.published_at,
    dateModified: post.published_at,
    author: { '@type': 'Organization', name: 'Bloom Home Care', url: BASE_URL },
    reviewedBy: { '@type': 'Person', name: post.reviewedBy.split(',')[0] },
    publisher: {
      '@type': 'Organization',
      name: 'Bloom Home Care',
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/bloom-logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }

  const faqSectionMatch = post.content.match(/## Frequently Asked Questions\n([\s\S]+?)(?=\n## |$)/)
  const faqMatches = faqSectionMatch
    ? [...faqSectionMatch[1].matchAll(/^### (.+)\n\n([\s\S]+?)(?=\n### |\n## |$)/gm)]
    : []
  const faqSchema =
    faqMatches.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqMatches.map(([, question, answer]) => ({
            '@type': 'Question',
            name: question.trim(),
            acceptedAnswer: { '@type': 'Answer', text: answer.trim().replace(/\n/g, ' ') },
          })),
        }
      : null

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BlogPost post={post} relatedPosts={relatedPosts} />
    </>
  )
}
