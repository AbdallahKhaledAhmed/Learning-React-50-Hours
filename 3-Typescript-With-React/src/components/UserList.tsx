import { useEffect, useState } from "react";
type userType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
const UserList = () => {
  const [data, setData] = useState<userType[] | null>(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" }).then(
      (res) =>
        res.json().then((res) => {
          setData(res);
        })
    );
  }, []);
  return (
    <div>
      {data !== null
        ? data.map((i) => (
            <p>
              id: {i.id} <br /> name: {i.name} <br /> username: {i.username}{" "}
              <br />
              email: {i.email} <br /> phone: {i.phone} <br />
            </p>
          ))
        : "Error"}
    </div>
  );
};

export default UserList;
