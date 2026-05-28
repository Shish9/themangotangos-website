"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Crown, Sparkles as SparklesIcon, Star } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Labubu } from "@/components/Labubu";
import { StickyNote } from "@/components/StickyNote";
import { FloatingMangoEmotes } from "@/components/FloatingMangoEmotes";
import {
  DoodleStar,
  DoodleHeart,
  DoodleSparkle,
  DoodleFlower,
  DoodleBow,
  DoodleArrow,
} from "@/components/Doodles";
import { Sparkles } from "@/components/Sparkles";
import { EMOTES } from "@/lib/data";
import { cn } from "@/lib/utils";

const CHAT_MOMENTS = [
  { user: "lurkqueen42", msg: "mangoCry mangoCry mangoCry", color: "text-pink-mango" },
  {
    user: "pixelghost",
    msg: "she really clutched that 1v4 actually wtf 🥭",
    color: "text-accent-cyan",
  },
  { user: "honeybear", msg: "this is my comfort stream <3", color: "text-peach-mango" },
  {
    user: "neon_kai",
    msg: "MANGO HORROR NIGHT LET'S GOOO",
    color: "text-lavender-mango",
  },
  {
    user: "bytemilk",
    msg: "raid incoming, prepare the mango emotes 👀",
    color: "text-accent-gold",
  },
  {
    user: "softboot",
    msg: "first stream and i'm already subscribed lol",
    color: "text-pink-mango",
  },
];

const BADGES = [
  { icon: Heart, name: "1 Month", color: "from-pink-mango to-fuchsia-500" },
  { icon: Star, name: "6 Month", color: "from-peach-mango to-pink-mango" },
  { icon: SparklesIcon, name: "1 Year", color: "from-accent-cyan to-twitch" },
  { icon: Crown, name: "OG Mango", color: "from-accent-gold to-peach-mango" },
];

const EMOTE_PAPER: Array<"pink" | "lilac" | "peach" | "mint" | "sky" | "cream"> = [
  "pink",
  "peach",
  "lilac",
  "mint",
  "sky",
  "cream",
  "pink",
  "peach",
  "lilac",
  "mint",
];

