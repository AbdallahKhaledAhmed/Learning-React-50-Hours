import React from "react";
import { useState } from "react";

const Counter = () => {
  const [counter, setcounter] = useState(0);

  return (
    <div>
      {counter}
      <button onClick={() => setcounter(counter + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
