'use client';

import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './CardDeck.module.css';
import { projects } from './projectsData';

const SECTIONS = [
  { key: 'aeroespacial', label: 'Aeroespacial' },
  { key: 'software', label: 'Software' },
] as const;

export default function CardDeck() {
  const router = useRouter();

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
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.tagline}>Proyectos</p>
        <h1 className={styles.title}>Registro de Proyectos</h1>
        <div className={styles.divider} />
      </div>

      {SECTIONS.map((section) => {
        const sectionProjects = projects.filter((p) => p.category === section.key);
        if (sectionProjects.length === 0) return null;

        return (
          <div key={section.key} className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>{section.label}</span>
              <span className={styles.sectionCount}>
                {sectionProjects.length} proyecto{sectionProjects.length !== 1 ? 's' : ''}
              </span>
            </div>

            <div className={styles.grid}>
              {sectionProjects.map((project) => (
                <motion.button
                  key={project.id}
                  className={styles.card}
                  onClick={() => handleClick(project)}
                  whileHover={{ y: -3, borderColor: 'rgba(0, 212, 170, 0.35)' }}
                  transition={{ duration: 0.15 }}
                >
                  <span className={styles.cardNumber}>
                    {String(project.id).padStart(2, '0')}
                  </span>

                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>
                      {project.title}
                      {project.status && (
                        <span className={styles.statusBadge}>{project.status}</span>
                      )}
                    </h3>
                    <p className={styles.cardDesc}>{project.description}</p>

                    <div className={styles.cardTech}>
                      {project.techStack.map((tech) => (
                        <span key={tech} className={styles.techBadge}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  <span className={styles.cardArrow}>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
