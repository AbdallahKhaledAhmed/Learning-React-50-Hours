import Header from "./components/Header";
import Products from "./components/Products";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex w-full min-h-[100vh]">
      <Header />
      <Products />
      <Sidebar />
    </div>
  );
};

export default App;
