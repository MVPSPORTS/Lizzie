import { HeroSection } from "@/components/birthday/HeroSection";
import { PhotoGrid } from "@/components/birthday/PhotoGrid";
import { PersonalMessage } from "@/components/birthday/PersonalMessage";
import { JourneyButton } from "@/components/birthday/JourneyButton";

const PHOTOS = [
  "/images/photo-1.jpg", // Paris night
  "/images/photo-2.jpg", // Engagement, Lisbon
  "/images/photo-3.jpg", // Summer selfie
  "/images/photo-4.jpg", // Sailboat
  "/images/photo-5.jpg", // Beach sunset
];

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <HeroSection />
      <PhotoGrid images={PHOTOS} />
      <PersonalMessage />
      <JourneyButton />
    </main>
  );
}
