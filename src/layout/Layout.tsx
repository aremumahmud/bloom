'use client'

import { ReactNode } from "react";
import { Header } from "@/layout/Header";
import { Footer } from "@/layout/Footer";
import { ReturnToHubButton } from "@/layout/ReturnToHubButton";
import { MobileCTABar } from "@/layout/MobileCTABar";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20 pb-[env(safe-area-inset-bottom)]">
        {children}
      </main>
      <Footer />
      <ReturnToHubButton />
      <MobileCTABar />
    </div>
  );
}
