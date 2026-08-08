'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './TelemetryStrip.module.css';

interface TelemetryParams {
  label: string;
  value: string;
  unit: string;
}

const BASE_PARAMS: TelemetryParams[] = [
  { label: 'ALT', value: '100', unit: 'm' },
  { label: 'SPD', value: '12.0', unit: 'm/s' },
  { label: 'BAT', value: '9500', unit: 'mAh' },
  { label: 'WSPN', value: '2.2', unit: 'm' },
];

export default function TelemetryStrip() {
  const [params, setParams] = useState(BASE_PARAMS);
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        rafRef.current = requestAnimationFrame(() => {
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

          setParams([
            { label: 'ALT', value: (100 + Math.sin(progress * 8) * 3).toFixed(0), unit: 'm' },
            { label: 'SPD', value: (12.0 + Math.sin(progress * 6) * 0.5).toFixed(1), unit: 'm/s' },
            { label: 'BAT', value: (9500 - progress * 800).toFixed(0), unit: 'mAh' },
            { label: 'WSPN', value: '2.2', unit: 'm' },
          ]);
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
    <div className={`${styles.strip} ${visible ? styles.visible : ''}`}>
      <div className={styles.inner}>
        {params.map((param) => (
          <div key={param.label} className={styles.param}>
            <span className={styles.label}>{param.label}</span>
            <span className={styles.value}>
              {param.value}
              <span className={styles.unit}>{param.unit}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
