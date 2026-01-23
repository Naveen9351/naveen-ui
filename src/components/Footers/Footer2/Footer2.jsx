import React from 'react';
import styles from './Footer2.module.css';

const Footer2 = ({ brandName, menuItems = [] }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>{brandName}</div>
          <ul className={styles.links}>
            {menuItems.map((item, i) => (
              <li key={i}><a href={item.link}>{item.label}</a></li>
            ))}
          </ul>
        </div>
        <div className={styles.middle}>
          <p className={styles.tagline}>Building the future of UI, one component at a time.</p>
        </div>
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} {brandName}. All rights reserved.</p>
          <div className={styles.legal}>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;