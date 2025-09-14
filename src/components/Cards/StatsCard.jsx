import React from 'react';
import styles from './Cards.module.css';

const StatsCard = ({ stats, color, background, width, height, minWidth, minHeight, maxHeight, onClick }) => (
  <div 
    className={styles.statsCard} 
    style={{ '--color': color, '--background': background, '--width': width, '--height': height, '--min-width': minWidth, '--min-height': minHeight, '--max-height': maxHeight }} 
    onClick={onClick}
  >
    {Object.entries(stats).map(([key, value], index) => (
      <div key={index}>
        <p>{value}</p>
        <p>{key}</p>
      </div>
    ))}
  </div>
);

export default StatsCard;