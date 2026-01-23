import React from 'react';
import styles from './Footer1.module.css';

const Footer1 = ({ companyName, description, links = [] }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.info}>
            <h2 className={styles.brand}>{companyName}</h2>
            <p className={styles.desc}>{description}</p>
          </div>
          <div className={styles.linksGrid}>
            {links.map((group, i) => (
              <div key={i} className={styles.linkGroup}>
                <h4 className={styles.groupTitle}>{group.title}</h4>
                <ul className={styles.groupLinks}>
                  {group.items.map((item, j) => (
                    <li key={j}><a href={item.link}>{item.label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} {companyName}. All rights reserved.</p>
          <div className={styles.socials}>
            {/* Social icons can be passed as props eventually */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;