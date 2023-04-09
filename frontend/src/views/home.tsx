import React, { useRef } from "react";
import { Login } from "../components/login";
import { SelectGame } from "../components/selectGame";
import "./logout.css";

export const Home = ({
  isLoaded,
  setIsLoaded,
  userId,
  setUserId,
  gameObj,
  setGameObj,
  fen,
  setFen,
}: any) => {
  const scrollbar = useRef(null);
  const handleClick = (event: any) => {
    event.preventDefault();
    setIsLoaded(false);
  };
  return (
    <div>
      {!isLoaded ? (
        <Login setIsLoaded={setIsLoaded} setUserId={setUserId} />
      ) : (
        <div style={{ overflowY: "auto" }}>

          <button onClick={handleClick} className="button logout__submit">
            <span className="button__text">Log Out</span>
            <i className="button__icon fas fa-chevron-right"></i>
          </button>
          <div
            className="sample-container"
          >
            <SelectGame setFen={setFen} userId={userId} />
          </div>
        </div>
      )}
    </div>
  );
};
