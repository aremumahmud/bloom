'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Phone, Mail, MapPin, Clock, CheckCircle, Instagram, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import handsImage from "@/assets/hands-connection.jpg";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "281-975-6044",
    href: "tel:+12819756044",
  },
  {
    icon: Phone,
    label: "Direct Line",
    value: "281-971-6044",
    href: "tel:+12819716044",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@bloomhomecare.org",
    href: "mailto:info@bloomhomecare.org",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Katy, TX and surrounding areas",
  },
  {
    icon: Clock,
    label: "Availability",
    value: "24/7 Care Support",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    relationship: "",
    message: "",
    referral_source: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const { error } = await supabase.from("consultations").insert({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || null,
      relationship: formData.relationship || null,
      message: formData.message,
      referral_source: formData.referral_source || null,
    });
    
    setIsSubmitting(false);
    
    if (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
      return;
    }

    // Send email notification (fire-and-forget)
    supabase.functions.invoke("consultation-notify", {
      body: formData,
    }).catch((err) => console.error("Email notify failed:", err));

    // Sync contact to Brevo CRM with tag and list
    const nameParts = formData.name.trim().split(/\s+/);
    supabase.functions.invoke("brevo-sync", {
      body: {
        email: formData.email,
        firstName: nameParts[0] || "",
        lastName: nameParts.slice(1).join(" ") || "",
        phone: formData.phone || undefined,
        source: "Contact Page",
        tag: "General Inquiry",
        attributes: {
          RELATIONSHIP: formData.relationship || "",
          REFERRAL_SOURCE: formData.referral_source || "",
          MESSAGE: formData.message || "",
        },
      },
    }).catch((err) => console.error("Brevo sync failed:", err));
    
    setIsSubmitted(true);
    toast({
      title: "Message sent",
      description: "We'll be in touch within one business day.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Hero with Image */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={handsImage.src}
            alt="Bloom Home Care caregiver gently holding a senior client's hands — compassionate home care in Katy, TX"
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
                  <BreadcrumbPage>Contact</BreadcrumbPage>
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
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
          >
            Begin a conversation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto"
          >
            We're here to listen, answer your questions, and help you explore 
            what thoughtful care might look like for you or your loved one.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
                Schedule a Consultation
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 bg-sage-light rounded-xl text-center"
                >
                  <CheckCircle size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="font-serif text-xl text-foreground mb-2">
                    Thank you for reaching out to Bloom Home Care
                  </h3>
                  <p className="text-muted-foreground font-sans">
                    We've received your request and will be in touch shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-sans text-sm text-foreground">
                        Your Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-background border-border focus:border-primary"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-sans text-sm text-foreground">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-background border-border focus:border-primary"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-sans text-sm text-foreground">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-background border-border focus:border-primary"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="relationship" className="font-sans text-sm text-foreground">
                        Your Relationship
                      </Label>
                      <Input
                        id="relationship"
                        name="relationship"
                        value={formData.relationship}
                        onChange={handleChange}
                        className="bg-background border-border focus:border-primary"
                        placeholder="Self, Daughter, Son, etc."
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-sans text-sm text-foreground">
                      How can we help? *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-background border-border focus:border-primary resize-none"
                      placeholder="Tell us a bit about what you're looking for..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="referral_source" className="font-sans text-sm text-foreground">
                      How did you hear about us?
                    </Label>
                    <select
                      id="referral_source"
                      name="referral_source"
                      value={formData.referral_source}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select one...</option>
                      <option value="Google Search">Google Search</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Friend or Family">Friend or Family</option>
                      <option value="Doctor / Healthcare Provider">Doctor / Healthcare Provider</option>
                      <option value="Community Event">Community Event</option>
                      <option value="Nextdoor">Nextdoor</option>
                      <option value="Church / Faith Community">Church / Faith Community</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <Button 
                    type="submit" 
                    variant="premium" 
                    size="xl" 
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  <p className="text-xs text-muted-foreground font-sans">
                    Your information is confidential and will only be used to respond to your inquiry.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-12">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-sage-light flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-sans mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-foreground font-sans hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-sans">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 mb-12">
                <a
                  href="https://www.instagram.com/bloomhomecare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-sage-light flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/bloomhomecare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-sage-light flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              </div>

              {/* Reassurance */}
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="font-serif text-lg text-foreground mb-3">
                  What to Expect
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground font-sans">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    We'll respond within one business day
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    A care coordinator will schedule a free consultation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    No pressure, no obligations — just conversation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    We'll discuss your needs and answer all questions
                  </li>
                </ul>
              </div>

            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
