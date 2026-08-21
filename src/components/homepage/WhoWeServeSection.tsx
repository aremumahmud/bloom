'use client'

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Stethoscope, Users, HandHeart } from "lucide-react";

const audiences = [
  {
    icon: Home,
    title: "Older Adults Aging at Home",
    description: "Seniors who want to stay in their own homes as they age but need support with daily activities. Our senior home care Katy, TX, services are especially helpful for older adults who want to remain at home while receiving support with daily routines, companionship, and personal care.",
  },
  {
    icon: Users,
    title: "Families Seeking Daily Support",
    description: "We support families managing aging parents or spouses alongside work and other responsibilities. We become your partner, handling caregiving so you can focus on being a family member rather than a full-time caregiver.",
  },
  {
    icon: HandHeart,
    title: "Individuals Living With Memory Conditions",
    description: "Those diagnosed with Alzheimer's, dementia, or other memory conditions need specialized, patient-centered care. Our team understands these conditions and provides support that's tailored to their unique needs.",
  },
  {
    icon: Stethoscope,
    title: "Adults Recovering From Surgery or Illness",
    description: "After hospitalization or medical events, recovery at home often works better than recovery in institutional settings. We provide skilled support during this critical recovery period, helping people heal safely and return to independence.",
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
