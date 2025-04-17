import { createContext, ReactNode, useState } from "react";

type ContextData = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const myContext = createContext<ContextData>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

const ContextAPI = ({ children }: { children: ReactNode }) => {
  const [count, serCount] = useState(0);
  const increment = () => {
    serCount((prev) => prev + 1);
  };
  const decrement = () => {
    serCount((prev) => prev - 1);
  };
  return (
    <myContext.Provider value={{ count, increment, decrement }}>
      {children}
    </myContext.Provider>
  );
};

export default ContextAPI;
