"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  glow?: "purple" | "pink" | "peach" | "cyan" | "none";
  interactive?: boolean;
} & Omit<HTMLMotionProps<"div">, "ref">;

const glowMap = {
  purple: "hover:shadow-glow-purple",
  pink: "hover:shadow-glow-pink",
  peach: "hover:shadow-glow-peach",
  cyan: "hover:shadow-glow-cyan",
  none: "",
};

export function GlassCard({
  children,
  className,
  glow = "purple",
  interactive = true,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "relative glass rounded-3xl overflow-hidden",
        "transition-all duration-500",
        interactive && [
          "group",
          glowMap[glow],
          "hover:border-white/20",
          "hover:bg-white/[0.08]",
        ],
        className,
      )}
      {...props}
    >
      {/* Top edge sheen */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
        aria-hidden
      />
      {/* Corner glow */}
      <div
        className="pointer-events-none absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-twitch/30 to-pink-mango/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        aria-hidden
      />
      {children}
    </motion.div>
  );
}
