'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface StarsBackgroundProps {
  className?: string;
  style?: React.CSSProperties;
  starColor?: string;
  speed?: number;
}

export function StarsBackground({ 
  className = '', 
  style,
  starColor = '#fff',
  speed = 50,
}: StarsBackgroundProps) {
  const [stars] = useState<Array<{
    id: number;
    size: number;
    x: number;
    y: number;
    opacity: number;
    duration: number;
  }>>(() => Array.from({ length: 80 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 0.5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.3,
    duration: Math.random() * 3 + 2,
  })));

  return (
    <div
      className={className}
      style={{
        ...style,
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        background: 'radial-gradient(ellipse_at_bottom, #1a1a1a 0%, #000 100%)',
        pointerEvents: 'none',
      }}
    >
      <div
        className="glow-light"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '600px',
          background: 'linear-gradient(to top, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />
      {stars.map((star) => (
        <motion.div
          key={star.id}
          animate={{
            opacity: [star.opacity, 0.1, star.opacity, 0.2, star.opacity],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            top: `${star.y}%`,
            left: `${star.x}%`,
            width: star.size,
            height: star.size,
            borderRadius: '50%',
            background: starColor,
            boxShadow: `0 0 ${star.size * 3}px ${starColor}`,
            pointerEvents: 'none',
          }}
        />
      ))}
    </div>
  );
}