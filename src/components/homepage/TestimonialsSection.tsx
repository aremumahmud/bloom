'use client'

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "I live alone, and having someone visit regularly makes me feel safer and less isolated. With my health being the way it is, their support really makes a difference.",
    author: "Linda M.",
    location: "Katy, TX",
    relation: "Client",
  },
  {
    quote:
      "Bloom Home Care has been a blessing for our family. The caregiver matched with my mother feels like family — patient, warm, and genuinely attentive. For the first time in months, we have real peace of mind.",
    author: "Sandra T.",
    location: "Katy, TX",
    relation: "Adult daughter",
  },
  {
    quote:
      "I was nervous about finding home care for my dad. The team at Bloom took the time to understand what he needed and matched him with someone who truly connects with him. I can't recommend them enough.",
    author: "James R.",
    location: "Katy, TX",
    relation: "Son",
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="section-padding bg-sage-light/40"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2
            id="testimonials-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4"
          >
            What Families Are Saying About Bloom Home Care
          </h2>
          <p className="text-muted-foreground font-sans text-lg max-w-xl mx-auto">
            Trusted by families across Katy, TX and surrounding areas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="bg-background rounded-2xl p-8 border border-border shadow-sm flex flex-col"
            >
              <div
                className="flex gap-1 mb-5"
                aria-label="5 out of 5 stars"
                role="img"
              >
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="flex-1">
                <p className="text-foreground font-sans leading-relaxed mb-6 text-sm md:text-base italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>
              <figcaption className="border-t border-border/50 pt-4">
                <span className="font-sans font-semibold text-foreground text-sm block">
                  {t.author}
                </span>
                <span className="text-muted-foreground font-sans text-xs">
                  {t.relation} &middot; {t.location}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
