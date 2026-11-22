"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/resume";
import Magnetic from "./Magnetic";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl px-6 py-32 text-center"
    >
      <p className="font-mono text-xs tracking-[0.4em] text-neon-lime">
        06 — TRANSMISSION END
      </p>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 font-display text-[clamp(2.75rem,11vw,9rem)] font-extrabold uppercase leading-[0.85] tracking-tighter"
      >
        <span className="block text-white">Let&apos;s build</span>
        <span className="block text-gradient">something smart</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="mx-auto mt-10 max-w-xl text-white/50"
      >
        Open to AI engineering roles and collaborations — agentic systems,
        retrieval, evaluation, or anything that needs a prototype turned into
        production.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="mt-14 flex justify-center"
      >
        <Magnetic strength={0.45}>
          <a
            href={`mailto:${profile.email}`}
            className="neon-ring group inline-flex items-center gap-4 rounded-full bg-white/[0.04] px-10 py-6 font-mono text-sm tracking-[0.2em] text-white backdrop-blur transition-colors hover:bg-white/[0.08]"
          >
            {profile.email}
            <span className="text-neon-cyan transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </Magnetic>
      </motion.div>

      <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 font-mono text-xs tracking-wider text-white/40">
        <span>{profile.phone}</span>
        <span className="hidden h-3 w-px bg-white/20 sm:block" />
        <span>{profile.location}</span>
        <span className="hidden h-3 w-px bg-white/20 sm:block" />
        <div className="flex items-center gap-5">
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
      </div>
    </section>
  );
}
