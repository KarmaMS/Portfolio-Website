import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { ProfileCard } from "./ProfileCard";

const highlights = [
  ["80+", "RQL policies engineered"],
  ["40%", "faster policy development"],
  ["30%", "better audit closure"],
];

export const HeroSection = () => (
  <section className="hero section-pad" id="top">
    <div className="hero-grid wrap">
      <div className="hero-copy">
        <p className="eyebrow"><span /> Lahore, Pakistan · Open to ambitious work</p>
        <h1>
          <span>Hi, I’m Maaz.</span>
          I make security <em>make sense.</em>
        </h1>
        <p className="hero-intro">
          Cloud policies, product code, and the messy systems between them—built carefully, explained clearly, and made useful.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            See what I’ve built <ArrowDownRight size={18} />
          </a>
          <a className="text-link" href="mailto:27100445@lums.edu.pk">
            Say hello <ArrowUpRight size={17} />
          </a>
        </div>
      </div>

      <ProfileCard />
    </div>

    <div className="hero-proof wrap" aria-label="Selected impact">
      {highlights.map(([number, label]) => (
        <div className="proof-item" key={label}>
          <strong>{number}</strong>
          <span>{label}</span>
        </div>
      ))}
      <p>Cloud security · Technical consulting · Applied research · Product engineering</p>
    </div>
  </section>
);
