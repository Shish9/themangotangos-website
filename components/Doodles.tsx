"use client";

import { cn } from "@/lib/utils";

type DoodleProps = {
  className?: string;
  color?: string;
  size?: number;
};

export function DoodleStar({ className, color = "#FFE27A", size = 32 }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={cn("select-none", className)}
      aria-hidden
    >
      <path
        d="M16 3 L 19 12 L 28 14 L 21 20 L 23 29 L 16 24 L 9 29 L 11 20 L 4 14 L 13 12 Z"
        fill={color}
        stroke="#2A1A3D"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleHeart({ className, color = "#FF8CCB", size = 28 }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={cn("select-none", className)}
      aria-hidden
    >
      <path
        d="M16 28 C 4 19, 4 8, 11 7 C 14 7, 16 10, 16 12 C 16 10, 18 7, 21 7 C 28 8, 28 19, 16 28 Z"
        fill={color}
        stroke="#2A1A3D"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleSparkle({ className, color = "#FFE27A", size = 24 }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("select-none", className)}
      aria-hidden
    >
      <path
        d="M12 1 L 13.5 10.5 L 23 12 L 13.5 13.5 L 12 23 L 10.5 13.5 L 1 12 L 10.5 10.5 Z"
        fill={color}
        stroke="#2A1A3D"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleArrow({ className, color = "#FF8CCB", size = 60 }: DoodleProps) {
  return (
    <svg
      width={size}
      height={(size * 2) / 3}
      viewBox="0 0 60 40"
      fill="none"
      className={cn("select-none", className)}
      aria-hidden
    >
      <path
        d="M2 8 Q 18 -4 32 12 Q 42 22 48 28"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M40 23 L 48 28 L 41 33"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function DoodleScribble({ className, color = "#C8A2FF", size = 80 }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size / 3}
      viewBox="0 0 80 28"
      fill="none"
      className={cn("select-none", className)}
      aria-hidden
    >
      <path
        d="M2 22 Q 8 4 16 14 T 32 14 T 48 14 T 64 14 T 78 18"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function DoodleCircle({ className, color = "#FFE27A", size = 80 }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      className={cn("select-none", className)}
      aria-hidden
    >
      <ellipse
        cx="40"
        cy="40"
        rx="35"
        ry="32"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        transform="rotate(-8 40 40)"
        strokeDasharray="0"
      />
    </svg>
  );
}

export function DoodleFlower({ className, color = "#FFB347", size = 36 }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      className={cn("select-none", className)}
      aria-hidden
    >
      <circle cx="18" cy="6" r="5" fill={color} stroke="#2A1A3D" strokeWidth="1.4" />
      <circle cx="30" cy="14" r="5" fill={color} stroke="#2A1A3D" strokeWidth="1.4" />
      <circle cx="26" cy="28" r="5" fill={color} stroke="#2A1A3D" strokeWidth="1.4" />
      <circle cx="10" cy="28" r="5" fill={color} stroke="#2A1A3D" strokeWidth="1.4" />
      <circle cx="6" cy="14" r="5" fill={color} stroke="#2A1A3D" strokeWidth="1.4" />
      <circle cx="18" cy="18" r="5" fill="#FFE27A" stroke="#2A1A3D" strokeWidth="1.4" />
    </svg>
  );
}

export function DoodleCloud({ className, color = "#FFE3EE", size = 60 }: DoodleProps) {
  return (
    <svg
      width={size}
      height={(size * 2) / 3}
      viewBox="0 0 60 40"
      fill="none"
      className={cn("select-none", className)}
      aria-hidden
    >
      <path
        d="M12 28
           Q 4 28 4 20
           Q 4 12 14 14
           Q 16 6 26 8
           Q 32 4 40 10
           Q 50 8 52 18
           Q 58 22 50 30
           Q 30 36 12 28 Z"
        fill={color}
        stroke="#2A1A3D"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleBow({ className, color = "#FF8CCB", size = 36 }: DoodleProps) {
  return (
    <svg
      width={size}
      height={(size * 2) / 3}
      viewBox="0 0 36 24"
      fill="none"
      className={cn("select-none", className)}
      aria-hidden
    >
      <path
        d="M18 12 L 4 4 Q 0 4 0 12 Q 0 20 4 20 L 18 12 Z"
        fill={color}
        stroke="#2A1A3D"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M18 12 L 32 4 Q 36 4 36 12 Q 36 20 32 20 L 18 12 Z"
        fill={color}
        stroke="#2A1A3D"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <ellipse cx="18" cy="12" rx="3" ry="4" fill={color} stroke="#2A1A3D" strokeWidth="1.5" />
    </svg>
  );
}
