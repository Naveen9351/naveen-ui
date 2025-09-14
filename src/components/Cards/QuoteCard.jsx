import React from 'react';
import styles from './Cards.module.css';

const QuoteCard = ({ quote, author, color, background, width, height, minWidth, minHeight, maxHeight, onClick }) => (
  <div 
    className={styles.quoteCard} 
    style={{ '--color': color, '--background': background, '--width': width, '--height': height, '--min-width': minWidth, '--min-height': minHeight, '--max-height': maxHeight }} 
    onClick={onClick}
  >
    <p>"{quote}"</p>
    <p>— {author}</p>
  </div>
);

export default QuoteCard;