'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface BubbleBackgroundProps {
  className?: string;
  style?: React.CSSProperties;
}

const colors = [
  '#1271ff',
  '#dd4aff',
  '#00dcff',
  '#c83232',
  '#b4b432',
  '#8c64ff',
];

function BubbleBackgroundComponent({ className = '', style }: BubbleBackgroundProps) {
  const bubbles = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      id: i,
      size: 250 + i * 60,
      x: 10 + i * 18,
      y: 15 + (i % 3) * 30,
      color: colors[i],
      duration: 22 + i * 2,
      delay: i * 0.5,
    }));
  }, []);

  return (
    <div
      className={className}
      style={{
        ...style,
        background: '#0a0a0a',
      }}
    >
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          animate={{
            x: [0, 25, -25, 0],
            y: [0, 30, -30, 0],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: bubble.delay,
          }}
          style={{
            position: 'absolute',
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: bubble.size,
            height: bubble.size,
            borderRadius: '50%',
            background: bubble.color,
            opacity: 0.2,
            filter: 'blur(40px)',
          }}
        />
      ))}
    </div>
  );
}

export default BubbleBackgroundComponent;
export { BubbleBackgroundComponent as BubbleBackground };