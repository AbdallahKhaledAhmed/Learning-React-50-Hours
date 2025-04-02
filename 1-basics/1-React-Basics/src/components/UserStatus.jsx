import React from "react";

const UserStatus = ({ loggedin, isadmin }) => {
  return loggedin && isadmin ? (
    <p>welcome admin</p>
  ) : loggedin ? (
    <p>welcome User</p>
  ) : (
    <p>go away</p>
  );
};

export default UserStatus;
