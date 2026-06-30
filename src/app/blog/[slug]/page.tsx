import type { Metadata } from 'next'
import BlogPost from '@/views/BlogPost'
import { supabase } from '@/integrations/supabase/client'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params

  const { data: post } = await supabase
    .from('blog_posts')
    .select('title, excerpt, cover_image_url, published_at, tags, slug')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (!post) {
    return {
      title: 'Post Not Found | Bloom Home Care Blog',
      robots: { index: false },
    }
  }

  const title = `${post.title} | Bloom Home Care Home Care Blog`
  const description =
    post.excerpt ??
    "Read this article from Bloom Home Care's home care blog. Thoughtful insights on aging in place, caregiving, and supporting loved ones in Katy, TX."
  const canonical = `https://bloomhomecare.org/blog/${post.slug}`
  const image = post.cover_image_url ?? 'https://bloomhomecare.org/og-image.png'

  return {
    title,
    description,
    keywords: ['home care blog', 'senior care Katy, TX', 'aging in place', 'caregiver tips', ...(post.tags ?? [])],
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'article',
      siteName: 'Bloom Home Care Home Care',
      images: [{ url: image, alt: post.title }],
      ...(post.published_at ? { publishedTime: post.published_at } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params

  const [{ data: post }, { data: relatedPosts }] = await Promise.all([
    supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single(),
    supabase
      .from('blog_posts')
      .select('title, slug, excerpt, cover_image_url')
      .eq('status', 'published')
      .neq('slug', slug)
      .order('published_at', { ascending: false })
      .limit(3),
  ])

  const blogPostingSchema = post
    ? {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt ?? undefined,
        image: post.cover_image_url ?? undefined,
        datePublished: post.published_at ?? undefined,
        dateModified: post.published_at ?? undefined,
        url: `https://bloomhomecare.org/blog/${post.slug}`,
        author: {
          '@type': 'Organization',
          name: 'Bloom Home Care Home Care',
          url: 'https://bloomhomecare.org',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Bloom Home Care Home Care',
          '@id': 'https://bloomhomecare.org/#business',
          logo: {
            '@type': 'ImageObject',
            url: 'https://bloomhomecare.org/bloom-logo.png',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://bloomhomecare.org/blog/${post.slug}`,
        },
        isPartOf: {
          '@type': 'Blog',
          name: 'The Bloom Home Care Journal',
          url: 'https://bloomhomecare.org/blog',
        },
      }
    : null

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomhomecare.org' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://bloomhomecare.org/blog' },
      ...(post
        ? [{ '@type': 'ListItem', position: 3, name: post.title, item: `https://bloomhomecare.org/blog/${post.slug}` }]
        : []),
    ],
  }

  return (
    <>
      {blogPostingSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BlogPost post={post} relatedPosts={relatedPosts ?? []} />
    </>
  )
}
