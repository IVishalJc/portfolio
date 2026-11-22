import Reveal from "./Reveal";
import { education, certifications } from "@/data/resume";
import { GraduationCap, Award } from "lucide-react";

export default function EducationCerts() {
  return (
    <section id="education" className="relative mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <p className="mb-3 font-mono text-sm text-cyan-300/80">04 · Education & Certifications</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mb-12 text-3xl font-bold sm:text-4xl">Foundations & credentials.</h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Reveal delay={0.1}>
          <div className="glass glow-border h-full rounded-2xl p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-2 text-cyan-300/80">
              <GraduationCap size={18} />
              <h3 className="font-mono text-sm uppercase tracking-wider">Education</h3>
            </div>
            <div className="space-y-5">
              {education.map((ed) => (
                <div key={ed.degree}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-medium text-white">{ed.degree}</p>
                    <span className="font-mono text-xs text-white/40">{ed.period}</span>
                  </div>
                  <p className="text-sm text-white/55">{ed.school}</p>
                  <p className="text-sm text-white/40">{ed.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="glass glow-border h-full rounded-2xl p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-2 text-cyan-300/80">
              <Award size={18} />
              <h3 className="font-mono text-sm uppercase tracking-wider">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((c) => (
                <li
                  key={c}
                  className="relative pl-4 text-sm text-white/70 before:absolute before:left-0 before:top-[0.5em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-gradient-to-br before:from-violet-400 before:to-cyan-400"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
