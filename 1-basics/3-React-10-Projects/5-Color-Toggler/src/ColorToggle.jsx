import { useState } from "react";
import "./styles.css";

const ColorToggle = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  return (
    <section style={{ backgroundColor, color: textColor }}>
      <button
        style={{ color: textColor, border: `2px solid ${textColor}` }}
        onClick={() => {
          setBackgroundColor(backgroundColor === "white" ? "black" : "white");
          setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
        }}
      >
        {backgroundColor.toUpperCase()} Mode
      </button>
      <section className="content">
        <h1>
          Welcome to the
          <br /> real world! ...
        </h1>
      </section>
    </section>
  );
};

export default ColorToggle;
