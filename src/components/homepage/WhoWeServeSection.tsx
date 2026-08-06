'use client'

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Stethoscope, Users, HandHeart } from "lucide-react";

const audiences = [
  {
    icon: Home,
    title: "Seniors Who Want to Age in Place",
    description: "Seniors who want to remain in the home they've built their lives in — not a facility — deserve the support to do that safely and with dignity. We help make that possible.",
  },
  {
    icon: Stethoscope,
    title: "Adults Recovering from Illness or Surgery",
    description: "A hospital discharge is not the end of care. Recovering at home is safer and more comfortable with the right support in place — from mobility assistance to medication reminders.",
  },
  {
    icon: Users,
    title: "Family Caregivers Who Need a Break",
    description: "Caring for a loved one is deeply meaningful — and relentlessly exhausting. Respite care gives family caregivers dedicated time to rest, recharge, and attend to their own lives without guilt.",
  },
  {
    icon: HandHeart,
    title: "Individuals Living with Dementia or Memory Loss",
    description: "Memory loss changes daily life for individuals and their families. Our caregivers offer patient, trained, compassionate support for those living with dementia and Alzheimer's disease.",
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
