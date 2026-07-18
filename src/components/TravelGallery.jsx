const photos = [
  ["/travel/IMG_7031.webp", "Mountain landscape captured during a trip"],
  ["/travel/IMG_6705.webp", "Travel photograph by Maaz Shahid"],
  ["/travel/IMG_6828.webp", "Outdoor landscape photographed by Maaz Shahid"],
  ["/travel/IMG_4488.webp", "Architectural travel photograph"],
  ["/travel/IMG_9977.webp", "A quiet moment from Maaz’s travels"],
  ["/travel/IMG_6769.webp", "Scenic travel photograph"],
];

export const TravelGallery = () => (
  <section className="gallery-section section-pad" id="travel">
    <div className="wrap section-heading">
      <p className="eyebrow">Field notes</p>
      <h2>Places that reset my perspective.</h2>
      <p>A small, deliberately edited selection because a good gallery should leave room to look.</p>
    </div>
    <div className="photo-grid wrap">
      {photos.map(([src, alt], index) => (
        <figure key={src} className={index === 0 || index === 3 ? "photo-wide" : ""}>
          <img src={src} alt={alt} loading="lazy" decoding="async" />
        </figure>
      ))}
    </div>
  </section>
);
