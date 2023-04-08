import React from "react";
import { Login } from "../components/login";
import { Button } from "@mui/material";

export const Home = ({ isLoaded, setIsLoaded }: any) => {
  const handleClick = () => {
    setIsLoaded(false);
  };
  return (
    <div>
      <h1>Home</h1>
      {!isLoaded ? (
        <Login setIsLoaded />
      ) : (
        <Button onClick={handleClick}>Logout</Button>
      )}
    </div>
  );
};
