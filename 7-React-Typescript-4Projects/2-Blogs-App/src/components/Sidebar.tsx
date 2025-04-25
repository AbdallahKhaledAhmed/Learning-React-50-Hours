import Person from "./Person";

const Sidebar = () => {
  const topics: string[] = [
    "Technology",
    "Design Thinking",
    "Crypto",
    "NFT",
    "Personal Growth",
    "Reading",
  ];
  return (
    <div className="w-7/24 flex flex-col gap-4">
      <div className="flex flex-col items-start gap-2  rounded  shadow w-full py-7 px-5">
        <h1 className="text-xl font-semibold mb-4">👥 People to follow</h1>
        <Person name="Alena Gouse" follow={false} />
        <Person name="Ruben Bator" follow={true} />
        <Person name="Aspen Stanton" follow={false} />
        <Person name="Madelyn George" follow={false} />
      </div>
      <div className="flex flex-col items-start gap-2  rounded  shadow w-full py-7 px-5">
        <h1 className="text-xl font-semibold mb-4">📈 Today's top trends</h1>
        <div>
          <h2>Be the Person You Are on Vacation</h2>
          <p className="small-text">By Maren Torff</p>
        </div>
        <div>
          <h2>Hate NFTs? I have some bad news...</h2>
          <p className="small-text">By Zain Levin</p>
        </div>
        <div>
          <h2>The real impact of dark UX patterns</h2>
          <p className="small-text">By Lindsey Curtis</p>
        </div>
      </div>
      <div className="flex flex-col items-start gap-2  rounded  shadow w-full py-7 px-5">
        <h1 className="text-xl font-semibold mb-4">🏷️ Topics for you</h1>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => {
            return (
              <button className="px-4 py-1 rounded-2xl cursor-pointer text-neutral-800 bg-neutral-200 hover:bg-neutral-300">
                {topic}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
