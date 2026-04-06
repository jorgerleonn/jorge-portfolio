'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CardDeck.module.css';
import { projects } from './projectsData';

export default function CardDeck() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setSelectedId(selectedId === id ? null : id);
  };

  const selectedProject = projects.find((p) => p.id === selectedId);
  const centerIndex = (projects.length - 1) / 2;

  return (
    <div className={styles.container}>
      <div className={styles.radialWrapper}>
        <div className={styles.radialDeck}>
          {projects.map((project, index) => {
            const isHovered = hoveredIndex === index;
            const isSelected = selectedId === project.id;
            const angleOffset = index - centerIndex;
            
            return (
              <motion.div
                key={project.id}
                className={`${styles.card} ${isHovered ? styles.cardHover : ''}`}
                onClick={() => handleCardClick(project.id)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  x: isSelected 
                    ? 0 
                    : isHovered 
                      ? angleOffset * -200 
                      : angleOffset * -120,
                  y: isSelected 
                    ? -80 
                    : isHovered 
                      ? -50 
                      : 0,
                  rotate: isSelected 
                    ? 0 
                    : isHovered 
                      ? angleOffset * -8 
                      : angleOffset * -5,
                  scale: isSelected ? 1.25 : isHovered ? 1.15 : 1,
                  zIndex: isSelected ? 100 : isHovered ? 90 : 50 + (projects.length - Math.abs(angleOffset)),
                  opacity: selectedId !== null && !isSelected ? 0.3 : 1,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 180,
                  damping: 18,
                }}
              >
                <div className={styles.cardImageWrapper}>
                  <img 
                    src={project.image}
                    alt={project.title}
                    className={styles.cardImage}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div 
              className={styles.modalContent}
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className={styles.closeButton}
                onClick={() => setSelectedId(null)}
              >
                ×
              </button>
              <div 
                className={styles.modalImage}
                style={{ backgroundImage: `url(${selectedProject.modalImage || selectedProject.image})` }}
              />
              <div className={styles.modalInfo}>
                <h2>{selectedProject.title}</h2>
                <p className={styles.description}>{selectedProject.description}</p>
                <div className={styles.techStack}>
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>
                <div className={styles.links}>
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.githubLink}
                  >
                    GitHub
                  </a>
                  {selectedProject.demo && (
                    <a 
                      href={selectedProject.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.demoLink}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
