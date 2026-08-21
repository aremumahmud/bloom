'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { CTASection } from "@/components/homepage/CTASection";
import { Button } from "@/components/ui/button";
import { Heart, ShieldCheck, HeartHandshake, Clock, Award, MessageCircle, UserCheck, HeartPulse, Phone } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import founderPortrait from "@/assets/founder-portrait.jpg";
import caregiverElderlyImage from "@/assets/caregiver-elderly-moment.jpg";

const highlights = [
  "More than 22 years of healthcare experience",
  "Registered Nurse with a BSN from Prairie View A&M University and a CMSRN credential",
  "Founded and operated a Medicare-certified home health agency in Victoria, Texas",
  "Built, ran, and later sold a second home health agency in Arizona",
  "Led a 28-bed hospital medical-surgical unit and its day and night nursing teams",
  "Deep experience with patient safety, compliance, and care operations",
];

const commitments = [
  {
    icon: MessageCircle,
    title: "The Bloom Family Update",
    description:
      "After each visit, families receive a short update. It covers the care provided, meals, activities, the client's mood, and any safety concerns worth noting. With permission, we can share photos too. Families can also set how often and how they want to hear from us.",
  },
  {
    icon: UserCheck,
    title: "Know Who Is Coming to the Home",
    description:
      "Trust starts before the first visit. Through our No Stranger at the Door approach, families learn about their caregiver ahead of time, including a photo, a short bio, experience, and languages spoken. When it helps, we can arrange an introductory call. Families know who to expect before care begins.",
  },
  {
    icon: HeartHandshake,
    title: "Thoughtful Caregiver Matching",
    description:
      "Good care starts with the right match. With the Bloom Caregiver Match, we look beyond availability. We also consider personality, communication style, language, daily routines, interests, transportation needs, and relevant care experience such as dementia support. After care starts, we check in to confirm the match feels right for the client and the caregiver.",
  },
];

const values = [
  { icon: Heart, title: "Compassion", description: "Kind, patient care for every client." },
  { icon: ShieldCheck, title: "Integrity", description: "Honest and accountable in what we do." },
  { icon: HeartHandshake, title: "Respect", description: "Each client's routines and dignity come first." },
  { icon: Clock, title: "Dependability", description: "We show up and follow through." },
  { icon: Award, title: "Excellence", description: "Care shaped by experienced healthcare leadership." },
];

const serviceAreas = [
  { name: "Cypress, TX", href: "/locations/cypress-tx" },
  { name: "Spring, TX", href: "/locations/spring-tx" },
  { name: "The Woodlands, TX", href: "/locations/the-woodlands-tx" },
  { name: "Sugar Land, TX", href: "/locations/sugar-land-tx" },
];

const testimonials = [
  {
    quote:
      "Bloom kept us informed every step of the way. We always knew who was coming and how Mom's day went. That peace of mind meant everything.",
    author: "Family of a Bloom client, Katy, TX",
  },
  {
    quote:
      "You can tell the difference when a nurse is behind the scenes. Our caregiver matched perfectly with my father's routine and personality.",
    author: "Family of a Bloom client, Cypress, TX",
  },
  {
    quote:
      "From the first call to every visit since, the communication has been clear and honest. Bloom treated our family like their own.",
    author: "Family of a Bloom client, Sugar Land, TX",
  },
];

