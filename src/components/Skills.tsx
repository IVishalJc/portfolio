"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { skillGroups } from "@/data/resume";

const ACCENT = {
  cyan: { text: "text-neon-cyan", border: "group-hover:border-neon-cyan/50" },
  magenta: {
    text: "text-neon-magenta",
    border: "group-hover:border-neon-magenta/50",
  },
  lime: { text: "text-neon-lime", border: "group-hover:border-neon-lime/50" },
  violet: {
    text: "text-neon-violet",
    border: "group-hover:border-neon-violet/50",
  },
} as const;

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-70%"]);

  return (
    <section id="stack" ref={ref} className="relative h-[280vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto mb-12 w-full max-w-6xl px-6">
          <p className="font-mono text-xs tracking-[0.4em] text-neon-lime">
            03 — THE STACK
          </p>
          <h2 className="mt-4 font-display text-5xl font-extrabold uppercase tracking-tighter text-white sm:text-7xl">
            Tools of the trade
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-6 pl-6">
          {skillGroups.map((group, i) => {
            const accent = ACCENT[group.accent];
            return (
              <div
                key={group.label}
                className={`group glass relative flex w-[78vw] shrink-0 flex-col justify-between rounded-2xl border-white/10 p-7 transition-colors sm:w-[26rem] ${accent.border}`}
              >
                <div>
                  <span className="font-mono text-[10px] tracking-[0.3em] text-white/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className={`mt-3 font-display text-2xl font-bold uppercase tracking-tight ${accent.text}`}
                  >
                    {group.label}
                  </h3>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-white/75 transition-colors group-hover:border-white/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="flex w-[70vw] shrink-0 items-center sm:w-[24rem]">
            <p className="font-display text-5xl font-extrabold uppercase leading-none tracking-tighter text-stroke">
              And whatever the problem needs
            </p>
          </div>
        </motion.div>

        <p className="mx-auto mt-12 w-full max-w-6xl px-6 font-mono text-[10px] tracking-[0.4em] text-white/25">
          KEEP SCROLLING →
        </p>
      </div>
    </section>
  );
}
