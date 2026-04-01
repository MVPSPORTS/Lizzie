"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const BURST_COLORS = [
  ["#FF6EB4", "#FF1493"], // hot pink
  ["#FFD700", "#FF8C00"], // gold/amber
  ["#00E5FF", "#0EA5E9"], // cyan
  ["#AAFF00", "#22C55E"], // lime/green
  ["#C084FC", "#8B5CF6"], // purple
  ["#FF7A00", "#FF4500"], // orange
  ["#FFFFFF", "#E5C97E"], // white/cream
  ["#FF3366", "#FF0040"], // red
  ["#FFF200", "#FFD700"], // yellow
  ["#00FFC8", "#06B6D4"], // teal
  ["#FF9F1C", "#E5C97E"], // warm orange
  ["#E879F9", "#C026D3"], // fuchsia
];

interface Particle {
  id: number;
  angle: number;
  dist: number;
  size: number;
  isLine: boolean;
}

interface Burst {
  id: number;
  x: number;
  y: number;
  delay: number;
  repeatDelay: number;
  color: string;
  glow: string;
  particles: Particle[];
}

function buildBursts(): Burst[] {
  return [
    { id: 0,  x: 12, y: 18, delay: 0.2, repeatDelay: 7.5 },
    { id: 1,  x: 80, y: 12, delay: 0.9, repeatDelay: 8.2 },
    { id: 2,  x: 50, y: 8,  delay: 1.6, repeatDelay: 7.0 },
    { id: 3,  x: 25, y: 40, delay: 2.4, repeatDelay: 8.8 },
    { id: 4,  x: 70, y: 35, delay: 0.5, repeatDelay: 7.3 },
    { id: 5,  x: 88, y: 55, delay: 1.3, repeatDelay: 9.0 },
    { id: 6,  x: 8,  y: 60, delay: 3.0, repeatDelay: 7.8 },
    { id: 7,  x: 55, y: 28, delay: 2.0, repeatDelay: 8.5 },
    { id: 8,  x: 35, y: 15, delay: 1.1, repeatDelay: 7.2 },
    { id: 9,  x: 92, y: 25, delay: 2.7, repeatDelay: 8.0 },
    { id: 10, x: 18, y: 70, delay: 0.7, repeatDelay: 9.2 },
    { id: 11, x: 65, y: 65, delay: 3.4, repeatDelay: 7.6 },
    { id: 12, x: 42, y: 52, delay: 1.8, repeatDelay: 8.3 },
    { id: 13, x: 78, y: 72, delay: 2.9, repeatDelay: 7.1 },
  ].map((b) => {
    const [color, glow] = BURST_COLORS[b.id % BURST_COLORS.length];
    const count = 22;
    return {
      ...b,
      color,
      glow,
      particles: Array.from({ length: count }, (_, j) => ({
        id: j,
        angle: (j / count) * Math.PI * 2 + (b.id * 0.3),
        dist: 45 + ((j * 7 + b.id * 13) % 60),
        size: 2 + (j % 3),
        isLine: j % 4 === 0,
      })),
    };
  });
}

export function Fireworks() {
  const [bursts, setBursts] = useState<Burst[]>([]);

  useEffect(() => {
    setBursts(buildBursts());
  }, []);

  if (bursts.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      {bursts.map((burst) => (
        <div
          key={burst.id}
          className="absolute"
          style={{ left: `${burst.x}%`, top: `${burst.y}%` }}
        >
          {/* Particles */}
          {burst.particles.map((p) => {
            const dx = Math.cos(p.angle) * p.dist;
            const dy = Math.sin(p.angle) * p.dist;

            return (
              <motion.div
                key={p.id}
                className="absolute rounded-full"
                style={{
                  width: p.isLine ? p.size * 0.6 : p.size,
                  height: p.isLine ? p.size * 3 : p.size,
                  backgroundColor: burst.color,
                  x: -(p.size / 2),
                  y: -(p.size / 2),
                  rotate: p.isLine ? (p.angle * 180) / Math.PI : 0,
                  filter: `blur(0px) drop-shadow(0 0 ${p.size}px ${burst.color})`,
                }}
                initial={{ x: -(p.size / 2), y: -(p.size / 2), opacity: 0, scale: 0 }}
                animate={{
                  x: [-(p.size / 2), dx * 0.3, dx + -(p.size / 2)],
                  y: [-(p.size / 2), dy * 0.3 - 8, dy + 12 + -(p.size / 2)],
                  opacity: [0, 1, 1, 0],
                  scale: [0, 1.2, 0.8, 0],
                }}
                transition={{
                  duration: 1.1,
                  delay: burst.delay,
                  ease: [0.1, 0.9, 0.7, 1.0],
                  times: [0, 0.15, 0.7, 1],
                  repeat: Infinity,
                  repeatDelay: burst.repeatDelay,
                }}
              />
            );
          })}

          {/* Central flash */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 16,
              height: 16,
              x: -8,
              y: -8,
              backgroundColor: burst.color,
              filter: `blur(2px) drop-shadow(0 0 12px ${burst.glow})`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 2.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 0.5,
              delay: burst.delay,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: burst.repeatDelay,
            }}
          />

          {/* Outer ring pulse */}
          <motion.div
            className="absolute rounded-full border"
            style={{
              width: 6,
              height: 6,
              x: -3,
              y: -3,
              borderColor: burst.color,
              filter: `drop-shadow(0 0 6px ${burst.color})`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 8, 14],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 0.8,
              delay: burst.delay + 0.05,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: burst.repeatDelay,
            }}
          />
        </div>
      ))}
    </div>
  );
}
