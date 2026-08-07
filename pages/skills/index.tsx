import Head from 'next/head';
import GridBackground from '@/components/GridBackground';
import Navbar from '@/components/Navbar';
import styles from '@/styles/Skills.module.css';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Framer Motion'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Python', 'Express', 'REST APIs', 'SQL', 'PostgreSQL'],
  },
  {
    title: 'Herramientas & DevOps',
    skills: ['Git', 'GitHub', 'Docker', 'VS Code', 'Figma', 'Linux', 'npm'],
  },
];

export default function Skills() {
  return (
    <>
      <Head>
        <title>Habilidades — Jorge Rguez. León</title>
        <meta name="description" content="Habilidades técnicas y tecnologías" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <GridBackground style={{ position: 'fixed' }} />
      <section className={styles.section}>
        <div className={styles.content}>
          <p className={styles.tagline}>Competencias</p>
          <h1 className={styles.title}>Habilidades Técnicas</h1>
          <div className={styles.divider} />
          <div className={styles.grid}>
            {skillCategories.map((category, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardIndex}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className={styles.cardTitle}>{category.title}</h2>
                </div>
                <div className={styles.tags}>
                  {category.skills.map((skill) => (
                    <span key={skill} className={styles.tag}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
