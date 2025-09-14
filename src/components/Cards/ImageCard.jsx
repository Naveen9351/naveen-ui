import React from 'react';
import styles from './Cards.module.css';

const ImageCard = ({ image, caption, color, background, width, height, minWidth, minHeight, maxHeight, onClick }) => (
  <div 
    className={styles.imageCard} 
    style={{ '--color': color, '--background': background, '--width': width, '--height': height, '--min-width': minWidth, '--min-height': minHeight, '--max-height': maxHeight }} 
    onClick={onClick}
  >
    <img src={image} alt={caption} />
    <p>{caption}</p>
  </div>
);

export default ImageCard;