import Head from 'next/head';
import Navbar from '@/components/Navbar';
import styles from '@/styles/Contact.module.css';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Jorge Rguez. León</title>
        <meta name="description" content="Contact information" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <section className={styles.contactSection}>
        <div className={styles.texto}>
          <h1>Contact Page</h1>
          <p>SOON!</p>
        </div>
      </section>
    </>
  );
}