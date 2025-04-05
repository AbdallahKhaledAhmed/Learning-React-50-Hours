import React from "react";
import "./products.css";
import Card from "../components/Card";

const Products = ({ filteredData }) => {
  return (
    <section className="card-container">
      {filteredData.map((obj, index) => (
        <Card
          imgsrc={obj.img}
          title={obj.title}
          star={obj.star}
          reviews={obj.reviews}
          oldPrice={obj.prevPrice}
          currentPrice={obj.newPrice}
          key={index}
        />
      ))}
    </section>
  );
};

export default Products;