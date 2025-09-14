import React from 'react';
import styles from './Cards.module.css';

const ProductCard = ({ title, price, image, color, background, width, height, minWidth, minHeight, maxHeight, onClick, cardbuttonColor, cardbuttonHoverColor, cardbuttonTextColor, buttonOnClick }) => (
  <div 
    className={styles.productCard} 
    style={{ '--color': color, '--background': background, '--width': width, '--height': height, '--min-width': minWidth, '--min-height': minHeight, '--max-height': maxHeight }} 
    onClick={onClick}
  >
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>${price}</p>
    <button 
      style={{ backgroundColor: cardbuttonColor, color: cardbuttonTextColor }} 
      onMouseEnter={e => e.currentTarget.style.backgroundColor = cardbuttonHoverColor} 
      onMouseLeave={e => e.currentTarget.style.backgroundColor = cardbuttonColor}
      onClick={buttonOnClick}
    >
      Add to Cart
    </button>
  </div>
);

export default ProductCard;