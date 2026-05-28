"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Labubu } from "@/components/Labubu";
import { DoodleHeart, DoodleSparkle, DoodleStar } from "@/components/Doodles";
import { SOCIALS } from "@/lib/data";
import { cn } from "@/lib/utils";

const ROTATES = [-3, 2, -2, 3, -2, 2];
const PAPER = ["paper-pink", "paper-lilac", "paper-peach", "paper-mint", "paper-sky", "paper-card"];

export function Socials() {
  return (
    <section id="socials" className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden">
      <motion.div
        className="absolute top-24 left-[4%] hidden lg:block"
        animate={{ y: [0, -12, 0], rotate: [-6, 6, -6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Labubu color="lilac" size={100} bow />
      </motion.div>

      <DoodleHeart className="absolute top-1/3 right-[6%] hidden lg:block" size={26} />
      <DoodleStar className="absolute bottom-32 left-[8%] hidden lg:block" size={24} />
      <DoodleSparkle className="absolute bottom-1/2 right-[10%] hidden lg:block" size={20} />

      <div className="relative max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="✿ find me online ✿"
          title="everywhere on the internet"
          subtitle="different platforms · same mango energy. pick your favorite cave."
          gradient="cyber"
          doodle="heart"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {SOCIALS.map((s, i) => {
            const Icon = s.icon;
            const rotate = ROTATES[i % ROTATES.length];
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Link
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block h-full"
                >
                  <motion.div
                    style={{ rotate: `${rotate}deg` }}
                    whileHover={{ rotate: 0, y: -8, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 240, damping: 18 }}
                    className={cn(
                      "relative h-full rounded-2xl p-6 shadow-[0_18px_40px_rgba(26,15,38,0.4)]",
                      PAPER[i % PAPER.length],
                    )}
                  >
                    {/* Washi tape on top */}
                    <div
                      className={cn(
                        "absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-7 tape rounded-sm shadow-md",
                        i % 2 === 0 ? "bg-pink-300/85" : "bg-yellow-200/85",
                      )}
                      style={{ transform: `translateX(-50%) rotate(${i % 2 ? 6 : -6}deg)` }}
                      aria-hidden
                    />

                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        whileHover={{ rotate: -8, scale: 1.08 }}
                        transition={{ type: "spring", stiffness: 280, damping: 14 }}
                        className={cn(
                          "w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg",
                          "bg-gradient-to-br",
                          s.gradient,
                        )}
                      >
                        <Icon
                          className="w-7 h-7 text-white drop-shadow-md"
                          strokeWidth={2.2}
                        />
                      </motion.div>

                      <div className="w-9 h-9 rounded-full bg-white/65 border-2 border-bg-deep/15 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 shadow-md">
                        <ArrowUpRight className="w-4 h-4 text-bg-deep" />
                      </div>
                    </div>

                    <div className="font-hand text-xl opacity-65 leading-none mb-1">
                      follow on
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight">
                      {s.name}
                    </h3>
                    <p className="font-hand text-xl opacity-75 mt-1">{s.handle}</p>

                    <div className="mt-5 pt-3 border-t-2 border-dashed border-bg-deep/15 flex items-end justify-between">
                      <div>
                        <div className="font-hand text-base opacity-60 leading-none">
                          mangoes
                        </div>
                        <div className="font-display text-xl font-bold mt-0.5">
                          {s.followers}
                        </div>
                      </div>
                      <span className="font-hand text-lg opacity-65 group-hover:opacity-100 transition-opacity">
                        say hi →
                      </span>
                    </div>

                    {/* Random doodle */}
                    {i % 3 === 0 && (
                      <DoodleHeart
                        className="absolute -bottom-3 -right-3"
                        size={26}
                        color="#FF8CCB"
                      />
                    )}
                    {i % 3 === 1 && (
                      <DoodleStar
                        className="absolute -top-2 -right-3"
                        size={24}
                        color="#FFE27A"
                      />
                    )}
                    {i % 3 === 2 && (
                      <DoodleSparkle
                        className="absolute -bottom-2 -left-2"
                        size={22}
                        color="#C8A2FF"
                      />
                    )}
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
