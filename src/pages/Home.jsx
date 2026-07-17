import { About } from "../components/About";
import { Beyond } from "../components/Beyond";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { NavBar } from "../components/NavBar";
import { Projects } from "../components/Projects";
import { TechStack } from "../components/TechStack";

export const Home = () => (
  <div className="site-shell">
    <NavBar />
    <main>
      <HeroSection />
      <About />
      <Projects />
      <TechStack />
      <Beyond />
      <Contact />
    </main>
    <Footer />
  </div>
);
