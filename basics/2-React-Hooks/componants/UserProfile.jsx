import { useContext } from "react";
import { UserContext } from "./UserContext";

const UserProfile = () => {
  return (
    <ul>
      <li>{useContext(UserContext).user.name}</li>
      <li>{useContext(UserContext).user.age}</li>
    </ul>
  );
};

export default UserProfile;
