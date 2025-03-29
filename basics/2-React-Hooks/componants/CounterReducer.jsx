import { useReducer, useState } from "react";
import { intialValue, reducer } from "./CounterContext";
const CounterReducer = () => {
  const [count, dispatch] = useReducer(reducer, intialValue);
  const [val, setVal] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button
        onClick={() => dispatch({ type: "decrementAmount", payload: "5" })}
      >
        -5
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>

      <button onClick={() => dispatch({ type: "add" })}>+</button>
      <button onClick={() => dispatch({ type: "addAmount", payload: "5" })}>
        +5
      </button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "addAmount", payload: val });
        }}
      >
        <input type="number" onChange={(e) => setVal(e.target.value)} />
        <button>Add</button>
      </form>
    </>
  );
};

export default CounterReducer;
