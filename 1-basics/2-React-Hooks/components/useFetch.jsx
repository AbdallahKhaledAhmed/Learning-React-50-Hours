import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url, { method: "GET" })
      .then((res) => res.json().then((resData) => setData(resData)))
      .catch((e) => e);
  }, [url]);
  return [data];
}
