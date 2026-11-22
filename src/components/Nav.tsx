"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
            scrolled ? "glass-strong" : ""
          }`}
        >
          <a href="#top" className="font-mono text-sm tracking-widest text-cyan-300/90">
            VJC<span className="text-violet-400">.</span>
          </a>
          <div className="hidden gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="mailto:ivishaljc20@gmail.com"
            className="rounded-full glow-border glass px-4 py-2 text-xs font-medium text-white/90 transition hover:scale-105"
          >
            Hire me
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
