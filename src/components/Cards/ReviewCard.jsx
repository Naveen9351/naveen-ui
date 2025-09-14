import React from 'react';
import styles from './Cards.module.css';

const ReviewCard = ({ reviewer, rating, comment, color, background, width, height, minWidth, minHeight, maxHeight, onClick }) => (
  <div 
    className={styles.reviewCard} 
    style={{ '--color': color, '--background': background, '--width': width, '--height': height, '--min-width': minWidth, '--min-height': minHeight, '--max-height': maxHeight }} 
    onClick={onClick}
  >
    <p>{reviewer}</p>
    <p>{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</p>
    <p>{comment}</p>
  </div>
);

export default ReviewCard;