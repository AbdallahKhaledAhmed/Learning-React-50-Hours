import React from "react";
import Input from "../components/Input";
const Category = ({ setCategoryQuery }) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            value=""
            name="Category"
            onChange={() => setCategoryQuery("")}
            defaultChecked
          />
          <span className="checkmark"></span>All
        </label>
        <Input
          value="sneakers"
          title="Sneakers"
          name="Category"
          handleChange={setCategoryQuery}
        />
        <Input
          value="flats"
          title="Flats"
          name="Category"
          handleChange={setCategoryQuery}
        />
        <Input
          value="sandals"
          title="Sandals"
          name="Category"
          handleChange={setCategoryQuery}
        />
        <Input
          value="heels"
          title="Heels"
          name="Category"
          handleChange={setCategoryQuery}
        />
      </div>
    </div>
  );
};

export default Category;
