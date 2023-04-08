import React from "react";
import Iframe from "react-iframe";
export const Game = () => {
  return (
    <Iframe
      width="100%"
      height="1000px"
      position="absolute"
      url="http://localhost:80"
    />
  );
};
