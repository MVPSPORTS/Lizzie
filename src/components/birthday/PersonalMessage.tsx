"use client";

import { motion } from "framer-motion";

export function PersonalMessage() {
  return (
    <section className="py-28 px-6 bg-bg-primary">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Decorative quote mark */}
          <div
            className="absolute -top-6 -left-2 font-playfair text-9xl text-gold-primary select-none leading-none pointer-events-none"
            style={{ opacity: 0.06 }}
            aria-hidden
          >
            &ldquo;
          </div>

          <div
            className="relative rounded-2xl p-8 md:p-14 border gold-glow"
            style={{
              background:
                "linear-gradient(160deg, rgba(13,17,23,0.98) 0%, rgba(17,24,39,0.95) 100%)",
              borderColor: "rgba(201,168,76,0.18)",
            }}
          >
            {/* Top ornament */}
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.4))" }} />
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 0 L7 5 L12 6 L7 7 L6 12 L5 7 L0 6 L5 5 Z" fill="#C9A84C" opacity="0.6" />
              </svg>
              <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, rgba(201,168,76,0.4))" }} />
            </div>

            <div className="space-y-7 font-playfair text-parchment-muted text-lg md:text-xl leading-relaxed">
              <p className="text-parchment font-bold not-italic text-2xl md:text-3xl leading-snug">
                Happy 29th Birthday, my princess.
              </p>

              <p className="italic">
                Here&apos;s to a future of automating work and making your life
                less stressful. The greatest gift of them all was created by a
                machine, not by me — I only guided the direction. And you can
                too, with what is to come.
              </p>

              <p className="italic">
                Tonight, you hold something built just for you. Not a card. Not
                flowers. Something far more powerful — a guide to one of the most
                important technologies of our time, written by someone who&apos;s
                spent years living inside it, shaped specifically for you.
              </p>

              <p className="italic">
                AI is not the future. It&apos;s the present. And the people who
                understand it — who move from using it to truly mastering it —
                will have an advantage that compounds every single day.
              </p>

              <p className="text-parchment font-semibold not-italic">
                I wanted to give you that advantage.
              </p>

              <p className="italic">
                This is your AI Bible. Take your time with it. Come back to it.
                Let it change how you work and how you think.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-12 pt-8 flex items-end justify-between border-t" style={{ borderColor: "rgba(201,168,76,0.12)" }}>
              <div>
                <p className="font-playfair italic text-parchment-muted text-base mb-1">
                  With all my love,
                </p>
                <p className="font-cinzel text-gold-primary text-2xl tracking-wider">
                  Fergus
                </p>
              </div>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" opacity="0.2">
                <path d="M20 2 L22.5 15 L36 20 L22.5 25 L20 38 L17.5 25 L4 20 L17.5 15 Z" fill="#C9A84C"/>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
