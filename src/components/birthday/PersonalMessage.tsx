"use client";

import { motion } from "framer-motion";

export function PersonalMessage() {
  return (
    <section className="py-24 px-6 bg-bg-primary">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative quote mark */}
          <div
            className="absolute -top-8 -left-4 font-playfair text-8xl text-gold-primary opacity-10 select-none leading-none"
            aria-hidden
          >
            &ldquo;
          </div>

          <div
            className="relative rounded-2xl p-8 md:p-12 border gold-glow"
            style={{
              background:
                "linear-gradient(135deg, rgba(13,17,23,0.95) 0%, rgba(17,24,39,0.95) 100%)",
              borderColor: "rgba(201,168,76,0.2)",
            }}
          >
            {/* Top decorative line */}
            <div className="gold-divider w-20 mb-8" />

            <div className="space-y-6 font-playfair italic text-parchment-muted text-lg md:text-xl leading-relaxed">
              <p>Tonight, you hold something I built just for you.</p>

              <p>
                Not a card. Not flowers. Something far more powerful — a guide
                to one of the most important technologies of our time, written
                by someone who&apos;s spent years living inside it, shaped
                specifically for you.
              </p>

              <p>
                AI is not the future. It&apos;s the present. And the people who
                understand it — who move from using it to truly mastering it —
                will have an advantage that compounds every single day.
              </p>

              <p className="text-parchment font-normal not-italic">
                I wanted to give you that advantage.
              </p>

              <p>
                This is your AI Bible. Take your time with it. Come back to it.
                Let it change how you work and how you think.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-10 pt-8 border-t border-gold-dim border-opacity-30">
              <p className="font-playfair italic text-parchment-muted text-base">
                Happy birthday, Lizzie.
              </p>
              <p className="font-playfair text-gold-primary text-xl mt-2">
                With love, <span className="font-bold">[YOUR NAME]</span>
              </p>
              <p className="font-cinzel text-gold-dim text-xs tracking-widest mt-1 opacity-50">
                ← Replace with your name before showing Lizzie
              </p>
            </div>

            {/* Bottom decorative line */}
            <div className="gold-divider w-20 mt-8 ml-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
