import React, { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "User",
    age: 0,
  });
  return (
    <div>
      <li>{user.name}</li>
      <li>{user.age}</li>
      <form>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="text"
          onChange={(e) => setUser({ ...user, age: Number(e.target.value) })}
        />
      </form>
    </div>
  );
};

export default Profile;
