"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { workGroups, type Project } from "@/data/resume";
import ProjectVisual from "./ProjectVisual";
import ScrambleText from "./ScrambleText";

const ACCENT_TEXT = {
  cyan: "text-neon-cyan",
  magenta: "text-neon-magenta",
  lime: "text-neon-lime",
  violet: "text-neon-violet",
} as const;

const ACCENT_GLOW = {
  cyan: "rgba(0,229,255,0.16)",
  magenta: "rgba(255,43,214,0.16)",
  lime: "rgba(200,255,0,0.14)",
  violet: "rgba(155,92,255,0.18)",
} as const;

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setSpot({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }

  const flip = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="glow-border group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-10"
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(520px circle at ${spot.x}% ${spot.y}%, ${ACCENT_GLOW[project.accent]}, transparent 70%)`,
        }}
      />

      <motion.div
        className="pointer-events-none absolute inset-x-0 h-20 bg-gradient-to-b from-transparent via-white/[0.06] to-transparent"
        animate={hovered ? { y: ["-20%", "520%"] } : { y: "-20%" }}
        transition={
          hovered
            ? { duration: 1.8, repeat: Infinity, ease: "linear" }
            : { duration: 0.2 }
        }
      />

      <div className="relative">
        <div className="flex flex-wrap items-center gap-4 border-b border-white/10 pb-5">
          <span
            className={`font-mono text-xs tracking-[0.3em] ${ACCENT_TEXT[project.accent]}`}
          >
            {project.channel}
          </span>
          <span className="h-px flex-1 bg-white/10" />
          <span className="font-mono text-[10px] tracking-[0.3em] text-white/30">
            {project.stack.length} SYSTEMS
          </span>
        </div>

        <h3 className="mt-6 font-display text-3xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
          <ScrambleText text={project.title} />
        </h3>
        <p className={`mt-2 font-mono text-sm ${ACCENT_TEXT[project.accent]}`}>
          {project.tagline}
        </p>

        <div
          className={`mt-8 grid gap-8 lg:grid-cols-2 lg:items-start ${
            flip ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="h-60 sm:h-72">
            <ProjectVisual kind={project.visual} accent={project.accent} />
          </div>

          <div>
            <p className="text-white/60">{project.description}</p>

            <ul className="mt-7 space-y-4">
              {project.features.map((f) => (
                <li
                  key={f.name}
                  className="relative border-l border-white/10 pl-4 transition-colors hover:border-white/40"
                >
                  <p className="font-medium text-white/90">{f.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/45">
                    {f.detail}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/12 bg-white/5 px-3 py-1.5 font-mono text-[11px] tracking-wide text-white/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  let cardIndex = -1;

  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="mb-16">
        <p className="font-mono text-xs tracking-[0.4em] text-neon-cyan">
          02 — SELECTED WORK
        </p>
        <h2 className="mt-4 font-display text-5xl font-extrabold uppercase tracking-tighter text-white sm:text-7xl">
          <ScrambleText text="The Build Log" />
        </h2>
      </div>

      <div className="space-y-20">
        {workGroups.map((group) => (
          <div key={group.id}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="mb-8 border-l-2 border-white/20 pl-5"
            >
              <p className="font-display text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
                {group.org}
              </p>
              <p className="mt-1 font-mono text-[11px] tracking-[0.25em] text-neon-cyan">
                {group.kicker}
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/45">
                {group.note}
              </p>
            </motion.div>

            <div className="space-y-8">
              {group.projects.map((project) => {
                cardIndex += 1;
                return (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    index={cardIndex}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
