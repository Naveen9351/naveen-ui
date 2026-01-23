import React, { useState } from 'react';
import styles from './Navbar3.module.css';

const Navbar3 = ({ logo, brandName, menuItems }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          {logo ? <img src={logo} alt={brandName} className={styles.logo} /> : <span className={styles.brand}>{brandName}</span>}
        </div>

        <button
          className={styles.mobileToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`} />
        </button>

        <div className={`${styles.navContent} ${isMobileMenuOpen ? styles.show : ''}`}>
          <ul className={styles.menu}>
            {menuItems?.map((item, index) => (
              <li key={index} className={styles.menuItem}>
                <a href={item.link || '#'} className={styles.menuLink}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className={styles.cta}>
            <a href="/get-started" className={styles.ctaBtn}>Get Started</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar3;