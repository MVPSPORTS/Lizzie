import { ToolReference } from "@/data/commandments";

interface ToolPillProps {
  tool: ToolReference;
}

export function ToolPill({ tool }: ToolPillProps) {
  return (
    <div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono border"
      style={{
        background: `${tool.color}12`,
        borderColor: `${tool.color}35`,
        color: tool.color,
      }}
      title={tool.description}
    >
      <div
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ background: tool.color }}
      />
      <span className="tracking-wider">{tool.name}</span>
    </div>
  );
}
