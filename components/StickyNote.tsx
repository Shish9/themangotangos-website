"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type StickyNoteProps = {
  children: ReactNode;
  variant?: "pink" | "peach" | "mint" | "lilac" | "sky" | "cream";
  rotate?: number;
  className?: string;
  pin?: boolean;
  hover?: boolean;
};

const variants: Record<string, string> = {
  pink: "paper-pink",
  peach: "paper-peach",
  mint: "paper-mint",
  lilac: "paper-lilac",
  sky: "paper-sky",
  cream: "paper-card",
};

export function StickyNote({
  children,
  variant = "cream",
  rotate = -2,
  className,
  pin = false,
  hover = true,
}: StickyNoteProps) {
  return (
    <motion.div
      style={{ rotate: `${rotate}deg` }}
      whileHover={
        hover
          ? {
              rotate: 0,
              y: -6,
              scale: 1.03,
              transition: { type: "spring", stiffness: 240, damping: 18 },
            }
          : undefined
      }
      className={cn(
        "relative rounded-[14px] p-5",
        variants[variant],
        "shadow-[0_16px_36px_rgba(26,15,38,0.4),inset_0_0_0_1px_rgba(0,0,0,0.04)]",
        // Slight folded corner
        "before:absolute before:top-0 before:right-0 before:w-7 before:h-7",
        "before:bg-gradient-to-bl before:from-transparent before:via-black/5 before:to-black/15",
        "before:rounded-bl-[14px] before:rounded-tr-[14px]",
        className,
      )}
    >
      {pin && (
        <span
          aria-hidden
          className="absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-pink-mango to-fuchsia-600 ring-2 ring-pink-200 shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_-2px_-2px_3px_rgba(0,0,0,0.3),inset_2px_2px_3px_rgba(255,255,255,0.5)] z-10"
        />
      )}
      <div className="relative">{children}</div>
    </motion.div>
  );
}
