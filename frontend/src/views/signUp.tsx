import React from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [buttonPressed, setButtonPressed] = useState(false);
  const [errorSingUp, setErrorSignUp] = useState(false);

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

  const handleEmailChange = (event: any) => {
    event.preventDefault();
    setButtonPressed(false);
    setEmail(event.target.value);
  };

  const handleClick = () => {
    console.log(">>>Username: ", username);
    console.log(">>>Password: ", password);
    console.log(">>>Email: ", email);
    setButtonPressed(true);
    // axios
    //   .post("http://localhost:8080/api/users", {
    //     username,
    //     password,
    //     email,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     if (response.status === 200) {
    //       setButtonPressed(true);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  useEffect(() => {
    if (buttonPressed) {
      axios
        .post("http://localhost:8080/api/users", {
          username,
          password,
          email,
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) setButtonPressed(true);
        })
        .catch((error) => {
          console.log(error);
          setErrorSignUp(true);
        });
      // const url = "http://localhost:8080/api/users";
      // const payload = {
      //   method: "POST",
      //   url,
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   responseType: "json",
      // };

      // const response = axios.request(payload).then((response) => {console.log(response);});
    }
  }, [buttonPressed, username, password, email]);

  if (!buttonPressed) {
    return (
      <div>
        Username: <TextField onChange={handleUsernameChange} id="username" />
        Password: <TextField onChange={handlePasswordChange} id="password" />
        Email: <TextField onChange={handleEmailChange} id="email" />
        <Button onClick={handleClick}>Sign Up</Button>
      </div>
    );
  }
  if (errorSingUp) {
    return (
      <div>
        You entered an invalid username or password. Please refresh the page and
        try again.
      </div>
    );
  }
  return <div>You have been signed up. </div>;
};
