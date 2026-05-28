"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedGradientProps = {
  className?: string;
  variant?: "hero" | "section" | "subtle";
};

export function AnimatedGradient({ className, variant = "hero" }: AnimatedGradientProps) {
  if (variant === "subtle") {
    return (
      <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
        <motion.div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] rounded-full bg-twitch/15 blur-[120px]"
          animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    );
  }

  if (variant === "section") {
    return (
      <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
        <motion.div
          className="absolute top-10 left-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-twitch/20 blur-[100px]"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-[5%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full bg-pink-mango/20 blur-[100px]"
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    );
  }

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      {/* Animated blobs */}
      <motion.div
        className="absolute -top-32 -left-20 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-twitch/30 blur-[120px]"
        animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-20 w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-pink-mango/25 blur-[120px]"
        animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 left-1/3 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-peach-mango/15 blur-[120px]"
        animate={{ x: [0, 30, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-lavender-mango/15 blur-[100px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
