import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createContext } from "react";

export const MyName = createContext();
createRoot(document.getElementById("root")).render(
  <MyName.Provider value={"X"}>
    <StrictMode>
      <App />
    </StrictMode>
  </MyName.Provider>
);
