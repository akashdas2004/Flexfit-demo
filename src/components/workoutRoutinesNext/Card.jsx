// src/components/workoutRoutinesNext/Card.jsx

import React from 'react';

function Card({ children, className, ...props }) {
  return (
    <div className={`bg-white shadow-lg rounded-md ${className}`} {...props}>
      {children}
    </div>
  );
}

export default Card;  // Default export of the Card component
