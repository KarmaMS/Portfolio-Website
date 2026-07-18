import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { MagneticLink } from "./MagneticLink";
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
        <p className="eyebrow"><span /> Lahore, Pakistan · Security · Software</p>
        <h1>
          <span>Hi, I’m Maaz.</span>
          I make security <strong>make sense.</strong>
        </h1>
        <p className="hero-intro">
          Cloud policies, product code, and the messy systems between them, built carefully, explained clearly, and made useful.
        </p>
        <div className="hero-actions">
          <MagneticLink className="button button-primary" href="#projects">
            See what I’ve built <ArrowDownRight size={18} />
          </MagneticLink>
          <a className="text-link" href="mailto:maazshahid1@outlook.com" aria-label="Email Maaz Shahid at maazshahid1@outlook.com">
            Say hello at maazshahid1@outlook.com <ArrowUpRight size={17} />
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
