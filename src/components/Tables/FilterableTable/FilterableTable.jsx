import React, { useState, useEffect } from 'react';
import styles from './FilterableTable.module.css';

const FilterableTable = ({
  data,
  filters,
  actions = [], // New prop for actions (array of { icon: React.Component, onClick: function, label: string })
  backgroundColor = '#ffffffff',
  shadowColor = 'rgba(39, 39, 39, 0.15)',
  itemsPerPage = 5,
  headerColor = '#333',
  headerBgColor = '#f4f4f4',
  cellColor = '#333',
  cellBgColor = '#fff',
  fontSize = '14px',
  buttonBgColor = '#007bff',
  buttonHoverBgColor = '#0056b3',
  buttonDisabledBgColor = '#ccc',
}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [filterValues, setFilterValues] = useState({});
  const [tempFilterValues, setTempFilterValues] = useState({});
  const [filterOptions, setFilterOptions] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (data && data.length > 0) {
      // Reverse the data array to show last item first
      const reversedData = [...data].reverse();
      setFilteredData(reversedData);

      // Compute options for dropdowns and ranges
      const options = {};
      filters.forEach((filter) => {
        if (filter.type === 'dropdown') {
          const uniqueValues = [...new Set(reversedData.map((item) => item[filter.column]))];
          options[filter.column] = uniqueValues;
        } else if (filter.type === 'range') {
          const values = reversedData.map((item) => item[filter.column]).filter((v) => !isNaN(v));
          options[filter.column] = {
            min: Math.min(...values),
            max: Math.max(...values),
          };
        }
      });
      setFilterOptions(options);
    }
  }, [data, filters]);

  useEffect(() => {
    let tempData = [...data].reverse(); // Start with reversed data
    Object.keys(filterValues).forEach((column) => {
      const value = filterValues[column];
      const filter = filters.find((f) => f.column === column);
      if (filter) {
        if (filter.type === 'textbox' && value) {
          tempData = tempData.filter((item) =>
            item[column].toString().toLowerCase().includes(value.toLowerCase())
          );
        } else if (filter.type === 'dropdown' && value) {
          tempData = tempData.filter((item) => item[column] === value);
        } else if (filter.type === 'range' && value) {
          const { min, max } = value;
          tempData = tempData.filter((item) => {
            const itemVal = parseFloat(item[column]);
            return (!min || itemVal >= parseFloat(min)) && (!max || itemVal <= parseFloat(max));
          });
        }
      }
    });
    setFilteredData(tempData);
    setCurrentPage(1); // Reset to first page on filter change
  }, [filterValues, data, filters]);

  const handleFilterChange = (column, type, newValue) => {
    setTempFilterValues((prev) => {
      if (type === 'range') {
        return { ...prev, [column]: { ...prev[column], ...newValue } };
      }
      return { ...prev, [column]: newValue };
    });
  };

  const applyFilters = () => {
    setFilterValues(tempFilterValues);
    setShowFilters(false); // Close the popup after applying filters
  };

  const clearFilters = () => {
    setTempFilterValues({});
    setFilterValues({});
    setShowFilters(false); // Close the popup if open
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
    // Reset tempFilterValues to current filterValues when opening the popup
    if (!showFilters) {
      setTempFilterValues(filterValues);
    }
  };

  const columns = data.length > 0 ? Object.keys(data[0]) : [];

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className={styles.container} style={{ backgroundColor, boxShadow: `0 2px 10px ${shadowColor}` }}>
      <div className={styles.buttonContainer}>
        <button
          onClick={toggleFilters}
          className={styles.filterButton}
          style={{ backgroundColor: buttonBgColor }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverBgColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonBgColor)}
        >
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
        <button
          onClick={clearFilters}
          className={styles.filterButton}
          style={{
            backgroundColor: Object.keys(filterValues).length === 0 ? buttonDisabledBgColor : buttonBgColor,
            marginLeft: '20px',
          }}
          onMouseOver={(e) => {
            if (Object.keys(filterValues).length > 0) {
              e.currentTarget.style.backgroundColor = buttonHoverBgColor;
            }
          }}
          onMouseOut={(e) => {
            if (Object.keys(filterValues).length > 0) {
              e.currentTarget.style.backgroundColor = buttonBgColor;
            }
          }}
          disabled={Object.keys(filterValues).length === 0}
          aria-label="Clear filters"
        >
          Clear Filters
        </button>
      </div>
      {showFilters && (
        <div className={styles.overlay}>
          <div className={styles.sidebar}>
            <button
              onClick={toggleFilters}
              className={styles.filterButton}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: buttonBgColor,
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverBgColor)}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonBgColor)}
              aria-label="Close filters"
            >
              ✕
            </button>
            <h2>Filters</h2>
            {filters.map((filter) => {
              const label = filter.label || filter.column.charAt(0).toUpperCase() + filter.column.slice(1);
              return (
                <div key={filter.column} className={styles.filterGroup}>
                  <label>{label}</label>
                  {filter.type === 'textbox' && (
                    <input
                      type="text"
                      value={tempFilterValues[filter.column] || ''}
                      onChange={(e) => handleFilterChange(filter.column, 'textbox', e.target.value)}
                      className={styles.input}
                    />
                  )}
                  {filter.type === 'dropdown' && filterOptions[filter.column] && (
                    <select
                      value={tempFilterValues[filter.column] || ''}
                      onChange={(e) => handleFilterChange(filter.column, 'dropdown', e.target.value)}
                      className={styles.select}
                    >
                      <option value="">All</option>
                      {filterOptions[filter.column].map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  )}
                  {filter.type === 'range' && filterOptions[filter.column] && (
                    <div className={styles.range}>
                      <input
                        type="number"
                        placeholder={`Min (${filterOptions[filter.column].min})`}
                        value={tempFilterValues[filter.column]?.min || ''}
                        onChange={(e) => handleFilterChange(filter.column, 'range', { min: e.target.value })}
                        className={styles.input}
                      />
                      <input
                        type="number"
                        placeholder={`Max (${filterOptions[filter.column].max})`}
                        value={tempFilterValues[filter.column]?.max || ''}
                        onChange={(e) => handleFilterChange(filter.column, 'range', { max: e.target.value })}
                        className={styles.input}
                      />
                    </div>
                  )}
                </div>
              );
            })}
            <button
              onClick={applyFilters}
              className={styles.filterButton}
              style={{
                marginTop: '20px',
                width: '100%',
                backgroundColor: buttonBgColor,
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverBgColor)}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonBgColor)}
              aria-label="Apply filters"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
      <div className={styles.tableContainer}>
        <table className={styles.table} style={{ color: cellColor, backgroundColor: cellBgColor, fontSize }}>
          <thead>
            <tr style={{ color: headerColor, backgroundColor: headerBgColor }}>
              {columns.map((col) => (
                <th key={col}>{col}</th>
              ))}
              {actions.length > 0 && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, index) => (
              <tr key={index}>
                {columns.map((col) => (
                  <td key={col}>{row[col]}</td>
                ))}
                {actions.length > 0 && (
                  <td>
                    {actions.map(({ icon: Icon, onClick, label }, actionIndex) => (
                      <button
                        key={actionIndex}
                        onClick={() => onClick(row)}
                        className={styles.actionButton}
                        title={label}
                        style={{
                          backgroundColor: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          marginRight: '8px',
                        }}
                      >
                        <Icon size={16} color={cellColor} />
                      </button>
                    ))}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        {filteredData.length === 0 && <p className={styles.noData}>No data matches the filters.</p>}
        {filteredData.length > 0 && (
          <div className={styles.pagination}>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={styles.pageButton}
              style={{
                backgroundColor: currentPage === 1 ? buttonDisabledBgColor : buttonBgColor,
              }}
              onMouseOver={(e) => {
                if (currentPage !== 1) e.currentTarget.style.backgroundColor = buttonHoverBgColor;
              }}
              onMouseOut={(e) => {
                if (currentPage !== 1) e.currentTarget.style.backgroundColor = buttonBgColor;
              }}
            >
              Previous
            </button>
            <span className={styles.pageInfo}>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={styles.pageButton}
              style={{
                backgroundColor: currentPage === totalPages ? buttonDisabledBgColor : buttonBgColor,
              }}
              onMouseOver={(e) => {
                if (currentPage !== totalPages) e.currentTarget.style.backgroundColor = buttonHoverBgColor;
              }}
              onMouseOut={(e) => {
                if (currentPage !== totalPages) e.currentTarget.style.backgroundColor = buttonBgColor;
              }}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterableTable;