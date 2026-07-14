import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { ProfileCard } from "./ProfileCard";

const highlights = [
  ["80+", "cloud policies engineered"],
  ["497", "agent-authored PRs studied"],
  ["5", "SaaS vendors audited"],
];

export const HeroSection = () => (
  <section className="hero section-pad" id="top">
    <div className="hero-grid wrap">
      <div className="hero-copy">
        <p className="eyebrow"><span /> Lahore, Pakistan · Available for ambitious work</p>
        <h1>I build at the edge of <em>security</em>, software, and systems.</h1>
        <p className="hero-intro">
          I’m Maaz Shahid—a computer science student and technical consultant turning complex cloud,
          security, and product problems into useful, well-documented systems.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore selected work <ArrowDownRight size={18} />
          </a>
          <a className="text-link" href="mailto:27100445@lums.edu.pk">
            Start a conversation <ArrowUpRight size={17} />
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
