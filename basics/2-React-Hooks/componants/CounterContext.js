const intialValue = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    case "addAmount":
      return state + +action.payload;
    case "decrementAmount":
      return state - +action.payload;

    default:
      return state;
  }
};

export { intialValue, reducer };
