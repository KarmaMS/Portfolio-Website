import { ArrowDown } from "lucide-react";
import ProfileCard from "./ProfileCard";
import avatar from "../assets/smol.png";
import ShinyText from "../components/ui/ShinyText";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      <div className="hero-backdrop" aria-hidden="true" />

      <div className="container max-w-4xl mx-auto text-center z-10 flex flex-col items-center justify-center space-y-10">
        <div className="space-y-6 mt-32">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-snug">
            <span className="hero-title text-glow">Hi, I&apos;m Maaz</span>
          </h1>

          <p className="text-md md:text-lg max-w-2xl mx-auto">
            <ShinyText 
              text="Software, Security & Systems." 
              speed={3}
              disabled={false} 
              className="text-muted-foreground"
            />
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4 -mt-3 mb-1">
            <a href="#projects" className="cosmic-button animate-float">
              View My Work
            </a>
          </div>
        </div>

        {/* Profile Card below text */}
        <div className="flex justify-center scale-90 -mt-10">
          <ProfileCard
            name="Maaz Shahid"
            title="Cyber Security & SWE"
            handle=""
            status="Online"
            contactText="Contact Me"
            avatarUrl={avatar}
            showUserInfo={false}
            enableTilt={false}
            enableMobileTilt={false}
            onContactClick={() => {}}
          />
        </div>
      </div>
    </section>
  );
};
