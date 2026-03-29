"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Cpu,
  Mic,
  Sparkles,
  Map,
  FolderOpen,
  Users,
  Zap,
  Wand2,
  Code2,
  Clock,
} from "lucide-react";
import { Commandment } from "@/data/commandments";
import { RomanNumeral } from "./RomanNumeral";
import { ToolPill } from "./ToolPill";
import { ContentBlock } from "./ContentBlock";
import { NavArrows } from "./NavArrows";

const iconMap: Record<string, React.ElementType> = {
  layers: Layers,
  cpu: Cpu,
  mic: Mic,
  sparkles: Sparkles,
  map: Map,
  "folder-open": FolderOpen,
  users: Users,
  zap: Zap,
  "wand-2": Wand2,
  "code-2": Code2,
};

const levelColors: Record<number, string> = {
  2: "#20B2AA",
  3: "#C9A84C",
  4: "#E5C97E",
};

const levelLabels: Record<number, string> = {
  2: "Level 2 — Curious Builder",
  3: "Level 3 — Efficiency Driver",
  4: "Level 4 — Creator",
};

interface CommandmentLayoutProps {
  commandment: Commandment;
}

export function CommandmentLayout({ commandment }: CommandmentLayoutProps) {
  const Icon = iconMap[commandment.iconName] ?? Layers;
  const levelColor = levelColors[commandment.level];

  return (
    <article className="min-h-screen pb-32 lg:pb-16">
      {/* Top progress strip */}
      <div
        className="sticky top-0 z-40 flex items-center justify-between px-6 py-3 border-b"
        style={{
          background: "rgba(8,11,20,0.92)",
          borderColor: "rgba(201,168,76,0.1)",
          backdropFilter: "blur(12px)",
        }}
      >
        <span className="font-cinzel text-gold-dim text-xs tracking-widest opacity-50">
          THE AI BIBLE
        </span>
        <div className="flex items-center gap-3">
          <span
            className="font-mono text-xs px-2 py-0.5 rounded-full border"
            style={{
              color: levelColor,
              borderColor: `${levelColor}40`,
              background: `${levelColor}10`,
            }}
          >
            {levelLabels[commandment.level]}
          </span>
          <span className="font-cinzel text-gold-primary text-xs">
            {commandment.number}/10
          </span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pt-8">
        {/* Roman numeral hero */}
        <RomanNumeral numeral={commandment.romanNumeral} />

        {/* Title block */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div
              className="p-4 rounded-2xl border"
              style={{
                background: "rgba(201,168,76,0.06)",
                borderColor: "rgba(201,168,76,0.2)",
              }}
            >
              <Icon size={36} strokeWidth={1.5} className="text-gold-primary" />
            </div>
          </div>

          <h1 className="font-cinzel text-3xl md:text-5xl text-parchment font-bold tracking-wide mb-4">
            {commandment.title}
          </h1>

          <p className="font-playfair italic text-parchment-muted text-lg md:text-xl">
            {commandment.subtitle}
          </p>

          <div className="gold-divider w-24 mx-auto mt-8" />
        </motion.div>

        {/* Tool pills */}
        {commandment.tools.length > 0 && (
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {commandment.tools.map((tool) => (
              <ToolPill key={tool.name} tool={tool} />
            ))}
          </motion.div>
        )}

        {/* Content */}
        {commandment.status === "complete" ? (
          <ContentBlock sections={commandment.sections} />
        ) : (
          <PlaceholderContent />
        )}

        {/* Navigation */}
        <NavArrows current={commandment.number} />
      </div>
    </article>
  );
}

function PlaceholderContent() {
  return (
    <motion.div
      className="rounded-2xl p-12 text-center border"
      style={{
        background:
          "linear-gradient(135deg, rgba(13,17,23,0.8) 0%, rgba(17,24,39,0.6) 100%)",
        borderColor: "rgba(201,168,76,0.12)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="inline-block mb-6"
      >
        <Clock size={40} className="text-gold-dim" strokeWidth={1} />
      </motion.div>
      <h3 className="font-cinzel text-gold-primary text-lg tracking-wider mb-4">
        Being Written
      </h3>
      <p className="font-playfair italic text-parchment-muted text-lg leading-relaxed max-w-md mx-auto">
        This commandment is being crafted. Its wisdom will be revealed soon.
      </p>
      <div className="gold-divider w-16 mx-auto mt-8" />
    </motion.div>
  );
}
