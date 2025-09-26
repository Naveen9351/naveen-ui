import React from 'react';
import styles from './Footer2.module.css';

const Footer2 = ({
  bgColor = '#333',
  textColor = '#fff',
  linkColor = '#ccc',
  linkHoverColor = '#007bff',
  titleColor = '#fff',
  borderColor = '#444',
  fontSize = '0.9rem',
  copyrightText = `© ${new Date().getFullYear()} Your Company. All rights reserved.`,
  columns = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', url: '/about' },
        { label: 'Careers', url: '/careers' },
        { label: 'Blog', url: '/blog' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', url: '/help' },
        { label: 'Contact Us', url: '/contact' },
        { label: 'FAQ', url: '/faq' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', url: '/privacy' },
        { label: 'Terms of Service', url: '/terms' },
        { label: 'Cookie Policy', url: '/cookies' },
      ],
    },
    {
      title: 'Follow Us',
      links: [
        { label: 'Twitter', url: '/twitter' },
        { label: 'Facebook', url: '/facebook' },
        { label: 'LinkedIn', url: '/linkedin' },
      ],
    },
  ],
}) => {
  return (
    <footer className={styles.footer} style={{ backgroundColor: bgColor, color: textColor }}>
      <div className={styles.container}>
        {columns.map((column, index) => (
          <div key={index} className={styles.column}>
            <h3 className={styles.columnTitle} style={{ color: titleColor, fontSize: `calc(${fontSize} * 1.2)` }}>
              {column.title}
            </h3>
            {column.links.map((link, linkIndex) => (
              <a
                key={linkIndex}
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
        ))}
      </div>
      <div className={styles.copyright} style={{ borderTop: `1px solid ${borderColor}` }}>
        <p style={{ fontSize: `calc(${fontSize} * 0.9)` }}>{copyrightText}</p>
      </div>
    </footer>
  );
};

export default Footer2;