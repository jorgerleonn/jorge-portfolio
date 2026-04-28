import Head from 'next/head';
import Navbar from '@/components/Navbar';
import styles from '@/styles/About.module.css';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Jorge Rguez. León</title>
        <meta name="description" content="About me - Aerospace Engineering student" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <section className={styles.aboutSection}>
        <div className={styles.texto}>
          <h1>About Me</h1>
          <p className={styles.bio}>
            I am an Aerospace Engineering student passionate about designing, analyzing, and optimizing complex systems. My vocation centers on transforming theoretical concepts into tangible, efficient solutions, driven by the challenge of solving high-stakes technical problems.
          </p>
          <p className={styles.bio}>
            I firmly believe in developing projects that are not only functional but also safe, innovative, and rigorously engineered. Whether calculating structural loads, optimizing aerodynamics, or programming control systems, I approach every challenge with curiosity and dedication. As a testament to my proactivity, I am currently independently developing a Class C4 UAV, a project that allows me to integrate my multidisciplinary expertise.
          </p>
          <p className={styles.bio}>
            I am always eager to learn new technologies, refine my engineering and computational tools, and collaborate on projects that drive real impact in the aerospace sector.
          </p>
        </div>
      </section>
    </>
  );
}
