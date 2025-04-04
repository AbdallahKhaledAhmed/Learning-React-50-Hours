import React from "react";
import "./category.css";
const Category = () => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input value="sneakers" title="Sneakers" name="test" />
        <Input value="flats" title="Flats" name="test" />
        <Input value="sandals" title="Sandals" name="test" />
        <Input value="heels" title="Heels" name="test" />
      </div>
    </div>
  );
};

export default Category;
