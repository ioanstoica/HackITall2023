import React from "react";
import Iframe from "react-iframe";
export const Puzzle = ({ userId }: any) => {
  const fens = [
    "rnbqkb1r/ppp2ppp/8/3pp3/2B5/2NP1N2/PPP3PP/R1Bn1RK1 w kq - 0 7",
    "rnbqkbnr/pp3pp1/4p2p/1p6/3P1B2/3Q4/PPP2PKP/RN3R2 w kq - 0 9",
    "rn3rk1/pp2npp1/4p2p/q1ppP3/b7/PQPP1N2/PB3PPP/2KR1B1R w - - 1 11",
    "rn3rk1/pp2npp1/4p2p/2p1P3/2P3P1/Pb1B1q2/1BR2P1P/2KR4 w - - 2 18",
    "rnb1kbnr/ppp2p1p/4p1p1/8/3qpPP1/8/PPP1Q2P/RNB1KBNR w kq - 0 8",
  ];
  const randomFen = fens[Math.floor(Math.random() * fens.length)];
  return (
    <div>
      <Iframe
        width="100%"
        height="1000px"
        position="absolute"
        url={"http://localhost:8081/?" + "id=" + userId + "&fen=" + randomFen}
      />
    </div>
  );
};
