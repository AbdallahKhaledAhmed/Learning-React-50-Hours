import { useState } from "react";
import "./styles.css";

const Testamonail = () => {
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
  ];

  return (
    <div className="testimonials">
      <p className="testimonials-quote">{testimonials[index].quote}</p>
      <p className="testimonials-author">- {testimonials[index].author}</p>
      <nav className="testimonials-nav">
        <button
          onClick={() =>
            setIndex(
              (prev) => (prev - 1 + testimonials.length) % testimonials.length
            )
          }
        >
          Prev
        </button>
        <button
          onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
        >
          Next
        </button>
      </nav>
    </div>
  );
};

export default Testamonail;
