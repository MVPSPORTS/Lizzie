"use client";

import { motion } from "framer-motion";
import { Fireworks } from "./Fireworks";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-bg-primary">
      {/* Deep radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 40%, rgba(201,168,76,0.07) 0%, transparent 65%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* 🎆 Fireworks layer */}
      <Fireworks />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          className="font-cinzel text-gold-primary text-xs tracking-[0.6em] uppercase mb-10 opacity-60"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          A gift crafted just for you
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.5 }}
        >
          <h1 className="font-playfair leading-[0.95]">
            <span className="block text-parchment-muted text-xl md:text-3xl font-normal mb-4 tracking-wide">
              Happy 29th Birthday
            </span>
            <span
              className="block font-black gold-text"
              style={{ fontSize: "clamp(5rem, 16vw, 14rem)" }}
            >
              Lizzie
            </span>
          </h1>
        </motion.div>

        {/* Animated ornament */}
        <motion.div
          className="flex items-center justify-center gap-4 my-10"
          initial={{ opacity: 0, scaleX: 0.6 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.0, delay: 1.0, ease: "easeOut" }}
        >
          <div
            className="h-px flex-1 max-w-[120px]"
            style={{
              background: "linear-gradient(to right, transparent, #C9A84C)",
            }}
          />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 0 L9.5 6.5 L16 8 L9.5 9.5 L8 16 L6.5 9.5 L0 8 L6.5 6.5 Z"
              fill="#C9A84C"
              opacity="0.9"
            />
          </svg>
          <div
            className="h-px flex-1 max-w-[120px]"
            style={{
              background: "linear-gradient(to left, transparent, #C9A84C)",
            }}
          />
        </motion.div>

        <motion.p
          className="font-playfair italic text-parchment-muted text-lg md:text-xl leading-relaxed max-w-lg mx-auto"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2 }}
        >
          Your journey into the most powerful technology of our time starts here.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
      >
        <motion.div
          className="w-px h-10 origin-top"
          style={{
            background: "linear-gradient(to bottom, #C9A84C, transparent)",
          }}
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="font-cinzel text-gold-dim text-xs tracking-[0.4em] opacity-40">
          SCROLL
        </span>
      </motion.div>
    </section>
  );
}
