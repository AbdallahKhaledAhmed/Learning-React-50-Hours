import { useState } from "react";

const Seller = ({ name, imageurl }: { name: string; imageurl: string }) => {
  const [following, setFollowing] = useState<boolean>(false);
  return (
    <div className="flex justify-between items-center pl-2">
      <div className="flex items-center gap-2">
        <img className="w-10 h-10 rounded-full object-cover" src={imageurl} />
        <p>{name}</p>
      </div>
      {!following ? (
        <button
          className="bg-black text-white rounded px-3 py-1"
          onClick={() => {
            setFollowing((prev) => !prev);
          }}
        >
          Follow
        </button>
      ) : (
        <button
          className="bg-red-600 text-white rounded px-3 py-1"
          onClick={() => {
            setFollowing((prev) => !prev);
          }}
        >
          UnFollow
        </button>
      )}
    </div>
  );
};

export default Seller;
