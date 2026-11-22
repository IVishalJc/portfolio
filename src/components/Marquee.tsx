export default function Marquee({
  words,
  reverse = false,
  duration = 32,
  accent = "cyan",
}: {
  words: string[];
  reverse?: boolean;
  duration?: number;
  accent?: "cyan" | "magenta" | "lime";
}) {
  const accentClass =
    accent === "magenta"
      ? "text-neon-magenta"
      : accent === "lime"
        ? "text-neon-lime"
        : "text-neon-cyan";

  const row = [...words, ...words];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-white/[0.015] py-5">
      <div
        className={`marquee-track flex w-max gap-10 ${reverse ? "marquee-reverse" : ""}`}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {row.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="flex shrink-0 items-center gap-10 font-display text-xl font-bold uppercase tracking-tight text-white/70 sm:text-2xl"
          >
            {word}
            <span className={`text-lg ${accentClass}`}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
