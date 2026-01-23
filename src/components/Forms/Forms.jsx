import React from 'react';
import styles from './Forms.module.css';

export const Input = ({ label, error, className = '', ...props }) => (
    <div className={`${styles.formControl} ${className}`}>
        {label && <label className={styles.label}>{label}</label>}
        <input
            className={`${styles.input} ${error ? styles.inputError : ''}`}
            {...props}
        />
        {error && <span className={styles.errorText}>{error}</span>}
    </div>
);

export const Switch = ({ label, checked, onChange, disabled }) => (
    <label className={`${styles.switch} ${disabled ? styles.disabled : ''}`}>
        <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            disabled={disabled}
        />
        <span className={styles.slider} />
        {label && <span className={styles.switchLabel}>{label}</span>}
    </label>
);

export const Select = ({ label, options = [], error, className = '', ...props }) => (
    <div className={`${styles.formControl} ${className}`}>
        {label && <label className={styles.label}>{label}</label>}
        <select
            className={`${styles.select} ${error ? styles.inputError : ''}`}
            {...props}
        >
            {options.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
        </select>
        {error && <span className={styles.errorText}>{error}</span>}
    </div>
);
