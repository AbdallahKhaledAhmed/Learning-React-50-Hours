import React from "react";

const Product = (product) => {
  return (
    <>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
    </>
  );
};
export default Product;
