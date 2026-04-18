import { useEffect, useRef, useState } from "react";

export default function DeferredSection({
  children,
  className = "",
  fallback = null,
  minHeight,
  rootMargin = "200px",
}) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || isVisible) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return (
    <section
      ref={containerRef}
      className={className}
      style={minHeight ? { minHeight } : undefined}
    >
      {isVisible ? children : fallback}
    </section>
  );
}
