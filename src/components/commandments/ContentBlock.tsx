import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ContentSection } from "@/data/commandments";

interface ContentBlockProps {
  sections: ContentSection[];
}

export function ContentBlock({ sections }: ContentBlockProps) {
  return (
    <div className="space-y-8">
      {sections.map((section, i) => (
        <ScrollReveal key={section.heading} delay={i * 0.1}>
          <div
            className="rounded-xl p-6 md:p-8 border relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(13,17,23,0.8) 0%, rgba(17,24,39,0.6) 100%)",
              borderColor: "rgba(201,168,76,0.12)",
            }}
          >
            {/* Section number */}
            <span
              className="absolute top-4 right-5 font-cinzel text-5xl font-black select-none"
              style={{ color: "rgba(201,168,76,0.05)" }}
              aria-hidden
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            <h3 className="font-cinzel text-gold-primary text-sm tracking-[0.2em] uppercase mb-4">
              {section.heading}
            </h3>

            <p className="text-parchment-muted leading-relaxed text-base md:text-lg">
              {section.body}
            </p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
