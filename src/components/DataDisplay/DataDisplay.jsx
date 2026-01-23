import React from 'react';
import styles from './DataDisplay.module.css';

export const Avatar = ({ src, name, size = 'md', className = '' }) => {
    const getInitials = (n) => n.split(' ').map(x => x[0]).join('').toUpperCase();
    return (
        <div className={`${styles.avatar} ${styles[size]} ${className}`}>
            {src ? (
                <img src={src} alt={name} className={styles.avatarImg} />
            ) : (
                <span className={styles.initials}>{getInitials(name || 'User')}</span>
            )}
        </div>
    );
};

export const Accordion = ({ items = [] }) => {
    const [activeIndex, setActiveIndex] = React.useState(null);

    return (
        <div className={styles.accordion}>
            {items.map((item, index) => (
                <div key={index} className={styles.accordionItem}>
                    <button
                        className={styles.accordionHeader}
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    >
                        {item.title}
                        <span className={`${styles.chevron} ${activeIndex === index ? styles.rotate : ''}`}>▼</span>
                    </button>
                    <div className={`${styles.accordionContent} ${activeIndex === index ? styles.show : ''}`}>
                        {item.content}
                    </div>
                </div>
            ))}
        </div>
    );
};

export const Tooltip = ({ children, text, position = 'top' }) => (
    <div className={styles.tooltipContainer}>
        {children}
        <div className={`${styles.tooltip} ${styles[position]}`}>
            {text}
        </div>
    </div>
);
