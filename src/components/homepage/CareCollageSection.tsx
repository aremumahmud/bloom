'use client'

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import collageImage from "@/assets/care-collage.jpg";

export function CareCollageSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 leading-tight">
            A Day in the Life of Care
          </h2>
          <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto leading-relaxed">
            From morning greetings to shared meals, gentle walks, and quiet 
            moments — every visit is shaped by presence and connection.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={collageImage.src}
            className="w-full h-auto object-cover"
          >
            <source src="/videos/care-collage.mp4" type="video/mp4" />
            <img
              src={collageImage.src}
              alt="Bloom Home Care caregivers — cooking together, gardening, reading, sharing tea, and greeting clients at home"
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </video>
        </motion.div>
      </div>
    </section>
  );
}
