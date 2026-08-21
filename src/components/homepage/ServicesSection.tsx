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
    description: "From bathing and dressing to grooming and toileting, our caregivers provide personal care services with dignity and respect, helping seniors maintain independence while receiving the physical support they need.",
    href: "/services/personal-care",
  },
  {
    icon: HeartHandshake,
    title: "Companion Care",
    description: "Loneliness affects health. Our companions provide meaningful conversation, help with light housekeeping, prepare meals, and offer the social connection that helps seniors thrive. Sometimes the most important care is simply being present.",
    href: "/services/companion-care",
  },
  {
    icon: Users,
    title: "Respite Care",
    description: "Family caregivers need breaks to recharge. Whether you need someone for an afternoon, overnight, or a few weeks, our respite care gives you peace of mind knowing your loved one is safe and well cared for.",
    href: "/services/respite-care",
  },
  {
    icon: Stethoscope,
    title: "Specialized Care",
    description: "After surgery, during recovery, or while managing a chronic illness, seniors need skilled support. Our caregivers assist with medication reminders, wound care support, mobility assistance, and other specialized needs.",
    href: "/services/specialized-care",
  },
  {
    icon: Activity,
    title: "Dementia Care",
    description: "Dementia requires specialized understanding. Our caregivers are trained in dementia care techniques, patience-based communication, and creating safe, supportive environments. We help families navigate this journey with compassion.",
    href: "/services/dementia-care",
  },
  {
    icon: Heart,
    title: "End-of-Life Care",
    description: "During the final chapters of life, comfort and dignity matter most. We provide compassionate end-of-life care that honors your loved one's wishes and supports your family through this tender time.",
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
            Home Care Services in Katy, TX
          </h2>
          <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto">
            Bloom Home Care provides flexible care options tailored to your loved one's specific needs. Whether it's daily support, companionship, respite care, memory care, or end-of-life support, our approach is personalized to fit your family's situation.
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
            <Link href="/services">View All In-Home Care Services</Link>
          </Button>
          <p className="font-sans text-foreground mt-8 mb-4">
            Ready to Learn More About Our Services?
          </p>
          <Button variant="premium" size="lg" asChild>
            <Link href="/contact">Talk With Our Care Team Today!</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
