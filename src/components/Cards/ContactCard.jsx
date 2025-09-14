import React from 'react';
import styles from './Cards.module.css';

const ContactCard = ({ name, email, phone, color, background, width, height, minWidth, minHeight, maxHeight, onClick }) => (
  <div 
    className={styles.contactCard} 
    style={{ '--color': color, '--background': background, '--width': width, '--height': height, '--min-width': minWidth, '--min-height': minHeight, '--max-height': maxHeight }} 
    onClick={onClick}
  >
    <h3>{name}</h3>
    <p>Email: {email}</p>
    <p>Phone: {phone}</p>
  </div>
);

export default ContactCard;