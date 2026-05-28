"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Play, Eye, Clock } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Labubu } from "@/components/Labubu";
import {
  DoodleStar,
  DoodleHeart,
  DoodleSparkle,
  DoodleArrow,
} from "@/components/Doodles";
import { CLIPS } from "@/lib/data";
import { cn } from "@/lib/utils";

const ROTATES = [-3, 2, -1, 3, -2, 1, -3, 2, -2, 3, -1, 2];
const TAPE_COLORS = [
  "bg-pink-300/85",
  "bg-yellow-200/85",
  "bg-emerald-200/85",
  "bg-purple-200/85",
  "bg-rose-300/85",
  "bg-orange-200/85",
];

function formatDuration(sec: number) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function formatViews(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return String(n);
}

export function Clips() {
  // Unique game tags from her real clips
  const games = useMemo(() => {
    const set = new Set<string>();
    CLIPS.forEach((c) => set.add(c.game));
    return ["all", ...Array.from(set)];
  }, []);

  const [active, setActive] = useState<string>("all");

  const filtered = active === "all" ? CLIPS : CLIPS.filter((c) => c.game === active);

  return (
    <section id="clips" className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Labubu peeking in */}
      <motion.div
        className="absolute top-24 left-[4%] hidden lg:block"
        animate={{ y: [0, -10, 0], rotate: [-8, 4, -8] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Labubu color="coral" size={100} />
      </motion.div>

      <DoodleHeart className="absolute top-1/3 right-[6%] hidden lg:block" size={28} />
      <DoodleStar className="absolute bottom-32 left-[8%] hidden lg:block" size={24} />

      <div className="relative max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="✿ scrapbook of clips ✿"
          title="moments chat refuses to forget"
          subtitle="real clips from the last 30 days. tap one to watch it on twitch."
          gradient="peach"
          doodle="star"
        />

        {/* Game-based filter chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          <span className="font-hand text-2xl text-white/70 -rotate-2 mr-1">
            filter:
          </span>
          {games.map((g, i) => {
            const isActive = active === g;
            return (
              <motion.button
                key={g}
                type="button"
                onClick={() => setActive(g)}
                whileHover={{ y: -3, rotate: i % 2 ? 4 : -4 }}
                style={{ rotate: `${i % 2 ? 2 : -2}deg` }}
                className={cn(
                  "relative px-4 py-1.5 rounded-full font-hand text-xl border-2 transition-colors duration-300",
                  isActive
                    ? "bg-pink-mango text-bg-deep border-pink-mango shadow-lg"
                    : "bg-white/10 text-white border-white/25 hover:bg-white/15",
                )}
              >
                {g.toLowerCase()}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Polaroid grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {filtered.map((clip, i) => (
            <motion.a
              key={clip.slug}
              href={clip.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -10, rotate: 0, scale: 1.04 }}
              style={{ rotate: `${ROTATES[i % ROTATES.length]}deg` }}
              className="group relative block cursor-pointer"
            >
              <div className="relative paper-card p-3 pb-4 rounded-md shadow-[0_18px_40px_rgba(26,15,38,0.45)] transition-shadow duration-300 group-hover:shadow-[0_28px_60px_rgba(26,15,38,0.55)]">
                {/* Washi tape */}
                <div
                  className={cn(
                    "absolute -top-3 -left-3 w-20 h-7 tape rounded-sm shadow-md",
                    TAPE_COLORS[i % TAPE_COLORS.length],
                  )}
                  style={{ transform: `rotate(${i % 2 ? -15 : 12}deg)` }}
                  aria-hidden
                />
                {i % 3 === 0 && (
                  <div
                    className={cn(
                      "absolute -top-3 -right-3 w-16 h-7 tape rounded-sm shadow-md",
                      TAPE_COLORS[(i + 2) % TAPE_COLORS.length],
                    )}
                    style={{ transform: `rotate(${i % 2 ? 14 : -10}deg)` }}
                    aria-hidden
                  />
                )}

                {/* Real Twitch thumbnail */}
                <div className="relative aspect-video rounded-sm overflow-hidden bg-bg-deep">
                  <Image
                    src={clip.thumb}
                    alt={clip.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />

                  {/* Game tag */}
                  <div className="absolute top-2 left-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/95 font-hand text-base text-bg-deep border-2 border-bg-deep/15 shadow-md -rotate-3">
                    {clip.game.toLowerCase()}
                  </div>

                  {/* Duration sticker */}
                  <div className="absolute top-2 right-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-bg-deep/85 text-white text-xs font-mono shadow-md">
                    <Clock className="w-3 h-3" />
                    {formatDuration(clip.duration)}
                  </div>

                  {/* Play overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-bg-deep/35">
                    <div className="w-14 h-14 rounded-full bg-white grid place-items-center shadow-2xl">
                      <Play className="w-6 h-6 text-bg-deep fill-bg-deep ml-1" />
                    </div>
                  </div>
                </div>

                {/* Caption in handwriting */}
                <div className="mt-3 px-1">
                  <p className="font-hand text-2xl text-bg-deep leading-tight line-clamp-2 min-h-[1.6em]">
                    {clip.title}
                  </p>
                  <div className="mt-1 flex items-center justify-between text-xs text-bg-deep/70 font-medium">
                    <span className="truncate pr-2">{clip.game}</span>
                    <span className="inline-flex items-center gap-1 shrink-0">
                      <Eye className="w-3 h-3" />
                      {formatViews(clip.views)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Random doodle decoration on some cards */}
              {i % 4 === 0 && (
                <DoodleStar
                  className="absolute -top-4 -right-2 z-10"
                  size={24}
                  color="#FFE27A"
                />
              )}
              {i % 4 === 1 && (
                <DoodleHeart
                  className="absolute -bottom-2 -right-3 z-10"
                  size={22}
                  color="#FF8FB3"
                />
              )}
              {i % 4 === 2 && (
                <DoodleSparkle
                  className="absolute -bottom-2 -left-2 z-10"
                  size={20}
                  color="#C8A2FF"
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <p className="text-center font-hand text-2xl text-white/55 mt-12">
            no clips in this game yet 🥭
          </p>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16 relative"
        >
          <a
            href="https://twitch.tv/themangotangos/clips"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-hand text-2xl text-pink-mango hover:text-peach-deep transition-colors"
          >
            <span>see every clip on twitch</span>
            <DoodleArrow size={50} color="#FFB877" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
