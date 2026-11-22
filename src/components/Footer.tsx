import { profile } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 font-mono text-[10px] tracking-[0.3em] text-white/30">
        <span>© 2026 {profile.name.toUpperCase()}</span>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-neon-lime [animation:pulse-dot_1.6s_ease-in-out_infinite]" />
          SIGNAL ACTIVE
        </span>
        <a href="#top" className="transition-colors hover:text-neon-cyan">
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  );
}
