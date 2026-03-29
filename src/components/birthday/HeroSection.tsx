"use client";

import { motion } from "framer-motion";

const PARTICLES = [
  { id: 0, x: 8, delay: 0.2, dur: 5.1, size: 6, color: "#C9A84C" },
  { id: 1, x: 15, delay: 1.4, dur: 4.3, size: 4, color: "#E5C97E" },
  { id: 2, x: 23, delay: 0.7, dur: 6.2, size: 8, color: "#F5F0E8" },
  { id: 3, x: 31, delay: 2.1, dur: 3.8, size: 5, color: "#C9A84C" },
  { id: 4, x: 38, delay: 0.4, dur: 5.6, size: 7, color: "#8B7035" },
  { id: 5, x: 45, delay: 1.9, dur: 4.7, size: 4, color: "#E5C97E" },
  { id: 6, x: 52, delay: 0.9, dur: 6.8, size: 6, color: "#C9A84C" },
  { id: 7, x: 59, delay: 2.8, dur: 3.5, size: 9, color: "#F5F0E8" },
  { id: 8, x: 67, delay: 0.3, dur: 5.9, size: 5, color: "#C9A84C" },
  { id: 9, x: 74, delay: 1.6, dur: 4.1, size: 7, color: "#E5C97E" },
  { id: 10, x: 81, delay: 0.8, dur: 6.4, size: 4, color: "#8B7035" },
  { id: 11, x: 88, delay: 2.3, dur: 5.2, size: 6, color: "#C9A84C" },
  { id: 12, x: 94, delay: 1.1, dur: 4.8, size: 8, color: "#E5C97E" },
  { id: 13, x: 5, delay: 3.2, dur: 5.7, size: 5, color: "#F5F0E8" },
  { id: 14, x: 19, delay: 0.6, dur: 3.9, size: 7, color: "#C9A84C" },
  { id: 15, x: 28, delay: 1.8, dur: 6.1, size: 4, color: "#8B7035" },
  { id: 16, x: 42, delay: 2.6, dur: 4.4, size: 6, color: "#E5C97E" },
  { id: 17, x: 56, delay: 0.5, dur: 5.3, size: 9, color: "#C9A84C" },
  { id: 18, x: 63, delay: 1.3, dur: 3.7, size: 5, color: "#F5F0E8" },
  { id: 19, x: 77, delay: 2.9, dur: 6.5, size: 7, color: "#C9A84C" },
  { id: 20, x: 91, delay: 0.1, dur: 4.6, size: 4, color: "#E5C97E" },
  { id: 21, x: 11, delay: 3.5, dur: 5.8, size: 6, color: "#8B7035" },
  { id: 22, x: 35, delay: 1.0, dur: 4.2, size: 8, color: "#C9A84C" },
  { id: 23, x: 70, delay: 2.4, dur: 3.6, size: 5, color: "#E5C97E" },
  { id: 24, x: 85, delay: 0.7, dur: 6.9, size: 7, color: "#F5F0E8" },
  { id: 25, x: 48, delay: 1.7, dur: 5.0, size: 4, color: "#C9A84C" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-bg-primary">
      {/* Radial glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)",
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
              top: "-20px",
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              opacity: 0,
            }}
            animate={{
              y: ["0vh", "110vh"],
              rotate: [0, p.id % 2 === 0 ? 360 : -360],
              opacity: [0, 0.8, 0.8, 0],
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
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          className="font-cinzel text-gold-primary text-xs md:text-sm tracking-[0.5em] uppercase mb-8 opacity-70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A gift crafted just for you
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          <h1 className="font-playfair leading-tight">
            <span className="block text-parchment-muted text-2xl md:text-4xl font-normal mb-3">
              Happy Birthday
            </span>
            <span
              className="block text-7xl md:text-[10rem] font-black gold-text"
              style={{ lineHeight: 1.0 }}
            >
              Lizzie
            </span>
          </h1>
        </motion.div>

        {/* Animated gold line */}
        <motion.div
          className="mx-auto my-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <svg
            width="280"
            height="4"
            viewBox="0 0 280 4"
            className="mx-auto"
          >
            <motion.path
              d="M0 2 Q70 2 140 2 Q210 2 280 2"
              stroke="#C9A84C"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.9, ease: "easeInOut" }}
            />
            <motion.circle
              cx="140"
              cy="2"
              r="3"
              fill="#C9A84C"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.6 }}
            />
          </svg>
        </motion.div>

        <motion.p
          className="font-playfair italic text-parchment-muted text-lg md:text-xl leading-relaxed max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          Your journey into the most powerful technology of our time starts here.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 }}
        >
          <span className="font-cinzel text-gold-dim text-xs tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-gold-primary to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}
