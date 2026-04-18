import { Suspense, lazy } from "react";

const CircularGallery = lazy(() => import("../components/ui/CircularGallery"));


export const TravelGallery = () => {
  return (
    <section
      id="travel-gallery"
      className="py-24 px-4 relative overflow-hidden"
      style={{ minHeight: "80vh" }}
    >
      <div className="relative z-10 text-center">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A <span className="text-glow">Journey</span> Through My Adventures
          </h2>

          <h3 className="text-muted-foreground mb-12">
            Exploring and capturing places, and moments that rejuvenate me &lt;3
          </h3>
        </div>

        <div
          style={{
            height: "400px",
            position: "relative",
            width: "100vw",
          }}
        >
          <Suspense fallback={<div className="section-shell h-full w-full" aria-hidden="true" />}>
            <CircularGallery
              bend={3}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollEase={0.02}
            />
          </Suspense>
        </div>
      </div>
    </section>
  );
};
