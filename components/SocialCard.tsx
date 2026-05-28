"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SocialPlatform } from "@/lib/data";

type SocialCardProps = {
  social: SocialPlatform;
  index: number;
};

export function SocialCard({ social, index }: SocialCardProps) {
  const Icon = social.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      whileHover={{ y: -8, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
      className="perspective-1000"
    >
      <Link
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block h-full"
      >
        <div
          className={cn(
            "relative h-full rounded-3xl p-[1.5px] transition-shadow duration-500",
            "bg-gradient-to-br",
            social.gradient,
            "group-hover:" + social.shadow,
            social.shadow,
          )}
        >
          <div className="relative h-full bg-bg-card/85 backdrop-blur-xl rounded-[22px] p-6 overflow-hidden">
            {/* Background gradient blob */}
            <div
              className={cn(
                "pointer-events-none absolute -top-16 -right-16 w-44 h-44 rounded-full blur-3xl opacity-60 group-hover:opacity-90 transition-opacity duration-700",
                "bg-gradient-to-br",
                social.gradient,
              )}
            />
            <div
              className={cn(
                "pointer-events-none absolute -bottom-12 -left-12 w-32 h-32 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-700",
                "bg-gradient-to-br",
                social.gradient,
              )}
            />

            <div className="relative flex flex-col h-full gap-6">
              {/* Top row */}
              <div className="flex items-start justify-between">
                <motion.div
                  whileHover={{ rotate: -8, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 280, damping: 14 }}
                  className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center",
                    "bg-gradient-to-br",
                    social.gradient,
                    "shadow-lg",
                  )}
                >
                  <Icon className="w-7 h-7 text-white drop-shadow-lg" strokeWidth={2.2} />
                </motion.div>

                <div className="w-9 h-9 rounded-full bg-white/8 backdrop-blur border border-white/15 flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 group-hover:bg-white/15">
                  <ArrowUpRight className="w-4 h-4 text-white/85" />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/55">
                  Follow on
                </div>
                <h3 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-white">
                  {social.name}
                </h3>
                <p className="mt-1 text-sm text-white/65 font-medium">{social.handle}</p>
              </div>

              {/* Bottom stats */}
              <div className="flex items-end justify-between pt-2 border-t border-white/8">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/45 font-bold">
                    Community
                  </div>
                  <div className="font-display text-xl font-bold text-white">
                    {social.followers}
                  </div>
                </div>
                <span className="text-xs font-mono text-white/55 group-hover:text-white transition-colors">
                  open →
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
