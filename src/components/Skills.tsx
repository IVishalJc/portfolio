import Reveal from "./Reveal";
import SkillCard from "./SkillCard";
import { skillGroups } from "@/data/resume";

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <p className="mb-3 font-mono text-sm text-cyan-300/80">02 · Skills</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mb-12 text-3xl font-bold sm:text-4xl">
          The stack I build with.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.06}>
            <SkillCard label={group.label} items={group.items} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
