import { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const counter = useRef(null);
  useEffect(() => {
    counter.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(counter.current);
    };
  }, []);
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          clearInterval(counter.current);
        }}
      >
        Stop
      </button>
    </div>
  );
};

export default Timer;
