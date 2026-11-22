import Reveal from "./Reveal";
import { experience } from "@/data/resume";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <p className="mb-3 font-mono text-sm text-cyan-300/80">03 · Experience</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mb-14 text-3xl font-bold sm:text-4xl">
          Where I&apos;ve shipped production AI.
        </h2>
      </Reveal>

      <div className="relative space-y-10 border-l border-white/10 pl-8">
        {experience.map((job, i) => (
          <Reveal key={job.role} delay={i * 0.08} className="relative">
            <span className="absolute -left-[41px] top-1 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-white shadow-lg shadow-violet-500/30">
              <Briefcase size={14} />
            </span>

            <div className="glass glow-border rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                {job.period && (
                  <span className="font-mono text-xs text-white/40">{job.period}</span>
                )}
              </div>
              <p className="mt-1 text-sm text-cyan-300/70">{job.company}</p>
              <p className="mt-4 text-white/60">{job.summary}</p>

              <div className="mt-6 space-y-5">
                {job.projects.map((proj) => (
                  <div key={proj.title}>
                    <h4 className="text-sm font-medium text-white/90">{proj.title}</h4>
                    <ul className="mt-2 space-y-1.5">
                      {proj.points.map((pt) => (
                        <li
                          key={pt}
                          className="relative pl-4 text-sm leading-relaxed text-white/55 before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-cyan-400/70"
                        >
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
