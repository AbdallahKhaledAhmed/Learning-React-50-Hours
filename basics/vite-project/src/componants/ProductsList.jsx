import React from "react";

const ProductsList = () => {
  const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Headphone", price: 200 },
    { id: 3, name: "Monitor", price: 600 },
  ];
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <li>{product.name}</li>
          <li>${product.price}</li>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
