import React from 'react';
import styles from './Cards.module.css';

const BlogCard = ({ title, excerpt, image, color, background, width, height, minWidth, minHeight, maxHeight, onClick }) => (
  <div 
    className={styles.blogCard} 
    style={{ '--color': color, '--background': background, '--width': width, '--height': height, '--min-width': minWidth, '--min-height': minHeight, '--max-height': maxHeight }} 
    onClick={onClick}
  >
    {image && <img src={image} alt={title} />}
    <h3>{title}</h3>
    <p>{excerpt}</p>
  </div>
);

export default BlogCard;