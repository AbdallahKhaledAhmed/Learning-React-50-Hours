import { createContext, useState } from "react";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Abdallah", age: 20 });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
