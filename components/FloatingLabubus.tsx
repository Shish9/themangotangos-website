"use client";

import { motion } from "framer-motion";
import { Labubu, type LabubuColor } from "./Labubu";

type Placement = {
  color: LabubuColor;
  size: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  rotate: number;
  duration: number;
  delay: number;
  bow?: boolean;
  z?: number;
};

const PLACEMENTS: Placement[] = [
  { color: "peach", size: 90, top: "12%", left: "4%", rotate: -12, duration: 7, delay: 0, bow: true },
  { color: "lilac", size: 75, top: "8%", right: "6%", rotate: 14, duration: 8, delay: 1.2 },
  { color: "pink", size: 64, top: "50%", left: "2%", rotate: -8, duration: 6, delay: 2.4, bow: true },
  { color: "mint", size: 68, top: "60%", right: "3%", rotate: 18, duration: 9, delay: 0.6 },
  { color: "cream", size: 55, top: "85%", left: "10%", rotate: 10, duration: 7, delay: 3 },
  { color: "coral", size: 60, top: "82%", right: "12%", rotate: -16, duration: 8, delay: 1.8, bow: true },
];

export function FloatingLabubus({ placements = PLACEMENTS }: { placements?: Placement[] }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-[2]" aria-hidden>
      {placements.map((p, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: p.top,
            left: p.left,
            right: p.right,
            bottom: p.bottom,
            zIndex: p.z ?? 2,
          }}
          initial={{ opacity: 0, y: 30, rotate: p.rotate }}
          animate={{
            opacity: 1,
            y: [0, -18, 0],
            rotate: [p.rotate - 4, p.rotate + 4, p.rotate - 4],
          }}
          transition={{
            opacity: { duration: 1, delay: p.delay * 0.3 },
            y: { duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: p.duration * 1.2, delay: p.delay, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Labubu color={p.color} size={p.size} bow={p.bow} />
        </motion.div>
      ))}
    </div>
  );
}
