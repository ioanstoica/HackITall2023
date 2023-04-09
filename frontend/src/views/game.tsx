import React from "react";
import Iframe from "react-iframe";
export const Game = ({ userId, fen }: any) => {
  console.log(">>>Game.tsx: ", userId, fen)
  console.log("http://localhost:8081/?" + "id=" + userId + "&fen=" + fen);
  return (
    <Iframe
      width="100%"
      height="1000px"
      position="absolute"
      url={"http://localhost:8081/?" + "id=" + userId + "&fen=" + fen}
    />
  );
};
