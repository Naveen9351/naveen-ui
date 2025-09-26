import React from 'react';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import styles from './Footer3.module.css';

const Footer3 = ({
  bgColor = '#007bff',
  textColor = '#fff',
  linkColor = '#fff',
  linkHoverColor = '#ccc',
  buttonBgColor = '#fff',
  buttonTextColor = '#007bff',
  buttonHoverBgColor = '#e0e0e0',
  fontSize = '0.9rem',
  copyrightText = `© ${new Date().getFullYear()} Your Company. All rights reserved.`,
  newsletterTitle = 'Stay Updated',
  placeholderText = 'Enter your email',
  buttonText = 'Subscribe',
  socialLinks = [
    { url: '/twitter', icon: FaTwitter, label: 'Twitter' },
    { url: '/facebook', icon: FaFacebook, label: 'Facebook' },
    { url: '/linkedin', icon: FaLinkedin, label: 'LinkedIn' },
  ],
}) => {
  return (
    <footer className={styles.footer} style={{ backgroundColor: bgColor, color: textColor }}>
      <div className={styles.container}>
        <div className={styles.newsletter}>
          <h3 className={styles.newsletterTitle} style={{ fontSize: `calc(${fontSize} * 1.2)` }}>
            {newsletterTitle}
          </h3>
          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder={placeholderText}
              className={styles.input}
              style={{ fontSize }}
              aria-label={placeholderText}
            />
            <button
              className={styles.subscribeButton}
              style={{ backgroundColor: buttonBgColor, color: buttonTextColor, fontSize }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverBgColor)}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonBgColor)}
            >
              {buttonText}
            </button>
          </div>
        </div>
        <div className={styles.social}>
          {socialLinks.map(({ url, icon: Icon, label }, index) => (
            <a
              key={index}
              href={url}
              className={styles.socialIcon}
              style={{ color: linkColor }}
              aria-label={label}
              onMouseOver={(e) => (e.currentTarget.style.color = linkHoverColor)}
              onMouseOut={(e) => (e.currentTarget.style.color = linkColor)}
            >
              <Icon size={24} />
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

export default Footer3;