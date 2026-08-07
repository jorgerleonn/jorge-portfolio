'use client';

import { useEffect, useRef } from 'react';

interface GridBackgroundProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function GridBackground({ className = '', style }: GridBackgroundProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        rafRef.current = requestAnimationFrame(() => {
          if (svgRef.current) {
            const y = window.scrollY * 0.03;
            svgRef.current.style.transform = `translateY(${y}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className={className}
      style={{
        ...style,
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        background: 'var(--panel-dark)',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <svg
        ref={svgRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.15,
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hud-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="var(--grid-line)" strokeWidth="0.5" />
          </pattern>
          <pattern id="hud-grid-large" width="300" height="300" patternUnits="userSpaceOnUse">
            <rect width="300" height="300" fill="url(#hud-grid)" />
            <path d="M 300 0 L 0 0 0 300" fill="none" stroke="var(--grid-line)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hud-grid-large)" />
      </svg>

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '400px',
          background: 'linear-gradient(to top, rgba(0,212,170,0.02) 0%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
