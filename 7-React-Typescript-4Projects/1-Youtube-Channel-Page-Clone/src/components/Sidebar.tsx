import { FaHome, FaUser, FaSearch } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 flex flex-col h-[100vh] bg-neutral-700 w-[4rem] p-5 text-white text-2xl">
      <div className="flex flex-col mb-auto gap-5">
        <FaHome className="cursor-pointer" />
        <FaUser className="cursor-pointer" />
        <FaSearch className="cursor-pointer" />
      </div>
      <div className="flex flex-col gap-5">
        <IoMdSettings className="cursor-pointer" />
        <FaUser className="cursor-pointer" />
      </div>
    </aside>
  );
};

export default Sidebar;
