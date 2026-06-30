'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Users, Clock, Shield } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import familyImage from "@/assets/caregiver-support.jpg";

const cultureValues = [
  {
    icon: Heart,
    title: "Compassion First",
    description: "We lead with empathy in every interaction — with clients, families, and each other.",
  },
  {
    icon: Users,
    title: "Team Support",
    description: "You'll never feel alone. Our team collaborates and supports one another every step of the way.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "We understand life happens. We work with you to create schedules that respect your time.",
  },
  {
    icon: Shield,
    title: "Growth & Training",
    description: "We invest in your development with ongoing training and mentorship opportunities.",
  },
];

const Careers = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={familyImage.src}
            alt="Bloom Home Care team supporting families"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>
        <div className="absolute top-5 left-0 right-0 z-20">
          <div className="container-narrow">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link href="/">Home</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Careers</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        <div className="container-narrow text-center relative z-10 py-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-sans text-sm tracking-widest uppercase mb-4"
          >
            Join Our Team
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
          >
            Employment Opportunities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto"
          >
            Make a meaningful difference in someone's life every day. We're
            looking for compassionate, dependable people to join our care team.
          </motion.p>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="section-padding gradient-sage">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Why Work With Bloom Home Care?
            </h2>
            <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto">
              We believe in caring for our caregivers just as intentionally as we
              care for our clients.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-card rounded-xl border border-border text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-sage-light flex items-center justify-center mx-auto mb-5">
                  <value.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Telescope Job Board */}
      <section id="apply" className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto">
              Explore our current openings and apply directly below.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden bg-card shadow-lg"
            style={{ border: "1px solid hsl(var(--border))" }}
          >
            {/* Gradient overlay to soften Telescope header branding */}
            <div
              className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
              style={{
                height: "8px",
                background: "linear-gradient(to bottom, hsl(var(--card)), transparent)",
              }}
            />
            <iframe
              src="https://telescopehr.com/careers/P7g4A5tdxcmDl11H9CVL5Fzc5j4Mpp"
              width="100%"
              height="800"
              frameBorder="0"
              title="Bloom Home Care Job Openings"
              className="w-full"
              style={{ minHeight: "700px", border: "none" }}
              loading="lazy"
            />
          </motion.div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Can't see the listings? <a href="https://telescopehr.com/careers/P7g4A5tdxcmDl11H9CVL5Fzc5j4Mpp" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">View openings directly →</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Careers;
