import { HeroSection } from "@/components/birthday/HeroSection";
import { WhatAIBuilt } from "@/components/birthday/WhatAIBuilt";
import { PersonalMessage } from "@/components/birthday/PersonalMessage";
import { JourneyButton } from "@/components/birthday/JourneyButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <HeroSection />
      <WhatAIBuilt />
      <PersonalMessage />
      <JourneyButton />
    </main>
  );
}
