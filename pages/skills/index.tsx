import Head from 'next/head';
import Navbar from '@/components/Navbar';
import styles from '@/styles/Skills.module.css';

export default function Skills() {
  return (
    <>
      <Head>
        <title>Skills - Jorge Rguez. León</title>
        <meta name="description" content="Skills and technologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <section className={styles.skillsSection}>
        <div className={styles.texto}>
          <h1>Skills Page</h1>
          <p>SOON!</p>
        </div>
      </section>
    </>
  );
}