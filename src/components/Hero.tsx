"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { profile } from "@/data/resume";
import { GithubIcon, LinkedinIcon } from "./icons";

const badges = [
  "Multi-Agent Orchestration",
  "Hybrid Retrieval",
  "Knowledge Graphs",
  "LLM Evaluation",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-cyan-200/90"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        Open to opportunities · {profile.location}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl"
      >
        Hi, I&apos;m{" "}
        <span className="text-gradient">{profile.name}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="mt-5 font-mono text-lg text-white/60 sm:text-xl"
      >
        {"// "}
        {profile.title} — turning ambiguous problems into production AI systems
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-6 max-w-2xl text-balance text-base text-white/50 sm:text-lg"
      >
        Part software engineer, part data scientist. I design the architecture,
        ship the APIs, and prove every improvement with evaluation.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-2"
      >
        {badges.map((b) => (
          <span
            key={b}
            className="glass rounded-full px-3.5 py-1.5 text-xs text-white/70"
          >
            {b}
          </span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mt-10 flex items-center gap-4"
      >
        <a
          href="#experience"
          className="glow-border glass-strong rounded-full px-6 py-3 text-sm font-medium text-white transition hover:scale-105"
        >
          View my work
        </a>
        <a
          href="mailto:ivishaljc20@gmail.com"
          className="flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white/70 transition hover:text-white"
        >
          <Mail size={16} /> Contact
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="mt-10 flex items-center gap-5 text-white/40"
      >
        <a href="mailto:ivishaljc20@gmail.com" className="transition hover:text-cyan-300" aria-label="Email">
          <Mail size={18} />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300" aria-label="GitHub">
          <GithubIcon size={18} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300" aria-label="LinkedIn">
          <LinkedinIcon size={18} />
        </a>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 text-white/30"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
