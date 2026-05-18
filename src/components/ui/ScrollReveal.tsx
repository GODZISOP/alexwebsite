import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'reveal-line';
  delay?: number;
  duration?: number;
  scrollStart?: string;
  style?: React.CSSProperties;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 0.8,
  scrollStart = 'top 85%',
  style,
  className = ''
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    let initialVars = {};
    let activeVars = {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration: duration,
      delay: delay,
      ease: 'power3.out',
      overwrite: 'auto',
      scrollTrigger: {
        trigger: el,
        start: scrollStart,
        toggleActions: 'play reset play reset', // Re-triggers the animation every time it enters the viewport!
      }
    };

    switch (animation) {
      case 'fade-up':
        initialVars = { opacity: 0, y: 40 };
        break;
      case 'fade-down':
        initialVars = { opacity: 0, y: -40 };
        break;
      case 'fade-left':
        initialVars = { opacity: 0, x: 40 };
        break;
      case 'fade-right':
        initialVars = { opacity: 0, x: -40 };
        break;
      case 'zoom-in':
        initialVars = { opacity: 0, scale: 0.95 };
        break;
      case 'reveal-line':
        initialVars = { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)', y: 30 };
        activeVars = {
          ...activeVars,
          clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
        };
        break;
    }

    const anim = gsap.fromTo(el, initialVars, activeVars);

    return () => {
      if (anim.scrollTrigger) anim.scrollTrigger.kill();
      anim.kill();
    };
  }, [animation, delay, duration, scrollStart]);

  return (
    <div ref={elementRef} style={{ ...style, willChange: 'transform, opacity' }} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
