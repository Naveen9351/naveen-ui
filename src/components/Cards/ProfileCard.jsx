import React from 'react';
import styles from './Cards.module.css';

const ProfileCard = ({ name, role, image, color, background, width, height, minWidth, minHeight, maxHeight, onClick }) => (
  <div 
    className={styles.profileCard} 
    style={{ '--color': color, '--background': background, '--width': width, '--height': height, '--min-width': minWidth, '--min-height': minHeight, '--max-height': maxHeight }} 
    onClick={onClick}
  >
    {image && <img src={image} alt={name} />}
    <h2>{name}</h2>
    <p>{role}</p>
  </div>
);

export default ProfileCard;