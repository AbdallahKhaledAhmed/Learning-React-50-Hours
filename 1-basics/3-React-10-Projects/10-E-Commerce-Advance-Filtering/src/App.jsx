import Navegation from "./Navegation/Navegation";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import "./styles.css";

function App() {
  return (
    <div>
      <Sidebar />
      <Navegation />
      <Recommended />
      <Products />
    </div>
  );
}

export default App;
