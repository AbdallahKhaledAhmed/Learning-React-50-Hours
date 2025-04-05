import React from "react";
import Input from "../components/Input";
const Price = ({ setPriceQuery }) => {
  return (
    <div>
      <h2 className="sidebar-title">Price</h2>

      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            value="0"
            name="Price"
            onChange={() => setPriceQuery("0")}
            defaultChecked
          />
          <span className="checkmark"></span>All
        </label>
        <Input
          value="50"
          title="$0 - $50"
          name="Price"
          handleChange={setPriceQuery}
        />
        <Input
          value="100"
          title="$50 - $100"
          name="Price"
          handleChange={setPriceQuery}
        />
        <Input
          value="150"
          title="$100 - $150"
          name="Price"
          handleChange={setPriceQuery}
        />
        <Input
          value="151"
          title="Over $150"
          name="Price"
          handleChange={setPriceQuery}
        />
      </div>
    </div>
  );
};

export default Price;
