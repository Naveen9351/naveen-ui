import React from 'react';
import styles from './Cards.module.css';

const FeatureCard = ({ title, description, color, background, width, height, minWidth, minHeight, maxHeight, onClick }) => (
  <div 
    className={styles.featureCard} 
    style={{ '--color': color, '--background': background, '--width': width, '--height': height, '--min-width': minWidth, '--min-height': minHeight, '--max-height': maxHeight }} 
    onClick={onClick}
  >
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default FeatureCard;