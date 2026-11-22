"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />

      <motion.div
        className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 60, -20, 0],
          y: [0, 40, 80, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.3) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 60, -30, 0],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(236,72,153,0.25) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
