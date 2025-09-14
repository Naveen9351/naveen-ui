import React from 'react';
import styles from './Cards.module.css';

const EventCard = ({ title, date, location, color, background, width, height, minWidth, minHeight, maxHeight, onClick }) => (
  <div 
    className={styles.eventCard} 
    style={{ '--color': color, '--background': background, '--width': width, '--height': height, '--min-width': minWidth, '--min-height': minHeight, '--max-height': maxHeight }} 
    onClick={onClick}
  >
    <h3>{title}</h3>
    <p>{date}</p>
    <p>{location}</p>
  </div>
);

export default EventCard;