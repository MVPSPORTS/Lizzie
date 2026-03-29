import { HeroSection } from "@/components/birthday/HeroSection";
import { PhotoGrid } from "@/components/birthday/PhotoGrid";
import { PersonalMessage } from "@/components/birthday/PersonalMessage";
import { JourneyButton } from "@/components/birthday/JourneyButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <HeroSection />
      <PhotoGrid />
      <PersonalMessage />
      <JourneyButton />
    </main>
  );
}
