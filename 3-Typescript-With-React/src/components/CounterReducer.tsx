import { useReducer } from "react";
import { reducer } from "../utils/counterReducer";

function CounterReducer() {
  const [counter, dispatch] = useReducer(reducer, 0);

  function addOne() {
    dispatch({ type: "increment" });
  }
  function deductOne() {
    dispatch({ type: "decrement" });
  }
  return (
    <div>
      {counter}
      <button onClick={addOne}>+</button>
      <button onClick={deductOne}>-</button>
    </div>
  );
}

export default CounterReducer;
