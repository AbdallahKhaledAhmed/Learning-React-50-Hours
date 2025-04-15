import { useState } from "react";
import { Info } from "../utils/types";

const UserInfoState = () => {
  const [info, setInfo] = useState<Info>({
    id: 0,
    email: "aa@a.com",
    name: "Abdallah",
    salary: 50000,
  });
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const keys = Object.keys(info) as (keyof Info)[];
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setInfo({ ...info, [text1]: text2 });
        }}
      >
        <input type="text" onChange={(e) => setText1(e.target.value)} />
        <input type="text" onChange={(e) => setText2(e.target.value)} />
        <input type="submit" value="Submit" />
      </form>

      {keys.map((i) => (
        <div>
          {i} : {info[i]}
        </div>
      ))}
    </div>
  );
};

export default UserInfoState;
