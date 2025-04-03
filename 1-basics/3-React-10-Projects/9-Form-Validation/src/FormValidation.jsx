import React, { useState } from "react";
import "./styles.css";
const FormValidation = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [usernameColor, setUsernameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const valedate = (e) => {
    e.preventDefault();
    if (username.length >= 8) {
      setUsernameColor("green");
      setErrorUsername("");
    } else {
      setUsernameColor("red");
      setErrorUsername("Username Must Be At Least 8 Characters");
    }
    if (email.includes("@gmail.com")) {
      setEmailColor("green");
      setErrorEmail("");
    } else {
      setEmailColor("red");
      setErrorEmail("E-mail Must Contain @gmail.com");
    }
    if (password.length >= 8) {
      setPasswordColor("green");
      setErrorPassword("");
    } else {
      setPasswordColor("red");
      setErrorPassword("Password Must Be At Least 8 Characters");
    }
    if (confirmPassword === password) {
      setConfirmPasswordColor("green");
      setErrorConfirmPassword("");
    } else {
      setConfirmPasswordColor("red");
      setErrorConfirmPassword("Confirm Password Must Match The Password");
    }
  };

  return (
    <>
      <div className="card">
        <div className="card-image"></div>
        <form>
          <input
            type="text"
            placeholder="Username"
            value={username}
            style={{ borderColor: usernameColor }}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className="error">{errorUsername}</p>
          <input
            type="text"
            placeholder="E-mail"
            value={email}
            style={{ borderColor: emailColor }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="error">{errorEmail}</p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            style={{ borderColor: passwordColor }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="error">{errorPassword}</p>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            style={{ borderColor: confirmPasswordColor }}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className="error">{errorConfirmPassword}</p>
          <button onClick={valedate} className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default FormValidation;
