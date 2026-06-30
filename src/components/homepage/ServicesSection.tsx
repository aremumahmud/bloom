'use client'

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  HeartHandshake, 
  Home, 
  UtensilsCrossed, 
  Bell, 
  Activity, 
  Users,
  Building2,
  Stethoscope,
  Heart 
} from "lucide-react";
import teaMomentImage from "@/assets/tea-moment.jpg";
import wheelchairCareImage from "@/assets/wheelchair-care.jpg";

const services = [
  {
    icon: Home,
    title: "Personal Care",
    description: "Respectful, hands-on assistance with bathing, grooming, dressing, mobility, and daily living activities — empowering independence at home.",
    href: "/services/personal-care",
  },
  {
    icon: HeartHandshake,
    title: "Companion Care",
    description: "Meaningful companionship, social engagement, light housekeeping, errands, and emotional support — brightening each day.",
    href: "/services/companion-care",
  },
  {
    icon: Users,
    title: "Respite Care",
    description: "Temporary relief for family caregivers with flexible scheduling — trusted, experienced caregivers step in so you can rest and recharge.",
    href: "/services/respite-care",
  },
  {
    icon: Building2,
    title: "In-Facility Care",
    description: "Personalized one-on-one support within assisted living or nursing facilities — complementing existing care with individual attention.",
    href: "/services/in-facility-care",
  },
  {
    icon: Stethoscope,
    title: "Specialized Care",
    description: "Tailored support for individuals managing Alzheimer's, dementia, Parkinson's, post-surgical recovery, or chronic conditions.",
    href: "/services/specialized-care",
  },
  {
    icon: Heart,
    title: "End-of-Life Care",
    description: "Compassionate comfort care, emotional and spiritual support, and daily assistance during life's most delicate moments.",
    href: "/services/end-of-life-care",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card" aria-labelledby="services-heading">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 id="services-heading" className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            In-Home Care Services in Katy, TX
          </h2>
          <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto">
            Comprehensive, personalized home care services — thoughtfully designed around each individual's unique needs and proudly serving Katy, TX and surrounding areas.
          </p>
        </motion.div>

        {/* Featured Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
            <img
              src={teaMomentImage.src}
              alt="Home care in Katy, TX — caregiver sharing a warm moment over tea"
              loading="lazy"
              className="w-full h-full object-cover blur-[1px] brightness-95"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover brightness-95"
            >
              <source src="/videos/wheelchair-care.mp4" type="video/mp4" />
              <img 
                src={wheelchairCareImage.src} 
                alt="Bloom Home Care caregiver assisting person in wheelchair"
                loading="lazy"
                className="w-full h-full object-cover brightness-95"
              />
            </video>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
            >
              <Link
                href={service.href}
                className="group flex flex-col p-8 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 rounded-lg bg-sage-light flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <service.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center text-sm text-muted-foreground mt-10 font-sans"
        >
          Note: No medical or skilled nursing services are provided.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center mt-10"
        >
          <Button variant="premium-outline" size="lg" asChild>
            <Link href="/services">View all in-home care services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
