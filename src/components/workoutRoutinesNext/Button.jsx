// src/components/workoutRoutinesNext/Button.jsx

import React from "react";

function Button({ children, className, ...props }) {
  return (
    <button className={`px-4 py-2 rounded-md ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
