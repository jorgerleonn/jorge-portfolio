import Head from 'next/head';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import GridBackground from '@/components/GridBackground';
import Navbar from '@/components/Navbar';
import styles from '@/styles/About.module.css';

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre mí — Jorge Rguez. León</title>
        <meta name="description" content="Sobre mí — Estudiante de Ingeniería Aeroespacial" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <GridBackground style={{ position: 'fixed' }} />
      <section className={styles.section}>
        <div className={styles.content}>
          <p className={styles.tagline}>Sobre mí</p>
          <h1 className={styles.title}>Ingeniero en formación</h1>
          <div className={styles.divider} />

          <div className={styles.bio}>
            <p>
              Soy estudiante de Ingeniería Aeroespacial en la ETSIAE. Me dedico a aterrizar
              los principios teóricos en prototipos funcionales, combinando el diseño
              aeronáutico tradicional con el desarrollo de software y la integración de hardware.
            </p>
            <p>
              Actualmente centro mi trabajo en el desarrollo práctico de sistemas no tripulados.
              Estoy construyendo un UAV de ala fija de 4 kg, abordando todo el ciclo de vida del
              proyecto: desde el cálculo aerodinámico y la integración de sistemas, hasta la
              fabricación de componentes estructurales mediante impresión 3D.
            </p>
            <p>
              Mi enfoque es puramente multidisciplinar. Complemento el diseño mecánico
              desarrollando la aviónica con microcontroladores, y construyendo aplicaciones
              web completas (utilizando tecnologías como TypeScript y Next.js) para crear
              ecosistemas tecnológicos integrales.
            </p>
            <p>
              Los proyectos que emprendo nacen de la curiosidad técnica y de la necesidad
              de entender cómo funcionan las cosas desde cero. Me motiva construir tecnología
              que se mueva e interactúe con el mundo real, aprendiendo y resolviendo problemas
              en cada fase del desarrollo.
            </p>
          </div>

          <div className={styles.linksRow}>
            <Link href="/projects" className={styles.ctaLink}>
              Ver mi trabajo
              <FontAwesomeIcon icon={faArrowRight} className={styles.ctaArrow} />
            </Link>
            <Link href="/contact" className={styles.ctaLinkSecondary}>
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
