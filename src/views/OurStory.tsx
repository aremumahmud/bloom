'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { CTASection } from "@/components/homepage/CTASection";
import { Heart, Users, Star, Shield } from "lucide-react";
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

const values = [
  {
    icon: Heart,
    title: "Genuine Compassion",
    description:
      "Care given from the heart looks different — and families feel it. Every interaction at Bloom Home Care is guided by authentic warmth and human presence.",
  },
  {
    icon: Users,
    title: "Relationship-Centered",
    description:
      "We believe the caregiver-client relationship is the most important element of quality care. We invest in continuity so trust can take root.",
  },
  {
    icon: Star,
    title: "Intentional Excellence",
    description:
      "We hold ourselves to a high standard not because of policies, but because we care. Each detail matters when you're caring for someone's loved one.",
  },
  {
    icon: Shield,
    title: "Dignity Always",
    description:
      "Every person we serve deserves to be treated with respect and dignity — regardless of what level of help they need. That's not a value-add. It's our baseline.",
  },
];

const OurStory = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center bg-background">
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
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight max-w-2xl"
          >
            Built on Personal Experience. Driven by Purpose.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground font-sans max-w-xl leading-relaxed"
          >
            Bloom Home Care was founded in Katy, TX by people who have lived the experience
            of caring for a loved one — and who knew there had to be a better way.
          </motion.p>
        </div>
      </section>

      {/* Founding Story */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-5 gap-12 items-start">

            {/* Portrait */}
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
                    alt="Founder of Bloom Home Care — Katy, TX"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="text-center text-sm text-muted-foreground font-sans mt-3">
                  Founder, Bloom Home Care
                </p>
              </div>
            </motion.div>

            {/* Story text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="md:col-span-3 space-y-5 font-sans text-muted-foreground leading-relaxed"
            >
              <p className="text-primary font-sans text-sm tracking-widest uppercase">
                How It All Began
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-snug">
                We started Bloom Home Care because we needed it ourselves.
              </h2>

              <p>
                Like so many families, we found ourselves navigating one of life's hardest
                chapters — searching for someone trustworthy to care for a person we loved deeply.
                We wanted more than a caregiver who showed up. We wanted someone who truly showed up.
              </p>
              <p>
                That experience — with all its uncertainty, hope, and moments of grace — became
                the foundation of Bloom Home Care. We launched right here in Katy, TX with one
                clear mission: to give every family the kind of care we were searching for ourselves.
              </p>
              <p>
                Calm. Intentional. Consistent. Human.
              </p>

              <blockquote className="border-l-2 border-primary pl-5 italic text-foreground text-lg leading-relaxed mt-6">
                "We started Bloom Home Care because we know what it feels like to want the absolute
                best for someone you love — and to need someone you can truly trust to show up for them."
              </blockquote>
              <p className="text-foreground font-medium text-sm">
                — Founders, Bloom Home Care
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-card">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-primary font-sans text-sm tracking-widest uppercase">
              Our Mission
            </p>
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed max-w-3xl mx-auto">
              To provide compassionate, relationship-centered home care that allows people
              to live with dignity and genuine human connection — right where they belong.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-primary font-sans text-sm tracking-widest uppercase mb-3">
              What We Stand For
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              The values that guide everything we do
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl border border-border p-7 space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center">
                  <value.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-serif text-lg text-foreground">
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

      {/* Why Katy */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              <p className="text-primary font-sans text-sm tracking-widest uppercase">
                Rooted in Katy, TX
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-snug">
                We're local, and that matters.
              </h2>
              <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
                <p>
                  Bloom Home Care is a locally owned and operated agency. We live here,
                  raise families here, and care for neighbors right here in Katy, TX
                  and the surrounding communities.
                </p>
                <p>
                  That means when you call us, you're not reaching a call center.
                  You're reaching a team that's invested in this community — one that
                  shows up because it genuinely cares, not because a franchise said to.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4 transition-colors font-sans"
                >
                  Get in touch with our team →
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-2xl overflow-hidden shadow-md aspect-[4/3]"
            >
              <img
                src={caregiverElderlyImage.src}
                alt="Bloom Home Care caregiver and client in Katy, TX — locally owned non-medical home care"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach link */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-primary font-sans text-sm tracking-widest uppercase">
              Learn More
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground">
              Curious about how we deliver care?
            </h2>
            <p className="text-muted-foreground font-sans max-w-md mx-auto leading-relaxed">
              Our approach is built on slowing down, listening closely, and treating every
              person as more than a task on a checklist.
            </p>
            <Link
              href="/approach"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4 transition-colors font-sans"
            >
              Read about our approach →
            </Link>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default OurStory;
