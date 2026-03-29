"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Camera } from "lucide-react";

interface PhotoGridProps {
  images?: string[];
}

const SLOTS = [0, 1, 2, 3, 4, 5];

export function PhotoGrid({ images = [] }: PhotoGridProps) {
  return (
    <section className="py-24 px-6 bg-bg-secondary">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-cinzel text-gold-primary text-xs tracking-[0.4em] uppercase mb-4 opacity-70">
            Our Story
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl text-parchment">
            Here&apos;s to Us
          </h2>
          <div className="gold-divider w-32 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {SLOTS.map((i) => (
            <motion.div
              key={i}
              className="relative aspect-square rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
            >
              {images[i] ? (
                <Image
                  src={images[i]}
                  alt={`Memory ${i + 1}`}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full shimmer flex flex-col items-center justify-center gap-3 border border-dashed border-gold-dim rounded-lg">
                  <Camera
                    size={28}
                    className="text-gold-dim opacity-60"
                    strokeWidth={1.5}
                  />
                  <span className="font-cinzel text-gold-dim text-xs tracking-widest opacity-50">
                    PHOTO {i + 1}
                  </span>
                </div>
              )}

              {/* Gold corner accents */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-gold-primary opacity-40 pointer-events-none rounded-tl" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-gold-primary opacity-40 pointer-events-none rounded-tr" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-gold-primary opacity-40 pointer-events-none rounded-bl" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-gold-primary opacity-40 pointer-events-none rounded-br" />
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-parchment-muted text-sm font-cinzel tracking-wider mt-8 opacity-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
        >
          Drop personal photos into{" "}
          <code className="font-mono text-gold-dim">public/images/</code> to
          fill these in
        </motion.p>
      </div>
    </section>
  );
}
