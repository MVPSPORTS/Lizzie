"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { commandments } from "@/data/commandments";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function BottomBar() {
  const pathname = usePathname();
  const router = useRouter();
  const current = parseInt(pathname.split("/").pop() ?? "0", 10);
  const prev = commandments.find((c) => c.number === current - 1);
  const next = commandments.find((c) => c.number === current + 1);

  return (
    <motion.div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 border-t"
      style={{
        background: "rgba(8,11,20,0.97)",
        borderColor: "rgba(201,168,76,0.15)",
        backdropFilter: "blur(12px)",
      }}
      initial={{ y: 60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center justify-between px-4 py-3">
        {/* Prev */}
        <button
          onClick={() => prev && router.push(`/commandments/${prev.number}`)}
          className="flex items-center gap-2 group"
          disabled={!prev}
          style={{ opacity: prev ? 1 : 0.2 }}
        >
          <ChevronLeft
            size={18}
            className="text-gold-dim group-hover:text-gold-primary transition-colors"
          />
          <span className="font-cinzel text-gold-dim text-xs hidden sm:block group-hover:text-gold-primary transition-colors truncate max-w-24">
            {prev?.title ?? ""}
          </span>
        </button>

        {/* Current indicator */}
        <div className="flex flex-col items-center gap-1.5">
          <div className="flex gap-1">
            {commandments.map((c) => (
              <Link key={c.number} href={`/commandments/${c.number}`}>
                <div
                  className="rounded-full transition-all"
                  style={{
                    width: c.number === current ? 16 : 4,
                    height: 4,
                    background:
                      c.number === current
                        ? "#C9A84C"
                        : c.number < current
                        ? "#8B7035"
                        : "rgba(139,112,53,0.25)",
                  }}
                />
              </Link>
            ))}
          </div>
          <span className="font-cinzel text-gold-primary text-xs">
            {current}/10
          </span>
        </div>

        {/* Next */}
        <button
          onClick={() => next && router.push(`/commandments/${next.number}`)}
          className="flex items-center gap-2 group"
          disabled={!next}
          style={{ opacity: next ? 1 : 0.2 }}
        >
          <span className="font-cinzel text-gold-dim text-xs hidden sm:block group-hover:text-gold-primary transition-colors truncate max-w-24">
            {next?.title ?? ""}
          </span>
          <ChevronRight
            size={18}
            className="text-gold-dim group-hover:text-gold-primary transition-colors"
          />
        </button>
      </div>
    </motion.div>
  );
}
