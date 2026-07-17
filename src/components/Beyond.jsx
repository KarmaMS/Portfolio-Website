import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Beyond = () => (
  <section className="beyond-section section-pad" aria-labelledby="beyond-title">
    <div className="wrap">
      <Link className="beyond-card" to="/additional-info">
        <div className="beyond-orbit" aria-hidden="true" />
        <p className="eyebrow">Beyond the résumé</p>
        <h2 id="beyond-title">There’s more to Maaz than cloud controls.</h2>
        <p>Travel photographs, childhood curiosity, design experiments, and the ideas I refuse to leave half-finished.</p>
        <span className="beyond-action">Meet Maazy <ArrowUpRight size={24} /></span>
      </Link>
    </div>
  </section>
);
