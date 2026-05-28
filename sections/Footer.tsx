"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Sparkles } from "@/components/Sparkles";
import { Labubu } from "@/components/Labubu";
import { DoodleHeart, DoodleStar, DoodleSparkle, DoodleFlower, DoodleBow } from "@/components/Doodles";
import { WashiTape } from "@/components/WashiTape";
import { SOCIALS, STREAMER } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="relative pt-32 pb-12 px-4 sm:px-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-pink-mango/70 to-transparent" />
        <motion.div
          className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] max-w-[900px] rounded-full bg-gradient-to-tr from-pink-mango/30 via-peach-mango/25 to-lavender-mango/20 blur-[120px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <Sparkles count={14} />

      {/* Floating labubus + real mango emotes at footer */}
      <motion.div
        className="absolute top-12 left-[8%] hidden md:block"
        animate={{ y: [0, -10, 0], rotate: [-8, 4, -8] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Labubu color="pink" size={90} bow />
      </motion.div>
      <motion.div
        className="absolute top-20 right-[10%] hidden md:block"
        animate={{ y: [0, -12, 0], rotate: [10, -4, 10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Labubu color="mint" size={80} />
      </motion.div>
      <motion.div
        className="absolute top-32 left-[35%] hidden md:block"
        animate={{ y: [0, -12, 0], rotate: [-6, 6, -6] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Image
          src="/emotes/sadge_112_x_112_px_27_1.png"
          alt="mango confetti cheer"
          width={70}
          height={70}
          className="drop-shadow-[0_8px_20px_rgba(0,0,0,0.4)] select-none"
          unoptimized
        />
      </motion.div>
      <motion.div
        className="absolute top-16 right-[35%] hidden md:block"
        animate={{ y: [0, -10, 0], rotate: [8, -8, 8] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      >
        <Image
          src="/emotes/sadge_112_x_112_px_24.png"
          alt="mango with sunflower"
          width={64}
          height={64}
          className="drop-shadow-[0_8px_20px_rgba(0,0,0,0.4)] select-none"
          unoptimized
        />
      </motion.div>

      <DoodleStar className="absolute top-32 left-1/4 hidden md:block" size={28} />
      <DoodleHeart className="absolute top-24 right-1/3 hidden md:block" size={26} />
      <DoodleFlower className="absolute bottom-20 left-[12%] hidden md:block" size={32} />
      <DoodleSparkle className="absolute bottom-24 right-[12%] hidden md:block" size={24} />

      <div className="relative max-w-6xl mx-auto">
        {/* Big logo line with washi tape garland */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <WashiTape color="pink" width={70} height={22} rotate={-10} />
            <WashiTape color="yellow" width={70} height={22} rotate={6} pattern="dot" />
            <WashiTape color="mint" width={70} height={22} rotate={-4} />
          </div>

          <h2 className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl text-gradient-mango leading-none tracking-tight drop-shadow-[0_0_40px_rgba(255,140,203,0.5)]">
            themangotangos
          </h2>
          <p className="mt-4 font-hand text-3xl text-white/85 -rotate-1 inline-block">
            ♡ made with chaos & mangoes ♡
          </p>
        </motion.div>

        {/* Social sticker row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {SOCIALS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6, scale: 1.15, rotate: i % 2 ? 10 : -10 }}
                style={{ transform: `rotate(${i % 2 ? 4 : -4}deg)` }}
                aria-label={s.name}
                className={cn(
                  "group relative w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg",
                  "bg-gradient-to-br",
                  s.gradient,
                  "border-2 border-white/30",
                )}
              >
                <Icon className="w-6 h-6 text-white drop-shadow-md" />
              </motion.a>
            );
          })}
        </div>

        {/* Cute mini handwritten nav */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-12 font-hand text-2xl"
        >
          {[
            { label: "twitch", href: STREAMER.twitchUrl, external: true },
            { label: "kick", href: STREAMER.kickUrl, external: true },
            { label: "discord", href: STREAMER.discordUrl, external: true },
            { label: "clips", href: "#clips" },
            { label: "emotes", href: "#community" },
            { label: "socials", href: "#socials" },
            { label: "tip", href: STREAMER.tipUrl, external: true },
            { label: "business", href: "mailto:hello@themangotangos.tv" },
          ].map((item, i) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={cn(
                "text-white/75 hover:text-pink-mango transition-colors duration-200",
                i % 2 ? "-rotate-2" : "rotate-2",
              )}
            >
              {item.label}
            </Link>
          ))}
        </motion.div>

        {/* Final cute strip */}
        <div className="pt-8 border-t-2 border-dashed border-white/15 flex flex-col md:flex-row items-center justify-between gap-3 font-hand text-lg text-white/55">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} themangotangos · made with</span>
            <Heart className="w-4 h-4 fill-pink-mango text-pink-mango" />
            <span>+ way too much boba</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              all systems cozy
            </span>
            <DoodleBow size={24} className="-rotate-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}
