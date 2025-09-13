import styles from './Button.module.css';

const Button = ({ children, onClick, variant = 'primary', color }) => {
  const handleClick = (e) => {
    onClick?.(e);
  };

  const buttonStyle = color ? { '--custom-color': color } : {};

  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      style={buttonStyle}
      onClick={handleClick}
    >
      {children}
      <span className={styles.ripple} />
    </button>
  );
};

export default Button;