const pieces = [
  ["/creative/Scinertia.webp", "Scinertia visual identity"],
  ["/creative/MathGauge.webp", "MathGauge interface artwork"],
  ["/creative/AILA.webp", "AILA logo design"],
  ["/creative/Flowchart.webp", "Illustrated flowchart"],
  ["/creative/Scifinity.webp", "Scifinity visual identity"],
  ["/creative/MistriConnect.webp", "MistriConnect identity mark"],
];

export const CreativeSpace = () => (
  <section className="creative-section section-pad" id="creative">
    <div className="wrap section-heading">
      <p className="eyebrow">Creative archive</p>
      <h2>Ideas, identities, and visual experiments.</h2>
      <p>Selected illustration and design work created across personal and collaborative projects.</p>
    </div>
    <div className="creative-grid wrap">
      {pieces.map(([src, alt]) => (
        <figure key={src}><img src={src} alt={alt} loading="lazy" decoding="async" /></figure>
      ))}
    </div>
  </section>
);
