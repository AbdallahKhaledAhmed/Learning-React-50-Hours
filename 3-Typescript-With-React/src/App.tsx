import React, { useContext } from "react";
import Button from "./components/Button";
import User from "./components/User";
import UserInfo from "./components/UserInfo";
import AdminInfo from "./components/AdminInfo";
import { myContext } from "./components/ContextAPI";
function App() {
  const { count, increment, decrement } = useContext(myContext);

  return (
    <>
      <User name="Abdallah" age={20} isStudent={true} />
      <Button
        lableText="Cool Button"
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          console.log("hello world");
        }}
        isDisabled={false}
      />
      <UserInfo id={4} email="b@b.com" name="Abdallah" salary={15000} />
      <AdminInfo
        id={1}
        email="a@a.com"
        name="Abdallah Khaled"
        salary={50000}
        role="Team Lead"
      />
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  );
}

export default App;
