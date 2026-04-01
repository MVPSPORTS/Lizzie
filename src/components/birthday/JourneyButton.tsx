"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const LEVELS = [
  {
    n: "01",
    title: "Basic Explorer",
    desc: "One platform, short prompts, occasional use.",
    marker: "Where most people are",
  },
  {
    n: "02",
    title: "Curious Builder",
    desc: "Multiple platforms, richer prompts, real curiosity.",
    marker: "Where this guide begins",
  },
  {
    n: "03",
    title: "Efficiency Driver",
    desc: "Automation, multi-tool mastery, saving hours daily.",
    marker: "Where you'll be",
  },
  {
    n: "04",
    title: "Creator",
    desc: "Building products from scratch using AI as a partner.",
    marker: "The destination",
  },
];

export function JourneyButton() {
  return (
    <section className="py-28 px-6 bg-bg-secondary relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-cinzel text-gold-primary text-xs tracking-[0.5em] uppercase mb-5 opacity-60">
              The progression
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-parchment mb-6">
              From Level 1 to Level 4.
            </h2>
            <p className="font-playfair italic text-parchment-muted text-lg max-w-xl mx-auto">
              Ten commandments. Ten steps. A complete transformation in how you think about and use AI.
            </p>
          </div>
        </ScrollReveal>

        {/* Level cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-20">
          {LEVELS.map((level, i) => (
            <ScrollReveal key={level.n} delay={i * 0.1}>
              <div
                className="relative rounded-xl p-6 border h-full flex flex-col"
                style={{
                  background:
                    i === 3
                      ? "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(139,112,53,0.04) 100%)"
                      : "rgba(13,17,23,0.6)",
                  borderColor:
                    i === 3
                      ? "rgba(201,168,76,0.3)"
                      : "rgba(201,168,76,0.08)",
                }}
              >
                <div className="font-cinzel text-4xl font-black mb-4 select-none"
                  style={{ color: i === 3 ? "rgba(201,168,76,0.3)" : "rgba(201,168,76,0.1)" }}>
                  {level.n}
                </div>
                <h3 className="font-cinzel text-xs tracking-wider text-gold-primary mb-2">
                  {level.title}
                </h3>
                <p className="text-parchment-muted text-sm leading-relaxed flex-1">
                  {level.desc}
                </p>
                <p className="font-cinzel text-xs tracking-wider mt-4 opacity-40"
                  style={{ color: i === 3 ? "#C9A84C" : "#8B7035" }}>
                  {level.marker}
                </p>

                {/* Connector arrow */}
                {i < 3 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight size={14} className="text-gold-dim opacity-30" />
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <Link href="/commandments/1">
              <motion.div
                className="inline-flex items-center gap-4 px-12 py-5 rounded-full font-cinzel text-sm tracking-[0.25em] uppercase cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #8B7035 0%, #C9A84C 45%, #E5C97E 100%)",
                  color: "#080B14",
                  boxShadow: "0 0 40px rgba(201,168,76,0.2), 0 0 80px rgba(201,168,76,0.08)",
                }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 60px rgba(201,168,76,0.35), 0 0 100px rgba(201,168,76,0.12)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25 }}
              >
                Begin Your Journey
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight size={18} strokeWidth={2.5} />
                </motion.div>
              </motion.div>
            </Link>

            <p className="font-cinzel text-gold-dim text-xs tracking-widest mt-6 opacity-40">
              Commandment I of X
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
