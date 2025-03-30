import { useReducer } from "react";

const useStateClone = (intital) => {
  const [state, dispatch] = useReducer((prevState, action) => {
    if (typeof action.payload === "function") {
      return action.payload(prevState); // If payload is a function, call it with prevState
    } else {
      return action.payload; // Otherwise, just use the payload
    }
  }, intital);

  const setState = (val) => {
    dispatch({ payload: val });
  };
  return [state, setState];
};

export default useStateClone;
