import { useState } from "react";
import "./styles.css";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <p className="number">{count}</p>
      <div className="btns-container">
        <button
          className="increment"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +
        </button>
        <button
          className="increment"
          onClick={() => setCount((prev) => prev - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default App;
