import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";

export const Login = ({ setIsLoaded, setUserId }: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [buttonPressed, setButtonPressed] = useState(false);

  const handleUsernameChange = (event: any) => {
    event.preventDefault();
    setButtonPressed(false);
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    event.preventDefault();
    setButtonPressed(false);
    setPassword(event.target.value);
  };

  const handleClick = () => {
    console.log(">>>Username: ", username);
    console.log(">>>Password: ", password);
    setButtonPressed(true);
  };

  useEffect(() => {
    if (buttonPressed) {
      axios
        .post(`http://localhost:8080/api/users/login/${username}`, { password })
        .then((response) => {
          console.log(response);
          setUserId(response?.data[0]?.id);
          console.log(">>>User: ", response?.data[0]?.id);
          if (response.status === 200) setIsLoaded(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
  return (
    <div>
      Username: <TextField onChange={handleUsernameChange} id="username" />
      Password: <TextField onChange={handlePasswordChange} id="password" />
      <Button onClick={handleClick}>Login</Button>
    </div>
  );
};
