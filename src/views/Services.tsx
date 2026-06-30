'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { CTASection } from "@/components/homepage/CTASection";
import { 
  HeartHandshake, 
  Home, 
  UtensilsCrossed, 
  Bell, 
  Activity, 
  Users,
  Coffee,
  Car,
  BookOpen,
  ShoppingBag,
  ArrowRight,
  Brain,
  Building2,
  Stethoscope,
  Heart
} from "lucide-react";
import morningTeaImage from "@/assets/morning-tea.jpg";
import walkerAssistImage from "@/assets/walker-assist.jpg";
import gentleHandsImage from "@/assets/gentle-hands.jpg";
import gardenStrollImage from "@/assets/garden-stroll.jpg";
import teamCollageImage from "@/assets/caregiver-team-collage.webp";

const mainServices = [
  {
    icon: HeartHandshake,
    title: "Companion Care & Emotional Support",
    description: "Meaningful companionship that goes beyond task-based care. We provide genuine conversation, emotional support, and a reassuring presence during daily life.",
    href: "/services/companion-care",
    details: [
      "Engaging conversation and active listening",
      "Accompaniment to appointments and outings",
      "Social engagement and recreational activities",
      "Comfort and reassurance during difficult moments",
    ],
  },
  {
    icon: Home,
    title: "Assistance with Daily Living",
    description: "Respectful support with personal care activities that help maintain independence, comfort, and dignity in your own home.",
    href: "/services/personal-care",
    details: [
      "Bathing and personal hygiene assistance",
      "Dressing and grooming support",
      "Mobility assistance and transfer help",
      "Toileting and incontinence care",
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Meal Support & Light Housekeeping",
    description: "Nutritious meal preparation and a clean, comfortable home environment — essential elements of wellbeing.",
    details: [
      "Meal planning and preparation",
      "Light housekeeping and tidying",
      "Laundry and linen changes",
    ],
  },
  {
    icon: Bell,
    title: "Medication Reminders",
    description: "Non-medical reminders to help ensure medications are taken on schedule, supporting health and peace of mind.",
    details: [
      "Scheduled medication reminders",
      "Organizing medication schedules",
      "Communication with family about adherence",
      "Note: We do not administer medications",
    ],
  },
  {
    icon: Activity,
    title: "Post-Hospital & Transitional Support",
    description: "Smooth transitions from hospital to home with attentive care during recovery periods.",
    href: "/services/post-hospital-care",
    details: [
      "Recovery support following hospitalization",
      "Assistance following outpatient procedures",
      "Short-term intensive care support",
      "Coordination with medical care teams",
    ],
  },
  {
    icon: Brain,
    title: "Dementia & Alzheimer's Care",
    description: "Specialized companion care for individuals living with dementia — patient, gentle, and deeply attuned to their needs.",
    href: "/services/dementia-care",
    details: [
      "Cognitive stimulation and memory activities",
      "Safety supervision and fall prevention",
      "Routine-based care to reduce anxiety",
      "Sundowning and behavioral support",
    ],
  },
  {
    icon: Building2,
    title: "In-Facility Care",
    description: "Supplemental support for residents in assisted living or skilled nursing facilities. One-on-one companionship, advocacy, and personalized attention.",
    href: "/services/in-facility-care",
    details: [
      "One-on-one companionship and conversation",
      "Patient advocacy during care meetings",
      "Meal assistance and personal care support",
      "Emotional support during facility transitions",
    ],
  },
  {
    icon: Stethoscope,
    title: "Specialized Care",
    description: "Expert support for chronic and cognitive conditions including Alzheimer's, dementia, Parkinson's disease, and post-surgery recovery.",
    href: "/services/specialized-care",
    details: [
      "Condition-specific daily routine support",
      "Fall prevention and safety monitoring",
      "Post-surgical recovery assistance",
      "Cognitive stimulation and behavioral support",
    ],
  },
  {
    icon: Heart,
    title: "End-of-Life Care",
    description: "Comfort companionship during life's final journey. A caring presence that ensures dignity, peace, and family support.",
    href: "/services/end-of-life-care",
    details: [
      "Comfort companionship and emotional presence",
      "Personal care with gentleness and dignity",
      "Respite relief for family caregivers",
      "Overnight and extended-hour availability",
    ],
  },
  {
    icon: Users,
    title: "Care Coordination & Family Guidance",
    description: "Clear communication and coordination that keeps everyone informed and supported.",
    details: [
      "Regular updates and communication",
      "Care plan development and adjustment",
      "Family education and support",
      "Resource referrals and guidance",
    ],
  },
];

const additionalServices = [
  { icon: Coffee, title: "Social Outings", description: "Coffee dates, museum visits, and community engagement" },
  { icon: Car, title: "Transportation", description: "Accompaniment to appointments and errands" },
  { icon: BookOpen, title: "Cognitive Activities", description: "Games, reading, and mentally stimulating activities" },
  { icon: ShoppingBag, title: "Shopping & Errands", description: "Grocery shopping and errand assistance" },
];

const careImages = [
  { src: walkerAssistImage.src, alt: "Bloom Home Care caregiver helping elderly woman with a walker", video: "/videos/walker-assist.mp4" },
  { src: gentleHandsImage.src, alt: "Gentle hands providing comfort and connection" },
  { src: gardenStrollImage.src, alt: "Caregiver and client walking in the garden" },
];

const Services = () => {
  return (
    <>
      {/* Hero - Clean, minimal with single image */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero-scene-2.mp4" type="video/mp4" />
            <img 
              src={morningTeaImage.src} 
              alt="Quiet moment of calm" 
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>
        
        <div className="container-narrow text-center relative z-10 py-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-sans text-sm tracking-widest uppercase mb-4"
          >
            Our Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
          >
            Thoughtful, non-medical care
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto"
          >
            We offer comprehensive home care services designed to support your independence, 
            comfort, and wellbeing — all delivered with presence and purpose.
          </motion.p>
        </div>
      </section>

      {/* Main Services - Clean cards without images */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-8 bg-card rounded-xl border border-border"
              >
                <div className="w-14 h-14 rounded-lg bg-sage-light flex items-center justify-center mb-6">
                  <service.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-sans leading-relaxed mb-6">
                  {service.description}
                </p>
                <h4 className="text-sm font-sans text-muted-foreground uppercase tracking-wider mb-4">
                  What's included
                </h4>
                <ul className="space-y-3">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground font-sans text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
                {'href' in service && service.href && (
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 mt-6 text-primary font-sans text-sm hover:underline transition-colors"
                  >
                    Learn more about {service.title.split(" & ")[0].toLowerCase()}
                    <ArrowRight size={14} />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {careImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]"
                >
                  {'video' in image && image.video ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster={image.src}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    >
                      <source src={image.video} type="video/mp4" />
                      <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                    </video>
                  ) : index === 1 ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    >
                      <source src="/videos/hero-scene-2b.mp4" type="video/mp4" />
                      <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                    </video>
                  ) : (
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Diversity Image */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={teamCollageImage.src}
              alt="Bloom Home Care caregiver greeting a client at their front door, preparing a meal together in the kitchen, and sharing conversation over coffee on the couch"
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12"
          >
            Additional Support
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-background rounded-lg border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-sage-light flex items-center justify-center mx-auto mb-4">
                  <service.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground font-sans">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Accepted Payment Methods
            </h2>
            <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto">
              We offer flexible payment options to make care accessible for you and your family.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-card rounded-xl border border-border"
            >
              <h3 className="font-serif text-xl text-foreground mb-4">Private Pay</h3>
              <ul className="space-y-3">
                {["Credit or debit card", "ACH bank transfer", "Zelle", "Electronic invoice payment", "Check"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground font-sans text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 bg-card rounded-xl border border-border"
            >
              <h3 className="font-serif text-xl text-foreground mb-4">Long-Term Care Insurance</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                Clients may use active long-term care insurance benefits. We provide required documentation to support reimbursement claims.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 bg-card rounded-xl border border-border"
            >
              <h3 className="font-serif text-xl text-foreground mb-4">Other Approved Sources</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                Veterans benefits or other approved third-party funding sources, if applicable and authorized.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-12 border-t border-border">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 bg-sage-light/50 rounded-lg"
          >
            <p className="text-sm text-muted-foreground font-sans">
              <strong className="text-foreground">Important:</strong> Bloom Home Care provides non-medical home care services only. 
              We do not provide medical care, skilled nursing, or administer medications. For medical care needs, 
              please consult with a licensed healthcare provider.
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Services;
