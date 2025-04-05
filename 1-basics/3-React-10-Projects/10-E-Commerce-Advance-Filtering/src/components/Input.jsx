import React from "react";

const Input = ({ value, title, name, color, handleChange }) => {
  return (
    <label className="sidebar-label-container">
      <input
        type="radio"
        value={value}
        name={name}
        onChange={(e) => handleChange(e.target.value)}
      />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
};

export default Input;
