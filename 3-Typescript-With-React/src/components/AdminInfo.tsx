import { type Info } from "../utils/types";

const AdminInfo = ({
  id,
  email,
  name,
  salary,
  role,
}: Info & { role: string }) => {
  return (
    <div>
      <h1>Admin : {role}</h1>
      <h2>Name : {name}</h2>
      <h2>Id : {id}</h2>
      <h2>Email : {email}</h2>
      <h4>Salary: {salary} EGP</h4>
      <h4>Last Login: {new Date().toLocaleString()}</h4>
    </div>
  );
};

export default AdminInfo;
