import React from "react";
import TextField from "./textField.js";
import Button from "./button.js";

export default ({ handleChangeUsername, handleChangeFirstName, handleLogin, username, firstName }) => (
  <div className="login">
    <h2>Please enter your github username.</h2>
    <TextField
      name="username"
      handleChange={handleChangeUsername}
      id="github-username"
      label="Username"
      value={username}
    />
    {/* <TextField
      name="firstName"
      handleChange={handleChangeFirstName}
      id="user-firstName"
      label="Your First Name"
      value={firstName}
    /> */}
    <Button value="Login" handleClick={handleLogin} />
  </div>
);
