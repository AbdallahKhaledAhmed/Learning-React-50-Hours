import HeaderComp from "./components/HeaderComp";
import SideBar from "./components/SideBar";
import Table from "./components/Table";

const App = () => {
  return (
    <div className="w-full">
      <div className="flex w-full">
        <div className="mr-8">
          <SideBar />
        </div>
        <div className="flex flex-col w-full pr-10">
          <HeaderComp />
          <Table />
        </div>
      </div>
    </div>
  );
};

export default App;
