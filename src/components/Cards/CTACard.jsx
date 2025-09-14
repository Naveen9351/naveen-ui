import React from 'react';
import styles from './Cards.module.css';

const CTACard = ({ title, action, color, background, width, height, minWidth, minHeight, maxHeight, onClick, buttonOnClick }) => (
  <div 
    className={styles.ctaCard} 
    style={{ '--color': color, '--background': background, '--width': width, '--height': height, '--min-width': minWidth, '--min-height': minHeight, '--max-height': maxHeight }} 
    onClick={onClick}
  >
    <h3>{title}</h3>
    <button onClick={buttonOnClick}>{action}</button>
  </div>
);

export default CTACard;