"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#$%&*/\\<>[]{}";

export default function ScrambleText({
  text,
  className,
  duration = 650,
}: {
  text: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const start = performance.now();

    const run = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const revealed = progress * text.length;

      setDisplay(
        text
          .split("")
          .map((char, i) =>
            char === " " || i < revealed
              ? char
              : CHARS[Math.floor(Math.random() * CHARS.length)]
          )
          .join("")
      );

      if (progress < 1) raf = requestAnimationFrame(run);
    };

    raf = requestAnimationFrame(run);

    // guarantees the heading settles even if rAF is throttled or interrupted
    const settle = setTimeout(() => {
      cancelAnimationFrame(raf);
      setDisplay(text);
    }, duration + 250);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(settle);
      setDisplay(text);
    };
  }, [inView, text, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
