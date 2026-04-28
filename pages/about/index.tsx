import Head from 'next/head';
import Navbar from '@/components/Navbar';
import styles from '@/styles/About.module.css';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Jorge Rguez. León</title>
        <meta name="description" content="About me - Aerospace Engineering student and developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <h1 className={styles.title}>About Me</h1>
          <div className={styles.content}>
            <p className={styles.bio}>
              I'm a passionate software engineering student with a strong focus on building clean,
              efficient, and user-centered applications. My journey in tech is driven by a love for
              solving complex problems and turning ideas into reality through code.
            </p>
            <p className={styles.bio}>
              I believe in writing code that's not just functional, but maintainable and elegant.
              Whether it's crafting responsive user interfaces, architecting backend systems, or
              contributing to open-source projects, I approach every challenge with curiosity and
              dedication.
            </p>
            <p className={styles.bio}>
              Currently pursuing my degree in Aerospace Engineering, I bring a unique perspective
              that combines analytical thinking with creative problem-solving. I'm always eager to
              learn new technologies and collaborate on projects that make a meaningful impact.
            </p>
            <div className={styles.highlights}>
              <div className={styles.highlightItem}>
                <span className={styles.highlightEmoji}>🚀</span>
                <span>Clean Code Advocate</span>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.highlightEmoji}>💡</span>
                <span>Problem Solver</span>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.highlightEmoji}>🤝</span>
                <span>Open Source Contributor</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
