"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { commandments } from "@/data/commandments";
import { CheckCircle2, Home } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();
  const current = parseInt(pathname.split("/").pop() ?? "0", 10);

  return (
    <motion.aside
      className="hidden lg:flex flex-col fixed top-0 left-0 h-screen w-64 z-50 border-r"
      style={{
        background: "rgba(8,11,20,0.97)",
        borderColor: "rgba(201,168,76,0.15)",
        backdropFilter: "blur(12px)",
      }}
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Wordmark */}
      <div className="px-6 pt-8 pb-6 border-b" style={{ borderColor: "rgba(201,168,76,0.1)" }}>
        <Link href="/">
          <div className="group flex items-center gap-2 mb-1">
            <Home size={12} className="text-gold-dim group-hover:text-gold-primary transition-colors" />
            <span className="font-cinzel text-gold-dim text-xs tracking-widest group-hover:text-gold-primary transition-colors">
              HOME
            </span>
          </div>
        </Link>
        <p className="font-cinzel text-gold-primary text-sm tracking-wider mt-3 leading-snug">
          Lizzie&apos;s
        </p>
        <p className="font-cinzel text-parchment-muted text-xs tracking-[0.3em] opacity-60">
          AI BIBLE
        </p>
      </div>

      {/* Progress label */}
      <div className="px-6 pt-5 pb-3">
        <span className="font-cinzel text-gold-dim text-xs tracking-widest opacity-50">
          THE TEN COMMANDMENTS
        </span>
      </div>

      {/* Commandment list */}
      <nav className="flex-1 overflow-y-auto px-3 pb-6 space-y-1">
        {commandments.map((c) => {
          const isActive = c.number === current;
          const isPast = c.number < current;

          return (
            <Link key={c.number} href={`/commandments/${c.number}`}>
              <motion.div
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors"
                style={{
                  background: isActive ? "rgba(201,168,76,0.12)" : "transparent",
                  borderLeft: isActive ? "2px solid #C9A84C" : "2px solid transparent",
                }}
                whileHover={{ backgroundColor: "rgba(201,168,76,0.07)" }}
              >
                {/* Roman numeral / check */}
                <div className="w-7 flex-shrink-0 text-center">
                  {isPast ? (
                    <CheckCircle2
                      size={14}
                      className="text-gold-dim mx-auto"
                      strokeWidth={1.5}
                    />
                  ) : (
                    <span
                      className="font-cinzel text-xs"
                      style={{
                        color: isActive ? "#C9A84C" : "rgba(139,112,53,0.5)",
                      }}
                    >
                      {c.romanNumeral}
                    </span>
                  )}
                </div>

                {/* Title */}
                <div className="flex-1 min-w-0">
                  <p
                    className="font-cinzel text-xs tracking-wide truncate leading-snug"
                    style={{
                      color: isActive
                        ? "#F5F0E8"
                        : isPast
                        ? "#8B7035"
                        : "rgba(168,159,140,0.4)",
                    }}
                  >
                    {c.title}
                  </p>
                </div>

                {/* Level badge */}
                <span
                  className="font-mono text-xs flex-shrink-0 opacity-40"
                  style={{
                    color: isActive ? "#C9A84C" : "#8B7035",
                  }}
                >
                  L{c.level}
                </span>
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* Bottom progress */}
      <div className="px-6 pb-6 pt-4 border-t" style={{ borderColor: "rgba(201,168,76,0.1)" }}>
        <div className="flex justify-between mb-2">
          <span className="font-cinzel text-gold-dim text-xs opacity-50">Progress</span>
          <span className="font-cinzel text-gold-primary text-xs">
            {current}/10
          </span>
        </div>
        <div className="w-full h-0.5 bg-bg-stone rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: "linear-gradient(to right, #8B7035, #C9A84C)" }}
            initial={{ width: 0 }}
            animate={{ width: `${(current / 10) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </motion.aside>
  );
}
