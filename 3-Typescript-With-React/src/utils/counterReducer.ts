export type CounterState = number;
export type CounterAction = { type: "increment" } | { type: "decrement" };

export const reducer = (prev: CounterState, action: CounterAction) => {
  if (action.type === "increment") {
    return prev + 1;
  } else if (action.type === "decrement") {
    return prev - 1;
  } else {
    return prev; // Default case to handle unknown actions
  }
};
