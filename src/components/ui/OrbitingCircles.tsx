import React from 'react';

export interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
  style?: React.CSSProperties;
}

export const OrbitingCircles: React.FC<OrbitingCirclesProps> = ({
  className = '',
  children,
  reverse = false,
  duration = 20,
  delay = 0,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  style
}) => {
  const childrenArray = React.Children.toArray(children);
  const totalChildren = childrenArray.length;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        ...style
      }}
      className={className}
    >
      {/* Self-contained CSS Orbit Animation Keyframes */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg);
          }
        }
      `}} />

      {/* Orbit Path SVG */}
      {path && (
        <svg
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            pointerEvents: 'none'
          }}
        >
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            stroke="rgba(212, 175, 55, 0.12)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </svg>
      )}

      {/* Orbiting Elements */}
      {childrenArray.map((child, index) => {
        // Calculate equal negative delay spacing so they start perfectly distributed instantly
        const childDuration = duration / speed;
        const childDelay = -((childDuration / totalChildren) * index + delay);

        return (
          <div
            key={index}
            style={{
              position: 'absolute',
              width: `${iconSize}px`,
              height: `${iconSize}px`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animationName: 'orbit',
              animationDuration: `${childDuration}s`,
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
              animationDirection: reverse ? 'reverse' : 'normal',
              animationDelay: `${childDelay}s`,
              transformOrigin: 'center',
              pointerEvents: 'auto',
              // Dynamic CSS custom property for radius
              ['--radius' as any]: radius,
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};
