'use client'

import { HeroSection } from "@/components/homepage/HeroSection";
import { AboutSection } from "@/components/homepage/AboutSection";
import { TrustIndicators } from "@/components/homepage/TrustIndicators";
import { HowItWorksSection } from "@/components/homepage/HowItWorksSection";
import { ServicesSection } from "@/components/homepage/ServicesSection";
import { ApproachSection } from "@/components/homepage/ApproachSection";
import { CareCollageSection } from "@/components/homepage/CareCollageSection";
import { WhoWeServeSection } from "@/components/homepage/WhoWeServeSection";
import { FounderSection } from "@/components/homepage/FounderSection";
import { ServiceAreaSection } from "@/components/homepage/ServiceAreaSection";
import { LeadMagnetSection } from "@/components/homepage/LeadMagnetSection";
import { NewsletterSection } from "@/components/homepage/NewsletterSection";
import { HomeFAQSection } from "@/components/homepage/HomeFAQSection";
import { CTASection } from "@/components/homepage/CTASection";

const Index = () => {
  return (
    <main>
      {/* 1. Hero — immediate value prop + CTA */}
      <HeroSection />
      {/* 2. About — who we are + stats */}
      <AboutSection />
      {/* 3. Trust signals — why choose Bloom Home Care */}
      <TrustIndicators />
      {/* 4. How it works — process reassurance */}
      <HowItWorksSection />
      {/* 5. Services — what we offer */}
      <ServicesSection />
      {/* 6. Approach — philosophy + values */}
      <ApproachSection />
      {/* 7. Visual storytelling */}
      <CareCollageSection />
      {/* 8. Who we serve — audience targeting */}
      <WhoWeServeSection />
      {/* 9. Founder — personal story + credibility */}
      <FounderSection />
      {/* 11. Service areas — local SEO */}
      <ServiceAreaSection />
      {/* 12. Lead magnet — guide download */}
      <LeadMagnetSection />
      {/* 13. Newsletter */}
      <NewsletterSection />
      {/* 14. FAQ — rich snippet SEO */}
      <HomeFAQSection />
      {/* 15. Final CTA */}
      <CTASection />
    </main>
  );
};

export default Index;
