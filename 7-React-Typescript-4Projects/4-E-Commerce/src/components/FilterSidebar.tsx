import { useAtom } from "jotai";
import {
  categoryAtom,
  maxPriceAtom,
  minPriceAtom,
  searchAtom,
  sortAtom,
} from "../state/atoms";

const keywords = ["APPLE", "WATCH", "FASHION", "TREND", "SHOES", "SHIRT"];
const categories = ["BEAUTY", "FRAGRANCES", "FURNITURE", "GROCERIES"];
const FilterSidebar = () => {
  const [search, setSearch] = useAtom(searchAtom);
  const [minPrice, setMinPrice] = useAtom(minPriceAtom);
  const [maxPrice, setMaxPrice] = useAtom(maxPriceAtom);
  const [categoryState, setCategory] = useAtom(categoryAtom);
  const [, setSort] = useAtom(sortAtom);
  return (
    <div className="w-1/5 max-w-60 min-w-45 p-4 flex flex-col gap-10 min-h-screen pt-8">
      <h1 className="select-none">React Store</h1>
      <form>
        <input
          type="text"
          placeholder="Search Product"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <div className="flex gap-2">
          <input
            value={minPrice === 0 ? "" : minPrice}
            type="number"
            placeholder="Min"
            onChange={(e) => {
              setMinPrice(Number(e.target.value) || 0);
            }}
          />
          <input
            value={maxPrice}
            type="number"
            placeholder="Max"
            onChange={(e) => {
              setMaxPrice(Number(e.target.value) || Infinity);
            }}
          />
        </div>
      </form>

      <form className="items-start">
        <h2>Categories</h2>
        {categories.map((category, ind) => (
          <label key={ind}>
            <input
              checked={category === categoryState}
              type="radio"
              name="category"
              onChange={() => {
                setCategory(category);
              }}
            />
            {category}
          </label>
        ))}
      </form>

      <form>
        <h2>Keywords</h2>
        {keywords.map((keyword, ind) => (
          <button
            key={ind}
            className="keyword"
            onClick={(e) => {
              e.preventDefault();
              setSearch(keyword);
            }}
          >
            {keyword}
          </button>
        ))}
      </form>
      <button
        className="bg-black text-white rounded py-2"
        onClick={() => {
          setSearch("");
          setMinPrice(0);
          setMaxPrice(Infinity);
          setCategory("");
          setSort("");
        }}
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
