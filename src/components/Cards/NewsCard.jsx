import React from 'react';
import styles from './Cards.module.css';

const NewsCard = ({ headline, summary, color, background, width, height, minWidth, minHeight, maxHeight, onClick }) => (
  <div 
    className={styles.newsCard} 
    style={{ '--color': color, '--background': background, '--width': width, '--height': height, '--min-width': minWidth, '--min-height': minHeight, '--max-height': maxHeight }} 
    onClick={onClick}
  >
    <h3>{headline}</h3>
    <p>{summary}</p>
  </div>
);

export default NewsCard;