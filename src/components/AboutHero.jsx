import { ArrowDownRight } from "lucide-react";

export const AboutHero = () => (
  <section className="personal-hero section-pad" id="top">
    <div className="wrap personal-hero-grid">
      <div>
        <p className="eyebrow">Beyond the résumé</p>
        <h1>Curiosity is the thread running through everything I make.</h1>
        <p>
          Away from cloud consoles and code, I travel, photograph, illustrate, and collect visual ideas.
          This is the less formal side of the same practice: noticing details and making sense of them.
        </p>
        <a className="text-link" href="#travel">Take a look <ArrowDownRight size={17} /></a>
      </div>
      <img src="/maaz-portrait.webp" alt="Maaz Shahid" width="720" height="900" />
    </div>
  </section>
);
