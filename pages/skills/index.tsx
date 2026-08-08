import { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faXmark, faDownload } from '@fortawesome/free-solid-svg-icons';
import GridBackground from '@/components/GridBackground';
import Navbar from '@/components/Navbar';
import styles from '@/styles/Skills.module.css';

const SKILL_SECTIONS = [
  {
    title: 'Ingeniería y Diseño',
    items: ['Impresión 3D', 'Diseño CAD (SolidWorks)', 'XFLR5'],
  },
  {
    title: 'Programación y Datos',
    items: ['Python', 'Machine Learning e IA', 'Análisis de Datos (NumPy, Pandas)'],
  },
  {
    title: 'Desarrollo Web Moderno',
    items: ['OpenCode', 'Next.js', 'TypeScript', 'Vercel, Supabase'],
  },
  {
    title: 'Ciberseguridad',
    items: ['Python Ofensivo', 'Seguridad de Redes y web', 'Pentesting (Kali Linux)'],
  },
];

const CERTIFICATIONS = [
  { name: 'Python 3', org: 'Codecademy', year: '2023', pdf: '/jorge-portfolio/certificaciones/Learn%20Python%203%20Course%20Certificate.pdf', file: 'Python 3 - Codecademy.pdf' },
  { name: 'Data Analysis con Pandas', org: 'Codecademy', year: '2023', pdf: '/jorge-portfolio/certificaciones/Learn%20Data%20Analysis%20with%20Pandas%20Course%20Certificate.pdf', file: 'Data Analysis con Pandas - Codecademy.pdf' },
  { name: 'Machine Learning & AI Foundations', org: 'Codecademy', year: '2023', pdf: '/jorge-portfolio/certificaciones/Machine%20Learning%20%26%20Artificial%20Intelligence%20Foundations%20Skill%20Path.pdf', file: 'ML & AI Foundations - Codecademy.pdf' },
  { name: 'Deep Learning con TensorFlow', org: 'Codecademy', year: '2023', pdf: '/jorge-portfolio/certificaciones/Build%20deep%20learning%20models%20with%20Tensorflow%20Certificate.pdf', file: 'Deep Learning TensorFlow - Codecademy.pdf' },
  { name: 'MATLAB OnRamp', org: 'MathWorks', year: '2023', pdf: '/jorge-portfolio/certificaciones/Matlab%20OnRamp%20Certificate.pdf', file: 'MATLAB OnRamp - MathWorks.pdf' },
  { name: 'Python Ofensivo', org: 'Hack4u', year: '2022', pdf: '/jorge-portfolio/certificaciones/Certificado%20Python%20Ofensivo.pdf', file: 'Python Ofensivo - Hack4u.pdf' },
  { name: 'Introducción al Hacking', org: 'Hack4u', year: '2022', pdf: '/jorge-portfolio/certificaciones/Curso%20de%20introducci%C3%B3n%20al%20hacking.pdf', file: 'Introduccion al Hacking - Hack4u.pdf' },
  { name: 'Personalización de Linux', org: 'Hack4u', year: '2022', pdf: '/jorge-portfolio/certificaciones/Certificado%20de%20personalizaci%C3%B3n%20de%20un%20sistema%20Linux.pdf', file: 'Personalizacion de Linux - Hack4u.pdf' },
];

const LANGUAGES = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'B2' },
  { name: 'Alemán', level: 'A1' },
];

export default function Skills() {
  const [viewerPdf, setViewerPdf] = useState<typeof CERTIFICATIONS[number] | null>(null);

  const closeViewer = useCallback(() => setViewerPdf(null), []);

  useEffect(() => {
    document.body.style.overflow = viewerPdf ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [viewerPdf]);

  useEffect(() => {
    if (!viewerPdf) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeViewer();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [viewerPdf, closeViewer]);

  return (
    <>
      <Head>
        <title>Habilidades — Jorge Rguez. León</title>
        <meta name="description" content="Habilidades técnicas, certificaciones e idiomas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <GridBackground style={{ position: 'fixed' }} />
      <section className={styles.section}>
        <div className={styles.content}>
          <p className={styles.tagline}>Competencias</p>
          <h1 className={styles.title}>Habilidades</h1>
          <div className={styles.divider} />

          <div className={styles.grid}>
            {SKILL_SECTIONS.map((section) => (
              <div key={section.title} className={styles.card}>
                <h2 className={styles.cardTitle}>{section.title}</h2>
                <div className={styles.tags}>
                  {section.items.map((item) => (
                    <span key={item} className={styles.tag}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.blockTitle}>Certificaciones</h2>
            <div className={styles.certGrid}>
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.name} className={styles.certCard}>
                  <div className={styles.certInfo}>
                    <span className={styles.certName}>{cert.name}</span>
                    <span className={styles.certMeta}>{cert.org} · {cert.year}</span>
                  </div>
                  <button
                    onClick={() => setViewerPdf(cert)}
                    className={styles.certView}
                    aria-label={`Ver certificado: ${cert.name}`}
                  >
                    <FontAwesomeIcon icon={faFilePdf} />
                    PDF
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.blockTitle}>Idiomas</h2>
            <div className={styles.langRow}>
              {LANGUAGES.map((lang) => (
                <div key={lang.name} className={styles.langItem}>
                  <span className={styles.langName}>{lang.name}</span>
                  <span className={styles.langLevel}>{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {viewerPdf && (
        <div className={styles.pdfOverlay} onClick={closeViewer}>
          <div className={styles.pdfBar}>
            <span className={styles.pdfBarTitle}>{viewerPdf.name}</span>
            <div className={styles.pdfBarActions}>
              <a
                href={viewerPdf.pdf}
                download={viewerPdf.file}
                className={styles.pdfDownload}
                onClick={(e) => e.stopPropagation()}
              >
                <FontAwesomeIcon icon={faDownload} />
                Descargar
              </a>
              <button className={styles.pdfClose} onClick={closeViewer} aria-label="Cerrar visor">
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          </div>
          <iframe
            src={viewerPdf.pdf}
            className={styles.pdfFrame}
            title={viewerPdf.name}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
