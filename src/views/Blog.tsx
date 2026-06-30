import Link from "next/link";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { ArrowRight, Calendar } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  cover_image_url: string | null;
  published_at: string | null;
  tags: string[];
}

const Blog = async () => {
  const { data: posts } = await supabase
    .from("blog_posts")
    .select("id, title, slug, excerpt, cover_image_url, published_at, tags")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  const featured = posts?.[0] as BlogPost | undefined;
  const rest = (posts?.slice(1) || []) as BlogPost[];

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
          {posts && posts.length > 0 ? (
            <div className="space-y-12">
              {/* Featured Post */}
              {featured && (
                <Link
                  href={`/blog/${featured.slug}`}
                  className="group block rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-500"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {featured.cover_image_url && (
                      <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                        <img
                          src={featured.cover_image_url}
                          alt={featured.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          fetchPriority="high"
                        />
                      </div>
                    )}
                    <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                      {featured.tags && featured.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {featured.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-sans px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                        {featured.title}
                      </h2>
                      {featured.excerpt && (
                        <p className="text-muted-foreground font-sans leading-relaxed mb-6 text-base md:text-lg">
                          {featured.excerpt}
                        </p>
                      )}
                      <div className="flex items-center justify-between mt-auto">
                        {featured.published_at && (
                          <span className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
                            <Calendar size={14} />
                            {format(new Date(featured.published_at), "MMMM d, yyyy")}
                          </span>
                        )}
                        <span className="flex items-center gap-1.5 text-primary font-sans font-semibold group-hover:gap-3 transition-all">
                          Read Story <ArrowRight size={16} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              {/* Remaining Posts */}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {rest.map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="group block bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      {post.cover_image_url && (
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={post.cover_image_url}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="text-xs font-sans px-2.5 py-1 rounded-full bg-primary/10 text-primary"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        <h2 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                        {post.excerpt && (
                          <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                        )}
                        <div className="flex items-center justify-between">
                          {post.published_at && (
                            <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-sans">
                              <Calendar size={12} />
                              {format(new Date(post.published_at), "MMM d, yyyy")}
                            </span>
                          )}
                          <span className="flex items-center gap-1 text-sm text-primary font-sans font-medium group-hover:gap-2 transition-all">
                            Read <ArrowRight size={14} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-serif text-2xl text-foreground mb-2">Coming Soon</p>
              <p className="text-muted-foreground font-sans">
                We're writing our first stories. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
