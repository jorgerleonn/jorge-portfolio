import Head from 'next/head';
import Navbar from '@/components/Navbar';
import styles from '@/styles/About.module.css';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Jorge Rguez. León</title>
        <meta name="description" content="About me" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <section className={styles.aboutSection}>
        <div className={styles.texto}>
          <h1>About Page</h1>
          <p>SOON!</p>
        </div>
      </section>
    </>
  );
}