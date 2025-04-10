import { type Info } from "../utils/types";

const UserInfo = ({ id, email, name, salary }: Info) => {
  return (
    <div>
      <h1>User</h1>
      <h2>Name : {name}</h2>
      <h2>Id : {id}</h2>
      <h2>Email : {email}</h2>
      <h4>Salary: {salary} EGP</h4>
    </div>
  );
};

export default UserInfo;
