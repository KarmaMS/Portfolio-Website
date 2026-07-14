import { AboutHero } from "../components/AboutHero";
import { AboutNav } from "../components/AboutNav";
import { CreativeSpace } from "../components/CreativeSpace";
import { Footer } from "../components/Footer";
import { TravelGallery } from "../components/TravelGallery";

export const About = () => (
  <div className="site-shell personal-page">
    <AboutNav />
    <main>
      <AboutHero />
      <TravelGallery />
      <CreativeSpace />
    </main>
    <Footer />
  </div>
);
