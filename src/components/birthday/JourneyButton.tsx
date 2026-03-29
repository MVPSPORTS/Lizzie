"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function JourneyButton() {
  return (
    <section className="py-24 px-6 bg-bg-secondary">
      <div className="max-w-4xl mx-auto">
        {/* Level overview */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-12">
            <p className="font-cinzel text-gold-primary text-xs tracking-[0.4em] uppercase mb-4 opacity-70">
              Your Progression
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl text-parchment">
              The Four Levels
            </h2>
            <div className="gold-divider w-24 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                n: "01",
                title: "Basic Explorer",
                desc: "One platform, short prompts, questioning results.",
                active: true,
              },
              {
                n: "02",
                title: "Curious Builder",
                desc: "Multiple platforms, better prompts, exploring more.",
                active: false,
              },
              {
                n: "03",
                title: "Efficiency Driver",
                desc: "Automation, multi-tool mastery, always thinking ahead.",
                active: false,
              },
              {
                n: "04",
                title: "Creator",
                desc: "Building products from scratch using AI as a partner.",
                active: false,
              },
            ].map((level, i) => (
              <motion.div
                key={level.n}
                className="relative rounded-xl p-6 border"
                style={{
                  background: level.active
                    ? "rgba(201,168,76,0.06)"
                    : "rgba(13,17,23,0.6)",
                  borderColor: level.active
                    ? "rgba(201,168,76,0.4)"
                    : "rgba(201,168,76,0.1)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="font-cinzel text-3xl text-gold-primary opacity-20 mb-3">
                  {level.n}
                </div>
                <h3 className="font-cinzel text-sm text-gold-primary tracking-wider mb-2">
                  {level.title}
                </h3>
                <p className="text-parchment-muted text-sm leading-relaxed">
                  {level.desc}
                </p>
                {level.active && (
                  <div className="absolute top-3 right-3">
                    <span className="font-cinzel text-xs text-gold-primary bg-gold-primary bg-opacity-10 px-2 py-1 rounded-full border border-gold-primary border-opacity-30">
                      Start here
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Progress arrow */}
          <div className="flex items-center justify-center mt-6 gap-2">
            <div className="gold-divider flex-1 max-w-xs" />
            <span className="font-cinzel text-gold-dim text-xs tracking-widest px-4">
              YOUR JOURNEY THROUGH THIS GUIDE
            </span>
            <div className="gold-divider flex-1 max-w-xs" />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-playfair italic text-parchment-muted text-lg mb-10">
            Ten commandments. Ten steps. One complete transformation.
          </p>

          <Link href="/commandments/1">
            <motion.div
              className="inline-flex items-center gap-4 px-10 py-5 rounded-full font-cinzel text-sm tracking-[0.2em] uppercase cursor-pointer"
              style={{
                background:
                  "linear-gradient(135deg, #8B7035 0%, #C9A84C 50%, #E5C97E 100%)",
                color: "#080B14",
              }}
              whileHover={{ scale: 1.04, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              Begin Your Journey
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={18} strokeWidth={2} />
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
