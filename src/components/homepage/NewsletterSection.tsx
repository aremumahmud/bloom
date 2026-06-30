'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const NewsletterSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("newsletter_subscribers" as any).insert({
        email: form.email.trim(),
        full_name: form.name.trim() || null,
      } as any);

      if (error) {
        if (error.code === "23505") {
          toast.info("You're already subscribed — thank you!");
          setSubmitted(true);
          return;
        }
        throw error;
      }

      // Sync to Brevo CRM
      try {
        await supabase.functions.invoke("brevo-sync", {
          body: {
            email: form.email.trim(),
            firstName: form.name.trim().split(" ")[0] || "",
            lastName: form.name.trim().split(" ").slice(1).join(" ") || "",
            source: "Newsletter",
            tag: "Newsletter Subscriber",
          },
        });
      } catch {
        // Non-critical
      }

      setSubmitted(true);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-padding bg-primary/5">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3 leading-tight">
            Stay Informed. Care With Confidence.
          </h2>

          <p className="text-muted-foreground font-sans leading-relaxed mb-2">
            Caring for a loved one can feel overwhelming.<br />
            We're here to guide you.
          </p>

          <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-8 max-w-lg mx-auto">
            Get helpful tips, practical guidance, and gentle support on how to
            care for your loved one at home — from your trusted Katy, TX home care team.
          </p>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="newsletter-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm space-y-4 max-w-md mx-auto"
              >
                <p className="text-muted-foreground font-sans text-sm flex items-center justify-center gap-2">
                  <Mail size={15} className="text-primary" />
                  Enter your email to receive trusted insights from Bloom Home Care.
                </p>

                <Input
                  type="email"
                  required
                  placeholder="Your email address *"
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="font-sans"
                />

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full font-sans gap-2"
                >
                  {loading ? "Subscribing…" : "Get Support"}
                </Button>

                <p className="text-muted-foreground text-xs font-sans">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </motion.form>
            ) : (
              <motion.div
                key="newsletter-thanks"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card p-8 rounded-2xl border border-border shadow-sm max-w-md mx-auto"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={28} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-2">
                  You're In!
                </h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                  Thank you for subscribing. We'll be in touch with helpful resources
                  and care insights — no clutter, just what matters.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
