import React, { useEffect, useState } from "react";
const FetchDataEffect = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    response = await response.json();
    setData(response);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {data.map((i) => (
        <li>{i.title}</li>
      ))}
    </div>
  );
};

export default FetchDataEffect;
