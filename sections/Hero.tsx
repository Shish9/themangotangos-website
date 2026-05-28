"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { Twitch, MessageCircle, Coins } from "lucide-react";
import { KickIcon } from "@/components/icons/KickIcon";
import { GlowButton } from "@/components/GlowButton";
import { Sparkles } from "@/components/Sparkles";
import { FloatingLabubus } from "@/components/FloatingLabubus";
import { FloatingMangoEmotes } from "@/components/FloatingMangoEmotes";
import { Labubu } from "@/components/Labubu";
import {
  DoodleStar,
  DoodleSparkle,
  DoodleArrow,
  DoodleHeart,
  DoodleScribble,
  DoodleCircle,
  DoodleFlower,
  DoodleCloud,
} from "@/components/Doodles";
import { WashiTape } from "@/components/WashiTape";
import { StickyNote } from "@/components/StickyNote";
import { STREAMER } from "@/lib/data";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 18 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 18 });

  const titleX = useTransform(smoothX, [-1, 1], [-8, 8]);
  const titleY = useTransform(smoothY, [-1, 1], [-6, 6]);

  useEffect(() => {
    const handle = (e: PointerEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x * 2);
      mouseY.set(y * 2);
    };
    const el = ref.current;
    el?.addEventListener("pointermove", handle);
    return () => el?.removeEventListener("pointermove", handle);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-24 px-4 sm:px-6 overflow-hidden"
    >
      {/* Soft dotted backdrop */}
      <div
        className="absolute inset-0 opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.4) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />

      <Sparkles count={20} />
      <FloatingLabubus />
      <FloatingMangoEmotes variant="hero" />

      {/* Floating doodles */}
      <motion.div
        className="absolute top-[14%] left-[20%]"
        animate={{ y: [0, -8, 0], rotate: [-8, 8, -8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <DoodleStar size={28} color="#FFE27A" />
      </motion.div>
      <motion.div
        className="absolute top-[22%] right-[22%]"
        animate={{ y: [0, -10, 0], rotate: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <DoodleHeart size={26} color="#FF8CCB" />
      </motion.div>
      <motion.div
        className="absolute top-[40%] left-[14%]"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      >
        <DoodleFlower size={32} color="#FFB347" />
      </motion.div>
      <motion.div
        className="absolute bottom-[30%] right-[16%]"
        animate={{ y: [0, -8, 0], rotate: [-10, 10, -10] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <DoodleSparkle size={26} color="#C8A2FF" />
      </motion.div>
      <motion.div
        className="absolute bottom-[18%] left-[28%] opacity-80"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <DoodleCloud size={70} color="#FFE3EE" />
      </motion.div>
      <motion.div
        className="absolute top-[58%] right-[10%]"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <DoodleSparkle size={20} color="#FFE27A" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Top tape decoration */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <WashiTape color="pink" width={80} height={24} rotate={-12} />
          <WashiTape color="yellow" width={80} height={24} rotate={8} pattern="dot" />
          <WashiTape color="mint" width={80} height={24} rotate={-6} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          <span className="font-hand text-2xl text-pink-mango -rotate-2">
            hi hi hi! ✿
          </span>
        </motion.div>

        {/* Handwritten lead-in */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: -3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-3"
        >
          <span className="font-hand text-3xl sm:text-4xl text-lavender-mango">
            hey, i'm—
          </span>
        </motion.div>

        {/* Big gradient title */}
        <motion.h1
          style={{ x: titleX, y: titleY }}
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, type: "spring", stiffness: 90, damping: 20 }}
          className="relative font-display font-bold leading-[0.92] tracking-tight text-balance text-center"
        >
          <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] text-gradient-mango drop-shadow-[0_0_50px_rgba(255,140,203,0.5)]">
            themangotangos
          </span>
          {/* Underline doodle */}
          <motion.div
            className="absolute -bottom-3 sm:-bottom-5 left-1/2 -translate-x-1/2 w-[70%]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          >
            <svg viewBox="0 0 600 24" className="w-full" preserveAspectRatio="none">
              <path
                d="M5 12 Q 150 4 300 12 T 595 12"
                stroke="#FF8FB3"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M10 18 Q 200 22 400 16 T 590 18"
                stroke="#FFB877"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                opacity="0.85"
              />
            </svg>
          </motion.div>
        </motion.h1>

        {/* Cute callout under title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex items-center justify-center gap-2 flex-wrap text-lg sm:text-2xl font-hand text-white/90"
        >
          <span className="bg-pink-mango/20 px-3 py-1 rounded-full border border-pink-mango/40">
            cozy
          </span>
          <DoodleHeart size={20} />
          <span className="bg-peach-mango/20 px-3 py-1 rounded-full border border-peach-mango/40">
            chaotic
          </span>
          <DoodleStar size={20} />
          <span className="bg-lavender-mango/20 px-3 py-1 rounded-full border border-lavender-mango/40">
            hella variety
          </span>
          <DoodleSparkle size={20} />
          <span className="bg-accent-cyan/20 px-3 py-1 rounded-full border border-accent-cyan/40">
            way too cute
          </span>
        </motion.div>

        {/* CTAs in a scrapbook frame */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 relative"
        >
          <div className="relative">
            <GlowButton
              href={STREAMER.twitchUrl}
              external
              size="lg"
              icon={<Twitch className="w-5 h-5" />}
            >
              twitch 🥭
            </GlowButton>
            {/* Arrow doodle pointing at button */}
            <motion.div
              className="hidden sm:block absolute -top-12 -left-20"
              animate={{ rotate: [-8, 4, -8] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <DoodleArrow size={70} color="#FFE27A" />
              <span className="absolute -top-2 -left-2 font-hand text-2xl text-accent-gold whitespace-nowrap -rotate-12">
                click click!
              </span>
            </motion.div>
          </div>

          {/* Kick — custom green styling */}
          <motion.a
            href={STREAMER.kickUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-3xl text-base sm:text-lg font-semibold text-bg-deep bg-gradient-to-r from-[#53FC18] via-emerald-400 to-lime-300 shadow-[0_0_40px_rgba(83,252,24,0.45)] hover:shadow-[0_0_60px_rgba(83,252,24,0.65)] overflow-hidden"
          >
            <span
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
              aria-hidden
            />
            <KickIcon size={20} className="relative z-10" />
            <span className="relative z-10">kick</span>
          </motion.a>

          {/* Tip icon — small circular button next to stream CTAs */}
          <motion.a
            href={STREAMER.tipUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="leave a tip"
            title="leave a tip 🪙"
            whileHover={{ y: -2, scale: 1.08, rotate: -6 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 320, damping: 18 }}
            className="group relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-gold via-peach-mango to-pink-mango shadow-[0_0_30px_rgba(255,179,71,0.5)] hover:shadow-[0_0_45px_rgba(255,179,71,0.7)] border-2 border-white/30"
          >
            <Coins className="w-6 h-6 text-bg-deep drop-shadow" strokeWidth={2.5} />
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-hand text-base text-accent-gold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              tip!
            </span>
          </motion.a>

          <GlowButton
            href={STREAMER.discordUrl}
            external
            variant="secondary"
            size="lg"
            icon={<MessageCircle className="w-5 h-5" />}
          >
            join the discord 💬
          </GlowButton>
        </motion.div>

        {/* Sticky note stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 max-w-xl mx-auto grid grid-cols-2 gap-4 sm:gap-6"
        >
          {[
            { value: "12.4K", label: "mangoes", emoji: "🥭", variant: "pink", rotate: -3 },
            { value: "850h", label: "streamed", emoji: "⏰", variant: "lilac", rotate: 2 },
          ].map((s) => (
            <StickyNote
              key={s.label}
              variant={s.variant as "pink" | "lilac"}
              rotate={s.rotate}
              pin
              className="text-center min-h-[120px] flex flex-col items-center justify-center"
            >
              <div className="text-2xl mb-1">{s.emoji}</div>
              <div className="font-display text-2xl sm:text-3xl font-bold leading-none">
                {s.value}
              </div>
              <div className="font-hand text-xl sm:text-2xl mt-1 leading-none opacity-80">
                {s.label}
              </div>
            </StickyNote>
          ))}
        </motion.div>

        {/* Bottom corner labubu peek */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="hidden md:block absolute bottom-6 right-8 z-20"
        >
          <div className="relative">
            <DoodleCircle size={140} color="#FFE27A" className="absolute -inset-3" />
            <Labubu color="cream" size={120} bow />
            <span className="absolute -top-2 right-0 font-hand text-2xl text-accent-gold -rotate-6">
              hi! ✿
            </span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-hand text-xl text-white/55 -rotate-3">scroll for vibes</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="text-2xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
