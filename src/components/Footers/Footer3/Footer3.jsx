import React from 'react';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import styles from './Footer3.module.css';

const Footer3 = ({ brandName, socialLinks = [] }) => {
  const defaultSocials = [
    { icon: <FaTwitter />, link: '#' },
    { icon: <FaFacebook />, link: '#' },
    { icon: <FaLinkedin />, link: '#' },
    { icon: <FaInstagram />, link: '#' }
  ];

  const socialsToRender = socialLinks.length > 0 ? socialLinks : defaultSocials;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.brand}>{brandName}</h2>
          <p className={styles.desc}>Subscribe to our newsletter for the latest updates.</p>
          <div className={styles.newsletter}>
            <input type="email" placeholder="email@example.com" className={styles.input} />
            <button className={styles.subBtn}>Subscribe</button>
          </div>
          <div className={styles.socials}>
            {socialsToRender.map((social, i) => (
              <a key={i} href={social.link} className={styles.socialIcon} aria-label="Social Link">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} {brandName}. Handcrafted with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer3;