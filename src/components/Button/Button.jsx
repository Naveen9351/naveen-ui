import styles from './Button.module.css';

const Button = ({ children, onClick, variant = 'primary', size = 'md', color, disabled, className = '', ...props }) => {
  const handleClick = (e) => {
    if (disabled) return;
    onClick?.(e);
  };

  const buttonStyle = color ? { '--nv-custom-color': color } : {};

  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
      style={buttonStyle}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;