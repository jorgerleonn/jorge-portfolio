import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Navbar from '@/components/Navbar';
import styles from '@/styles/Home.module.css';

export default function Home() {
  const openGithub = () => {
    window.open('https://github.com/jorgerleonn', '_blank', 'noopener, noreferrer');
  };

  const openLinkedin = () => {
    window.open('https://www.linkedin.com/in/jorge-rodr%C3%ADguez-le%C3%B3n-55b352227/', '_blank', 'noopener, noreferrer');
  };

  return (
    <>
      <Head>
        <title>Jorge Rguez. León</title>
        <meta name="description" content="Jorge Rodríguez León - Aerospace Engineering student" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/jorge-portfolio/favicon.ico" />
      </Head>
      <Navbar />
      <section className={styles.homeSection}>
        <div className={styles.texto}>
          <h1 className={styles.nombre}>Jorge Rguez.</h1>
          <h1 className={styles.leon}>LEÓN</h1>
          <div className={styles.buttons}>
            <button className={styles.btnHome} onClick={openGithub}>
              <FontAwesomeIcon icon={faGithub} className={styles.iconGithub} />
            </button>
            <button className={styles.btnHome} onClick={openLinkedin}>
              <FontAwesomeIcon icon={faLinkedin} className={styles.iconLinkedin} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}