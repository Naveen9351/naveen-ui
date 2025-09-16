import React, { useState, useEffect, useRef } from 'react';
import styles from './FilterableProductCards.module.css';

const FilterableProductCards = ({
  data,
  filters,
  itemsPerPage = 6,
  cardBgColor = '#fff',
  cardHeight = '400px',
  cardWidth = '250px',
  buttonBgColor = '#007bff',
  buttonHoverBgColor = '#0056b3',
  buttonDisabledBgColor = '#ccc',
  onClickCard = () => {},
  onAddToCart = () => {},
}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);
  const [filterValues, setFilterValues] = useState({});
  const [tempFilterValues, setTempFilterValues] = useState({});
  const [filterOptions, setFilterOptions] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const sentinelRef = useRef(null);

  useEffect(() => {
    if (data && Array.isArray(data) && data.length > 0) {
      // Reverse the data array to show last item first
      const reversedData = [...data].reverse();
      setFilteredData(reversedData);
      setDisplayedData(reversedData.slice(0, itemsPerPage));
      setHasMore(reversedData.length > itemsPerPage);

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
    } else {
      setFilteredData([]);
      setDisplayedData([]);
      setFilterOptions({});
      setHasMore(false);
    }
  }, [data, filters, itemsPerPage]);

  useEffect(() => {
    let tempData = data && Array.isArray(data) ? [...data].reverse() : [];
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
    setDisplayedData(tempData.slice(0, itemsPerPage));
    setHasMore(tempData.length > itemsPerPage);
  }, [filterValues, data, filters, itemsPerPage]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setDisplayedData((prev) => {
            const newLength = prev.length + itemsPerPage;
            const newData = filteredData.slice(0, newLength);
            setHasMore(newLength < filteredData.length);
            return newData;
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, [filteredData, hasMore, itemsPerPage]);

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

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button
          onClick={toggleFilters}
          className={styles.filterButton}
          style={{ backgroundColor: buttonBgColor }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverBgColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonBgColor)}
          aria-label="Toggle filters"
        >
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
        <button
          onClick={clearFilters}
          className={styles.filterButton}
          style={{
            backgroundColor: Object.keys(filterValues).length === 0 ? buttonDisabledBgColor : buttonBgColor,
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
      <div className={styles.cardsContainer}>
        {displayedData.map((product, index) => (
          <div
            key={index}
            className={styles.card}
            style={{
              backgroundColor: cardBgColor,
              height: cardHeight,
              width: cardWidth,
            }}
            onClick={() => onClickCard(product)}
          >
            {product.image && (
              <img
                src={product.image}
                alt={product.title || 'Product'}
                className={styles.cardImage}
              />
            )}
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{product.title || 'No Title'}</h3>
              <p className={styles.cardDescription}>{product.description || 'No Description'}</p>
              <p className={styles.cardPrice}>
                {product.price ? `$${parseFloat(product.price).toFixed(2)}` : 'N/A'}
              </p>
              <p className={styles.cardStars}>
                {product.stars ? '★'.repeat(Math.round(product.stars)) : 'No Rating'}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click from triggering
                  onAddToCart(product);
                }}
                className={styles.cardButton}
                style={{ backgroundColor: buttonBgColor }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverBgColor)}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonBgColor)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {filteredData.length === 0 && <p className={styles.noData}>No products match the filters.</p>}
      {hasMore && <div ref={sentinelRef} className={styles.sentinel} />}
    </div>
  );
};

export default FilterableProductCards;