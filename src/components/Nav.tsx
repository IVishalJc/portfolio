"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const links = [
  { href: "#about", label: "PROFILE" },
  { href: "#work", label: "WORK" },
  { href: "#stack", label: "STACK" },
  { href: "#experience", label: "RECORD" },
  { href: "#contact", label: "CONTACT" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-magenta"
      />

      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 2.9 }}
        className="fixed inset-x-0 top-0 z-50 px-6 py-4"
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong" : ""
          }`}
        >
          <a
            href="#top"
            className="font-display text-sm font-extrabold tracking-tight text-white"
          >
            VJC<span className="text-neon-cyan">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[11px] tracking-[0.2em] text-white/50 transition-colors hover:text-neon-cyan"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="mailto:ivishaljc20@gmail.com"
            className="rounded-full border border-white/15 px-4 py-2 font-mono text-[10px] tracking-[0.2em] text-white/80 transition-colors hover:border-neon-magenta/60 hover:text-white"
          >
            HIRE ME
          </a>
        </div>
      </motion.nav>
    </>
  );
}
