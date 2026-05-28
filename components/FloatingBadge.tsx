"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type FloatingBadgeProps = {
  children: ReactNode;
  className?: string;
  variant?: "live" | "info" | "soft";
  pulse?: boolean;
};

const variants = {
  live: "bg-red-500/15 text-red-200 border-red-500/40",
  info: "bg-twitch/15 text-lavender-mango border-twitch/40",
  soft: "bg-white/8 text-white/85 border-white/15",
};

export function FloatingBadge({
  children,
  className,
  variant = "info",
  pulse = false,
}: FloatingBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2, scale: 1.04 }}
      className={cn(
        "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-xl",
        "text-xs font-semibold uppercase tracking-[0.18em] border",
        variants[variant],
        className,
      )}
    >
      {pulse && (
        <span className="relative flex items-center justify-center">
          <span className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-red-500 opacity-75 animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
        </span>
      )}
      {children}
    </motion.div>
  );
}
