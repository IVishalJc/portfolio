import Reveal from "./Reveal";
import { profile } from "@/data/resume";
import { Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-4xl px-6 py-28 text-center">
      <Reveal>
        <p className="mb-3 font-mono text-sm text-cyan-300/80">05 · Contact</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="text-3xl font-bold sm:text-5xl">
          Let&apos;s build something <span className="text-gradient">intelligent</span>.
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mx-auto mt-5 max-w-xl text-white/55">
          Open to AI engineering roles and collaborations — agentic systems, retrieval, evaluation, or anything that needs a prototype turned into production.
        </p>
      </Reveal>

      <Reveal delay={0.18}>
        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="glow-border glass-strong flex items-center gap-3 rounded-full px-8 py-4 text-base font-medium text-white transition hover:scale-105"
          >
            <Mail size={18} /> {profile.email}
          </a>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-5 text-sm text-white/50">
            <span className="flex items-center gap-1.5">
              <Phone size={14} /> {profile.phone}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} /> {profile.location}
            </span>
          </div>

          <div className="mt-4 flex items-center gap-5 text-white/40">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
