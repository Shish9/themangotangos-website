"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 140, damping: 22, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 140, damping: 22, mass: 0.4 });

  useEffect(() => {
    const handle = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", handle);
    return () => window.removeEventListener("pointermove", handle);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed z-[1] hidden md:block"
      style={{
        x: sx,
        y: sy,
        translateX: "-50%",
        translateY: "-50%",
        width: 520,
        height: 520,
        borderRadius: 9999,
        background:
          "radial-gradient(circle, rgba(255,140,203,0.22) 0%, rgba(255,179,71,0.14) 30%, transparent 70%)",
        mixBlendMode: "screen",
        filter: "blur(40px)",
      }}
      aria-hidden
    />
  );
}
