import { useAtom } from "jotai";
import { Tally3 } from "lucide-react";
import { useState } from "react";
import { sortAtom } from "../state/atoms";

const Sort = () => {
  const [menueOpened, setMenueOpened] = useState<boolean>(false);
  const [, setSort] = useAtom(sortAtom);
  return (
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
        <div className="border border-gray-300 bg-white rounded flex flex-col w-40 items-start absolute translate-y-2">
          <button
            onClick={() => {
              setSort("Cheap");
            }}
            className="px-3 py-2 hover:bg-gray-200 w-full justify-start"
          >
            Cheap
          </button>
          <button
            onClick={() => {
              setSort("Expensive");
            }}
            className="px-3 py-2 hover:bg-gray-200 w-full justify-start"
          >
            Expensive
          </button>
          <button
            onClick={() => {
              setSort("Popular");
            }}
            className="px-3 py-2 hover:bg-gray-200 w-full justify-start"
          >
            Popular
          </button>
        </div>
      )}
    </div>
  );
};

export default Sort;
