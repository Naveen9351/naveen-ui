import styles from './Navbar2.module.css';

const Navbar2 = ({ logoUrl, menuItems, color, backgroundColor }) => {
  const navStyle = {
    '--custom-color': color || '#ffffff',
    '--custom-bg-color': backgroundColor || '#1a1a1a'
  };

  return (
    <nav className={styles.navbar} style={navStyle}>
      <div className={styles.logo}>
        <img src={logoUrl || 'https://via.placeholder.com/100x40'} alt="Logo" />
      </div>
      <ul className={styles.menu}>
        {menuItems?.map((item, index) => (
          <li key={index} className={styles.menuItem}>
            <a href={item.link || '#'} className={styles.menuLink}>
              {item.label}
            </a>
            {item.children && (
              <ul className={styles.dropdown}>
                {item.children.map((child, childIndex) => (
                  <li key={childIndex} className={styles.dropdownItem}>
                    <a href={child.link || '#'}>{child.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar2;