"use client";

import { motion } from "framer-motion";
import { education, certifications } from "@/data/resume";

export default function EducationCerts() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl px-6 py-28">
      <p className="font-mono text-xs tracking-[0.4em] text-neon-cyan">
        05 — CREDENTIALS
      </p>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="glass glow-border rounded-2xl p-7 sm:p-9"
        >
          <h3 className="font-mono text-[11px] tracking-[0.3em] text-white/40">
            EDUCATION
          </h3>
          <div className="mt-7 space-y-7">
            {education.map((ed) => (
              <div key={ed.degree}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-display text-lg font-bold uppercase tracking-tight text-white">
                    {ed.degree}
                  </p>
                  <span className="font-mono text-xs text-white/35">
                    {ed.period}
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-white/50">{ed.school}</p>
                <p className="mt-1 font-mono text-xs neon-lime">{ed.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass glow-border rounded-2xl p-7 sm:p-9"
        >
          <h3 className="font-mono text-[11px] tracking-[0.3em] text-white/40">
            CERTIFICATIONS
          </h3>
          <ul className="mt-7 space-y-5">
            {certifications.map((cert, i) => (
              <li key={cert} className="flex items-start gap-4">
                <span className="mt-0.5 font-mono text-[11px] text-neon-magenta">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed text-white/70">{cert}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
