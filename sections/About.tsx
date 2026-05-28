"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { StickyNote } from "@/components/StickyNote";
import { Labubu } from "@/components/Labubu";
import { FloatingMangoEmotes } from "@/components/FloatingMangoEmotes";
import {
  DoodleHeart,
  DoodleStar,
  DoodleSparkle,
} from "@/components/Doodles";
import { RULES, STREAMER } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden">
      <FloatingMangoEmotes variant="section" />

      {/* Floating decorations */}
      <motion.div
        className="absolute top-20 left-[4%] opacity-90 hidden md:block"
        animate={{ y: [0, -14, 0], rotate: [-10, 6, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Labubu color="mint" size={110} />
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-[3%] opacity-90 hidden md:block"
        animate={{ y: [0, -10, 0], rotate: [8, -6, 8] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <Labubu color="pink" size={120} bow />
      </motion.div>

      <DoodleStar className="absolute top-1/3 left-[8%] hidden lg:block" size={28} />
      <DoodleHeart className="absolute top-1/2 right-[8%] hidden lg:block" size={24} />
      <DoodleSparkle className="absolute bottom-1/3 left-[12%] hidden lg:block" size={20} />

      <div className="relative max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="elo it's selina 🥭"
          title="cozy variety streamer w/ a chaos problem"
          subtitle="i'm 27, on this channel you'll see me play hella variety games c: my first stream was january 31, 2023."
          align="center"
          gradient="mango"
          doodle="heart"
        />

        {/* Bio polaroid — real mango emote portrait */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-12 max-w-xl mx-auto"
        >
          <div className="relative paper-card p-3 pb-5 rounded-md shadow-[0_18px_40px_rgba(26,15,38,0.45)] -rotate-1">
            <div className="absolute -top-3 -left-3 w-24 h-7 bg-pink-300/85 tape rounded-sm -rotate-12 shadow-md" />
            <div className="absolute -top-3 -right-3 w-20 h-7 bg-yellow-200/85 tape rounded-sm rotate-12 shadow-md" />

            <div className="relative aspect-[5/3] rounded overflow-hidden flex items-center justify-center bg-gradient-to-br from-labubu-peach via-labubu-pink to-labubu-cream">
              <Image
                src="/emotes/sadge_112_x_112_px_6.png"
                alt="mango holding pink heart"
                width={180}
                height={180}
                className="drop-shadow-xl select-none"
                priority
                unoptimized
              />
              <DoodleSparkle className="absolute top-4 right-6" size={24} color="#FFFFFF" />
              <DoodleSparkle className="absolute bottom-6 left-6" size={20} color="#FFFFFF" />
              <DoodleStar className="absolute top-6 left-8" size={22} color="#FFFFFF" />
              <div className="absolute bottom-2 right-3">
                <Labubu color="peach" size={48} />
              </div>
            </div>
            <p className="mt-4 text-center font-hand text-3xl text-bg-deep leading-none">
              elo my name is selina ヽ(°〇°)ﾉ
            </p>
          </div>
        </motion.div>

        {/* About bento — sticky notes pulled straight from her about */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Hi note */}
          <StickyNote variant="pink" rotate={-3} className="min-h-[200px]">
            <div className="flex items-start justify-between mb-2">
              <span className="text-4xl">👋</span>
              <span className="font-hand text-xl opacity-50">#01</span>
            </div>
            <h3 className="font-hand text-3xl leading-tight mb-2 font-bold">
              elo i'm selina
            </h3>
            <p className="text-sm leading-relaxed opacity-80">
              27 years old · variety streamer · cozy chaos enthusiast. on this
              channel you'll see me play hella variety games c:
            </p>
          </StickyNote>

          {/* First stream date */}
          <StickyNote variant="lilac" rotate={2} className="min-h-[200px]">
            <div className="flex items-start justify-between mb-2">
              <span className="text-4xl">📅</span>
              <span className="font-hand text-xl opacity-50">#02</span>
            </div>
            <h3 className="font-hand text-3xl leading-tight mb-2 font-bold">
              first stream
            </h3>
            <p className="font-display text-2xl font-bold mb-1">
              january 31, 2023
            </p>
            <p className="text-sm leading-relaxed opacity-80">
              and we have been going strong ever since 🥭✨
            </p>
          </StickyNote>

          {/* Variety */}
          <StickyNote variant="peach" rotate={-2} className="min-h-[200px]">
            <div className="flex items-start justify-between mb-2">
              <span className="text-4xl">🎮</span>
              <span className="font-hand text-xl opacity-50">#03</span>
            </div>
            <h3 className="font-hand text-3xl leading-tight mb-2 font-bold">
              hella variety
            </h3>
            <p className="text-sm leading-relaxed opacity-80">
              rpgs · horror · multiplayer · indie · the occasional rage game when
              chat dares me 💀
            </p>
          </StickyNote>

          {/* RULES — full sized note */}
          <StickyNote
            variant="cream"
            rotate={3}
            pin
            className="min-h-[200px] sm:col-span-2"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-hand text-3xl font-bold leading-none underline decoration-wavy decoration-pink-mango/80">
                RULES:
              </h3>
              <span className="font-hand text-xl opacity-50">#04</span>
            </div>
            <ul className="space-y-2 mb-3">
              {RULES.map((rule) => (
                <li
                  key={rule}
                  className="flex items-start gap-2 font-hand text-2xl leading-none"
                >
                  <span className="text-pink-deep">•</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2 border-t-2 border-dashed border-bg-deep/15">
              <p className="font-hand text-2xl">
                <span className="text-red-500 underline">TLDR:</span>{" "}
                <span className="font-bold">don't be stopid</span>
              </p>
            </div>
            <DoodleHeart className="absolute -bottom-3 -right-3" size={24} />
          </StickyNote>

          {/* Discord note */}
          <StickyNote variant="mint" rotate={-3} className="min-h-[200px]">
            <div className="flex items-start justify-between mb-2">
              <span className="text-4xl">💬</span>
              <span className="font-hand text-xl opacity-50">#05</span>
            </div>
            <h3 className="font-hand text-3xl leading-tight mb-2 font-bold">
              join the discord
            </h3>
            <p className="text-sm leading-relaxed opacity-80 mb-3">
              the mango garden — where chat raises the streamer ♡
            </p>
            <a
              href={STREAMER.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-hand text-xl bg-bg-deep text-white px-3 py-1.5 rounded-full shadow-md hover:scale-105 transition-transform"
            >
              click to join →
            </a>
          </StickyNote>
        </div>

      </div>
    </section>
  );
}
