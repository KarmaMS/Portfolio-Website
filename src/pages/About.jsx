import DeferredSection from "../components/DeferredSection";
import { ThemeToggle } from "../components/ThemeToggle";
import { CustomBackground } from "../components/CustomBackground";
import { AboutNav } from "../components/AboutNav";
import { AboutHero } from "../components/AboutHero";
import { TravelGallery } from "../components/TravelGallery";
import { CreativeSpace } from "../components/CreativeSpace";
import { Footer } from "../components/Footer";

export const About = () => {
  const sectionPlaceholder = <div className="section-shell" aria-hidden="true" />;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AboutNav />
      <CustomBackground />
      <ThemeToggle />

      <main>
        <AboutHero />
        <DeferredSection minHeight="60vh" fallback={sectionPlaceholder}>
          <TravelGallery />
        </DeferredSection>
        <DeferredSection minHeight="45vh" fallback={sectionPlaceholder}>
          <CreativeSpace />
        </DeferredSection>
      </main>

      <Footer />
    </div>
  );
};
