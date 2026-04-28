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
    delay: number;
    duration: number;
  }>>(() => Array.from({ length: 80 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 0.5,
    x: Math.random() * 100,
    delay: 0,
    duration: Math.random() * 3 + 5,
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
          initial={{ 
            top: '110%',
            left: `${star.x}%`,
            opacity: 0,
          }}
          animate={{
            top: '-10%',
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
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