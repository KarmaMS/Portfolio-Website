import { ArrowUpRight } from "lucide-react";

export const ProfileCard = () => (
  <article className="profile-card" aria-label="Maaz Shahid profile card">
    <div className="profile-card-orbit profile-card-orbit-one" aria-hidden="true" />
    <div className="profile-card-orbit profile-card-orbit-two" aria-hidden="true" />
    <p className="profile-card-kicker">Security · Software · Systems</p>
    <img
      className="profile-card-photo"
      src="/maaz-portrait.webp"
      alt="Maaz Shahid"
      width="720"
      height="900"
      fetchPriority="high"
    />
    <div className="profile-card-panel">
      <div>
        <span className="profile-card-status"><i /> Available for ambitious work</span>
        <h2>Maaz Shahid</h2>
        <p>Cyber Security & SWE</p>
      </div>
      <a href="mailto:27100445@lums.edu.pk" aria-label="Email Maaz Shahid">
        <ArrowUpRight size={19} />
      </a>
    </div>
  </article>
);
