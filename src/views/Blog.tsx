import Link from "next/link";
import { format } from "date-fns";
import { Calendar, ArrowRight } from "lucide-react";
import type { BlogPostData } from "@/content/blog-posts";

interface Props {
  posts: BlogPostData[];
}

const Blog = ({ posts }: Props) => {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background section-padding">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            The Bloom Home Care Journal
          </h1>
          <p className="text-muted-foreground text-lg font-sans leading-relaxed">
            Thoughtful insights on home care, aging with dignity, and walking alongside the ones you love.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-2xl text-foreground mb-2">Coming Soon</p>
              <p className="text-muted-foreground font-sans">
                We're writing our first stories. Check back soon.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden hover:shadow-md transition-shadow"
                >
                  {post.cover_image_url && (
                    <div className="aspect-[16/10] overflow-hidden bg-muted">
                      <img
                        src={post.cover_image_url}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="flex flex-col flex-1 p-6">
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-sans px-2.5 py-1 rounded-full bg-primary/10 text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <p className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </p>
                    {post.excerpt && (
                      <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <span className="flex items-center gap-2 text-xs text-muted-foreground font-sans">
                        <Calendar size={13} />
                        {format(new Date(post.published_at), "MMMM d, yyyy")}
                      </span>
                      <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
