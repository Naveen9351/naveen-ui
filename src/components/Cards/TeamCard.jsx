import React from 'react';
import styles from './Cards.module.css';

const TeamCard = ({ name, position, bio, color, background, width, height, minWidth, minHeight, maxHeight, onClick }) => (
  <div 
    className={styles.teamCard} 
    style={{ '--color': color, '--background': background, '--width': width, '--height': height, '--min-width': minWidth, '--min-height': minHeight, '--max-height': maxHeight }} 
    onClick={onClick}
  >
    <h3>{name}</h3>
    <p>{position}</p>
    <p>{bio}</p>
  </div>
);

export default TeamCard;