"use client";

import { motion } from "framer-motion";

interface RomanNumeralProps {
  numeral: string;
}

export function RomanNumeral({ numeral }: RomanNumeralProps) {
  return (
    <div className="relative flex items-center justify-center py-8">
      {/* Background glow */}
      <div
        className="absolute inset-0 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 70%)" }}
      />

      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <span
          className="font-cinzel font-black text-[7rem] md:text-[10rem] lg:text-[12rem] leading-none select-none"
          style={{
            color: "transparent",
            WebkitTextStroke: "1px rgba(201,168,76,0.4)",
            textShadow: "0 0 80px rgba(201,168,76,0.12)",
          }}
        >
          {numeral}
        </span>

        {/* Filled overlay with gradient */}
        <span
          className="font-cinzel font-black text-[7rem] md:text-[10rem] lg:text-[12rem] leading-none absolute inset-0 flex items-center justify-center select-none gold-text"
          style={{ opacity: 0.15 }}
          aria-hidden
        >
          {numeral}
        </span>
      </motion.div>
    </div>
  );
}
