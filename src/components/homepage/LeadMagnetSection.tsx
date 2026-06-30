'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, CheckCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const signs = [
  "Struggling with daily tasks like bathing or dressing",
  "Forgetting medications or appointments",
  "Increased isolation or withdrawal",
  "Noticeable changes in mood or behavior",
  "Difficulty keeping up with meals or housekeeping",
];

export const LeadMagnetSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Please provide your name and email.");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("lead_magnet_downloads" as any).insert({
        full_name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        guide_name: "5-signs-guide",
      } as any);

      if (error) throw error;

      // Sync to Brevo CRM
      try {
        await supabase.functions.invoke("brevo-sync", {
          body: {
            email: form.email.trim(),
            name: form.name.trim(),
            phone: form.phone.trim() || undefined,
            lead_type: "Guide Download",
            source: "5 Signs Guide",
          },
        });
      } catch {
        // Non-critical — don't block success
      }

      setSubmitted(true);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-padding bg-accent/40">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-sans tracking-wider uppercase mb-6">
              <BookOpen size={14} />
              Free Guide
            </div>

            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 leading-tight">
              5 Signs Your Loved One May Need Home Care
            </h2>

            <p className="text-muted-foreground font-sans leading-relaxed mb-8">
              It's not always easy to know when it's time to seek support.
              This short, thoughtful guide will help Katy, TX families recognize the
              signs — and feel more confident about the next step.
            </p>

            <ul className="space-y-3">
              {signs.map((sign, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-primary text-xs font-semibold">{i + 1}</span>
                  </div>
                  <span className="text-foreground font-sans text-sm">{sign}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — Form or Thank You */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-card p-8 rounded-2xl border border-border shadow-sm space-y-5"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Download size={20} className="text-primary" />
                    <h3 className="font-serif text-xl text-foreground">
                      Download Your Free Guide
                    </h3>
                  </div>
                  <p className="text-muted-foreground font-sans text-sm">
                    Enter your details below and we'll send it right over.
                  </p>

                  <div className="space-y-1.5">
                    <Label htmlFor="lm-name" className="text-foreground font-sans text-sm">
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="lm-name"
                      required
                      maxLength={100}
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="lm-email" className="text-foreground font-sans text-sm">
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="lm-email"
                      type="email"
                      required
                      maxLength={255}
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="lm-phone" className="text-foreground font-sans text-sm">
                      Phone Number <span className="text-muted-foreground text-xs">(optional)</span>
                    </Label>
                    <Input
                      id="lm-phone"
                      type="tel"
                      maxLength={20}
                      placeholder="(214) 555-0123"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full font-sans"
                  >
                    {loading ? "Sending…" : "Send Me the Guide"}
                  </Button>

                  <p className="text-muted-foreground text-xs font-sans text-center">
                    We respect your privacy. No spam, ever.
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-card p-10 rounded-2xl border border-border shadow-sm text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} className="text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground mb-3">
                    Thank You, {form.name.split(" ")[0]}
                  </h3>
                  <p className="text-muted-foreground font-sans leading-relaxed">
                    Your guide is on its way. In the meantime, if you have questions
                    or would like to begin a conversation about care, we're here for you.
                  </p>
                  <a
                    href="/contact"
                    className="inline-block mt-6 text-primary font-sans text-sm hover:underline"
                  >
                    Speak With a Care Coordinator →
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
