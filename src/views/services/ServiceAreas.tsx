'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ConsultationModal } from "@/components/homepage/ConsultationModal";
import { useIsMobile } from "@/hooks/use-mobile";
import heroCaregiverImage from "@/assets/hero-caregiver.jpg";
import coverageMapImage from "@/assets/coverage-map.png";
import cookingTogetherImage from "@/assets/cooking-together.jpg";

const cities = [
  { name: "Katy", slug: "katy-tx", description: "Our home base. Bloom Home Care is locally operated from Katy, TX — deeply connected to this vibrant community of families.", highlight: true },
];

const allServices = [
  "Companion Care & Emotional Support",
  "Personal Care & ADL Assistance",
  "Respite Care for Family Caregivers",
  "Post-Hospital & Recovery Care",
  "Meal Preparation & Light Housekeeping",
  "Medication Reminders",
  "Transportation & Errand Accompaniment",
  "Care Coordination & Family Guidance",
];

const serviceAreas = ["Katy"];

const ServiceAreas = () => {
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
          <img src={heroCaregiverImage.src} alt="Bloom Home Care caregiver greeting a family at their front door" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
        </div>
        <div className="container-narrow relative z-10 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/services" className="text-primary font-sans text-sm tracking-widest uppercase mb-4 inline-flex items-center gap-2 hover:underline">← All Services</Link>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 mt-4">Areas We Serve</h1>
            <p className="text-lg md:text-xl text-muted-foreground font-sans max-w-2xl leading-relaxed mb-8">
              Locally operated in Katy, TX, Bloom Home Care provides in-home care
              throughout the Katy area and surrounding communities. We know these neighborhoods because we live here, too.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="premium" size="lg" onClick={handleCTA}>Check Availability in Your Area</Button>
              <a href="tel:+12819756044" className="inline-flex items-center gap-2 text-primary font-sans hover:underline">
                <Phone size={18} />281-975-6044
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* City Cards */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Communities we call home</h2>
            <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto">Every family we serve is part of the community we live in.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cities.map((city, index) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link
                  href={`/locations/${city.slug}`}
                  className={`block p-6 rounded-xl border h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${city.highlight ? 'bg-primary/5 border-primary/20' : 'bg-card border-border'}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin size={20} className="text-primary" />
                    <h3 className="font-serif text-xl text-foreground">{city.name}, TX</h3>
                  </div>
                  <p className="text-muted-foreground font-sans leading-relaxed text-sm mb-3">{city.description}</p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-sans font-medium">
                    View services <ArrowRight size={14} />
                  </span>
                  {city.highlight && (
                    <span className="inline-block mt-3 px-3 py-1 bg-primary/10 text-primary text-xs font-sans rounded-full">Home Base</span>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img src={coverageMapImage.src} alt="Bloom Home Care service coverage area map showing Katy, TX and surrounding areas" className="rounded-xl shadow-lg w-full" loading="lazy" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="font-serif text-3xl text-foreground mb-6">Katy, TX and surrounding areas</h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-6">
                Our service area spans Katy, TX and surrounding communities in Harris County.
                Being local means faster response times, consistent caregiver availability,
                and a deep understanding of the neighborhoods we serve.
              </p>
              <p className="text-muted-foreground font-sans leading-relaxed">
                Not sure if you're in our coverage area? Give us a call — we're always happy to discuss 
                how we can help, even if you're just outside our primary service zone.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Services available in all areas</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="grid sm:grid-cols-2 gap-4">
            {allServices.map((service, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                <CheckCircle2 size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground font-sans text-sm">{service}</span>
              </div>
            ))}
          </motion.div>

          {/* Service page links */}
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <Link href="/services/companion-care"><Button variant="outline" size="sm">Companion Care <ArrowRight size={14} className="ml-1" /></Button></Link>
            <Link href="/services/personal-care"><Button variant="outline" size="sm">Personal Care <ArrowRight size={14} className="ml-1" /></Button></Link>
            <Link href="/services/dementia-care"><Button variant="outline" size="sm">Dementia Care <ArrowRight size={14} className="ml-1" /></Button></Link>
            <Link href="/services/respite-care"><Button variant="outline" size="sm">Respite Care <ArrowRight size={14} className="ml-1" /></Button></Link>
            <Link href="/services/post-hospital-care"><Button variant="outline" size="sm">Post-Hospital Care <ArrowRight size={14} className="ml-1" /></Button></Link>
          </div>
        </div>
      </section>

      {/* Cooking image + CTA */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-2 md:order-1">
              <h2 className="font-serif text-3xl text-foreground mb-6">Ready to find care near you?</h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-8">
                Every care journey starts with a conversation. Tell us where you are, 
                what your family needs, and we'll help you find the right fit.
              </p>
              <Button variant="premium" size="lg" onClick={handleCTA}>
                <Phone size={16} className="mr-2" />Speak With a Care Coordinator
              </Button>
              <p className="text-sm text-muted-foreground font-sans mt-4 tracking-wide">Licensed & Insured · Privately Owned & Operated</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-1 md:order-2">
              <img src={cookingTogetherImage.src} alt="Caregiver and client cooking a meal together" className="rounded-xl shadow-lg w-full aspect-[4/3] object-cover" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      <ConsultationModal open={consultationOpen} onOpenChange={setConsultationOpen} />
    </>
  );
};

export default ServiceAreas;
