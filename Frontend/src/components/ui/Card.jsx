import React from 'react';

const Card = ({ children, className = '', noPadding = false, ...props }) => {
  return (
    <div 
      className={`bg-surface border border-border rounded-2xl shadow-xl overflow-hidden shadow-black/20 ${noPadding ? '' : 'p-6'} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
