import React from "react";
import { Login } from "../components/login";
import { Button } from "@mui/material";
import { SelectGame } from "../components/selectGame";

export const Home = ({ isLoaded, setIsLoaded, userId, setUserId }: any) => {
  const handleClick = () => {
    setIsLoaded(false);
  };
  return (
    <div>
      <h1>Home</h1>
      {!isLoaded ? (
        <Login setIsLoaded={setIsLoaded} setUserId={setUserId} />
      ) : (
        <div>
          <Button onClick={handleClick}>Logout</Button>
          <SelectGame userId={userId} />
        </div>
      )}
    </div>
  );
};
