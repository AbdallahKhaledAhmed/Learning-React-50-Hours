import React from "react";
import { BsFillBagFill } from "react-icons/bs";

const Card = ({ imgsrc, title, star, reviews, oldPrice, currentPrice }) => {
  return (
    <section className="card">
      <img src={imgsrc} alt={title} className="card-img" />
      <div>
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {star} {star} {star} {star}
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <span>
            <del>{oldPrice}</del> {currentPrice}
          </span>
          <BsFillBagFill className="bag-icon" />
        </section>
      </div>
    </section>
  );
};

export default Card;
