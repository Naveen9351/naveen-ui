import React from 'react';
import styles from './Cards.module.css';

const DynamicCard = ({ data, color, background, width, height, minWidth, minHeight, maxHeight, onClick }) => (
  <div 
    className={styles.dynamicCard} 
    style={{ '--color': color, '--background': background, '--width': width, '--height': height, '--min-width': minWidth, '--min-height': minHeight, '--max-height': maxHeight }} 
    onClick={onClick}
  >
    {data.image && <img src={data.image} alt={data.title} />}
    <h3>{data.title}</h3>
    <p>{data.description}</p>
    {data.details && (
      <ul>
        {data.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    )}
    {data.fields && (
      <div>
        {Object.entries(data.fields).map(([key, value], index) => (
          <p key={index}>{key}: {value}</p>
        ))}
      </div>
    )}
  </div>
);

export default DynamicCard;