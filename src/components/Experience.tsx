"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/resume";
import ScrambleText from "./ScrambleText";

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-28">
      <p className="font-mono text-xs tracking-[0.4em] text-neon-violet">
        04 — TRACK RECORD
      </p>
      <h2 className="mt-4 font-display text-5xl font-extrabold uppercase tracking-tighter text-white sm:text-7xl">
        <ScrambleText text="Where I've shipped" />
      </h2>

      <div className="mt-16 space-y-5">
        {experience.map((job, i) => (
          <motion.div
            key={job.role}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="glow-border group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 sm:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr]">
              <div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
                  {job.role}
                </h3>
                <p className="mt-2 neon-cyan text-sm">{job.company}</p>
                <p className="mt-1 font-mono text-xs text-white/35">
                  {job.location}
                </p>
                <p className="mt-5 inline-block rounded-full border border-white/12 px-3.5 py-1.5 font-mono text-[11px] tracking-wider text-white/55">
                  {job.period}
                </p>
              </div>

              <ul className="space-y-3.5">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="relative pl-6 leading-relaxed text-white/55 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-neon-cyan/70"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
