import React from "react";

const Footer = ({ children }) => {
  return (
    <footer>
      <p>&copy; 2025 My Website</p>
      <div>{children}</div>
    </footer>
  );
};

export default Footer;
