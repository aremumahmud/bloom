'use client'

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ConsultationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ConsultationModal({ open, onOpenChange }: ConsultationModalProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    relationship: "",
    message: "",
    referral_source: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "Consultation Form" }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch (err) {
      console.error("Consultation error:", err);
      toast({ title: "Something went wrong. Please call us at 281-975-6044.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", phone: "", relationship: "", message: "", referral_source: "" });
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl">Schedule a Consultation</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Tell us a little about your needs and we'll be in touch within one business day.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-6 text-center space-y-3">
            <CheckCircle size={48} className="text-primary mx-auto" />
            <p className="text-foreground font-serif text-lg">Thank you for reaching out to Bloom Home Care</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We've received your request and will be in touch shortly.
            </p>
            <Button variant="premium" onClick={handleClose} className="mt-4">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="modal-name">Your Name *</Label>
                <Input
                  id="modal-name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  maxLength={100}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="modal-email">Email Address *</Label>
                <Input
                  id="modal-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  maxLength={255}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="modal-phone">Phone Number</Label>
                <Input
                  id="modal-phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(123) 456-7890"
                  maxLength={20}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="modal-relationship">Your Relationship</Label>
                <Input
                  id="modal-relationship"
                  name="relationship"
                  value={form.relationship}
                  onChange={handleChange}
                  placeholder="Self, Daughter, Son, etc."
                  maxLength={100}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="modal-message">How can we help? *</Label>
              <Textarea
                id="modal-message"
                name="message"
                required
                rows={3}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us a bit about what you're looking for..."
                maxLength={1000}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="modal-referral">How did you hear about us?</Label>
              <select
                id="modal-referral"
                name="referral_source"
                value={form.referral_source}
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

            <Button type="submit" variant="premium" className="w-full" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>

            <p className="text-xs text-muted-foreground font-sans text-center">
              Your information is confidential and will only be used to respond to your inquiry.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
