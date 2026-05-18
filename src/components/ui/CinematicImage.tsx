import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CinematicImageProps {
  src: string;
  alt?: string;
  height?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CinematicImage: React.FC<CinematicImageProps> = ({
  src,
  alt = 'Cinematic Fitness Image',
  height = '500px',
  className = '',
  style
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    // Premium Dolly Zoom & Vertical Parallax scroll bind
    const anim = gsap.fromTo(
      image,
      {
        scale: 1.25,
        yPercent: -8
      },
      {
        scale: 1.05,
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom', // Animates starting from when the container enters viewport
          end: 'bottom top',   // Ends animating when the container leaves viewport
          scrub: 0.5,          // Adding a 0.5s dampener (lerp) makes it feel incredibly premium & smooth!
        }
      }
    );

    return () => {
      if (anim.scrollTrigger) anim.scrollTrigger.kill();
      anim.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width: '100%',
        height: height,
        overflow: 'hidden',
        position: 'relative',
        borderRadius: 'var(--radius-sm)',
        boxShadow: '0 25px 60px rgba(0,0,0,0.1)',
        ...style
      }}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '116%', // Extra height to support smooth parallax translation inside bounds
          objectFit: 'cover',
          willChange: 'transform',
        }}
      />
      {/* Elegant Cinematic Vignette Shadow Overlay */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)',
          pointerEvents: 'none'
        }} 
      />
    </div>
  );
};

export default CinematicImage;
