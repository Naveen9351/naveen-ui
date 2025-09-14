import React from 'react';
import styles from './Cards.module.css';

const MinimalCard = ({ text, color, background, width, height, minWidth, minHeight, maxHeight, onClick }) => (
  <div 
    className={styles.minimalCard} 
    style={{ '--color': color, '--background': background, '--width': width, '--height': height, '--min-width': minWidth, '--min-height': minHeight, '--max-height': maxHeight }} 
    onClick={onClick}
  >
    <p>{text}</p>
  </div>
);

export default MinimalCard;