"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Sparkle = {
  id: number;
  top: string;
  left: string;
  size: number;
  delay: number;
  duration: number;
};

export function Sparkles({ count = 24 }: { count?: number }) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const arr = Array.from({ length: count }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: 4 + Math.random() * 8,
      delay: Math.random() * 4,
      duration: 2 + Math.random() * 3,
    }));
    setSparkles(arr);
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute"
          style={{ top: s.top, left: s.left }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], rotate: [0, 180, 360] }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            width={s.size}
            height={s.size}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0L11.5 8.5L20 10L11.5 11.5L10 20L8.5 11.5L0 10L8.5 8.5L10 0Z"
              fill="url(#sparkle-gradient)"
            />
            <defs>
              <linearGradient id="sparkle-gradient" x1="0" y1="0" x2="20" y2="20">
                <stop stopColor="#FFE27A" />
                <stop offset="0.5" stopColor="#FF8CCB" />
                <stop offset="1" stopColor="#C8A2FF" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
