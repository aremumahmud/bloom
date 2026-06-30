'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, Users, Shield, HeartHandshake, Phone, ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ConsultationModal } from "@/components/homepage/ConsultationModal";
import { useIsMobile } from "@/hooks/use-mobile";
import inFacilityCareHeroImage from "@/assets/in-facility-care-hero.jpg";

const benefits = [
  {
    icon: Users,
    title: "One-on-One Companionship",
    description: "Dedicated, personal attention that goes beyond what facility staffing ratios allow. Your loved one receives focused, meaningful interaction every visit.",
  },
  {
    icon: Shield,
    title: "Patient Advocacy",
    description: "A caring advocate who ensures your loved one's needs, preferences, and concerns are heard and addressed by facility staff and medical teams.",
  },
  {
    icon: Building2,
    title: "Supplemental Daily Support",
    description: "Assistance with meals, grooming, mobility, and personal care that complements the facility's standard services.",
  },
  {
    icon: HeartHandshake,
    title: "Emotional Connection",
    description: "Consistent, familiar companionship that reduces the loneliness and disorientation that can come with facility living.",
  },
];

const includedServices = [
  "One-on-one companionship and conversation",
  "Meal assistance and feeding support",
  "Grooming and personal care assistance",
  "Mobility support and walking companionship",
  "Advocacy during medical rounds and care meetings",
  "Accompaniment to facility activities and outings",
  "Emotional support during transitions",
  "Regular family communication and updates",
  "Medication reminder coordination with facility staff",
  "Comfort and reassurance during anxious moments",
];

const faqs = [
  {
    q: "Why would someone in a facility need additional care?",
    a: "Facilities provide excellent general care, but staffing ratios mean residents may not always receive the individual attention they need. Our caregivers provide one-on-one companionship, personalized support, and advocacy that ensures your loved one feels seen, heard, and comfortable.",
  },
  {
    q: "Do you work with the facility's care team?",
    a: "Absolutely. We coordinate closely with facility staff, nurses, and administrators to complement their care plan. Our role is supplemental, not duplicative. We fill the gaps and provide the personal touch that makes a meaningful difference.",
  },
  {
    q: "What types of facilities do you serve?",
    a: "We provide supplemental care in assisted living communities, skilled nursing facilities, memory care units, and rehabilitation centers throughout the Katy, TX area.",
  },
  {
    q: "Can you help during hospital stays too?",
    a: "Yes. Many families use our services during hospital stays to ensure their loved one has a familiar, comforting presence at bedside. We can help with meals, communication with medical staff, and emotional support during recovery.",
  },
];

const serviceAreas = [
  { name: "Katy", href: "/locations/katy-tx" },
];

const InFacilityCare = () => {
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
          <img src={inFacilityCareHeroImage.src} alt="Caregiver providing one-on-one companionship in an assisted living facility" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
        </div>
        <div className="container-narrow relative z-10 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/services" className="text-primary font-sans text-sm tracking-widest uppercase mb-4 inline-flex items-center gap-2 hover:underline">← All Services</Link>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 mt-4">In-Facility Care</h1>
            <p className="text-lg md:text-xl text-muted-foreground font-sans max-w-2xl leading-relaxed mb-4">
              Supplemental support for residents in assisted living and skilled nursing facilities.
              One-on-one companionship, advocacy, and personalized attention when it matters most.
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
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">What in-facility care looks like with Bloom Home Care</h2>
            <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto">Dedicated, personal attention that fills the gaps facility staffing cannot always reach.</p>
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
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">What's included in in-facility care</h2>
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
              <h2 className="font-serif text-3xl text-foreground mb-6">In-facility care across Katy, TX</h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-8">
                Bloom Home Care provides supplemental care in assisted living communities, skilled nursing facilities,
                and rehabilitation centers throughout the Katy, TX corridor.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {serviceAreas.map((city) => (
                  <Link key={city.name} href={city.href} className="inline-flex items-center gap-1.5 px-4 py-2 bg-card rounded-full border border-border text-sm font-sans text-foreground hover:border-primary/40 transition-colors">
                    <MapPin size={14} className="text-primary" />{city.name}, TX
                  </Link>
                ))}
              </div>
              <Button variant="premium" size="lg" onClick={handleCTA}><Phone size={16} className="mr-2" />Request In-Facility Care</Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="bg-primary/5 rounded-xl p-8 border border-primary/10">
                <h3 className="font-serif text-2xl text-foreground mb-4">A familiar face, even in a facility</h3>
                <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                  When your loved one lives in a facility, having a dedicated companion who knows their name,
                  their preferences, and their story makes all the difference.
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
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Common questions about in-facility care</h2>
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
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Ready to explore in-facility care?</h2>
            <p className="text-muted-foreground font-sans text-lg max-w-xl mx-auto mb-8">
              Every care journey begins with a conversation. Tell us about your loved one,
              and we'll help you find the right support.
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

export default InFacilityCare;
