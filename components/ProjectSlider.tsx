'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { faArrowRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { projects } from '@/components/projects/projectsData';
import styles from './ProjectSlider.module.css';

const ordered = [...projects].sort((a, b) => {
  if (a.category === 'aeroespacial' && b.category !== 'aeroespacial') return -1;
  if (a.category !== 'aeroespacial' && b.category === 'aeroespacial') return 1;
  return a.id - b.id;
});

const CATEGORY_LABEL: Record<string, string> = {
  aeroespacial: 'Aeroespacial',
  software: 'Software',
};

export default function ProjectSlider() {
  const router = useRouter();
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const scroll = (direction: 'left' | 'right') => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = 320 + 16; // card + gap
    el.scrollBy({ left: direction === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' });
  };

  const handleClick = (project: typeof projects[number]) => {
    if (project.page) {
      if (project.page.startsWith('http')) {
        window.open(project.page, '_blank', 'noopener, noreferrer');
        return;
      }
      router.push(project.page);
      return;
    }
    if (project.github) {
      window.open(project.github, '_blank', 'noopener, noreferrer');
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.tagline}>Proyectos recientes</p>
        <h2 className={styles.title}>Lo que estoy construyendo</h2>
        <div className={styles.divider} />
      </div>

      <div className={styles.sliderWrap}>
        {canScrollLeft && (
          <button
            className={`${styles.scrollBtn} ${styles.scrollBtnLeft}`}
            onClick={() => scroll('left')}
            aria-label="Anterior"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        )}

        <div className={styles.track} ref={trackRef}>
          {ordered.map((project) => (
            <button
              key={project.id}
              className={styles.card}
              onClick={() => handleClick(project)}
            >
              <span className={styles.cardCategory}>
                {CATEGORY_LABEL[project.category]}
                {project.status && (
                  <span className={styles.statusBadge}>{project.status}</span>
                )}
              </span>
              <span className={styles.cardNumber}>
                {String(project.id).padStart(2, '0')}
              </span>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.description}</p>
              <div className={styles.cardTech}>
                {project.techStack.slice(0, 4).map((tech) => (
                  <span key={tech} className={styles.techBadge}>{tech}</span>
                ))}
              </div>
              <span className={styles.cardArrow}>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </button>
          ))}
        </div>

        {canScrollRight && (
          <button
            className={`${styles.scrollBtn} ${styles.scrollBtnRight}`}
            onClick={() => scroll('right')}
            aria-label="Siguiente"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        )}
      </div>
    </section>
  );
}
