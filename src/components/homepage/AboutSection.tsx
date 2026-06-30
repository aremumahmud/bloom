'use client'

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import caregiverImage from "@/assets/caregiver-sage-uniform.jpg";

const stats = [
  { value: "100+", label: "Families Served" },
  { value: "24/7", label: "Care Available" },
  { value: "10+", label: "Cities Served" },
  { value: "100%", label: "Locally Owned" },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="section-padding bg-card"
      aria-labelledby="about-heading"
    >
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={caregiverImage.src}
                alt="Bloom Home Care caregiver sharing a warm moment with elderly client in Katy, TX"
                loading="lazy"
                className="w-full h-auto object-cover"
                width={600}
                height={750}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2
              id="about-heading"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight"
            >
              Senior Home Care in Katy, TX —<br className="hidden lg:block" />
              Bloom Home Care
            </h2>

            <div className="space-y-5 text-muted-foreground font-sans text-base md:text-lg leading-relaxed mb-8">
              <p>
                At Bloom Home Care, we deliver thoughtful, personalized in-home support designed
                around each person's individual needs. From help with daily routines and uplifting
                companionship to trusted respite care, our certified caregivers bring both skill
                and heart to every visit.
              </p>
              <p>
                We've built our name on reliability, empathy, and a genuine commitment to
                well-being. Proudly serving Katy, TX and nearby areas, we help families feel
                confident and supported — because everyone deserves to feel safe, cared for,
                and at home.
              </p>
              <p className="text-primary font-medium italic text-base">
                "Your Home. Your Health. Our Commitment."
              </p>
            </div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 pt-6 border-t border-border"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <p className="font-serif text-2xl md:text-3xl text-primary font-semibold">
                    {stat.value}
                  </p>
                  <p className="font-sans text-xs text-muted-foreground mt-0.5 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
