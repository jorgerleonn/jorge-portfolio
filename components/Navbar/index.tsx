import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isSolid, setIsSolid] = useState(false);
  const router = useRouter();

  const handleScroll = () => {
    if (window.scrollY > 25) {
      setIsSolid(true);
    } else {
      setIsSolid(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => router.pathname === path;

  return (
    <nav className={`${styles.navbar} ${isSolid ? styles.solid : ''}`}>
      <div className={styles.containerLogo}>
        <Link href="/">
          <img className={styles.logo} src="/cohete.png" alt="Logo" />
        </Link>
        <span className={styles.span}>Aerospace Engineering student</span>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/" className={`${styles.navItem} ${isActive('/') ? styles.active : ''}`}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/skills" className={`${styles.navItem} ${isActive('/skills') ? styles.active : ''}`}>
            Skills
          </Link>
        </li>
        <li>
          <Link href="/contact" className={`${styles.navItem} ${isActive('/contact') ? styles.active : ''}`}>
            Contact
          </Link>
        </li>
        <li>
          <Link href="/projects" className={`${styles.navItem} ${isActive('/projects') ? styles.active : ''}`}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/about" className={`${styles.navItem} ${isActive('/about') ? styles.active : ''}`}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}