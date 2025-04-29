import { Tally3 } from "lucide-react";
import { useState } from "react";
const Products = () => {
  const [menueOpened, setMenueOpened] = useState<boolean>(false);
  return (
    <div className="w-full flex flex-col pt-10 pl-10 ">
      <div className="relative w-fit">
        <button
          className="gap-2 w-fit rounded-full border px-4 py-2"
          onClick={() => {
            setMenueOpened((prev) => !prev);
          }}
        >
          <Tally3 />
          Sort
        </button>
        {menueOpened && (
          <div className="border border-gray-300 rounded flex flex-col w-40 items-start absolute translate-y-2">
            <button
              onClick={() => {}}
              className="px-3 py-2 hover:bg-gray-200 w-full justify-start"
            >
              Cheap
            </button>
            <button
              onClick={() => {}}
              className="px-3 py-2 hover:bg-gray-200 w-full justify-start"
            >
              Expensive
            </button>
            <button
              onClick={() => {}}
              className="px-3 py-2 hover:bg-gray-200 w-full justify-start"
            >
              Popular
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
