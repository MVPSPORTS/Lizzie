"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const STATS = [
  { value: "1", label: "Conversation", sub: "The entire site — built in a single Claude Code session" },
  { value: "0", label: "Developers", sub: "No agency. No team. One person, one AI, one afternoon." },
  { value: "∞", label: "Potential", sub: "What you can build once you understand these tools" },
];

export function WhatAIBuilt() {
  return (
    <section className="py-28 px-6 bg-bg-secondary relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #C9A84C 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="font-cinzel text-gold-primary text-xs tracking-[0.5em] uppercase mb-5 opacity-60">
              What you&apos;re holding
            </p>
            <h2 className="font-playfair text-4xl md:text-6xl text-parchment leading-tight mb-6">
              Proof of what&apos;s possible.
            </h2>
            <p className="font-playfair italic text-parchment-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              This website — every animation, every line of code, every word — was built
              using the exact same AI tools you&apos;re about to learn. This is your proof.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.15}>
              <div
                className="relative rounded-2xl p-8 text-center border overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, rgba(13,17,23,0.9) 0%, rgba(17,24,39,0.7) 100%)",
                  borderColor: "rgba(201,168,76,0.15)",
                }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)" }}
                />

                <div
                  className="font-cinzel font-black mb-3 gold-text"
                  style={{ fontSize: "clamp(3rem, 8vw, 5rem)", lineHeight: 1 }}
                >
                  {stat.value}
                </div>
                <p className="font-cinzel text-parchment text-sm tracking-[0.2em] uppercase mb-3">
                  {stat.label}
                </p>
                <p className="text-parchment-muted text-sm leading-relaxed">
                  {stat.sub}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Featured statement */}
        <ScrollReveal delay={0.2}>
          <div className="text-center">
            <div className="gold-divider w-16 mx-auto mb-10" />
            <blockquote
              className="font-playfair italic text-parchment-muted text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto"
            >
              &ldquo;The greatest gift of them all was created by a machine, not
              by me — I only guided the direction. And you can too, with what is
              to come.&rdquo;
            </blockquote>
            <p className="font-cinzel text-gold-primary text-xs tracking-[0.3em] mt-6 opacity-70">
              — FERGUS
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
