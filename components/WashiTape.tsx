"use client";

import { cn } from "@/lib/utils";

type WashiTapeProps = {
  color?: "pink" | "peach" | "mint" | "lilac" | "yellow" | "coral";
  width?: number;
  height?: number;
  rotate?: number;
  className?: string;
  pattern?: "stripe" | "dot" | "solid";
};

const colorMap = {
  pink: "bg-pink-300/85",
  peach: "bg-orange-200/85",
  mint: "bg-emerald-200/85",
  lilac: "bg-purple-200/85",
  yellow: "bg-yellow-200/85",
  coral: "bg-rose-300/85",
};

export function WashiTape({
  color = "pink",
  width = 110,
  height = 30,
  rotate = -8,
  className,
  pattern = "stripe",
}: WashiTapeProps) {
  return (
    <span
      aria-hidden
      style={{
        width,
        height,
        transform: `rotate(${rotate}deg)`,
      }}
      className={cn(
        "inline-block rounded-sm shadow-[0_2px_4px_rgba(0,0,0,0.2)]",
        colorMap[color],
        pattern === "stripe" && "tape",
        pattern === "dot" &&
          "[background-image:radial-gradient(rgba(255,255,255,0.5)_2px,transparent_2px)] [background-size:8px_8px]",
        className,
      )}
    />
  );
}
