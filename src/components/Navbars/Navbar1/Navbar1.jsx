import React, { useState } from 'react';
import styles from './Navbar1.module.css';

const Navbar1 = ({ logo, brandName, menuItems, variant = 'glass', sticky = true }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className={`${styles.navbar} ${styles[variant]} ${sticky ? styles.sticky : ''}`}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          {logo ? <img src={logo} alt={brandName} className={styles.logo} /> : <span className={styles.brand}>{brandName}</span>}
        </div>

        <button
          className={styles.mobileToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`} />
        </button>

        <ul className={`${styles.menu} ${isMobileMenuOpen ? styles.show : ''}`}>
          {menuItems?.map((item, index) => (
            <li key={index} className={styles.menuItem}>
              <a href={item.link || '#'} className={styles.menuLink}>
                {item.label}
              </a>
              {item.children && (
                <ul className={styles.dropdown}>
                  {item.children.map((child, childIndex) => (
                    <li key={childIndex} className={styles.dropdownItem}>
                      <a href={child.link || '#'}>{child.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar1;