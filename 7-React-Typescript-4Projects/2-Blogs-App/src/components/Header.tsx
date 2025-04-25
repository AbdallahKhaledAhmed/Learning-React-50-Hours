import { FaSearch } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-25 py-4 border-b-2 border-gray-300">
      <div className="inline-flex justify-center items-center gap-2 border-2 rounded-3xl overflow-hidden px-3 py-2">
        <label htmlFor="search">
          <FaSearch />
        </label>
        <input
          type="text"
          id="search"
          className="w-[13rem] outline-none"
          placeholder="Search..."
        />
      </div>
      <div>
        <IoPersonCircle className="text-4xl hover:text-neutral-700 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
