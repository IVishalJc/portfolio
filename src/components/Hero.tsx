"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/data/resume";
import Magnetic from "./Magnetic";
import { GithubIcon, LinkedinIcon } from "./icons";

function GlitchTitle({ text }: { text: string }) {
  return (
    <span className="relative inline-block">
      <span
        aria-hidden
        className="rgb-left glitch-clip absolute inset-0 text-neon-cyan opacity-80 mix-blend-screen"
      >
        {text}
      </span>
      <span
        aria-hidden
        className="rgb-right glitch-clip absolute inset-0 text-neon-magenta opacity-80 mix-blend-screen"
      >
        {text}
      </span>
      <span className="relative text-white">{text}</span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 pb-20"
    >
      {/* vertical side rails */}
      <div className="pointer-events-none absolute left-5 top-1/2 hidden -translate-y-1/2 lg:block">
        <p className="font-mono text-[10px] tracking-[0.4em] text-white/25 [writing-mode:vertical-rl]">
          PORTFOLIO — TRANSMISSION 2026
        </p>
      </div>
      <div className="pointer-events-none absolute right-5 top-1/2 hidden -translate-y-1/2 lg:block">
        <p className="font-mono text-[10px] tracking-[0.4em] text-white/25 [writing-mode:vertical-rl]">
          {profile.location.toUpperCase()}
        </p>
      </div>

      <motion.div style={{ y, opacity }} className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.9 }}
          className="mb-8 flex flex-wrap items-center gap-4 font-mono text-[11px] tracking-[0.25em] text-white/50"
        >
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-lime [animation:pulse-dot_1.6s_ease-in-out_infinite]" />
            ON AIR
          </span>
          <span className="h-px w-10 bg-white/20" />
          <span>{profile.title.toUpperCase()}</span>
          <span className="h-px w-10 bg-white/20" />
          <span>EST. 2024</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-extrabold uppercase leading-[0.82] tracking-tighter"
        >
          <span className="block text-[clamp(2.75rem,9.5vw,8rem)]">
            <GlitchTitle text="Vishal JC" />
          </span>
          <span className="mt-1 block text-stroke text-[clamp(2.25rem,7.8vw,6.5rem)]">
            AI Engineer
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 3.25 }}
          className="mt-9 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end"
        >
          <p className="max-w-xl text-lg leading-relaxed text-white/60">
            I build production AI systems end to end —{" "}
            <span className="neon-cyan">hybrid retrieval</span>,{" "}
            <span className="neon-magenta">multi-agent orchestration</span>, and{" "}
            <span className="neon-lime">evaluation</span> that proves every gain
            instead of assuming it.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:justify-end">
            <Magnetic>
              <a
                href="#work"
                className="glow-border glass-strong inline-flex items-center gap-3 rounded-full px-7 py-4 font-mono text-xs tracking-[0.2em] text-white"
              >
                VIEW THE WORK
                <span className="text-neon-cyan">→</span>
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center rounded-full border border-white/15 px-7 py-4 font-mono text-xs tracking-[0.2em] text-white/70 transition-colors hover:border-neon-magenta/60 hover:text-white"
              >
                GET IN TOUCH
              </a>
            </Magnetic>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.5 }}
          className="mt-10 flex items-center justify-between border-t border-white/10 pt-5"
        >
          <div className="flex items-center gap-5 text-white/35">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-neon-cyan"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-neon-cyan"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>

          <motion.p
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            className="font-mono text-[10px] tracking-[0.4em] text-white/40"
          >
            SCROLL ↓
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
