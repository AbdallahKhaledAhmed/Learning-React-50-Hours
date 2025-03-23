import React from "react";

const Greeting = ({ timeofday }) => {
  return timeofday === "Morning" ? <p>Good Morning</p> : <p>Good Afternoon</p>;
};

export default Greeting;
