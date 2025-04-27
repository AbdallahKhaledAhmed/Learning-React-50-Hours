import HeaderComp from "./components/HeaderComp";
import SideBar from "./components/SideBar";
import Table from "./components/Table";
import { FilterProvider } from "./utils/FilterProvider";

const App = () => {
  return (
    <div className="w-full">
      <div className="flex w-full">
        <div className="mr-8">
          <SideBar />
        </div>
        <div className="flex flex-col w-full pr-10">
          <FilterProvider>
            <HeaderComp />
            <Table />
          </FilterProvider>
        </div>
      </div>
    </div>
  );
};

export default App;
