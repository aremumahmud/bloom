'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, Home } from "lucide-react";
import { useState, useEffect } from "react";

const SESSION_KEY = "stillcare-command-session";

export function ReturnToHubButton() {
  const path = usePathname();
  const [hasCommandSession, setHasCommandSession] = useState(false);

  useEffect(() => {
    if (path === "/command" || path.startsWith("/command/")) {
      sessionStorage.setItem(SESSION_KEY, "true");
      setHasCommandSession(true);
    } else {
      setHasCommandSession(sessionStorage.getItem(SESSION_KEY) === "true");
    }
  }, [path]);

  // Hide on /command itself, and hide if user never visited command center this session
  if (path === "/command" || !hasCommandSession) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 sm:bottom-6 sm:left-6 flex gap-2">
      <Link
        href="/command"
        className="inline-flex items-center gap-2 rounded-full border border-border bg-background/95 px-4 py-3 text-sm font-medium text-foreground shadow-lg backdrop-blur-md transition-colors hover:bg-accent"
        aria-label="Return to Command Center"
      >
        <ArrowLeft size={16} className="text-primary" />
        Command Center
      </Link>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-full border border-border bg-background/95 w-11 h-11 text-foreground shadow-lg backdrop-blur-md transition-colors hover:bg-accent"
        aria-label="Go to main website"
      >
        <Home size={16} className="text-primary" />
      </Link>
    </div>
  );
}
