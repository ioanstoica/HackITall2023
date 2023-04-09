import React from "react";
import Iframe from "react-iframe";
export const Game = ({ gameObj }: any) => {
  console.log(
    "http://localhost:80/&" + "id=" + gameObj.id + "&fen=" + gameObj.fen
  );
  return (
    <Iframe
      width="100%"
      height="1000px"
      position="absolute"
      url={"http://localhost:80/&" + "id=" + gameObj.id + "&fen=" + gameObj.fen}
    />
  );
};
