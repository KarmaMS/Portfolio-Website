import { useEffect, useRef, useState } from "react";
import { motion as Motion, useMotionValue, useAnimation, useTransform } from "framer-motion"; 
import "./RollingGallery.css";

const IMGS = [
  "/creative/1.jpg",
  "/creative/2.png",
  "/creative/3.png",
  "/creative/4.png",
  "/creative/5.png",
  "/creative/AILA.png",
  "/creative/Birdy.png",
  "/creative/Flowchart.png",
  "/creative/Globe.png",
  "/creative/MathGauge.png",
  "/creative/Maths.png",
  "/creative/Me.jpg",
  "/creative/MistriConnect.png",
  "/creative/Scifinity.png",
  "/creative/Scinertia.png",
];

const RollingGallery = ({ autoplay = false, pauseOnHover = false, images = [] }) => {
  images = IMGS; 
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(window.innerWidth <= 640);

  // 🔹 Make gallery circle wider so images don't overlap
  const cylinderWidth = isScreenSizeSm ? 2200 : 3200;
  const faceCount = images.length;
  const faceWidth = 260; // fixed square width
  const dragFactor = 0.05;
  const radius = cylinderWidth / (2 * Math.PI); // larger radius = wider spread

  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const autoplayRef = useRef();

  const handleDrag = (_, info) => {
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    controls.start({
      rotateY: rotation.get() + info.velocity.x * dragFactor,
      transition: { type: "spring", stiffness: 60, damping: 20, mass: 0.1, ease: "easeOut" },
    });
  };

  const transform = useTransform(rotation, (value) => {
    return `rotate3d(0, 1, 0, ${value}deg)`;
  });

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        controls.start({
          rotateY: rotation.get() - (360 / faceCount),
          transition: { duration: 2, ease: "linear" },
        });
        rotation.set(rotation.get() - (360 / faceCount));
      }, 2500);

      return () => clearInterval(autoplayRef.current);
    }
  }, [autoplay, rotation, controls, faceCount]);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSizeSm(window.innerWidth <= 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      clearInterval(autoplayRef.current);
      controls.stop();
    }
  };

  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      controls.start({
        rotateY: rotation.get() - (360 / faceCount),
        transition: { duration: 2, ease: "linear" },
      });
      rotation.set(rotation.get() - (360 / faceCount));

      autoplayRef.current = setInterval(() => {
        controls.start({
          rotateY: rotation.get() - (360 / faceCount),
          transition: { duration: 2, ease: "linear" },
        });
        rotation.set(rotation.get() - (360 / faceCount));
      }, 2500);
    }
  };

  return (
    <div className="gallery-container">
      {/* gradients removed for clean edges */}
      <div className="gallery-content">
        <Motion.div
          drag="x"
          className="gallery-track"
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={controls}
        >
          {images.map((url, i) => (
            <div
              key={i}
              className="gallery-item"
              style={{
                width: `${faceWidth}px`,
                height: `${faceWidth}px`, // 🔹 make squares
                transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
                margin: "20 20px", // 🔹 gap between items
              }}
            >
              <img
                src={url}
                alt={`creative-${i}`}
                className="gallery-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </Motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
