import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductType } from "./Products";

const ProductPage = () => {
  const { id } = useParams();

  const [data, setData] = useState<ProductType>();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch(() => <div>No Data!</div>);
  }, [id]);
  return (
    <div className="flex flex-col w-full pt-10 pl-10">
      <Link className="bg-black text-white rounded px-4 py-2 w-fit" to={"/"}>
        Back
      </Link>
      <div className="w-[60%]">
        <img src={data?.images[0]} className="w-100 h-100 object-cover" />
        <b className="text-2xl">{data?.title}</b>
        <p className="text-neutral-600 mt-5 w-[70%]">{data?.description}</p>
        <div className="flex gap-10 mt-5 items-center">
          <p>Price: ${data?.price}</p>
          <p>Rating: {data?.rating}</p>
          <button className="bg-black text-white rounded px-4 py-2 w-fit">
            Add To Cart
          </button>
          <button className="bg-black text-white rounded px-4 py-2 w-fit">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
