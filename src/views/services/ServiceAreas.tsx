'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ConsultationModal } from "@/components/homepage/ConsultationModal";
import { useIsMobile } from "@/hooks/use-mobile";
import heroCaregiverImage from "@/assets/hero-caregiver.jpg";
import coverageMapImage from "@/assets/Bloom_Home_Care_service_map_202607020458.jpeg";
import cookingTogetherImage from "@/assets/cooking-together.jpg";

const cityGroups = [
  {
    region: "West Houston",
    cities: [
      { name: "Katy", slug: "katy-tx", description: "Our home base. Locally operated from Katy, TX — deeply connected to this community.", highlight: true },
      { name: "Fulshear", slug: "fulshear-tx", description: "Growing Fort Bend community with a strong family focus." },
      { name: "Richmond", slug: "richmond-tx", description: "One of Texas's oldest cities — a community with deep roots and proud history." },
      { name: "Rosenberg", slug: "rosenberg-tx", description: "Close-knit Fort Bend community where family runs deep." },
      { name: "Cinco Ranch", slug: "cinco-ranch-tx", description: "Master-planned community known for quality living in Katy area." },
      { name: "Brookshire", slug: "brookshire-tx", description: "Small-city warmth in Waller County, west of Katy." },
    ],
  },
  {
    region: "North Houston",
    cities: [
      { name: "Spring", slug: "spring-tx", description: "Vibrant north Houston community with families of all stages of life." },
      { name: "The Woodlands", slug: "the-woodlands-tx", description: "One of the nation's most acclaimed master-planned communities." },
      { name: "Conroe", slug: "conroe-tx", description: "Growing Montgomery County seat with a strong sense of identity." },
      { name: "Tomball", slug: "tomball-tx", description: "Beloved small-town character just northwest of Houston." },
      { name: "Cypress", slug: "cypress-tx", description: "Established northwest Houston community with strong family values." },
      { name: "Humble", slug: "humble-tx", description: "East Harris County community with close-knit neighborhoods." },
      { name: "Kingwood", slug: "kingwood-tx", description: "The 'Livable Forest' — Houston's beloved wooded community." },
    ],
  },
  {
    region: "East Houston",
    cities: [
      { name: "Pasadena", slug: "pasadena-tx", description: "Hardworking, close-knit city on the east side of Houston." },
      { name: "Baytown", slug: "baytown-tx", description: "Waterfront community with deep roots and generational families." },
      { name: "Channelview", slug: "channelview-tx", description: "East Harris County community with strong neighborhood ties." },
      { name: "Deer Park", slug: "deer-park-tx", description: "Proud east Houston city where neighbors look out for each other." },
      { name: "La Porte", slug: "la-porte-tx", description: "Historic bayfront community with decades of community pride." },
    ],
  },
  {
    region: "South Houston",
    cities: [
      { name: "Pearland", slug: "pearland-tx", description: "One of Houston's most vibrant and diverse growing communities." },
      { name: "Missouri City", slug: "missouri-city-tx", description: "Thriving community spanning Fort Bend and Harris Counties." },
      { name: "Sugar Land", slug: "sugar-land-tx", description: "Highly regarded planned city in Fort Bend County." },
      { name: "League City", slug: "league-city-tx", description: "Fast-growing, family-friendly city on the Gulf Coast." },
      { name: "Friendswood", slug: "friendswood-tx", description: "Warm, welcoming community known for its neighborly spirit." },
      { name: "Alvin", slug: "alvin-tx", description: "Small Brazoria County city with big community heart." },
      { name: "Manvel", slug: "manvel-tx", description: "One of Brazoria County's fastest-growing communities." },
      { name: "Webster", slug: "webster-tx", description: "Connected Clear Lake area community in South Houston." },
      { name: "Clear Lake", slug: "clear-lake-tx", description: "Distinctive waterfront community with NASA-area heritage." },
      { name: "Galveston", slug: "galveston-tx", description: "Historic island community with a spirit unlike anywhere else in Texas." },
    ],
  },
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

const serviceAreas = ["Katy", "Fulshear", "Richmond", "Rosenberg", "Cinco Ranch", "Brookshire", "Spring", "The Woodlands", "Conroe", "Tomball", "Cypress", "Humble", "Kingwood", "Pasadena", "Baytown", "Channelview", "Deer Park", "La Porte", "Pearland", "Missouri City", "Sugar Land", "League City", "Friendswood", "Alvin", "Manvel", "Webster", "Clear Lake", "Galveston"];

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

      {/* City Cards — grouped by region */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Communities we serve across Greater Houston</h2>
            <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto">Every family we serve is part of the community we live and work in.</p>
          </motion.div>

          <div className="space-y-14">
            {cityGroups.map((group, gi) => (
              <div key={group.region}>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-xs font-sans font-semibold text-primary uppercase tracking-widest mb-5"
                >
                  {group.region}
                </motion.p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {group.cities.map((city, index) => (
                    <motion.div
                      key={city.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.04 }}
                    >
                      <Link
                        href={`/locations/${city.slug}`}
                        className={`block p-5 rounded-xl border h-full hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ${city.highlight ? 'bg-primary/5 border-primary/20' : 'bg-card border-border'}`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin size={15} className="text-primary flex-shrink-0" />
                          <h3 className="font-serif text-base text-foreground">{city.name}, TX</h3>
                        </div>
                        <p className="text-muted-foreground font-sans leading-relaxed text-xs mb-3 line-clamp-2">{city.description}</p>
                        <span className="inline-flex items-center gap-1 text-primary text-xs font-sans font-medium">
                          Learn more <ArrowRight size={12} />
                        </span>
                        {city.highlight && (
                          <span className="block mt-2 px-2.5 py-0.5 bg-primary/10 text-primary text-xs font-sans rounded-full w-fit">Home Base</span>
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
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
              <h2 className="font-serif text-3xl text-foreground mb-6">Greater Houston, TX</h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-6">
                Our service area spans the Greater Houston region — from Katy and Fulshear in the west,
                to The Woodlands and Conroe in the north, Baytown and Pasadena in the east, and
                Galveston and Pearland in the south. Being locally operated means faster response times
                and caregivers who know your community.
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
