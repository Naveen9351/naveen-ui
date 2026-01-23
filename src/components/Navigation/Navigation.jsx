import React from 'react';
import styles from './Navigation.module.css';

export const Breadcrumbs = ({ items = [] }) => (
    <nav className={styles.breadcrumbs}>
        {items.map((item, index) => (
            <React.Fragment key={index}>
                {index > 0 && <span className={styles.separator}>/</span>}
                <a
                    href={item.href || '#'}
                    className={`${styles.breadcrumbItem} ${item.active ? styles.active : ''}`}
                >
                    {item.label}
                </a>
            </React.Fragment>
        ))}
    </nav>
);

export const Tabs = ({ items = [], activeTab, onChange }) => (
    <div className={styles.tabsContainer}>
        <div className={styles.tabList}>
            {items.map((item, index) => (
                <button
                    key={index}
                    className={`${styles.tabItem} ${activeTab === index ? styles.activeTab : ''}`}
                    onClick={() => onChange(index)}
                >
                    {item.label}
                </button>
            ))}
        </div>
        <div className={styles.tabPanel}>
            {items[activeTab]?.content}
        </div>
    </div>
);

export const Pagination = ({ current, total, onPageChange }) => {
    const pages = Array.from({ length: total }, (_, i) => i + 1);
    return (
        <div className={styles.pagination}>
            <button
                disabled={current === 1}
                onClick={() => onPageChange(current - 1)}
            >
                Prev
            </button>
            {pages.map(p => (
                <button
                    key={p}
                    className={current === p ? styles.activePage : ''}
                    onClick={() => onPageChange(p)}
                >
                    {p}
                </button>
            ))}
            <button
                disabled={current === total}
                onClick={() => onPageChange(current + 1)}
            >
                Next
            </button>
        </div>
    );
};
