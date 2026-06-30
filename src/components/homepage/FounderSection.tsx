'use client'

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import founderPortrait from "@/assets/founder-portrait.jpg";

export function FounderSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-10 items-center"
        >
          {/* Portrait */}
          <div className="flex justify-center md:justify-end">
            <div className="w-52 h-64 rounded-2xl overflow-hidden shadow-md">
              <img
                src={founderPortrait.src}
                alt="Founder of Bloom Home Care"
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:col-span-2 space-y-5">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground">
              Built on Personal Experience. Driven by Purpose.
            </h2>
            <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
              <p>
                Bloom Home Care was founded to bring calm, intentional,
                relationship-centered home care to families across Katy, TX and surrounding areas.
              </p>
              <p>
                Inspired by personal experience navigating care for a loved one,
                Bloom Home Care was built on the belief that every person deserves to be supported
                with dignity, warmth, and genuine human presence — especially when it matters most.
              </p>
            </div>
            <blockquote className="border-l-2 border-primary pl-4 italic text-foreground font-sans text-base leading-relaxed">
              "We started Bloom Home Care because we know what it feels like to want the absolute best
              for someone you love — and to need someone you can truly trust to show up for them."
            </blockquote>
            <p className="text-foreground font-sans text-sm font-medium">
              — Founders, Bloom Home Care
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