export function Community() {
  return (
    <section
      id="community"
      className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden"
    >
      <Sparkles count={18} />
      <FloatingMangoEmotes variant="section" />

      {/* Labubus around community section */}
      <motion.div
        className="absolute top-20 right-[3%] hidden lg:block"
        animate={{ y: [0, -14, 0], rotate: [6, -8, 6] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <Labubu color="mint" size={110} />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-[3%] hidden lg:block"
        animate={{ y: [0, -10, 0], rotate: [-8, 6, -8] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Labubu color="coral" size={100} bow />
      </motion.div>

      <DoodleFlower className="absolute top-1/4 left-[8%] hidden lg:block" size={36} />
      <DoodleStar className="absolute bottom-1/3 right-[8%] hidden lg:block" size={28} />

      <div className="relative max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="✦ mango garden ✦"
          title="my chat is a sticker collection"
          subtitle="emote spam · meme phrases · weird friendship energy. drag the emotes around — they like it."
          gradient="mango"
          doodle="heart"
        />

        {/* Emote sticker grid */}
        <div className="relative mb-16">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 -translate-y-2">
            <DoodleArrow size={70} color="#FF8CCB" className="rotate-90" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {EMOTES.map((emote, i) => (
              <motion.div
                key={emote.name}
                initial={{ opacity: 0, y: 30, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: emote.rotation }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05, type: "spring", stiffness: 120 }}
                whileHover={{ rotate: 0, y: -8, scale: 1.1 }}
                drag
                dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
                dragElastic={0.5}
                dragMomentum={false}
                className="group cursor-grab active:cursor-grabbing"
              >
                <StickyNote
                  variant={EMOTE_PAPER[i % EMOTE_PAPER.length]}
                  rotate={0}
                  hover={false}
                  className="aspect-square flex flex-col items-center justify-center !p-2"
                >
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 2 + i * 0.15,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] flex items-center justify-center"
                  >
                    <Image
                      src={emote.src}
                      alt={emote.alt}
                      width={112}
                      height={112}
                      className="w-full h-full object-contain drop-shadow-md select-none"
                      unoptimized
                    />
                  </motion.div>
                  <span className="font-hand text-base font-bold mt-1.5 opacity-75 leading-none truncate max-w-full px-1">
                    :{emote.name}:
                  </span>
                </StickyNote>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Chat + badges scrapbook */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Faux Twitch chat as a polaroid-style card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 relative"
          >
            <div
              className="relative paper-card rounded-2xl overflow-hidden shadow-[0_18px_50px_rgba(26,15,38,0.45)]"
              style={{ transform: "rotate(-1deg)" }}
            >
              <div className="absolute -top-3 left-12 w-28 h-7 bg-pink-300/85 tape rounded-sm -rotate-6 shadow-md" />
              <div className="absolute -top-3 right-10 w-24 h-7 bg-yellow-200/85 tape rounded-sm rotate-6 shadow-md" />

              {/* Chat header */}
              <div className="flex items-center justify-between px-5 py-3 border-b-2 border-bg-deep/10 bg-pink-mango/20">
                <div className="flex items-center gap-2 font-hand text-xl text-bg-deep">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  mango's chat
                </div>
                <span className="font-hand text-base text-bg-deep/65">
                  4,218 ppl 💖
                </span>
              </div>

              <div className="p-5 space-y-3 max-h-[420px] overflow-hidden">
                {CHAT_MOMENTS.map((m, i) => (
                  <motion.div
                    key={m.user + i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-2.5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-mango to-peach-mango shrink-0 mt-0.5 grid place-items-center text-sm shadow-md">
                      🥭
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-1.5 flex-wrap">
                        <span className={cn("font-display text-sm font-bold", m.color)}>
                          {m.user}
                        </span>
                        <span className="text-bg-deep/40 text-sm">:</span>
                      </div>
                      <p className="text-sm text-bg-deep/85 leading-snug">{m.msg}</p>
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="flex items-center gap-2 text-xs text-bg-deep/55 pt-2 font-hand text-base"
                >
                  <div className="flex gap-1">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        className="w-1.5 h-1.5 rounded-full bg-pink-mango"
                        animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: d * 0.15 }}
                      />
                    ))}
                  </div>
                  <span>mangoes typing…</span>
                </motion.div>
              </div>

              <div className="p-3 border-t-2 border-bg-deep/10 bg-cream-50/40">
                <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white border-2 border-bg-deep/10">
                  <input
                    type="text"
                    readOnly
                    placeholder="say something nice 🥭"
                    className="flex-1 bg-transparent text-sm text-bg-deep placeholder:text-bg-deep/40 outline-none cursor-default"
                  />
                  <button className="font-hand text-base font-bold px-3 py-1 rounded-lg bg-twitch text-white">
                    chat!
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Badges + quote side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <StickyNote variant="lilac" rotate={2} pin>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-hand text-3xl font-bold leading-none">sub badges</h3>
                <DoodleBow size={28} />
              </div>
              <p className="font-hand text-lg opacity-65 mb-4 leading-tight">
                unlock cuter mango energy the longer you're around ♡
              </p>
              <div className="grid grid-cols-2 gap-3">
                {BADGES.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <motion.div
                      key={b.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      whileHover={{ y: -4, rotate: i % 2 ? 5 : -5 }}
                      className="aspect-square rounded-xl p-3 bg-white/65 border-2 border-bg-deep/15 flex flex-col items-center justify-center shadow-md"
                    >
                      <div
                        className={cn(
                          "w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center shadow-lg mb-2",
                          b.color,
                        )}
                      >
                        <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                      </div>
                      <div className="font-hand text-base font-bold leading-none">
                        {b.name}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </StickyNote>

            <StickyNote variant="peach" rotate={-2}>
              <div className="text-3xl mb-1">"</div>
              <p className="font-hand text-xl leading-snug">
                this community feels like a sleepover with the friends i haven't even
                met yet 🥭
              </p>
              <p className="mt-3 font-hand text-base opacity-65">
                — chat, mid stream
              </p>
              <DoodleHeart className="absolute -bottom-3 -right-3" size={26} />
            </StickyNote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
