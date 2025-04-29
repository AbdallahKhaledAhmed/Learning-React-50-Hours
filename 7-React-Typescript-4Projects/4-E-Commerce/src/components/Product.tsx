import React from "react";
import { Link } from "react-router-dom";
type Props = {
  imgurl: string;
  title: string;
  price: number;
  productid: number;
};
const Product = ({ imgurl, title, price, productid }: Props) => {
  return (
    <Link
      to={`/product/${productid}`}
      className="rounded border w-45 h-65 p-3 flex flex-col justify-between cursor-pointer"
    >
      <img src={imgurl} className="w-40 h-40 object-cover mx-auto" />
      <div>
        <b>{title}</b>
        <p>${price}</p>
      </div>
    </Link>
  );
};

export default React.memo(Product);
