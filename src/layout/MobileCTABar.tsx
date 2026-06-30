'use client'

import { Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useIsMobile } from "@/hooks/use-mobile";
import { ConsultationModal } from "@/components/homepage/ConsultationModal";

const PUBLIC_ROUTES = [
  "/",
  "/approach",
  "/services",
  "/services/personal-care",
  "/services/companion-care",
  "/services/respite-care",
  "/services/in-facility-care",
  "/services/specialized-care",
  "/services/end-of-life-care",
  "/locations/katy-tx",
  "/faq",
  "/contact",
  "/careers",
  "/blog",
];

export function MobileCTABar() {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const [consultationOpen, setConsultationOpen] = useState(false);

  // Only show on mobile, only on public pages
  const isPublicPage =
    PUBLIC_ROUTES.includes(pathname) ||
    pathname.startsWith("/blog/");

  if (!isMobile || !isPublicPage) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 safe-area-bottom">
        <div className="flex border-t border-border bg-card/95 backdrop-blur-md shadow-[0_-4px_20px_-4px_hsl(var(--foreground)/0.08)]">
          <button
            onClick={() => setConsultationOpen(true)}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-medium text-foreground hover:bg-accent transition-colors"
          >
            <MessageCircle size={16} className="text-primary" />
            <span>Request Consultation</span>
          </button>

          <div className="w-px bg-border" />

          <a
            href="tel:+12819756044"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Phone size={16} />
            <span>Call Us</span>
          </a>
        </div>
      </div>

      <ConsultationModal open={consultationOpen} onOpenChange={setConsultationOpen} />
    </>
  );
}
