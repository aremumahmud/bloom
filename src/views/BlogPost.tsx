import Link from "next/link";
import { format } from "date-fns";
import { ArrowLeft, Calendar, ArrowRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";

const serviceLinks = [
  { keywords: ["companion", "companionship", "loneliness", "isolation", "social"], path: "/services/companion-care", label: "Companion Care" },
  { keywords: ["personal care", "bathing", "dressing", "adl", "daily living", "hygiene"], path: "/services/personal-care", label: "Personal Care" },
  { keywords: ["respite", "caregiver burnout", "family caregiver", "caregiver fatigue"], path: "/services/respite-care", label: "Respite Care" },
  { keywords: ["hospital", "surgery", "recovery", "rehab", "discharge", "readmission"], path: "/services/post-hospital-care", label: "Post-Hospital Care" },
];

function getRelevantServices(content: string, tags: string[] | null): typeof serviceLinks {
  const text = (content + " " + (tags || []).join(" ")).toLowerCase();
  return serviceLinks.filter(link => link.keywords.some(kw => text.includes(kw)));
}

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  cover_image_url: string | null;
  published_at: string | null;
  tags: string[] | null;
  content: string;
}

interface RelatedPost {
  title: string;
  slug: string;
  excerpt: string | null;
  cover_image_url: string | null;
}

interface Props {
  post: Post | null;
  relatedPosts: RelatedPost[];
}

const BlogPost = ({ post, relatedPosts }: Props) => {
  if (!post) {
    return (
      <div className="container-wide section-padding text-center py-20">
        <p className="font-serif text-2xl text-foreground mb-4">Post not found</p>
        <Link href="/blog" className="text-primary font-sans hover:underline">
          ← Back to blog
        </Link>
      </div>
    );
  }

  const relevantServices = getRelevantServices(post.content, post.tags);

  return (
    <article className="section-padding">
      <div className="container-wide max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-sans mb-8"
        >
          <ArrowLeft size={16} />
          Back to all posts
        </Link>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="text-xs font-sans px-2.5 py-1 rounded-full bg-primary/10 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="max-w-3xl">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 leading-tight">
            {post.title}
          </h1>

          {post.published_at && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-sans mb-8">
              <Calendar size={14} />
              {format(new Date(post.published_at), "MMMM d, yyyy")}
            </div>
          )}
        </div>

        {post.cover_image_url && (
          <div className="rounded-2xl overflow-hidden mb-10">
            <img
              src={post.cover_image_url}
              alt={post.title}
              className="w-full h-auto max-h-[30rem] object-cover"
              fetchPriority="high"
            />
          </div>
        )}

        <div className="max-w-2xl mx-auto">
          <div className="prose max-w-none font-sans text-foreground
            prose-headings:font-serif prose-headings:font-bold prose-headings:text-primary
            prose-headings:underline prose-headings:decoration-primary/40 prose-headings:decoration-2 prose-headings:underline-offset-8
            prose-h2:text-[1.55rem] prose-h2:md:text-[1.75rem] prose-h2:mt-20 prose-h2:mb-6 prose-h2:pt-6
            prose-h3:text-xl prose-h3:mt-16 prose-h3:mb-5
            prose-p:text-muted-foreground prose-p:leading-[1.95] prose-p:mb-10 prose-p:text-[1rem]
            prose-li:text-muted-foreground prose-li:leading-[1.9] prose-li:text-[1rem] prose-li:mb-2
            prose-ul:my-8 prose-ul:space-y-1 prose-ol:my-8 prose-ol:space-y-1
            prose-a:text-primary
            prose-strong:text-foreground prose-strong:text-[1rem]
            prose-img:rounded-2xl prose-img:my-14 prose-img:shadow-md prose-img:max-w-xl prose-img:mx-auto
            prose-blockquote:border-primary/30 prose-blockquote:text-muted-foreground prose-blockquote:italic prose-blockquote:my-10
            prose-hr:my-16 prose-hr:border-border
            [&_em]:text-foreground
          ">
            <ReactMarkdown
              components={{
                em: ({ children, ...props }) => {
                  const text = typeof children === 'string' ? children : '';
                  if (text.includes('Every 3 seconds') || (Array.isArray(children) && children.some(c => typeof c === 'string' && c.includes('Every 3 seconds')))) {
                    return <em {...props} style={{ fontStyle: 'italic', fontWeight: 700, fontSize: '16px' }} className="text-foreground block mb-0">{children}</em>;
                  }
                  return <em {...props}>{children}</em>;
                },
                strong: ({ children, ...props }) => {
                  const text = typeof children === 'string' ? children : '';
                  if (text.includes('Bloom Home Care') || (Array.isArray(children) && children.some(c => typeof c === 'string' && c.includes('Bloom Home Care')))) {
                    return <strong {...props} style={{ fontSize: '16px' }} className="text-foreground font-bold">{children}</strong>;
                  }
                  return <strong {...props}>{children}</strong>;
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Internal service links */}
        {relevantServices.length > 0 && (
          <div className="max-w-2xl mx-auto mt-12 p-6 bg-card rounded-xl border border-border">
            <p className="font-serif text-lg text-foreground mb-4">Related Services</p>
            <div className="flex flex-wrap gap-3">
              {relevantServices.map(s => (
                <Link key={s.path} href={s.path}>
                  <Button variant="outline" size="sm" className="gap-1">
                    {s.label} <ArrowRight size={14} />
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="max-w-2xl mx-auto mt-16">
            <h2 className="font-serif text-2xl text-foreground mb-8">More from the Bloom Home Care Blog</h2>
            <div className="grid gap-6">
              {relatedPosts.map(rp => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="flex gap-4 items-center p-4 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors group"
                >
                  {rp.cover_image_url && (
                    <img
                      src={rp.cover_image_url}
                      alt={rp.title}
                      className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                      loading="lazy"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {rp.title}
                    </p>
                    {rp.excerpt && (
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{rp.excerpt}</p>
                    )}
                  </div>
                  <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default BlogPost;
