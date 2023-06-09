import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Select from "react-select";

import "./select.css";

export const SelectGame = ({ setFen, userId }: any) => {
  const [games, setGames] = useState([
    { id: 0, id_juc_1: 0, id_juc_2: 0, data: "", fen: "" },
  ]);
  const [selectedGame, setSelectedGame] = useState({ id: 0, fen: "" });

  const [gameFound, setGameFound] = useState(false);

  const gamesDropdown = games.map((game) => {
    return { value: game.id, label: game.data };
  });

  const handleChange = (chosen: any) => {
    const { value } = chosen;
    setSelectedGame(value);
    for (let game of games) {
      if (game.id === value) {
        setFen(game.fen);
        setGameFound(true);
        break;
      }
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/matches/${userId}`)
      .then((response) => {
        console.log(">>>Response: ", response);
        if (response.status === 200) setGames(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);

  if (gameFound) return <Navigate to="/game" />;

  return (
    <div>
      <div>In this section you can load a previous saved game!</div>
      <Select options={gamesDropdown} onChange={handleChange} />;
    </div>
  );
};
