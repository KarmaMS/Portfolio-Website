import { useCallback, useEffect, useRef } from "react";

export const MagneticLink = ({ children, className = "", ...props }) => {
  const linkRef = useRef(null);
  const frameRef = useRef(null);

  const resetPosition = useCallback(() => {
    const link = linkRef.current;
    if (!link) return;

    link.style.setProperty("--magnet-x", "0px");
    link.style.setProperty("--magnet-y", "0px");
  }, []);

  const handlePointerMove = useCallback((event) => {
    if (event.pointerType === "touch") return;

    const link = linkRef.current;
    if (!link) return;

    const bounds = link.getBoundingClientRect();
    const offsetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 8;
    const offsetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 8;

    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      link.style.setProperty("--magnet-x", `${offsetX}px`);
      link.style.setProperty("--magnet-y", `${offsetY}px`);
    });
  }, []);

  useEffect(() => () => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <a
      ref={linkRef}
      className={`magnetic-link ${className}`.trim()}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPosition}
      {...props}
    >
      {children}
    </a>
  );
};
