import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="">
      <Sidebar />
      <main className="flex flex-wrap w-full pl-[4rem]">
        <Banner />
        <Hero />
        <Navbar />
      </main>
    </div>
  );
}

export default App;
