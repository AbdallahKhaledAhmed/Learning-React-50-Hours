import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
    </div>
  );
};

export default Counter;
