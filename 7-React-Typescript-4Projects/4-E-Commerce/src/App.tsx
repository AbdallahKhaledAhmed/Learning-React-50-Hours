import FilterSidebar from "./components/FilterSidebar";
import ProductPage from "./components/ProductPage";
import Products from "./components/Products";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div className="flex w-full min-h-[100vh]">
        <FilterSidebar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
        <Sidebar />
      </div>
    </Router>
  );
};

export default App;
