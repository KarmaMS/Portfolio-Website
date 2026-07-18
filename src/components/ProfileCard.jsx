import { ArrowUpRight } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";

export const ProfileCard = ({
  className = "",
  kicker = "Security · Software · Systems",
  status = "Selected work and experiments",
  title = "Cyber Security & SWE",
  priority = true,
}) => {
  const cardRef = useRef(null);
  const frameRef = useRef(null);

  const handlePointerMove = useCallback((event) => {
    if (event.pointerType === "touch") return;

    const card = cardRef.current;
    if (!card) return;

    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      card.style.setProperty("--card-tilt-x", `${(0.5 - y) * 5}deg`);
      card.style.setProperty("--card-tilt-y", `${(x - 0.5) * 6}deg`);
      card.style.setProperty("--card-shine-x", `${x * 100}%`);
      card.style.setProperty("--card-shine-y", `${y * 100}%`);
    });
  }, []);

  const resetTilt = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--card-tilt-x", "1deg");
    card.style.setProperty("--card-tilt-y", "-2deg");
    card.style.setProperty("--card-shine-x", "22%");
    card.style.setProperty("--card-shine-y", "12%");
  }, []);

  useEffect(() => () => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <article
      ref={cardRef}
      className={`profile-card ${className}`.trim()}
      aria-label="Maaz Shahid profile card"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
    >
      <p className="profile-card-kicker">{kicker}</p>
      <img
        className="profile-card-photo"
        src="/maaz-portrait.webp"
        alt="Maaz Shahid"
        width="720"
        height="900"
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
      <div className="profile-card-panel">
        <div>
          <span className="profile-card-status"><i /> {status}</span>
          <h2>Maaz Shahid</h2>
          <p>{title}</p>
        </div>
        <a href="mailto:27100445@lums.edu.pk" aria-label="Email Maaz Shahid">
          <ArrowUpRight size={19} />
        </a>
      </div>
    </article>
  );
};
