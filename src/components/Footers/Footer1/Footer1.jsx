import React from 'react';
import styles from './Footer1.module.css';

const Footer1 = ({
  bgColor = '#f4f4f4',
  textColor = '#333',
  linkColor = '#333',
  linkHoverColor = '#007bff',
  borderColor = '#e0e0e0',
  fontSize = '0.9rem',
  copyrightText = `© ${new Date().getFullYear()} Your Company. All rights reserved.`,
  links = [
    { label: 'About', url: '/about' },
    { label: 'Contact', url: '/contact' },
    { label: 'Privacy Policy', url: '/privacy' },
    { label: 'Terms of Service', url: '/terms' },
  ],
}) => {
  return (
    <footer className={styles.footer} style={{ backgroundColor: bgColor, color: textColor }}>
      <div className={styles.container}>
        <div className={styles.links}>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className={styles.link}
              style={{ color: linkColor, fontSize }}
              onMouseOver={(e) => (e.currentTarget.style.color = linkHoverColor)}
              onMouseOut={(e) => (e.currentTarget.style.color = linkColor)}
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className={styles.copyright} style={{ fontSize: `calc(${fontSize} * 0.9)` }}>
          {copyrightText}
        </p>
      </div>
    </footer>
  );
};

export default Footer1;