import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import GridBackground from '@/components/GridBackground';
import styles from '@/styles/Home.module.css';

function CpCurve() {
  return (
    <svg
      viewBox="0 0 360 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.cpCurve}
      aria-label="Distribución del coeficiente de presión — NACA 23012 a 4° de ángulo de ataque"
      role="img"
    >
      <line x1="40" y1="170" x2="340" y2="170" stroke="var(--grid-line)" strokeWidth="0.5" />
      <line x1="40" y1="20" x2="40" y2="170" stroke="var(--grid-line)" strokeWidth="0.5" />

      <text x="338" y="178" fill="var(--label)" fontSize="9" fontFamily="var(--font-mono)" textAnchor="end">x/c</text>
      <text x="34" y="24" fill="var(--label)" fontSize="9" fontFamily="var(--font-mono)">−Cp</text>

      <path
        d="M40,142 C48,65 60,35 72,42 C84,49 100,60 120,68
           C140,76 170,82 200,86 C230,90 270,93 310,96 C320,97 330,98 340,99
           C340,99 330,98 310,99 C270,100 230,100 200,101
           C170,102 140,104 120,106 C100,108 84,112 72,115
           C60,118 48,125 40,142Z"
        fill="var(--hud-teal-dim)"
        stroke="var(--hud-teal)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      <path
        d="M40,142 C48,65 60,35 72,42 C84,49 100,60 120,68
           C140,76 170,82 200,86 C230,90 270,93 310,96 C320,97 330,98 340,99"
        fill="none"
        stroke="var(--hud-teal)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      <path
        d="M40,142 C48,125 60,118 72,115 C84,112 100,108 120,106
           C140,104 170,102 200,101 C230,100 270,100 310,99
           C320,98 330,98 340,99"
        fill="none"
        stroke="var(--hud-teal)"
        strokeWidth="0.8"
        strokeLinejoin="round"
        opacity="0.35"
      />

      <circle cx="72" cy="42" r="3" fill="var(--hud-teal)" opacity="0.6" />
      <text x="72" y="32" fill="var(--hud-teal)" fontSize="9" fontFamily="var(--font-mono)" textAnchor="middle" opacity="0.6">pico de succión</text>

      <text x="340" y="92" fill="var(--label)" fontSize="8" fontFamily="var(--font-mono)" textAnchor="end" opacity="0.5">extradós</text>
      <text x="340" y="110" fill="var(--label)" fontSize="8" fontFamily="var(--font-mono)" textAnchor="end" opacity="0.35">intradós</text>

      <text x="40" y="158" fill="var(--label)" fontSize="8" fontFamily="var(--font-mono)" opacity="0.5">
        NACA 23012 · α = 4°
      </text>
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Jorge Rguez. León — Ingeniero Aeroespacial</title>
        <meta name="description" content="Jorge Rodríguez León — Estudiante de Ingeniería Aeroespacial. Diseño de UAV, sistemas de control de vuelo, ingeniería de software." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/jorge-portfolio/favicon.ico" />
      </Head>
      <Navbar />
      <GridBackground style={{ position: 'fixed' }} />
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.textBlock}>
            <p className={styles.tagline}>Ingeniería Aeroespacial</p>
            <h1 className={styles.nombre}>Jorge Rguez.</h1>
            <h1 className={styles.leon}>LEÓN</h1>
            <div className={styles.divider} />
            <p className={styles.subtitle}>
              Diseño, construyo y analizo sistemas que se mueven por el aire y por el código.
              Estudiante de ingeniería aeroespacial con enfoque multidisciplinar:
              aerodinámica, estructuras, sistemas de control y software.
            </p>
            <div className={styles.buttons}>
              <Link href="/projects" className={styles.btnPrimary}>
                Ver Proyectos
                <FontAwesomeIcon icon={faArrowRight} className={styles.btnArrow} />
              </Link>
              <a
                href="https://github.com/jorgerleonn"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btn}
              >
                <FontAwesomeIcon icon={faGithub} className={styles.btnIcon} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/jorge-rodr%C3%ADguez-le%C3%B3n-55b352227/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btn}
              >
                <FontAwesomeIcon icon={faLinkedin} className={styles.btnIcon} />
                LinkedIn
              </a>
            </div>
          </div>
          <CpCurve />
        </div>
      </section>
    </>
  );
}
