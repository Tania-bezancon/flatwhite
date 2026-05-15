import { LanguageProvider } from "@/lib/lang";
import { AmbientBackground } from "@/components/AmbientBackground";
import { GlobalHeader } from "@/components/GlobalHeader";
import { StackedMenu } from "@/components/StackedMenu";
import { Pulse } from "@/components/Pulse";
import { Hero } from "@/components/sections/Hero";
import { TheMoment } from "@/components/sections/TheMoment";
import { ManifestoBreak } from "@/components/sections/ManifestoBreak";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Artifact } from "@/components/sections/Artifact";
import { MarketMirror } from "@/components/sections/MarketMirror";
import { TheFullCircle } from "@/components/sections/TheFullCircle";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="relative">
        <AmbientBackground />
        <GlobalHeader />
        <StackedMenu />
        <Pulse />
        <Hero />
        <TheMoment />
        <ManifestoBreak />
        <HowItWorks />
        <Artifact />
        <MarketMirror />
        <TheFullCircle />
        <FinalCTA />
      </main>
    </LanguageProvider>
  );
}
