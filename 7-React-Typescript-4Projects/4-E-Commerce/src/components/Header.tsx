const keywords = ["APPLE", "WATCH", "FASHION", "TREND", "SHOES", "SHIRT"];

const Header = () => {
  return (
    <div className="w-1/5 max-w-60 min-w-35 p-4 flex flex-col gap-10 min-h-screen pt-8">
      <h1>React Store</h1>
      <form action="">
        <input type="text" placeholder="Search Product" className="" />
        <div className="flex gap-2">
          <input type="number" placeholder="Min" />
          <input type="number" placeholder="Max" />
        </div>
      </form>

      <form action="" className="items-start">
        <h2>Categories</h2>
        <label>
          <input type="radio" name="category" id="" />
          BEAUTY
        </label>
        <label>
          <input type="radio" name="category" id="" />
          FRAGRANCES
        </label>
        <label>
          <input type="radio" name="category" id="" />
          FURNITURE
        </label>
        <label>
          <input type="radio" name="category" id="" />
          GROCERIES
        </label>
      </form>

      <form action="">
        <h2>Keywords</h2>
        {keywords.map((keyword, ind) => (
          <button key={ind} className="keyword">
            {keyword}
          </button>
        ))}
      </form>
      <button className="bg-black text-white rounded py-2">
        Reset Filters
      </button>
    </div>
  );
};

export default Header;
