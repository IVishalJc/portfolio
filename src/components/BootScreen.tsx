"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINES = [
  "ESTABLISHING UPLINK ........ OK",
  "LOADING EMBEDDING INDEX .... OK",
  "SPAWNING AGENT RUNTIME ..... OK",
  "KNOWLEDGE GRAPH ONLINE ..... OK",
  "EVAL HARNESS ARMED ......... OK",
];

export default function BootScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDone(true);
      return;
    }

    document.body.style.overflow = "hidden";

    const start = performance.now();
    const DURATION = 2400;
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / DURATION, 1);
      // ease-out so the counter sprints then settles
      setProgress(Math.round((1 - Math.pow(1 - t, 3)) * 100));
      if (t < 1) frame = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 350);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  const visibleLines = Math.floor((progress / 100) * LINES.length);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="pointer-events-none absolute inset-0 crt-scanlines opacity-60" />

          <div className="relative w-[min(90vw,520px)] px-6">
            <div className="mb-10 text-center">
              <p className="font-mono text-[10px] tracking-[0.5em] text-neon-cyan">
                INITIALIZING
              </p>
              <p className="mt-4 font-display text-7xl font-extrabold tabular-nums text-white sm:text-8xl">
                {String(progress).padStart(3, "0")}
              </p>
            </div>

            <div className="h-px w-full bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-neon-cyan to-neon-magenta"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-8 space-y-1.5 font-mono text-[11px] text-white/40">
              {LINES.slice(0, visibleLines).map((line) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="text-neon-lime">{">"}</span> {line}
                </motion.p>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
