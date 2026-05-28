"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type PolaroidProps = {
  children: ReactNode;
  caption?: string;
  rotate?: number;
  tape?: "top" | "tl" | "tr" | "both" | "none";
  tapeColor?: "pink" | "peach" | "mint" | "lilac" | "yellow";
  className?: string;
  hover?: boolean;
};

const tapeColors = {
  pink: "bg-pink-300/85",
  peach: "bg-orange-200/85",
  mint: "bg-emerald-200/85",
  lilac: "bg-purple-200/85",
  yellow: "bg-yellow-200/85",
};

export function Polaroid({
  children,
  caption,
  rotate = 0,
  tape = "tl",
  tapeColor = "pink",
  className,
  hover = true,
}: PolaroidProps) {
  return (
    <motion.div
      style={{ rotate: `${rotate}deg` }}
      whileHover={
        hover
          ? {
              rotate: 0,
              y: -8,
              scale: 1.03,
              transition: { type: "spring", stiffness: 240, damping: 18 },
            }
          : undefined
      }
      className={cn(
        "relative paper-card p-3 pb-5 rounded-md",
        "shadow-[0_18px_40px_rgba(26,15,38,0.45),0_2px_0_rgba(0,0,0,0.05)]",
        "transition-shadow duration-300",
        className,
      )}
    >
      {/* Washi tape */}
      {(tape === "top" || tape === "both") && (
        <div
          className={cn(
            "absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-7 rounded-sm tape rotate-1",
            tapeColors[tapeColor],
          )}
          aria-hidden
        />
      )}
      {(tape === "tl" || tape === "both") && (
        <div
          className={cn(
            "absolute -top-3 -left-3 w-20 h-7 rounded-sm tape -rotate-12",
            tapeColors[tapeColor],
          )}
          aria-hidden
        />
      )}
      {(tape === "tr" || tape === "both") && (
        <div
          className={cn(
            "absolute -top-3 -right-3 w-20 h-7 rounded-sm tape rotate-12",
            tapeColors[tapeColor === "pink" ? "peach" : "pink"],
          )}
          aria-hidden
        />
      )}

      {/* Photo content */}
      <div className="relative rounded-sm overflow-hidden">{children}</div>

      {caption && (
        <p className="mt-3 text-center font-hand text-2xl text-bg-deep leading-none">
          {caption}
        </p>
      )}
    </motion.div>
  );
}
