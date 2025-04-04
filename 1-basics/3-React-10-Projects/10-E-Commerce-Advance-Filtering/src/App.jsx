import { useState } from "react";
import Navegation from "./Navegation/Navegation";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import "./styles.css";

function App() {
  const [query, setQuery] = useState("");
  return (
    <div>
      <Sidebar />
      <Navegation setQuery={setQuery} />
      <Recommended />
      <Products query={query} />
    </div>
  );
}

export default App;
