import React from "react";
import TextField from "./textField.js";
import Button from "./button.js";

export default ({ handleChangeUsername, handleLogin, username }) => (
  <div className="login">
    <h2>Please enter your github username.</h2>
    <TextField
      name="username"
      handleChange={handleChangeUsername}
      id="github-username"
      label="Username"
      value={username}
    />
    <Button value="Login" handleClick={handleLogin} />
  </div>
);
