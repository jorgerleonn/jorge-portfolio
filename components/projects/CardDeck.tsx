'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CardDeck.module.css';
import { projects } from './projectsData';

export default function CardDeck() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setSelectedId(selectedId === id ? null : id);
  };

  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <div className={styles.container}>
      <div className={styles.radialWrapper}>
        <div className={styles.radialDeck}>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={styles.card}
              onClick={() => handleCardClick(project.id)}
              whileHover={{ y: -8 }}
              style={{ background: 'transparent', padding: 0, margin: 0 }}
            >
              <div className={styles.cardImageWrapper} style={{ background: 'transparent' }}>
                {project.image && (
                  <img 
                    src={project.image}
                    alt={project.title}
                    className={styles.cardImage}
                    style={{ display: 'block', border: 'none', margin: 0, padding: 0 }}
                  />
                )}
              </div>
            </motion.div>
          ))}
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
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
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
                style={{ backgroundImage: selectedProject.modalImage ? `url(${selectedProject.modalImage})` : 'none' }}
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
                  {selectedProject.github && (
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.githubLink}
                    >
                      GitHub
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a 
                      href={selectedProject.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.demoLink}
                    >
                      Demo
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