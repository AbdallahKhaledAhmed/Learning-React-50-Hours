import React from "react";

const product = {
  name: "Computer",
  price: 1200,
  state: "In Stock",
};

const ProductInfo = () => {
  return (
    <ul>
      <li>name: {product.name}</li>
      <li>price: ${product.price}</li>
      <li>state: {product.state}</li>
    </ul>
  );
};

export default ProductInfo;
