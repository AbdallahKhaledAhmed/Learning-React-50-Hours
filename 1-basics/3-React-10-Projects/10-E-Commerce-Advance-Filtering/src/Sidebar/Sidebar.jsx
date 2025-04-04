import React from "react";

import "./sidebar.css";
import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <a href="#">
          <h1>🛒</h1>
        </a>
      </div>
      <Category />
      <Colors />
      <Price />
    </section>
  );
};

export default Sidebar;
