'use client'

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Stethoscope, Users, HandHeart } from "lucide-react";

const audiences = [
  {
    icon: Home,
    title: "Seniors Aging at Home",
    description: "Support for older adults who want to remain comfortable, safe, and independent in their own home.",
  },
  {
    icon: Stethoscope,
    title: "Adults Recovering from Surgery or Illness",
    description: "Steady, patient assistance during recovery — from mobility support to meal preparation.",
  },
  {
    icon: Users,
    title: "Families Needing Respite Support",
    description: "Reliable relief for family caregivers so they can rest, knowing their loved one is in thoughtful hands.",
  },
  {
    icon: HandHeart,
    title: "Individuals Seeking Companionship",
    description: "Meaningful companionship and daily assistance for those who benefit from consistent, caring presence.",
  },
];

export function WhoWeServeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Who We Serve
          </h2>
          <p className="text-muted-foreground font-sans text-lg max-w-xl mx-auto">
            Companion and personal care for individuals and families across Katy, TX and surrounding areas.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.12 * index }}
              className="flex gap-5 items-start"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-sage-light flex items-center justify-center mt-1">
                <item.icon size={20} className="text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1.5">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
