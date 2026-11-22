import { profile } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-8 text-center">
      <p className="font-mono text-xs text-white/30">
        Built by {profile.name} · {2026}
      </p>
    </footer>
  );
}
