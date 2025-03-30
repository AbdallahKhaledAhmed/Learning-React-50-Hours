import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";
const UserSetter = () => {
  const contextSetter = useContext(UserContext).setUser;
  const [myData, setMyData] = useState({});
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          contextSetter(myData);
        }}
      >
        <input
          type="text"
          onBlur={(e) => setMyData({ ...myData, name: e.target.value })}
        />
        <input
          type="number"
          onBlur={(e) => setMyData({ ...myData, age: e.target.value })}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UserSetter;
