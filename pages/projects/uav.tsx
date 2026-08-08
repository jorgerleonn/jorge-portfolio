import { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { faArrowLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import GridBackground from '@/components/GridBackground';
import TelemetryStrip from '@/components/TelemetryStrip';
import styles from '@/styles/UavProject.module.css';

const UAV_PHOTOS = [
  { src: '/jorge-portfolio/photos/uav/Proyecto sin título (2).jpg', alt: 'Vista general del UAV' },
  { src: '/jorge-portfolio/photos/uav/Proyecto sin título (3).jpg', alt: 'Estructura del fuselaje' },
  { src: '/jorge-portfolio/photos/uav/Proyecto sin título (4).jpg', alt: 'Componentes electrónicos' },
  { src: '/jorge-portfolio/photos/uav/Proyecto sin título (5).jpg', alt: 'Detalle del ala' },
  { src: '/jorge-portfolio/photos/uav/Proyecto sin título 3.png', alt: 'Vista en CAD' },
  { src: '/jorge-portfolio/photos/uav/Proyecto sin título 4.png', alt: 'Montaje de componentes' },
  { src: '/jorge-portfolio/photos/uav/Proyecto sin título 5.png', alt: 'Sistema de control' },
];

const SPECS = [
  { label: 'Perfil alar', value: 'Selig 1223' },
  { label: 'Envergadura', value: '2.2 m' },
  { label: 'Vel. pérdida', value: '10 m/s' },
  { label: 'Vel. crucero', value: '12 m/s' },
  { label: 'MTOW', value: '4 kg' },
  { label: 'Autonomía', value: '~30 min' },
];

const TECH_STACK = [
  'Aerodinámica', 'Control de Vuelo', 'Control PID',
  'Sistemas Embebidos', 'Análisis Estructural', 'CAD',
];

export default function UavProject() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight' && lightboxIndex < UAV_PHOTOS.length - 1) {
        setLightboxIndex(lightboxIndex + 1);
      }
      if (e.key === 'ArrowLeft' && lightboxIndex > 0) {
        setLightboxIndex(lightboxIndex - 1);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, closeLightbox]);

  return (
    <>
      <Head>
        <title>BRAINX UAV — Jorge Rguez. León</title>
        <meta name="description" content="UAV autónomo Clase C4 — diseño, aerodinámica, control de vuelo." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <GridBackground style={{ position: 'fixed' }} />
      <TelemetryStrip />
      <section className={styles.section}>
        <div className={styles.content}>
          <Link href="/projects" className={styles.backLink}>
            <FontAwesomeIcon icon={faArrowLeft} className={styles.backArrow} />
            Todos los proyectos
          </Link>

          <p className={styles.tagline}>Proyecto {String(1).padStart(2, '0')}</p>
          <h1 className={styles.title}>BRAINX UAV</h1>
          <p className={styles.subtitle}>Clase C4 · Ala Fija Autónomo · <span className={styles.statusBadge}>En desarrollo</span></p>
          <div className={styles.divider} />

          <div className={styles.description}>
            <p>
              Diseño y desarrollo independiente de un vehículo aéreo no tripulado
              de ala fija. El proyecto integra principios multidisciplinares de ingeniería
              aeroespacial — desde el análisis aerodinámico y el diseño estructural hasta
              los sistemas de control de vuelo y la programación embebida.
            </p>
            <p>
              La aeronave utiliza un perfil alar Selig 1223, seleccionado por su
              alto coeficiente de sustentación a bajos números
              de Reynolds. La envergadura de 2.2 metros proporciona la sustentación
              necesaria para un MTOW de 4 kg, manteniendo maniobrabilidad
              a la velocidad de crucero de 12 m/s.
            </p>
          </div>

          <div className={styles.photoGrid}>
            {UAV_PHOTOS.map((photo, i) => (
              <button
                key={photo.src}
                className={styles.photoWrap}
                onClick={() => setLightboxIndex(i)}
                aria-label={`Ampliar: ${photo.alt}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className={styles.photo}
                  loading="lazy"
                />
              </button>
            ))}
          </div>

          <div className={styles.specsSection}>
            <h2 className={styles.sectionTitle}>Especificaciones Técnicas</h2>
            <div className={styles.specsGrid}>
              {SPECS.map((spec) => (
                <div key={spec.label} className={styles.specCard}>
                  <span className={styles.specValue}>{spec.value}</span>
                  <span className={styles.specLabel}>{spec.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.techSection}>
            <h2 className={styles.sectionTitle}>Disciplinas</h2>
            <div className={styles.techTags}>
              {TECH_STACK.map((tech) => (
                <span key={tech} className={styles.techTag}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className={styles.lightboxClose} onClick={closeLightbox} aria-label="Cerrar">
              <FontAwesomeIcon icon={faXmark} />
            </button>

            {lightboxIndex > 0 && (
              <button
                className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex - 1); }}
                aria-label="Anterior"
              >
                ←
              </button>
            )}

            <motion.img
              key={lightboxIndex}
              src={UAV_PHOTOS[lightboxIndex].src}
              alt={UAV_PHOTOS[lightboxIndex].alt}
              className={styles.lightboxImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />

            {lightboxIndex < UAV_PHOTOS.length - 1 && (
              <button
                className={`${styles.lightboxNav} ${styles.lightboxNext}`}
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex + 1); }}
                aria-label="Siguiente"
              >
                →
              </button>
            )}

            <div className={styles.lightboxCounter}>
              {lightboxIndex + 1} / {UAV_PHOTOS.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
