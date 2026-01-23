import React from 'react';
import styles from './Misc.module.css';

export const Divider = ({ vertical, children }) => (
    <div className={`${styles.divider} ${vertical ? styles.vertical : styles.horizontal}`}>
        {children && <span className={styles.dividerText}>{children}</span>}
    </div>
);

export const Spacer = ({ size = 'md' }) => (
    <div className={styles[size]} />
);

export const Tag = ({ children, variant = 'primary', onClose }) => (
    <span className={`${styles.tag} ${styles[variant]}`}>
        {children}
        {onClose && <button onClick={onClose} className={styles.tagClose}>&times;</button>}
    </span>
);
