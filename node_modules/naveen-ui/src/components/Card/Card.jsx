import React from 'react';

const Card = ({ title, children }) => {
  return (
    <div className="border rounded p-4 shadow">
      {title && <h2 className="text-xl mb-2">{title}</h2>}
      {children}
    </div>
  );
};

export default Card;