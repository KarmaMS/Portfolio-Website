import { ArrowDownRight } from "lucide-react";
import { ProfileCard } from "./ProfileCard";

export const AboutHero = () => (
  <section className="personal-hero section-pad" id="top">
    <div className="wrap personal-hero-grid">
      <div className="personal-hero-copy">
        <p className="eyebrow">Hello again, It’s Maazy</p>
        <h1>
          <span className="maazy-main">A curious guy who loves to explore everything.</span>
          <span className="maazy-closer">Doesn’t like to give up easily.</span>
        </h1>
        <p>
          I travel, photograph, sketch, overthink, retry, and keep going. This page is the camera roll and notebook behind the résumé, the side of me that notices strange details and follows ideas until they become something real.
        </p>
        <a className="text-link" href="#travel">Open the camera roll <ArrowDownRight size={17} /></a>
      </div>

      <div className="personal-photo-stage" aria-label="Maaz, then and now">
        <ProfileCard
          className="personal-profile-card"
          kicker="Discovery · Ambition"
          name="Maazy"
          status=""
          title=""
          imageSrc="/maaz-young.webp"
          imageAlt="Maaz as a curious child"
          showAction={false}
          priority={false}
        />
      </div>
    </div>
  </section>
);
