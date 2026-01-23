import React, { useState } from 'react';
import styles from './Navbar2.module.css';

const Navbar2 = ({ logo, brandName, menuItems, centerMenu = true }) => {
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

        <ul className={`${styles.menu} ${centerMenu ? styles.centered : ''} ${isMobileMenuOpen ? styles.show : ''}`}>
          {menuItems?.map((item, index) => (
            <li key={index} className={styles.menuItem}>
              <a href={item.link || '#'} className={styles.menuLink}>{item.label}</a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button className={styles.loginBtn}>Login</button>
          <button className={styles.signupBtn}>Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;