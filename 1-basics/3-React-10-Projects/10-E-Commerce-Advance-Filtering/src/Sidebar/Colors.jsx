import React from "react";
import Input from "../components/Input";
const Colors = ({ setColorsQuery }) => {
  return (
    <div>
      <h2 className="sidebar-title">Colors</h2>

      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            value=""
            name="Color"
            onChange={() => {
              setColorsQuery("");
            }}
            defaultChecked
          />
          <span className="checkmark all"></span>All
        </label>
        <Input
          value="black"
          title="Black"
          name="Color"
          color="black"
          handleChange={setColorsQuery}
        />
        <Input
          value="blue"
          title="Blue"
          name="Color"
          color="blue"
          handleChange={setColorsQuery}
        />
        <Input
          value="red"
          title="Red"
          name="Color"
          color="red"
          handleChange={setColorsQuery}
        />
        <Input
          value="green"
          title="Green"
          name="Color"
          color="green"
          handleChange={setColorsQuery}
        />
        <Input
          value="white"
          title="White"
          name="Color"
          color="#eee"
          handleChange={setColorsQuery}
        />
      </div>
    </div>
  );
};

export default Colors;
