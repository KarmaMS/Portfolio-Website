import DeferredSection from "../components/DeferredSection";
import { ThemeToggle } from "../components/ThemeToggle"
import { CustomBackground } from "../components/CustomBackground"
import { NavBar } from "../components/NavBar"
import { HeroSection } from "../components/HeroSection"
import { About } from "../components/About"
import { Projects } from "../components/Projects"
import { Contact } from "../components/Contact"
import { Footer }  from "../components/Footer"
import { TechStack } from "../components/TechStack"


export const Home = () => {
    const sectionPlaceholder = <div className="section-shell" aria-hidden="true" />;

    return <div className="min-h-screen 
    bg-background
    text-foreground overflow-x-hidden"> 

        <NavBar />

        <CustomBackground />

        <ThemeToggle />
        
        <main>
            <HeroSection />
            <About />
            <DeferredSection minHeight="40vh" fallback={sectionPlaceholder}>
                <TechStack />
            </DeferredSection>
            <DeferredSection minHeight="55vh" fallback={sectionPlaceholder}>
                <Projects />
            </DeferredSection>
            <DeferredSection minHeight="45vh" fallback={sectionPlaceholder}>
                <Contact />
            </DeferredSection>
        </main>

        <Footer />

    </div>
}
