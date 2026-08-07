import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AirfoilMark from '@/components/AirfoilMark';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isSolid, setIsSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const handleScroll = () => setIsSolid(window.scrollY > 25);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (path: string) => router.pathname === path;

  const navItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Habilidades', path: '/skills' },
    { label: 'Proyectos', path: '/projects' },
    { label: 'Sobre mí', path: '/about' },
    { label: 'Contacto', path: '/contact' },
  ];

  return (
    <>
      <nav className={`${styles.navbar} ${isSolid ? styles.solid : ''}`}>
        <div className={styles.containerLogo}>
          <Link href="/" className={styles.mark} aria-label="Inicio">
            <AirfoilMark size={28} />
          </Link>
          <span className={styles.brandText}>Jorge Rguez. León</span>
        </div>
        <ul className={styles.navLinks}>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`${styles.navItem} ${isActive(item.path) ? styles.active : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>
      </nav>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`${styles.mobileNavItem} ${isActive(item.path) ? styles.mobileActive : ''}`}
            onClick={closeMenu}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
