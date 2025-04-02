import "./styles.css";
import React, { useState } from "react";

const Calculator = () => {
  const [fieldData, setFieldData] = useState("");
  function addData(data) {
    setFieldData((prev) => prev + data);
  }
  function clearData() {
    setFieldData("");
  }
  function calc() {
    setFieldData(eval(fieldData));
  }
  return (
    <div className="calculator">
      <input type="text" value={fieldData} className="value" readOnly />
      <span className="num clear" onClick={clearData}>
        C
      </span>
      <span onClick={() => addData("/")}>/</span>
      <span onClick={() => addData("*")}>*</span>
      <span onClick={() => addData("7")}>7</span>
      <span onClick={() => addData("8")}>8</span>
      <span onClick={() => addData("9")}>9</span>
      <span onClick={() => addData("-")}>-</span>
      <span onClick={() => addData("4")}>4</span>
      <span onClick={() => addData("5")}>5</span>
      <span onClick={() => addData("6")}>6</span>
      <span className="plus" onClick={() => addData("+")}>
        +
      </span>
      <span onClick={() => addData("1")}>1</span>
      <span onClick={() => addData("2")}>2</span>
      <span onClick={() => addData("3")}>3</span>
      <span onClick={() => addData("0")}>0</span>
      <span onClick={() => addData("00")}>00</span>
      <span onClick={(e) => addData(e.target.innerText)}>.</span>
      <span className="equal" onClick={calc}>
        =
      </span>
    </div>
  );
};

export default Calculator;
