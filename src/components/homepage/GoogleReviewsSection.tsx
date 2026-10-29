'use client'

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

// TODO: swap in Bloom's verified Google reviews, rating, review count, and
// official Google Reviews/Profile link once the client provides them (see
// "Client Items Needed" #3–4). These are the site's existing real testimonials,
// not fabricated reviews, used here as a placeholder.
const reviews = [
  {
    quote:
      "I live alone, and having someone visit regularly makes me feel safer and less isolated. With my health being the way it is, their support really makes a difference.",
    author: "Linda M.",
  },
  {
    quote:
      "Bloom Home Care has been a blessing for our family. The caregiver matched with my mother feels like family — patient, warm, and genuinely attentive. For the first time in months, we have real peace of mind.",
    author: "Sandra T.",
  },
  {
    quote:
      "I was nervous about finding home care for my dad. The team at Bloom took the time to understand what he needed and matched him with someone who truly connects with him. I can't recommend them enough.",
    author: "James R.",
  },
];

const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/search/?api=1&query=Bloom+Home+Care+Katy+TX";

export function GoogleReviewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="section-padding bg-sage-light/40"
      aria-labelledby="google-reviews-heading"
    >
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2
            id="google-reviews-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4"
          >
            Trusted by Katy Families
          </h2>
          <p className="text-muted-foreground font-sans text-lg max-w-xl mx-auto">
            See what families across Katy, TX are saying on Google.
          </p>
        </motion.div>

        <Carousel opts={{ align: "start", loop: true }} className="max-w-5xl mx-auto">
          <CarouselContent className="-ml-4">
            {reviews.map((r, index) => (
              <CarouselItem key={index} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                <motion.figure
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="h-full bg-background rounded-2xl p-8 border border-border shadow-sm flex flex-col"
                >
                  <div className="flex gap-1 mb-5" aria-label="5 out of 5 stars" role="img">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="flex-1">
                    <p className="text-foreground font-sans leading-relaxed mb-6 text-sm md:text-base italic">
                      &ldquo;{r.quote}&rdquo;
                    </p>
                  </blockquote>
                  <figcaption className="border-t border-border/50 pt-4">
                    <span className="font-sans font-semibold text-foreground text-sm">
                      {r.author}
                    </span>
                  </figcaption>
                </motion.figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center gap-3 mt-8">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>

        <div className="text-center mt-10">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-sans font-medium hover:underline"
          >
            Read More Google Reviews
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
