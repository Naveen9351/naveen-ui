import React from 'react';

const Button = ({ children, onClick, variant = 'primary' }) => {
  const styles = {
    primary: 'bg-blue-500 text-white px-4 py-2 rounded',
    secondary: 'bg-gray-500 text-white px-4 py-2 rounded',
  };
  return (
    <button className={styles[variant]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;