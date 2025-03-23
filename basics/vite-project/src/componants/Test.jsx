import React from "react";
import { useState } from "react";

const Test = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: "Spider Man", rating: 3 },
    { id: 2, title: "Superman", rating: 6 },
  ]);

  const handleClick = () => {
    setMovies(
      movies.map((m) => (m.id === 1 ? { ...m, title: "John Wick 5" } : m))
    );
    console.log(movies);
  };
  return (
    <div>
      {movies.map((m) => (
        <ul>
          <li>{m.title}</li>
          <li>{m.rating}</li>
        </ul>
      ))}

      <button onClick={handleClick}>test</button>
    </div>
  );
};

export default Test;
