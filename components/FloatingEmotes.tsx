"use client";

import { motion } from "framer-motion";

const FLOATERS = [
  { emoji: "🥭", top: "12%", left: "8%", delay: 0, size: "text-5xl", duration: 7 },
  { emoji: "✨", top: "22%", right: "12%", delay: 1.2, size: "text-3xl", duration: 5 },
  { emoji: "💖", top: "60%", left: "6%", delay: 2.4, size: "text-4xl", duration: 8 },
  { emoji: "🎮", top: "70%", right: "8%", delay: 0.8, size: "text-5xl", duration: 6 },
  { emoji: "🌸", top: "30%", left: "18%", delay: 3, size: "text-3xl", duration: 9 },
  { emoji: "🧋", top: "82%", left: "20%", delay: 1.6, size: "text-4xl", duration: 7 },
  { emoji: "🪩", top: "18%", right: "22%", delay: 2.2, size: "text-3xl", duration: 8 },
  { emoji: "🎀", top: "55%", right: "20%", delay: 0.4, size: "text-3xl", duration: 6 },
];

export function FloatingEmotes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {FLOATERS.map((f, i) => (
        <motion.div
          key={i}
          className={`absolute ${f.size} drop-shadow-[0_0_20px_rgba(145,70,255,0.6)] select-none`}
          style={{ top: f.top, left: f.left, right: f.right }}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.15, 1],
            y: [0, -25, 0],
            rotate: [-8, 8, -8],
          }}
          transition={{
            duration: f.duration,
            delay: f.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {f.emoji}
        </motion.div>
      ))}
    </div>
  );
}
