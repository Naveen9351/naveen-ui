import React from 'react';
import styles from './Cards.module.css';

const GalleryCard = ({ images, color, background, width, height, minWidth, minHeight, maxHeight, onClick }) => (
  <div 
    className={styles.galleryCard} 
    style={{ '--color': color, '--background': background, '--width': width, '--height': height, '--min-width': minWidth, '--min-height': minHeight, '--max-height': maxHeight }} 
    onClick={onClick}
  >
    {images.map((image, index) => (
      <img key={index} src={image} alt={`Gallery ${index}`} />
    ))}
  </div>
);

export default GalleryCard;