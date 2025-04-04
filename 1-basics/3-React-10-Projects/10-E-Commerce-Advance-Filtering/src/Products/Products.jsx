import React from "react";
import "./products.css";
import data from "../utils/data.jsx";
import Card from "../components/Card";

const Products = ({ query }) => {
  return (
    <>
      <section className="card-container">
        {data
          .filter((obj) => obj.title.toLocaleLowerCase().includes(query))
          .map((obj, index) => (
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
    </>
  );
};

export default Products;
