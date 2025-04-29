import { useEffect, useState } from "react";
import Blog from "./Blog";
import Seller from "./Seller";

type sellersType = {
  results: {
    name: { first: string; last: string };
    picture: { medium: string };
  }[];
};

function showSellers(sellers: sellersType | null) {
  if (sellers !== null) {
    return sellers.results.map((user, ind) => (
      <Seller
        key={ind}
        name={`${user.name.first} ${user.name.last}`}
        imageurl={user.picture.medium}
      />
    ));
  }
  return <div>No Sellers to Show</div>;
}

const Sidebar = () => {
  const [sellers, setSellers] = useState<sellersType | null>(null);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        response.json().then((data: sellersType) => {
          setSellers(data);
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        setSellers(null);
      });
  }, []);
  return (
    <aside className="w-1/3 min-w-90 flex flex-col py-5 pt-20 px-5 gap-5">
      <div className="w-full border rounded px-5 py-5 flex flex-col gap-6">
        <b className="text-xl">Top Sellers</b>
        {showSellers(sellers)}
      </div>
      <div className="w-full border rounded px-5 py-5 flex flex-col gap-6">
        <b className="text-xl">Popular Blogs</b>
        <Blog
          title="My Amazing Blog Title 1"
          publisher="Jordan"
          commentsCount={142}
          likesCount={44}
        />
        <Blog
          title="My Amazing Blog Title 2"
          publisher="John"
          commentsCount={153}
          likesCount={25}
        />
        <Blog
          title="My Amazing Blog Title 4"
          publisher="HuXn"
          commentsCount={50}
          likesCount={14}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
