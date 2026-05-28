"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-twitch via-fuchsia-500 to-pink-mango text-white shadow-glow-purple hover:shadow-glow-pink",
  secondary:
    "bg-white/5 text-white border border-white/15 backdrop-blur-xl hover:bg-white/10 hover:border-white/30",
  ghost:
    "bg-transparent text-white/80 hover:text-white hover:bg-white/5",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-2xl",
  md: "px-6 py-3 text-base rounded-2xl",
  lg: "px-8 py-4 text-base sm:text-lg rounded-3xl",
};

type GlowButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode;
  external?: boolean;
} & Omit<ComponentProps<"button">, "ref">;

export function GlowButton({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  icon,
  external,
  ...props
}: GlowButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 font-semibold tracking-wide transition-all duration-300 will-change-transform overflow-hidden";
  const composed = cn(base, variantStyles[variant], sizeStyles[size], className);

  const content = (
    <>
      <span
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
        aria-hidden
      />
      {icon && (
        <span className="relative z-10 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
          {icon}
        </span>
      )}
      <span className="relative z-10">{children}</span>
    </>
  );

  const motionProps = {
    whileHover: { y: -2, scale: 1.02 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  };

  if (href) {
    return (
      <motion.span {...motionProps} className="inline-flex">
        <Link
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={composed}
        >
          {content}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.button {...motionProps} className={composed} {...(props as ComponentProps<typeof motion.button>)}>
      {content}
    </motion.button>
  );
}
