"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { profile } from "@/data/resume";
import ScrambleText from "./ScrambleText";

function CountUp({
  to,
  prefix = "",
  suffix = "",
}: {
  to: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const start = performance.now();
    const DURATION = 1500;
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / DURATION, 1);
      setValue(Math.round((1 - Math.pow(1 - t, 3)) * to));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

const STATS = [
  { to: 60, suffix: "%", label: "Manual effort cut by agentic automation" },
  { to: 150, prefix: "~", suffix: "ms", label: "Search latency removed" },
  { to: 5, label: "AI superpowers shipped in RetailPilot" },
  { to: 3, label: "GenAI & cloud certifications" },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28">
      <p className="font-mono text-xs tracking-[0.4em] text-neon-magenta">
        01 — PROFILE
      </p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="mt-4 max-w-4xl font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tighter text-white sm:text-6xl"
      >
        Systems that <span className="text-stroke">ship</span>, not demos that{" "}
        <span className="neon-magenta">impress</span>.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mt-10 max-w-3xl text-lg leading-relaxed text-white/55"
      >
        {profile.about}
      </motion.p>

      <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative bg-void p-6 transition-colors hover:bg-white/[0.03] sm:p-8"
          >
            <div className="font-display text-4xl font-extrabold tabular-nums text-white sm:text-5xl">
              <CountUp to={stat.to} prefix={stat.prefix} suffix={stat.suffix} />
            </div>
            <p className="mt-3 text-xs leading-relaxed text-white/40">
              {stat.label}
            </p>
            <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-neon-cyan to-neon-magenta transition-transform duration-500 group-hover:scale-x-100" />
          </motion.div>
        ))}
      </div>

      <div className="mt-16 flex items-center gap-4">
        <span className="h-px flex-1 bg-white/10" />
        <p className="font-mono text-[10px] tracking-[0.4em] text-white/30">
          <ScrambleText text="PART ENGINEER / PART SCIENTIST" />
        </p>
        <span className="h-px flex-1 bg-white/10" />
      </div>
    </section>
  );
}
