import { useContext } from "react";
import { MyName } from "../src/main";

const UseContext = () => {
  return <div>{useContext(MyName)}</div>;
};

export default UseContext;
