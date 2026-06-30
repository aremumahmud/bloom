'use client'

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const REQUEST_TYPES = [
  "Schedule Change",
  "Additional Hours",
  "Caregiver Concern",
  "Billing Question",
  "General Support",
];

interface CareRequestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CareRequestModal({ open, onOpenChange }: CareRequestModalProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    clientName: "",
    phone: "",
    email: "",
    requestType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.clientName || !form.phone || !form.requestType || !form.message) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const { error: dbError } = await supabase.from("care_requests").insert({
        client_name: form.clientName,
        phone: form.phone,
        email: form.email || null,
        request_type: form.requestType,
        message: form.message,
      });
      if (dbError) throw dbError;

      // Send email notification (fire-and-forget)
      supabase.functions.invoke("care-request", { body: form }).catch((err) =>
        console.error("Care request email failed:", err)
      );

      // Sync contact to Brevo CRM with tag and list
      if (form.email) {
        const nameParts = form.clientName.trim().split(/\s+/);
        supabase.functions.invoke("brevo-sync", {
          body: {
            email: form.email,
            firstName: nameParts[0] || "",
            lastName: nameParts.slice(1).join(" ") || "",
            phone: form.phone || undefined,
            source: "Care Request Form",
            tag: "Care Inquiry",
            attributes: {
              REQUEST_TYPE: form.requestType || "",
              MESSAGE: form.message || "",
            },
          },
        }).catch((err) => console.error("Brevo sync failed:", err));
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Care request error:", err);
      toast({ title: "Something went wrong. Please call us at 281-975-6044.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset after close animation
    setTimeout(() => {
      setSubmitted(false);
      setForm({ clientName: "", phone: "", email: "", requestType: "", message: "" });
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl">Request Care Support</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Let us know how we can help.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-6 text-center space-y-3">
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
            <div className="space-y-2">
              <Label htmlFor="clientName">Client Name *</Label>
              <Input
                id="clientName"
                value={form.clientName}
                onChange={(e) => setForm({ ...form, clientName: e.target.value })}
                placeholder="Full name"
                maxLength={100}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="(555) 555-5555"
                maxLength={20}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email (optional)</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                maxLength={255}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="requestType">Type of Request *</Label>
              <Select
                value={form.requestType}
                onValueChange={(val) => setForm({ ...form, requestType: val })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a request type" />
                </SelectTrigger>
                <SelectContent>
                  {REQUEST_TYPES.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="How can we help?"
                maxLength={1000}
                rows={3}
                required
              />
            </div>

            <Button type="submit" variant="premium" className="w-full" disabled={loading}>
              {loading ? "Sending..." : "Submit Request"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
