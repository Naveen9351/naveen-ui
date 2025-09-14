import React from 'react';
import styles from './Cards.module.css';

const TestimonialCard = ({ name, testimonial, image, color, background, width, height, minWidth, minHeight, maxHeight, onClick }) => (
  <div 
    className={styles.testimonialCard} 
    style={{ '--color': color, '--background': background, '--width': width, '--height': height, '--min-width': minWidth, '--min-height': minHeight, '--max-height': maxHeight }} 
    onClick={onClick}
  >
    {image && <img src={image} alt={name} />}
    <p>{testimonial}</p>
    <p>{name}</p>
  </div>
);

export default TestimonialCard;