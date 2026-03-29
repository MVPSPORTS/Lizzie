"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { commandments } from "@/data/commandments";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";

interface NavArrowsProps {
  current: number;
}

export function NavArrows({ current }: NavArrowsProps) {
  const prev = commandments.find((c) => c.number === current - 1);
  const next = commandments.find((c) => c.number === current + 1);

  return (
    <div className="flex items-center justify-between gap-4 mt-16 pt-10 border-t" style={{ borderColor: "rgba(201,168,76,0.12)" }}>
      {/* Previous */}
      <div className="flex-1">
        {prev ? (
          <Link href={`/commandments/${prev.number}`}>
            <motion.div
              className="flex items-center gap-3 group"
              whileHover={{ x: -4 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronLeft
                size={20}
                className="text-gold-dim group-hover:text-gold-primary transition-colors flex-shrink-0"
              />
              <div>
                <p className="font-cinzel text-gold-dim text-xs tracking-widest opacity-50 group-hover:opacity-70 transition-opacity">
                  Previous
                </p>
                <p className="font-cinzel text-parchment-muted text-sm group-hover:text-parchment transition-colors">
                  {prev.romanNumeral}. {prev.title}
                </p>
              </div>
            </motion.div>
          </Link>
        ) : (
          <Link href="/">
            <motion.div
              className="flex items-center gap-3 group"
              whileHover={{ x: -4 }}
              transition={{ duration: 0.2 }}
            >
              <Home
                size={18}
                className="text-gold-dim group-hover:text-gold-primary transition-colors flex-shrink-0"
              />
              <div>
                <p className="font-cinzel text-gold-dim text-xs tracking-widest opacity-50 group-hover:opacity-70 transition-opacity">
                  Back to
                </p>
                <p className="font-cinzel text-parchment-muted text-sm group-hover:text-parchment transition-colors">
                  Birthday Page
                </p>
              </div>
            </motion.div>
          </Link>
        )}
      </div>

      {/* Current indicator */}
      <div className="flex flex-col items-center gap-1">
        <span className="font-cinzel text-gold-primary text-lg font-bold">
          {current}
        </span>
        <div className="gold-divider w-8" />
        <span className="font-cinzel text-gold-dim text-xs opacity-40">10</span>
      </div>

      {/* Next */}
      <div className="flex-1 flex justify-end">
        {next ? (
          <Link href={`/commandments/${next.number}`}>
            <motion.div
              className="flex items-center gap-3 group text-right"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <div>
                <p className="font-cinzel text-gold-dim text-xs tracking-widest opacity-50 group-hover:opacity-70 transition-opacity">
                  Next
                </p>
                <p className="font-cinzel text-parchment-muted text-sm group-hover:text-parchment transition-colors">
                  {next.romanNumeral}. {next.title}
                </p>
              </div>
              <ChevronRight
                size={20}
                className="text-gold-dim group-hover:text-gold-primary transition-colors flex-shrink-0"
              />
            </motion.div>
          </Link>
        ) : (
          <div className="text-center">
            <p className="font-cinzel text-gold-primary text-sm tracking-wider opacity-60">
              You have completed
            </p>
            <p className="font-cinzel text-gold-primary font-bold text-base">
              The AI Bible
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
