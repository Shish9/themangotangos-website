"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { EMOTES } from "@/lib/data";

type Placement = {
  src: string;
  alt: string;
  size: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  rotate: number;
  duration: number;
  delay: number;
};

/**
 * Default placement set for the Hero — scatters real PNG emotes
 * around the viewport with gentle floating animation.
 */
const HERO_PLACEMENTS: Placement[] = [
  { src: EMOTES[0].src,  alt: EMOTES[0].alt,  size: 76, top: "16%", left: "12%", rotate: -12, duration: 6.5, delay: 0.0 },
  { src: EMOTES[5].src,  alt: EMOTES[5].alt,  size: 82, top: "10%", right: "16%", rotate: 10,  duration: 7.5, delay: 0.8 },
  { src: EMOTES[10].src, alt: EMOTES[10].alt, size: 70, top: "40%", left: "5%",   rotate: -8,  duration: 8.0, delay: 1.4 },
  { src: EMOTES[7].src,  alt: EMOTES[7].alt,  size: 64, top: "52%", right: "6%",  rotate: 14,  duration: 6.0, delay: 2.0 },
  { src: EMOTES[11].src, alt: EMOTES[11].alt, size: 72, top: "76%", left: "18%",  rotate: 6,   duration: 7.0, delay: 0.4 },
  { src: EMOTES[9].src,  alt: EMOTES[9].alt,  size: 66, top: "72%", right: "22%", rotate: -10, duration: 8.5, delay: 1.0 },
  { src: EMOTES[2].src,  alt: EMOTES[2].alt,  size: 90, top: "28%", right: "30%", rotate: -4,  duration: 9.0, delay: 1.8 },
  { src: EMOTES[8].src,  alt: EMOTES[8].alt,  size: 60, top: "60%", left: "32%",  rotate: 12,  duration: 6.8, delay: 2.4 },
];

const SECTION_PLACEMENTS: Placement[] = [
  { src: EMOTES[6].src,  alt: EMOTES[6].alt,  size: 64, top: "8%",  left: "4%",   rotate: -8,  duration: 7, delay: 0.0 },
  { src: EMOTES[12].src, alt: EMOTES[12].alt, size: 58, top: "12%", right: "6%",  rotate: 10,  duration: 8, delay: 0.8 },
  { src: EMOTES[3].src,  alt: EMOTES[3].alt,  size: 60, top: "70%", left: "5%",   rotate: 6,   duration: 6.5, delay: 1.6 },
  { src: EMOTES[1].src,  alt: EMOTES[1].alt,  size: 64, top: "78%", right: "8%",  rotate: -10, duration: 7.5, delay: 0.4 },
];

type FloatingMangoEmotesProps = {
  variant?: "hero" | "section";
  placements?: Placement[];
};

export function FloatingMangoEmotes({
  variant = "hero",
  placements,
}: FloatingMangoEmotesProps) {
  const items =
    placements ?? (variant === "section" ? SECTION_PLACEMENTS : HERO_PLACEMENTS);

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden z-[3]"
      aria-hidden
    >
      {items.map((p, i) => (
        <motion.div
          key={i}
          className="absolute drop-shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
          style={{
            top: p.top,
            left: p.left,
            right: p.right,
            bottom: p.bottom,
          }}
          initial={{ opacity: 0, scale: 0.5, rotate: p.rotate }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -16, 0],
            rotate: [p.rotate - 5, p.rotate + 5, p.rotate - 5],
          }}
          transition={{
            opacity: { duration: 0.6, delay: p.delay * 0.3 },
            scale: { duration: 0.6, delay: p.delay * 0.3, type: "spring", stiffness: 180 },
            y: { duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" },
            rotate: {
              duration: p.duration * 1.3,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <Image
            src={p.src}
            alt={p.alt}
            width={p.size}
            height={p.size}
            className="select-none"
            priority={i < 4}
            unoptimized
          />
        </motion.div>
      ))}
    </div>
  );
}
