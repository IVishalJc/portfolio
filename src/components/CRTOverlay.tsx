"use client";

import { useEffect, useState } from "react";

export default function CRTOverlay() {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timeout: ReturnType<typeof setTimeout>;

    const schedule = () => {
      timeout = setTimeout(() => {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 180);
        schedule();
      }, 6000 + Math.random() * 9000);
    };

    schedule();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60]">
      <div className="absolute inset-0 crt-scanlines" />
      <div className="absolute inset-0 crt-vignette" />
      <div className="absolute inset-0 bg-white opacity-[0.02] crt-flicker" />
      <div className="absolute inset-0 noise-overlay" />

      <div className="absolute inset-x-0 top-0 h-24 scan-sweep bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />

      {glitch && (
        <>
          <div
            className="absolute inset-x-0 h-6 bg-neon-cyan/20 mix-blend-screen"
            style={{ top: `${20 + Math.random() * 60}%` }}
          />
          <div
            className="absolute inset-x-0 h-3 bg-neon-magenta/20 mix-blend-screen"
            style={{ top: `${20 + Math.random() * 60}%` }}
          />
        </>
      )}
    </div>
  );
}
