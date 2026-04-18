import { ArrowDown } from "lucide-react";
import ProfileCard from "./PictureCard";
import avatar from "../assets/smol.png";
import ShinyText from "../components/ui/ShinyText";

export const AboutHero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      <div className="hero-backdrop" aria-hidden="true" />

      <div className="container max-w-4xl mx-auto text-center z-10 flex flex-col items-center justify-center space-y-10">
        <div className="space-y-6 mt-32">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-snug">
            <span className="hero-title text-glow">Hi, Again!</span>
          </h1>

          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            <ShinyText 
                text="Let's do this a little differently" 
                speed={3}
                disabled={false} 
                className="font-medium"
            />
            </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4 -mt-3 mb-1">
            <a href="#travel-gallery" className="cosmic-button animate-float">
              A sneak peek into my life
            </a>
          </div>
        </div>

        {/* Profile Card below text */}
        <div className="flex flex-col items-center justify-center scale-90 -mt-10 space-y-10">
          <ProfileCard
            name="Maaz Shahid"
            title="Curiosity & Discovery"
            handle=""
            status="Online"
            contactText="Contact Me"
            avatarUrl={avatar}
            showUserInfo={false}
            enableTilt={false}
            enableMobileTilt={false}
            onContactClick={() => {}}
          />

          <a href="#travel-gallery" className="animate-bounce mt-6">
            <ArrowDown className="h-8 w-8 text-primary opacity-80 hover:opacity-100 transition" />
          </a>
        </div>
      </div>
    </section>
  );
};
