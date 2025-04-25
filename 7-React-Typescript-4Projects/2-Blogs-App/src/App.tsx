import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div>
      <Header />
      <div className="flex w-full p-2">
        <MainContent />
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
