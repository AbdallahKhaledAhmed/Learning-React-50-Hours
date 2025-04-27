import { ChangeEvent, useRef, useState, use } from "react"; // Removed ChangeEventHandler
import { BiSort } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { MdSort } from "react-icons/md";
import { filterContext } from "../utils/FilterProvider";

const HeaderComp = () => {
  const sortRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const [sort, setSort] = useState<boolean>(false);
  const [filter, setFilter] = useState<boolean>(false);
  const { setSortFilter, textFilter, setTextFilter } = use(filterContext);

  function handleInputsChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setTextFilter({ ...textFilter, [name]: value });
  }
  return (
    <div className="flex gap-4 my-5">
      <div className="relative">
        <button
          className="gap-2 border rounded py-2 px-3 border-gray-700"
          onClick={() => {
            setSort((prev) => !prev);
          }}
        >
          <BiSort />
          Sort <IoIosArrowDown />
        </button>
        <div
          ref={sortRef}
          className={`bg-gray-800 border border-gray-700 shadow-2xl rounded overflow-hidden absolute translate-y-2 ${
            !sort && "hidden"
          }`}
        >
          <button
            className="w-full hover:bg-gray-600 px-3 py-2"
            onClick={() => {
              setSortFilter("client");
            }}
          >
            Name
          </button>
          <button
            className="w-full hover:bg-gray-600 px-3 py-2"
            onClick={() => {
              setSortFilter("country");
            }}
          >
            Country
          </button>
          <button
            className="w-full hover:bg-gray-600 px-3 py-2"
            onClick={() => {
              setSortFilter("date");
            }}
          >
            Date
          </button>
        </div>
      </div>
      <div className="relative">
        <button
          className="gap-2 border rounded py-2 px-3 border-gray-700"
          onClick={() => {
            setFilter((prev) => !prev);
          }}
        >
          <MdSort />
          Filters <IoIosArrowDown />
        </button>
        <div
          ref={filtersRef}
          className={`bg-gray-800  text-white py-8 px-3 border-gray-700 shadow-2xl border rounded overflow-hidden absolute translate-y-2 ${
            filter ? "flex flex-col" : "hidden"
          }`}
        >
          <form>
            <label className="flex flex-col">
              Filter by Name:
              <input
                type="text"
                name="name"
                onChange={handleInputsChange}
                className="bg-gray-900 py-2 rounded"
              />
            </label>
            <label className="flex flex-col">
              Filter by Country:
              <input
                type="text"
                name="country"
                onChange={handleInputsChange}
                className="bg-gray-900 py-2 rounded"
              />
            </label>
            <label className="flex flex-col">
              Filter by Email:
              <input
                type="text"
                name="email"
                onChange={handleInputsChange}
                className="bg-gray-900 py-2 rounded"
              />
            </label>
            <label className="flex flex-col">
              Filter by Project:
              <input
                type="text"
                name="project"
                onChange={handleInputsChange}
                className="bg-gray-900 py-2 rounded"
              />
            </label>
            <label className="flex flex-col">
              Filter by Status:
              <input
                type="text"
                name="status"
                onChange={handleInputsChange}
                className="bg-gray-900 py-2 rounded"
              />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeaderComp;
