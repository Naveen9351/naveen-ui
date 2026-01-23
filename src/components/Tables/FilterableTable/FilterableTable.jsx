import React, { useState, useMemo } from 'react';
import styles from './FilterableTable.module.css';

const FilterableTable = ({
  data = [],
  columns = [],
  itemsPerPage = 10,
  stickyHeader = true,
  className = ''
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({});

  const filteredData = useMemo(() => {
    return data.filter(row => {
      return Object.entries(filters).every(([col, val]) => {
        if (!val) return true;
        return String(row[col]).toLowerCase().includes(String(val).toLowerCase());
      });
    });
  }, [data, filters]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleFilterChange = (col, val) => {
    setFilters(prev => ({ ...prev, [col]: val }));
    setCurrentPage(1);
  };

  return (
    <div className={`${styles.tableWrapper} ${className}`}>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead className={stickyHeader ? styles.stickyHeader : ''}>
            <tr>
              {columns.map(col => (
                <th key={col.key}>
                  <div className={styles.headerContent}>
                    <span>{col.label}</span>
                    {col.filterable && (
                      <input
                        type="text"
                        placeholder="Search..."
                        className={styles.filterInput}
                        onChange={(e) => handleFilterChange(col.key, e.target.value)}
                      />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, i) => (
              <tr key={i}>
                {columns.map(col => (
                  <td key={col.key}>{col.render ? col.render(row[col.key], row) : row[col.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {filteredData.length === 0 && (
          <div className={styles.noData}>No results found.</div>
        )}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => p - 1)}
            className={styles.pageBtn}
          >
            Previous
          </button>
          <span className={styles.pageInfo}>
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(p => p + 1)}
            className={styles.pageBtn}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterableTable;