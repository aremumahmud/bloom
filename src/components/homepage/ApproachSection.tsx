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
    detail: "In a rush-driven world, we take our time. When meeting your loved one for the first time, when listening to your concerns, when making care adjustments, we pause and give full attention. Rushing through these moments misses what's essential.",
  },
  {
    icon: Ear,
    text: "We listen closely",
    detail: "We don't assume we know what your family needs. We ask questions, pay attention to what's said and unsaid, and listen for the real concerns beneath the surface. Good listening is the foundation of good care.",
  },
  {
    icon: Target,
    text: "We act with intention",
    detail: "Every decision about your loved one's care is purposeful. From caregiver matching to care plan adjustments, we think through consequences and act with clear purpose. Nothing happens by accident in our care approach.",
  },
  {
    icon: RefreshCw,
    text: "We show up consistently",
    detail: "Reliability matters more than perfection. Your loved one and your family need to know that we'll be there, day after day, consistently showing up and following through on our commitments.",
  },
  {
    icon: Heart,
    text: "We treat people as people, not tasks",
    detail: "Your loved one is not a checklist. They're someone's parent, grandparent, or spouse with a lifetime of stories, preferences, and dignity. We approach every person as the whole human being they are.",
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
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Our Approach to Home Care in Katy, TX
            </h2>
            <p className="text-muted-foreground font-sans text-base leading-relaxed mb-8">
              We believe that quality care comes from understanding what truly matters to families. As a home
              care agency in Katy, TX, families invite into their homes, we focus on care that feels personal,
              respectful, and easy to adjust as needs change.
            </p>

            <ul className="space-y-5">
              {approaches.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage-light flex items-center justify-center mt-1">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground font-sans mb-1">
                      {item.text}
                    </h3>
                    <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
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
