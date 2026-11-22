import Reveal from "./Reveal";
import { profile } from "@/data/resume";

const stats = [
  { value: "60%", label: "Manual effort cut via agentic automation" },
  { value: "~150ms", label: "Search latency reduced" },
  { value: "3", label: "GenAI / cloud certifications" },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <p className="mb-3 font-mono text-sm text-cyan-300/80">01 · About</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mb-8 text-3xl font-bold sm:text-4xl">
          Engineering AI systems that ship, not just demo well.
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="max-w-3xl text-lg leading-relaxed text-white/60">
          {profile.about}
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={0.15 + i * 0.08}>
            <div className="glass glow-border rounded-2xl p-6 text-center">
              <div className="text-gradient text-3xl font-bold">{s.value}</div>
              <div className="mt-2 text-sm text-white/50">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
