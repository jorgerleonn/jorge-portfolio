import Head from 'next/head';
import Navbar from '@/components/Navbar';
import styles from '@/styles/Skills.module.css';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Framer Motion']
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: ['Node.js', 'Python', 'Express', 'REST APIs', 'SQL', 'PostgreSQL']
    },
    {
      title: 'Tools & DevOps',
      icon: '🛠️',
      skills: ['Git', 'GitHub', 'Docker', 'VS Code', 'Figma', 'Linux', 'npm']
    }
  ];

  return (
    <>
      <Head>
        <title>Skills - Jorge Rguez. León</title>
        <meta name="description" content="Skills and technologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <section className={styles.skillsSection}>
        <div className={styles.container}>
          <h1 className={styles.title}>Technical Skills</h1>
          <p className={styles.subtitle}>Technologies I work with</p>
          <div className={styles.grid}>
            {skillCategories.map((category, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardIcon}>{category.icon}</span>
                  <h2 className={styles.cardTitle}>{category.title}</h2>
                </div>
                <div className={styles.skillsList}>
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className={styles.skillTag}>
                      {skill}
                    </span>
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
