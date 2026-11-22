"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function SkillCard({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({ x: 50, y: 50 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setStyle({ x, y });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="glass glow-border relative overflow-hidden rounded-2xl p-6"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
        style={{
          background: `radial-gradient(240px circle at ${style.x}% ${style.y}%, rgba(139,92,246,0.18), transparent 70%)`,
        }}
      />
      <h3 className="relative mb-4 font-mono text-sm uppercase tracking-wider text-cyan-300/80">
        {label}
      </h3>
      <div className="relative flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
