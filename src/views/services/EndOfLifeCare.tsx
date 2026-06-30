'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, HeartHandshake, Users, Clock, Phone, ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ConsultationModal } from "@/components/homepage/ConsultationModal";
import { useIsMobile } from "@/hooks/use-mobile";
import endOfLifeCareHeroImage from "@/assets/end-of-life-care-hero.jpg";

const benefits = [
  {
    icon: HeartHandshake,
    title: "Comfort Companionship",
    description: "A calm, steady presence during life's final chapter. Our caregivers provide warmth, conversation, and gentle comfort so no one faces this journey alone.",
  },
  {
    icon: Heart,
    title: "Dignity & Respect",
    description: "Every moment is treated with reverence. Personal care, grooming, and daily support are delivered with the utmost tenderness and respect for your loved one's wishes.",
  },
  {
    icon: Users,
    title: "Family Support",
    description: "We support the entire family during this time. Respite relief, emotional presence, and clear communication so you can focus on being together.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Available when you need us most, including evenings, overnight, and extended hours. Care that adapts to the changing needs of this season.",
  },
];

const includedServices = [
  "Comfort companionship and emotional presence",
  "Personal care with gentleness and dignity",
  "Medication reminders and schedule coordination",
  "Nutritious meal preparation and feeding support",
  "Light housekeeping to maintain a peaceful environment",
  "Respite relief for family caregivers",
  "Accompaniment to appointments and treatments",
  "Reading, music, and meaningful activities",
  "Overnight and extended-hour availability",
  "Regular family communication and updates",
];

const faqs = [
  {
    q: "How is end-of-life care different from hospice?",
    a: "Hospice provides medical symptom management and pain control. Bloom Home Care provides non-medical companion and personal care that works alongside hospice. We focus on daily comfort, emotional presence, and family support while the hospice team manages clinical needs.",
  },
  {
    q: "When should we consider end-of-life companion care?",
    a: "Any time your family needs additional support during this season. Many families find our services valuable when they want a consistent, caring presence at bedside, need respite relief, or want to ensure their loved one is never alone.",
  },
  {
    q: "Can you provide overnight care?",
    a: "Yes. We offer flexible scheduling including overnight care, extended shifts, and around-the-clock support. We work with your family to create a schedule that provides the coverage and comfort you need.",
  },
  {
    q: "Do your caregivers receive specialized training?",
    a: "Yes. Our caregivers who provide end-of-life support receive additional training in compassionate communication, comfort care techniques, and family dynamics during this sensitive time.",
  },
];

const serviceAreas = [
  { name: "Katy", href: "/locations/katy-tx" },
];

const EndOfLifeCare = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleCTA = () => {
    if (isMobile) {
      window.location.href = "tel:+12819756044";
    } else {
      setConsultationOpen(true);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src={endOfLifeCareHeroImage.src} alt="Caregiver providing gentle comfort and companionship" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
        </div>
        <div className="container-narrow relative z-10 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/services" className="text-primary font-sans text-sm tracking-widest uppercase mb-4 inline-flex items-center gap-2 hover:underline">← All Services</Link>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 mt-4">End-of-Life Care</h1>
            <p className="text-lg md:text-xl text-muted-foreground font-sans max-w-2xl leading-relaxed mb-4">
              Comfort companionship during life's final journey.
              A calm, caring presence that ensures dignity, peace, and the reassurance that no one walks this path alone.
            </p>
            <p className="text-sm text-muted-foreground font-sans mb-8">Serving Katy, TX and surrounding communities.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="premium" size="lg" onClick={handleCTA}>Schedule a Free Consultation</Button>
              <a href="tel:+12819756044" className="inline-flex items-center gap-2 text-primary font-sans hover:underline"><Phone size={18} />281-975-6044</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">What end-of-life care looks like with Bloom Home Care</h2>
            <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto">Gentle, compassionate presence focused entirely on comfort, dignity, and family support.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} className="flex gap-6 p-8 bg-card rounded-xl border border-border">
                <div className="w-14 h-14 rounded-lg bg-sage-light flex items-center justify-center flex-shrink-0"><benefit.icon size={28} className="text-primary" /></div>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground font-sans leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">What's included in end-of-life care</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="grid sm:grid-cols-2 gap-4">
            {includedServices.map((service, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border">
                <CheckCircle2 size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground font-sans text-sm">{service}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="font-serif text-3xl text-foreground mb-6">End-of-life care across Katy, TX</h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-8">
                Bloom Home Care provides compassionate end-of-life companion care throughout the Katy, TX corridor.
                We are here whenever your family needs us.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {serviceAreas.map((city) => (
                  <Link key={city.name} href={city.href} className="inline-flex items-center gap-1.5 px-4 py-2 bg-card rounded-full border border-border text-sm font-sans text-foreground hover:border-primary/40 transition-colors">
                    <MapPin size={14} className="text-primary" />{city.name}, TX
                  </Link>
                ))}
              </div>
              <Button variant="premium" size="lg" onClick={handleCTA}><Phone size={16} className="mr-2" />Request End-of-Life Care</Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="bg-primary/5 rounded-xl p-8 border border-primary/10">
                <h3 className="font-serif text-2xl text-foreground mb-4">A gentle hand through the final journey</h3>
                <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                  When the time comes, having someone who brings warmth, patience, and compassion
                  makes all the difference for your loved one and your family.
                </p>
                <p className="text-muted-foreground font-sans leading-relaxed text-sm">Katy, TX · Harris County · and surrounding areas</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Common questions about end-of-life care</h2>
          </motion.div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} className="p-6 bg-background rounded-xl border border-border">
                <h3 className="font-serif text-lg text-foreground mb-3">{faq.q}</h3>
                <p className="text-muted-foreground font-sans leading-relaxed text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary/5">
        <div className="container-narrow text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">We're here when you need us</h2>
            <p className="text-muted-foreground font-sans text-lg max-w-xl mx-auto mb-8">
              This is a deeply personal time. Let us walk alongside your family
              with the compassion and presence you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="lg" onClick={handleCTA}>Speak With a Care Coordinator</Button>
              <Link href="/services"><Button variant="outline" size="lg">View All Services<ArrowRight size={16} className="ml-2" /></Button></Link>
            </div>
            <p className="text-sm text-muted-foreground font-sans mt-6 tracking-wide">Licensed & Insured · Privately Owned & Operated</p>
          </motion.div>
        </div>
      </section>

      <ConsultationModal open={consultationOpen} onOpenChange={setConsultationOpen} />
    </>
  );
};

export default EndOfLifeCare;
