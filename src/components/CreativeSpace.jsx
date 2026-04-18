import { Suspense, lazy } from "react";

const RollingGallery = lazy(() => import("../components/ui/RollingGallery"));


export const CreativeSpace = () => {
  return (
    <section
      id="creative-space"
      className="px-4 relative overflow-hidden"
      style={{ minHeight: "50vh" }}
    >

      <div className="relative z-10 text-center">
        <div className="container mx-auto max-w-8xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A <span className="text-glow">Glimpse</span> Into My Creative Side
        </h2>

        <h3 className="text-muted-foreground mb-12">
            Showcasing a collection of logos and illustrations I've crafted over the years as a personal passion :)
        </h3>
        </div>

        <Suspense fallback={<div className="section-shell h-[340px] w-full" aria-hidden="true" />}>
          <RollingGallery
            autoplay={true}
            pauseOnHover={true}
            autoplayInterval={4200}
            autoplayDuration={3.4}
          />
        </Suspense>

      </div>
    </section>
  );
};
