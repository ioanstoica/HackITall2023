import React from "react";
import { Login } from "../components/login";
import { Button } from "@mui/material";
import { SelectGame } from "../components/selectGame";
import "./logout.css"

export const Home = ({
  isLoaded,
  setIsLoaded,
  userId,
  setUserId,
  gameObj,
  setGameObj,
}: any) => {
  const handleClick = (event:any) => {
    event.preventDefault();
    setIsLoaded(false);
  };
  return (
    <div>
      {!isLoaded ? (
        <Login setIsLoaded={setIsLoaded} setUserId={setUserId} />
      ) : (
        <div>
          {/* <Button onClick={handleClick}>Logout</Button> */}

          <button onClick={handleClick} className="button logout__submit">
            <span className="button__text">Log Out</span>
            <i className="button__icon fas fa-chevron-right"></i>
          </button>
          <SelectGame setGameObj={setGameObj} userId={userId} />
        </div>
      )}
    </div>
  );
};
