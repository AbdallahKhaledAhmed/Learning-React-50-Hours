import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import MyContextProvider from "./components/ContextAPI.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MyContextProvider>
      <App />
    </MyContextProvider>
  </StrictMode>
);
