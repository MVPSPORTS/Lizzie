import { notFound } from "next/navigation";
import { commandments } from "@/data/commandments";
import { CommandmentLayout } from "@/components/commandments/CommandmentLayout";

interface PageProps {
  params: Promise<{ number: string }>;
}

export function generateStaticParams() {
  return commandments.map((c) => ({ number: String(c.number) }));
}

export async function generateMetadata({ params }: PageProps) {
  const { number: numStr } = await params;
  const num = parseInt(numStr, 10);
  const commandment = commandments.find((c) => c.number === num);
  if (!commandment) return { title: "Not Found" };

  return {
    title: `${commandment.romanNumeral}. ${commandment.title} — Lizzie's AI Bible`,
    description: commandment.subtitle,
  };
}

export default async function CommandmentPage({ params }: PageProps) {
  const { number: numStr } = await params;
  const num = parseInt(numStr, 10);
  const commandment = commandments.find((c) => c.number === num);

  if (!commandment) notFound();

  return <CommandmentLayout commandment={commandment} />;
}
