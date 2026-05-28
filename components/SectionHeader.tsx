"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DoodleStar, DoodleSparkle, DoodleHeart } from "./Doodles";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  gradient?: "mango" | "cyber" | "peach";
  doodle?: "star" | "heart" | "sparkle";
  className?: string;
};

const gradients = {
  mango: "text-gradient-mango",
  cyber: "text-gradient-cyber",
  peach: "text-gradient-peach",
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  gradient = "mango",
  doodle = "star",
  className,
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const Doodle =
    doodle === "heart"
      ? DoodleHeart
      : doodle === "sparkle"
        ? DoodleSparkle
        : DoodleStar;

  return (
    <div
      className={cn(
        "relative flex flex-col gap-4",
        isCenter ? "items-center text-center" : "items-start text-left",
        "mb-12 sm:mb-16",
        className,
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 16, rotate: -3 }}
        whileInView={{ opacity: 1, y: 0, rotate: -3 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2"
      >
        <Doodle size={26} />
        <span className="font-hand text-2xl sm:text-3xl text-pink-mango">{eyebrow}</span>
        <Doodle size={26} color="#FFE27A" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={cn(
          "font-display font-bold leading-[1.05] tracking-tight",
          "text-4xl sm:text-5xl lg:text-6xl",
          gradients[gradient],
          "text-balance max-w-3xl relative",
        )}
      >
        {title}
        {/* Underline doodle */}
        {isCenter && (
          <motion.svg
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewBox="0 0 200 12"
            className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-[60%] origin-center"
            preserveAspectRatio="none"
          >
            <path
              d="M5 8 Q 50 0 100 8 T 195 8"
              stroke="#FFB347"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
          </motion.svg>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed text-balance"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
