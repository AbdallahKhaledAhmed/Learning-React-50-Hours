import React, { useState, useEffect } from "react";

const BasicEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = count;
  }, [count]);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </>
  );
};

export default BasicEffect;
