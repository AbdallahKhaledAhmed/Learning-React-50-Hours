import { useRef } from "react";
import { BiSort } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { MdSort } from "react-icons/md";

const HeaderComp = () => {
  const sortRef = useRef<HTMLDialogElement>(null);
  const filtersRef = useRef<HTMLDialogElement>(null);
  return (
    <div className="flex gap-4 my-5">
      <dialog
        ref={sortRef}
        className="bg-gray-800 shadow-2xl"
        style={{ borderRadius: "0.5rem", overflow: "hidden" }}
      >
        <button className="bg-gray-700 w-full text-white hover:bg-gray-500 px-3 py-2">
          Name
        </button>
        <button className="bg-gray-700 w-full text-white hover:bg-gray-500 px-3 py-2">
          Country
        </button>
        <button className="bg-gray-700 w-full text-white hover:bg-gray-500 px-3 py-2">
          Date
        </button>
      </dialog>
      <button
        className="gap-2 border rounded py-2 px-3 border-gray-700"
        onClick={() => {
          sortRef.current?.show();
        }}
      >
        <BiSort />
        Sort <IoIosArrowDown />
      </button>
      <dialog
        ref={filtersRef}
        className="bg-gray-800 flex flex-col text-white py-8 px-3 border-gray-700 shadow-2xl border"
        style={{ borderRadius: "0.5rem", overflow: "hidden" }}
      >
        <label className="flex flex-col">
          Filter by Name:
          <input type="text" className="bg-gray-900 py-2 rounded" />
        </label>
        <label className="flex flex-col">
          Filter by Country:
          <input type="text" className="bg-gray-900 py-2 rounded" />
        </label>
        <label className="flex flex-col">
          Filter by Email:
          <input type="text" className="bg-gray-900 py-2 rounded" />
        </label>
        <label className="flex flex-col">
          Filter by Project:
          <input type="text" className="bg-gray-900 py-2 rounded" />
        </label>
        <label className="flex flex-col">
          Filter by Status:
          <input type="text" className="bg-gray-900 py-2 rounded" />
        </label>
      </dialog>
      <button
        className="gap-2 border rounded py-2 px-3 border-gray-700"
        onClick={() => {
          filtersRef.current?.show();
        }}
      >
        <MdSort />
        Filters <IoIosArrowDown />
      </button>
    </div>
  );
};

export default HeaderComp;
