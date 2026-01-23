import React from 'react';
import styles from './Loaders.module.css';

export const PulseLoader = ({ color = 'var(--nv-primary)', size = '40px' }) => (
    <div
        className={styles.pulse}
        style={{ '--loader-color': color, '--loader-size': size }}
    />
);

export const SpinnerLoader = ({ color = 'var(--nv-primary)', size = '40px' }) => (
    <div
        className={styles.spinner}
        style={{ '--loader-color': color, '--loader-size': size }}
    />
);

export const DotsLoader = ({ color = 'var(--nv-primary)', size = '10px' }) => (
    <div className={styles.dots} style={{ '--loader-color': color, '--loader-size': size }}>
        <div />
        <div />
        <div />
    </div>
);

export const WaveLoader = ({ color = 'var(--nv-primary)', height = '40px' }) => (
    <div className={styles.wave} style={{ '--loader-color': color, '--loader-height': height }}>
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
);

export const Skeleton = ({ width = '100%', height = '20px', borderRadius = 'var(--nv-radius)' }) => (
    <div
        className={styles.skeleton}
        style={{ width, height, borderRadius }}
    />
);
