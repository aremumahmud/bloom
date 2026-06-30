'use client'

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Clock, Ear, Target, RefreshCw, Heart } from "lucide-react";
import readingImage from "@/assets/reading-together.jpg";

const approachVideo = "/videos/hero-scene-1.mp4";

const approaches = [
  {
    icon: Clock,
    text: "We slow down when it matters",
  },
  {
    icon: Ear,
    text: "We listen closely",
  },
  {
    icon: Target,
    text: "We act with intention",
  },
  {
    icon: RefreshCw,
    text: "We show up consistently",
  },
  {
    icon: Heart,
    text: "We treat people as people — not tasks",
  },
];

export function ApproachSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
              Our Approach to Home Care in Katy, TX
            </h2>
            
            <ul className="space-y-5">
              {approaches.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage-light flex items-center justify-center">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <span className="text-lg text-muted-foreground font-sans">
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10"
            >
              <Button variant="subtle" size="lg" asChild>
                <Link href="/approach">Learn more about our philosophy</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster={readingImage.src}
                className="w-full h-auto object-cover"
              >
                <source src={approachVideo} type="video/mp4" />
                <img 
                  src={readingImage.src} 
                  alt="Companion care Katy TX — caregiver reading together with a senior"
                  className="w-full h-auto object-cover"
                />
              </video>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
