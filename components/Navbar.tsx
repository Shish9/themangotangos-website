"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Twitch, Coins } from "lucide-react";
import { KickIcon } from "@/components/icons/KickIcon";
import { cn } from "@/lib/utils";
import { GlowButton } from "./GlowButton";
import { STREAMER } from "@/lib/data";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Clips", href: "#clips" },
  { label: "Community", href: "#community" },
  { label: "Socials", href: "#socials" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      // Active section detection
      const sections = NAV_ITEMS.map((n) => n.href.slice(1));
      const offsets = sections.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Number.POSITIVE_INFINITY };
        return { id, top: Math.abs(el.getBoundingClientRect().top - 120) };
      });
      offsets.sort((a, b) => a.top - b.top);
      if (offsets[0]) setActive(offsets[0].id);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 28, delay: 0.1 }}
        className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-3 sm:px-6"
      >
        <nav
          className={cn(
            "max-w-6xl mx-auto rounded-full transition-all duration-500",
            "border border-white/10",
            scrolled
              ? "bg-bg-deep/65 backdrop-blur-2xl shadow-[0_8px_40px_rgba(11,8,18,0.6)]"
              : "bg-white/5 backdrop-blur-xl",
            "pl-4 pr-3 sm:pl-6 sm:pr-3 py-2.5",
          )}
        >
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="#hero" className="group flex items-center gap-2.5 shrink-0">
              <motion.div
                whileHover={{ rotate: -12, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-9 h-9 rounded-2xl bg-gradient-to-br from-twitch via-pink-mango to-peach-mango grid place-items-center shadow-glow-purple"
              >
                <span className="text-xl">🥭</span>
                <div className="absolute inset-0 rounded-2xl bg-white/0 group-hover:bg-white/15 transition-colors" />
              </motion.div>
              <span className="font-display font-bold text-base tracking-tight bg-gradient-to-r from-pink-mango via-peach-mango to-accent-gold bg-clip-text text-transparent">
                themangotangos
              </span>
            </Link>

            {/* Desktop nav */}
            <ul className="hidden lg:flex items-center gap-1 ml-4">
              {NAV_ITEMS.map((item) => {
                const isActive = active === item.href.slice(1);
                return (
                  <li key={item.href} className="relative">
                    <Link
                      href={item.href}
                      className={cn(
                        "relative inline-block px-4 py-2 text-sm font-semibold rounded-full transition-colors",
                        isActive ? "text-white" : "text-white/70 hover:text-white",
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-white/10 border border-white/15 shadow-glow-purple"
                          transition={{ type: "spring", stiffness: 320, damping: 28 }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="hidden lg:flex items-center gap-2">
              <motion.a
                href={STREAMER.kickUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl text-sm font-bold text-bg-deep bg-gradient-to-r from-[#53FC18] to-emerald-300 shadow-[0_0_18px_rgba(83,252,24,0.45)] hover:shadow-[0_0_28px_rgba(83,252,24,0.7)] transition-shadow"
              >
                <KickIcon size={14} />
                Kick
              </motion.a>
              <GlowButton
                href={STREAMER.twitchUrl}
                external
                size="sm"
                icon={<Twitch className="w-4 h-4" />}
              >
                Twitch
              </GlowButton>
              <motion.a
                href={STREAMER.tipUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="leave a tip"
                title="leave a tip 🪙"
                whileHover={{ y: -2, scale: 1.08, rotate: -6 }}
                whileTap={{ scale: 0.94 }}
                className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-accent-gold via-peach-mango to-pink-mango shadow-[0_0_18px_rgba(255,179,71,0.5)] hover:shadow-[0_0_28px_rgba(255,179,71,0.7)] border-2 border-white/30"
              >
                <Coins className="w-4 h-4 text-bg-deep" strokeWidth={2.6} />
              </motion.a>
            </div>

            {/* Mobile menu trigger */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(!open)}
              className="lg:hidden w-10 h-10 rounded-full bg-white/8 border border-white/15 grid place-items-center text-white hover:bg-white/15 transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-bg-deep/85 backdrop-blur-2xl"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 240, damping: 26, delay: 0.05 }}
              className="relative pt-24 px-6"
            >
              <ul className="flex flex-col gap-2">
                {NAV_ITEMS.map((item, idx) => (
                  <motion.li
                    key={item.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.08 + idx * 0.06 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between px-5 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur text-white text-lg font-display font-bold hover:bg-white/10 transition-colors"
                    >
                      <span>{item.label}</span>
                      <span className="text-2xl">→</span>
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 flex flex-col gap-3"
                >
                  <GlowButton
                    href={STREAMER.twitchUrl}
                    external
                    size="lg"
                    icon={<Twitch className="w-5 h-5" />}
                    className="w-full justify-center"
                  >
                    Watch on Twitch
                  </GlowButton>
                  <motion.a
                    href={STREAMER.kickUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-3xl text-base font-bold text-bg-deep bg-gradient-to-r from-[#53FC18] to-emerald-300 shadow-[0_0_22px_rgba(83,252,24,0.4)]"
                  >
                    <KickIcon size={18} />
                    Watch on Kick
                  </motion.a>
                  <motion.a
                    href={STREAMER.tipUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-3xl text-base font-bold text-bg-deep bg-gradient-to-r from-accent-gold via-peach-mango to-pink-mango shadow-[0_0_22px_rgba(255,179,71,0.4)]"
                  >
                    <Coins className="w-5 h-5" strokeWidth={2.6} />
                    Leave a tip
                  </motion.a>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
