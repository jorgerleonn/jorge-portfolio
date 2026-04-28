import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { StarsBackground } from '@/components/StarsBackground';
import Navbar from '@/components/Navbar';
import styles from '@/styles/Contact.module.css';

export default function Contact() {
  const openEmail = () => {
    window.open('mailto:jorge@example.com', '_blank');
  };

  const openGithub = () => {
    window.open('https://github.com/jorgerleonn', '_blank', 'noopener, noreferrer');
  };

  const openLinkedin = () => {
    window.open('https://www.linkedin.com/in/jorge-rodr%C3%ADguez-le%C3%B3n-55b352227/', '_blank', 'noopener, noreferrer');
  };

  return (
    <>
      <Head>
        <title>Contact - Jorge Rguez. León</title>
        <meta name="description" content="Get in touch" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <StarsBackground className="fixed inset-0" />
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <h1 className={styles.title}>Get In Touch</h1>
          <p className={styles.subtitle}>
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
          <p className={styles.description}>
            Whether you're a recruiter looking for a dedicated developer, a fellow engineer
            interested in collaboration, or someone with an exciting opportunity, feel free to reach out.
            I'm always open to discussing new projects and ideas.
          </p>
          <div className={styles.buttons}>
            <button className={styles.btnContact} onClick={openEmail}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              <span>Email Me</span>
            </button>
            <button className={styles.btnContact} onClick={openLinkedin}>
              <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
              <span>LinkedIn</span>
            </button>
            <button className={styles.btnContact} onClick={openGithub}>
              <FontAwesomeIcon icon={faGithub} className={styles.icon} />
              <span>GitHub</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
