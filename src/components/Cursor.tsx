"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const ringX = useSpring(x, { stiffness: 280, damping: 26, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 280, damping: 26, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const el = e.target as HTMLElement | null;
      setActive(!!el?.closest("a, button, [data-cursor]"));
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[90] h-1.5 w-1.5 rounded-full bg-neon-cyan"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[90] rounded-full border border-neon-cyan/60"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: active ? 56 : 28,
          height: active ? 56 : 28,
          borderColor: active
            ? "rgba(255,43,214,0.8)"
            : "rgba(0,229,255,0.55)",
          backgroundColor: active
            ? "rgba(255,43,214,0.08)"
            : "rgba(0,229,255,0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
      />
    </>
  );
}