const OurStory = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-background">
        <div className="absolute inset-0 z-0">
          <img
            src={caregiverElderlyImage.src}
            alt="Bloom Home Care caregiver sharing a warm moment with a senior client in Katy, TX"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/50" />
        </div>

        {/* Breadcrumb */}
        <div className="absolute top-5 left-0 right-0 z-20">
          <div className="container-narrow">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link href="/">Home</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Our Story</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        <div className="container-narrow relative z-10 py-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-sans text-sm tracking-widest uppercase mb-4"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight max-w-2xl"
          >
            About Bloom Home Care
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground font-sans max-w-xl leading-relaxed mb-8"
          >
            A locally owned,{" "}
            <Link href="/" className="text-primary underline underline-offset-4 hover:no-underline">
              non-medical home care agency
            </Link>{" "}
            serving families across Katy, Cypress, and Greater Houston.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4 font-sans text-muted-foreground leading-relaxed max-w-xl mb-8"
          >
            <p>
              Bloom Home Care is a locally owned, non-medical home care agency serving families
              across Katy, Cypress, and Greater Houston. We help older adults stay safe,
              comfortable, and independent at home while providing their families with clear
              communication and peace of mind.
            </p>
            <p>
              Bloom Home Care was founded by Jackie Herrera, a registered nurse with more than
              two decades of experience in healthcare. That background shapes how we choose
              caregivers, plan care, and keep families informed. It does not change what we
              provide, which is non-medical support with everyday life, not skilled nursing or
              medical treatment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-foreground font-sans mb-4">
              Looking for dependable home care in Katy or Houston? A free consultation is the
              simplest way to see how Bloom can help.
            </p>
            <Button variant="premium" size="lg" asChild>
              <Link href="/contact">Schedule a Free Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-5 font-sans text-muted-foreground leading-relaxed"
          >
            <p className="text-primary font-sans text-sm tracking-widest uppercase">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-snug">
              How Bloom Home Care began
            </h2>

            <p>
              Bloom Home Care grew out of a pattern our founder, Jackie Herrera, saw for years
              in healthcare. Many people would leave the hospital before they were ready to
              manage daily life on their own.
            </p>
            <p>
              They no longer needed skilled nursing. They needed steady, dependable help with
              meals, bathing, dressing, transportation, companionship, and a safe home.
            </p>
            <p>
              Families felt the strain too. Adult children were balancing jobs, their own kids,
              and aging parents, often from another city. They wanted the best for their parents
              but could not do everything alone.
            </p>
            <p>
              So she built the kind of home care she would trust for her own family. That
              became Bloom Home Care.
            </p>

            <blockquote className="border-l-2 border-primary pl-5 italic text-foreground text-lg leading-relaxed mt-6">
              "The goal was never to start just another home care agency. It was to build the
              kind of agency I would trust with my own family."
            </blockquote>
            <p className="text-foreground font-medium text-sm">
              — Jackie Herrera, Founder and Director of Bloom Home Care
            </p>
          </motion.div>
        </div>
      </section>

      {/* Meet Our Founder */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-primary font-sans text-sm tracking-widest uppercase mb-3 text-center"
          >
            Meet Our Founder
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-serif text-3xl md:text-4xl text-foreground text-center mb-14"
          >
            Jackie Herrera, BSN, RN, CMSRN
          </motion.h2>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:col-span-2 flex justify-center"
            >
              <div className="w-full max-w-xs">
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
                  <img
                    src={founderPortrait.src}
                    alt="Jackie Herrera, BSN, RN, CMSRN — Founder and Director of Bloom Home Care in Katy, TX"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="text-center text-sm text-muted-foreground font-sans mt-3">
                  Founder and Director, Bloom Home Care
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="md:col-span-3 space-y-5 font-sans text-muted-foreground leading-relaxed"
            >
              <p>
                Jackie has worked in healthcare for more than 22 years, across home health,
                hospitals, and healthcare operations. She is a Registered Nurse and holds the
                Certified Medical-Surgical Registered Nurse (CMSRN) credential.
              </p>
              <p>
                Earlier in her career, she owned and ran home health agencies, then led hospital
                teams, managing staffing, patient safety, and daily operations. That mix of
                ownership and hands-on leadership shapes how Bloom selects caregivers,
                communicates with families, and builds each care plan.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-primary font-sans text-sm tracking-widest uppercase mb-3">
              Background
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
              Experience That Shapes Our Care
            </h2>
            <p className="text-muted-foreground font-sans max-w-lg mx-auto">
              A few highlights from Jackie's background.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto grid sm:grid-cols-1 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="flex items-start gap-3 bg-card rounded-xl border border-border p-5"
              >
                <HeartPulse size={20} className="text-primary shrink-0 mt-0.5" />
                <p className="text-foreground font-sans text-sm leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Families Can Expect */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-primary font-sans text-sm tracking-widest uppercase mb-3">
              Our Commitment
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
              What Families Can Expect From Bloom Home Care
            </h2>
            <p className="text-muted-foreground font-sans max-w-lg mx-auto">
              Three commitments shape the Bloom experience for the families we serve.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {commitments.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-xl border border-border p-7 space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center">
                  <item.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-serif text-lg text-foreground">{item.title}</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-10"
          >
            <p className="text-muted-foreground font-sans">
              More on how it all works is on our{" "}
              <Link
                href="/approach"
                className="text-primary font-medium hover:underline underline-offset-4"
              >
                care approach page
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-muted-foreground font-sans max-w-md mx-auto">
              See how Bloom supports families every day. Reach out for a free, no-pressure
              consultation.
            </p>
            <Button variant="premium" size="lg" asChild>
              <Link href="/contact">Talk With Our Care Team</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 max-w-2xl mx-auto"
          >
            <p className="text-primary font-sans text-sm tracking-widest uppercase mb-3">
              Our Mission and Values
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-5">
              Care built on trust
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed">
              At Bloom Home Care, we believe every person deserves to age with dignity,
              independence, and respect. Welcoming a caregiver into a loved one's home takes
              trust, and we treat that seriously.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-14">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-background rounded-xl border border-border p-6 space-y-3 text-center"
              >
                <div className="w-11 h-11 rounded-full bg-sage-light flex items-center justify-center mx-auto">
                  <value.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-serif text-base text-foreground">{value.title}</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto space-y-5"
          >
            <p className="text-muted-foreground font-sans">Before we make a decision, we ask one question.</p>
            <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed italic">
              "If this were my own parent, what would I want their home care to look like?"
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Our aim is simple. To be one of the most trusted non-medical home care providers in
              the Katy and Houston area, known for caregivers families rely on and communication
              they can count on.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 max-w-2xl mx-auto"
          >
            <p className="text-primary font-sans text-sm tracking-widest uppercase mb-3">
              Service Area
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Rooted in Katy and Serving Greater Houston
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed">
              As a locally owned{" "}
              <Link href="/" className="text-primary underline underline-offset-4 hover:no-underline">
                home care agency in Katy, TX
              </Link>
              , Bloom serves families across the Greater Houston area and works closely with
              local hospitals, physicians, and case managers. Care is available in these nearby
              communities.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-3xl mx-auto">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  href={area.href}
                  className="block text-center bg-card border border-border rounded-xl py-6 px-4 font-sans text-foreground font-medium hover:border-primary hover:text-primary transition-colors"
                >
                  {area.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-primary font-sans text-sm tracking-widest uppercase mb-3">
              What Families Say
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Trusted by families across Greater Houston
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-xl border border-border p-7 space-y-4"
              >
                <p className="text-foreground font-sans italic leading-relaxed">"{t.quote}"</p>
                <p className="text-muted-foreground font-sans text-sm">— {t.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 max-w-xl mx-auto"
          >
            <h2 className="text-primary font-sans text-sm tracking-widest uppercase">
              Talk With Our Care Team
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Choosing home care is a big decision. With Bloom, it comes with nurse-owned
              experience, careful caregiver matching, and clear communication at every step.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Ready to start? Schedule a free consultation and tell us about the care a loved
              one needs.
            </p>
            <div className="pt-2">
              <Button variant="premium" size="xl" asChild>
                <Link href="/contact">Book a Free Consultation</Link>
              </Button>
            </div>
            <p className="text-muted-foreground font-sans text-sm pt-2 flex items-center justify-center gap-2">
              <Phone size={16} className="text-primary" />
              Prefer to talk now? Call{" "}
              <a href="tel:+12819756044" className="text-primary font-medium hover:underline">
                281-975-6044
              </a>{" "}
              to reach the Bloom Home Care team.
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default OurStory;
