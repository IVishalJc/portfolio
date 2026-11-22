"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-void">
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #00e5ff 1px, transparent 1px), linear-gradient(to bottom, #00e5ff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 0%, #000 30%, transparent 100%)",
        }}
      />

      <motion.div
        className="absolute -top-52 -left-52 h-[44rem] w-[44rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,229,255,0.18) 0%, transparent 65%)",
        }}
        animate={{ x: [0, 80, -30, 0], y: [0, 50, 100, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-1/3 -right-52 h-[40rem] w-[40rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,43,214,0.16) 0%, transparent 65%)",
        }}
        animate={{ x: [0, -70, 40, 0], y: [0, 70, -40, 0] }}
        transition={{ duration: 29, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[-10rem] left-1/3 h-[36rem] w-[36rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(155,92,255,0.16) 0%, transparent 65%)",
        }}
        animate={{ x: [0, 50, -50, 0], y: [0, -50, 30, 0] }}
        transition={{ duration: 33, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
