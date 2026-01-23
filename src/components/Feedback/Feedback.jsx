import React from 'react';
import styles from './Feedback.module.css';

export const Alert = ({ children, title, variant = 'info', onClose, className = '' }) => (
    <div className={`${styles.alert} ${styles[variant]} ${className}`}>
        <div className={styles.alertContent}>
            {title && <strong className={styles.alertTitle}>{title}</strong>}
            <div className={styles.alertMessage}>{children}</div>
        </div>
        {onClose && (
            <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
                &times;
            </button>
        )}
    </div>
);

export const Badge = ({ children, variant = 'primary', size = 'md', className = '' }) => (
    <span className={`${styles.badge} ${styles[variant]} ${styles[size]} ${className}`}>
        {children}
    </span>
);

export const Progress = ({ value = 0, max = 100, variant = 'primary', showValue = false }) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));
    return (
        <div className={styles.progressContainer}>
            <div
                className={`${styles.progressBar} ${styles[variant]}`}
                style={{ width: `${percentage}%` }}
            />
            {showValue && <span className={styles.progressValue}>{Math.round(percentage)}%</span>}
        </div>
    );
};
