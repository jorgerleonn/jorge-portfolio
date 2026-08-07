import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import GridBackground from '@/components/GridBackground';
import Navbar from '@/components/Navbar';
import styles from '@/styles/Contact.module.css';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contacto — Jorge Rguez. León</title>
        <meta name="description" content="Contacta conmigo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <GridBackground style={{ position: 'fixed' }} />
      <section className={styles.section}>
        <div className={styles.content}>
          <p className={styles.tagline}>Contacto</p>
          <h1 className={styles.title}>Establecer contacto</h1>
          <div className={styles.divider} />
          <p className={styles.desc}>
            ¿Tienes un proyecto en mente, una oportunidad que comentar o quieres colaborar?
            Escríbeme por cualquiera de estos canales.
          </p>
          <div className={styles.buttons}>
            <a
              href="mailto:jorge@example.com"
              className={styles.btn}
            >
              <FontAwesomeIcon icon={faEnvelope} className={styles.btnIcon} />
              <div className={styles.btnText}>
                <span className={styles.btnLabel}>Email</span>
                <span className={styles.btnHint}>Mensaje directo</span>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/jorge-rodr%C3%ADguez-le%C3%B3n-55b352227/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btn}
            >
              <FontAwesomeIcon icon={faLinkedin} className={styles.btnIcon} />
              <div className={styles.btnText}>
                <span className={styles.btnLabel}>LinkedIn</span>
                <span className={styles.btnHint}>Perfil profesional</span>
              </div>
            </a>
            <a
              href="https://www.instagram.com/jorgerleonn/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btn}
            >
              <FontAwesomeIcon icon={faInstagram} className={styles.btnIcon} />
              <div className={styles.btnText}>
                <span className={styles.btnLabel}>Instagram</span>
                <span className={styles.btnHint}>@jorgerleonn</span>
              </div>
            </a>
            <a
              href="https://github.com/jorgerleonn"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btn}
            >
              <FontAwesomeIcon icon={faGithub} className={styles.btnIcon} />
              <div className={styles.btnText}>
                <span className={styles.btnLabel}>GitHub</span>
                <span className={styles.btnHint}>Código y proyectos</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
