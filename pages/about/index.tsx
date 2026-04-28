import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/About.module.css';

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      if (imageRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;
        imageRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>About - Jorge Rguez. León</title>
        <meta name="description" content="About me - Aerospace Engineering student and developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className={`${styles.container} ${isLoaded ? styles.loaded : ''}`}>
        {/* Navigation */}
        <nav className={styles.nav}>
          <div className={styles.navLeft}>
            <a href="/" className={styles.navLink}>Home</a>
            <a href="/about" className={`${styles.navLink} ${styles.active}`}>About Me</a>
            <a href="/skills" className={styles.navLink}>Resume</a>
            <a href="/projects" className={styles.navLink}>Portfolio</a>
          </div>
          <div className={styles.navRight}>
            <div className={styles.phoneIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <span className={styles.phoneNumber}>774-555-2021</span>
          </div>
        </nav>

        {/* Main Content - Two Columns */}
        <div className={styles.mainContent}>
          {/* Left Column - Text Content */}
          <div className={styles.leftColumn}>
            <div className={styles.textContent}>
              <h1 className={styles.title}>ABOUT ME</h1>
              <div className={styles.accentLine}></div>
              
              <p className={styles.email}>j.martin@uptowork.com</p>
              
              <p className={styles.bio}>
                I am an Aerospace Engineering student passionate about designing, analyzing, and optimizing complex systems. My vocation centers on transforming theoretical concepts into tangible, efficient solutions, driven by the challenge of solving high-stakes technical problems.
              </p>
              <p className={styles.bio}>
                I firmly believe in developing projects that are not only functional but also safe, innovative, and rigorously engineered. Whether calculating structural loads, optimizing aerodynamics, or programming control systems, I approach every challenge with curiosity and dedication. As a testament to my proactivity, I am currently independently developing a Class C4 UAV, a project that allows me to integrate my multidisciplinary expertise.
              </p>
              <p className={styles.bio}>
                I am always eager to learn new technologies, refine my engineering and computational tools, and collaborate on projects that drive real impact in the aerospace sector.
              </p>
              
              <div className={styles.contactAddress}>
                <p className={styles.addressLine}>Florida, Orlando</p>
                <p className={styles.addressLine}>12529 State Road 535</p>
              </div>
            </div>
          </div>

          {/* Right Column - Portrait Image */}
          <div className={styles.rightColumn}>
            <div ref={imageRef} className={styles.imageWrapper}>
              <div className={styles.imageContainer}>
                <img 
                  src="/jorge-portfolio/images/portfolio-next.png" 
                  alt="Portrait" 
                  className={styles.portraitImage}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Fullscreen Icon */}
        <div className={styles.footer}>
          <div className={styles.fullscreenIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"/>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
