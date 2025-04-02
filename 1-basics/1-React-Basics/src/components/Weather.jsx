import React from "react";

const Weather = ({ temp }) => {
  if (temp < 15) {
    return <p>it's cold outside</p>;
  } else if (temp < 25) {
    return <p>it's nice outside</p>;
  } else {
    return <p>it's hot outside</p>;
  }
};

export default Weather;
