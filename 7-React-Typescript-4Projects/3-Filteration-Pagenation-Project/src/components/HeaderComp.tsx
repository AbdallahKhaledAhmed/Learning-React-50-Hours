import { BiSort } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { MdSort } from "react-icons/md";

const HeaderComp = () => {
  return (
    <div className="flex gap-4 my-5">
      <button className="gap-2 border rounded py-2 px-3 border-gray-700">
        <BiSort />
        Sort <IoIosArrowDown />
      </button>
      <button className="gap-2 border rounded py-2 px-3 border-gray-700">
        <MdSort />
        Filters <IoIosArrowDown />
      </button>
    </div>
  );
};

export default HeaderComp;
