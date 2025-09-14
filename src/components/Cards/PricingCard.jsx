import React from 'react';
import styles from './Cards.module.css';

const PricingCard = ({ plan, price, features, color, background, width, height, minWidth, minHeight, maxHeight, onClick, buttonOnClick }) => (
  <div 
    className={styles.pricingCard} 
    style={{ '--color': color, '--background': background, '--width': width, '--height': height, '--min-width': minWidth, '--min-height': minHeight, '--max-height': maxHeight }} 
    onClick={onClick}
  >
    <h3>{plan}</h3>
    <p>${price}/mo</p>
    <ul>
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <button onClick={buttonOnClick}>Subscribe</button>
  </div>
);

export default PricingCard;