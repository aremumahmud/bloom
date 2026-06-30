const Blog = () => {
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
          <div className="text-center py-20">
            <p className="font-serif text-2xl text-foreground mb-2">Coming Soon</p>
            <p className="text-muted-foreground font-sans">
              We're writing our first stories. Check back soon.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
