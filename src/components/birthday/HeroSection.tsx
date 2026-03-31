"use client";

import { motion } from "framer-motion";

const PARTICLES = [
  { id: 0, x: 8, delay: 0.2, dur: 5.1, size: 5, color: "#C9A84C" },
  { id: 1, x: 15, delay: 1.4, dur: 4.3, size: 3, color: "#E5C97E" },
  { id: 2, x: 23, delay: 0.7, dur: 6.2, size: 6, color: "#C9A84C" },
  { id: 3, x: 31, delay: 2.1, dur: 3.8, size: 4, color: "#8B7035" },
  { id: 4, x: 38, delay: 0.4, dur: 5.6, size: 5, color: "#E5C97E" },
  { id: 5, x: 45, delay: 1.9, dur: 4.7, size: 3, color: "#C9A84C" },
  { id: 6, x: 52, delay: 0.9, dur: 6.8, size: 5, color: "#C9A84C" },
  { id: 7, x: 59, delay: 2.8, dur: 3.5, size: 7, color: "#E5C97E" },
  { id: 8, x: 67, delay: 0.3, dur: 5.9, size: 4, color: "#C9A84C" },
  { id: 9, x: 74, delay: 1.6, dur: 4.1, size: 5, color: "#8B7035" },
  { id: 10, x: 81, delay: 0.8, dur: 6.4, size: 3, color: "#C9A84C" },
  { id: 11, x: 88, delay: 2.3, dur: 5.2, size: 5, color: "#E5C97E" },
  { id: 12, x: 94, delay: 1.1, dur: 4.8, size: 6, color: "#C9A84C" },
  { id: 13, x: 5, delay: 3.2, dur: 5.7, size: 4, color: "#8B7035" },
  { id: 14, x: 19, delay: 0.6, dur: 3.9, size: 5, color: "#C9A84C" },
  { id: 15, x: 70, delay: 2.4, dur: 3.6, size: 4, color: "#E5C97E" },
  { id: 16, x: 85, delay: 0.7, dur: 6.9, size: 5, color: "#C9A84C" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-bg-primary">
      {/* Layered radial glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(201,168,76,0.06) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 30% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Falling particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-sm"
            style={{
              left: `${p.x}%`,
              top: "-16px",
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              opacity: 0,
            }}
            animate={{
              y: ["0vh", "110vh"],
              rotate: [0, p.id % 2 === 0 ? 360 : -360],
              opacity: [0, 0.7, 0.7, 0],
            }}
            transition={{
              duration: p.dur,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

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
          <div className="h-px flex-1 max-w-[120px]" style={{ background: "linear-gradient(to right, transparent, #C9A84C)" }} />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 0 L9.5 6.5 L16 8 L9.5 9.5 L8 16 L6.5 9.5 L0 8 L6.5 6.5 Z" fill="#C9A84C" opacity="0.8" />
          </svg>
          <div className="h-px flex-1 max-w-[120px]" style={{ background: "linear-gradient(to left, transparent, #C9A84C)" }} />
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
        transition={{ delay: 2.2 }}
      >
        <motion.div
          className="w-px h-10 origin-top"
          style={{ background: "linear-gradient(to bottom, #C9A84C, transparent)" }}
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
