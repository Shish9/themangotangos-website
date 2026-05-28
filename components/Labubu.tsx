"use client";

import { cn } from "@/lib/utils";

export type LabubuColor =
  | "peach"
  | "pink"
  | "mint"
  | "lilac"
  | "cream"
  | "coral";

const palette: Record<LabubuColor, { body: string; shade: string; cheek: string }> = {
  peach: { body: "#FFD3B0", shade: "#FFB489", cheek: "#FF8CCB" },
  pink: { body: "#FFC2DD", shade: "#FF9CC8", cheek: "#FF6BA8" },
  mint: { body: "#B8F2D8", shade: "#92E5BD", cheek: "#FF9EBE" },
  lilac: { body: "#D4BAFF", shade: "#B891FA", cheek: "#FF8CCB" },
  cream: { body: "#FFE9C9", shade: "#FFD49C", cheek: "#FFA0C8" },
  coral: { body: "#FFB5B5", shade: "#FF8E8E", cheek: "#FF5C9A" },
};

type LabubuProps = {
  color?: LabubuColor;
  size?: number;
  className?: string;
  bow?: boolean;
};

/**
 * Stylized Labubu-inspired character SVG.
 * Pointy ears, big bean eyes, the iconic toothy grin.
 */
export function Labubu({ color = "peach", size = 100, className, bow = false }: LabubuProps) {
  const c = palette[color];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("select-none drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)]", className)}
      aria-hidden
    >
      {/* Drop shadow under feet */}
      <ellipse cx="60" cy="124" rx="28" ry="3.5" fill="rgba(0,0,0,0.18)" />

      {/* Right ear */}
      <path
        d="M82 32 C 88 14, 95 8, 100 6 C 102 18, 96 30, 90 38 Z"
        fill={c.body}
        stroke="#2A1A3D"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M89 18 C 92 14, 96 10, 99 9"
        stroke={c.shade}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Left ear */}
      <path
        d="M38 32 C 32 14, 25 8, 20 6 C 18 18, 24 30, 30 38 Z"
        fill={c.body}
        stroke="#2A1A3D"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M31 18 C 28 14, 24 10, 21 9"
        stroke={c.shade}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Furry head outline with bumpy edges */}
      <path
        d="M30 38
           Q 25 50 22 60
           Q 18 70 22 82
           Q 18 92 28 100
           Q 30 110 42 112
           Q 50 118 60 116
           Q 70 118 78 112
           Q 90 110 92 100
           Q 102 92 98 82
           Q 102 70 98 60
           Q 95 50 90 38
           Q 80 30 60 30
           Q 40 30 30 38 Z"
        fill={c.body}
        stroke="#2A1A3D"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      {/* Fur tufts on top */}
      <path
        d="M40 36 Q 42 30 46 34 Q 50 28 54 34 Q 60 28 66 34 Q 70 28 74 34 Q 78 30 80 36"
        fill={c.body}
        stroke="#2A1A3D"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Cheek blush */}
      <ellipse cx="35" cy="72" rx="7" ry="4" fill={c.cheek} opacity="0.55" />
      <ellipse cx="85" cy="72" rx="7" ry="4" fill={c.cheek} opacity="0.55" />

      {/* Eyes — bean-shaped black dots */}
      <ellipse cx="46" cy="64" rx="4.5" ry="5.5" fill="#2A1A3D" />
      <ellipse cx="74" cy="64" rx="4.5" ry="5.5" fill="#2A1A3D" />
      {/* Eye sparkles */}
      <circle cx="44.5" cy="61.5" r="1.5" fill="white" />
      <circle cx="72.5" cy="61.5" r="1.5" fill="white" />
      <circle cx="48" cy="66.5" r="0.7" fill="white" opacity="0.85" />
      <circle cx="76" cy="66.5" r="0.7" fill="white" opacity="0.85" />

      {/* The iconic toothy grin */}
      <path
        d="M40 82 Q 60 96 80 82"
        stroke="#2A1A3D"
        strokeWidth="2.2"
        fill="#FFE9DC"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Teeth points (zigzag) */}
      <path
        d="M44 84
           L 47 89 L 50 84
           L 53 89 L 56 84
           L 59 89 L 62 84
           L 65 89 L 68 84
           L 71 89 L 74 84
           L 76 86"
        fill="white"
        stroke="#2A1A3D"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />

      {/* Tiny shine on body */}
      <ellipse cx="42" cy="50" rx="6" ry="9" fill="white" opacity="0.18" />

      {/* Optional bow on right ear */}
      {bow && (
        <g transform="translate(85 16) rotate(-15)">
          <path
            d="M-6 0 L 0 -4 L 0 4 Z M 6 0 L 0 -4 L 0 4 Z"
            fill="#FF8CCB"
            stroke="#2A1A3D"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <circle cx="0" cy="0" r="1.6" fill="#FFB347" />
        </g>
      )}
    </svg>
  );
}
