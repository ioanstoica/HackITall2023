import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

export const SelectGame = ({ userId, setGameObj }: any) => {
  const [games, setGames] = useState([
    { id: 0, id_juc_1: 0, id_juc_2: 0, data: "", fen: "" },
  ]);
  const [selectedGame, setSelectedGame] = useState({ id: 0, fen: "" });

  const [gameFound, setGameFound] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event: any) => {
    console.log(">>>VALUE: ", event.target.value);
    setSelectedGame(event.target.value);
    for (let game of games) {
      if (game.id === event.target.value) {
        setGameObj({ id: game.id, fen: game.fen });
        console.log(">>>>>>>>>>Object: ", { id: game.id, fen: game.fen });
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
        // console.log(">>>User: ", response?.data[0]?.id);
        if (response.status === 200) setGames(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);

  if (gameFound) return <Navigate to="/game" />;

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Game</InputLabel>
        <Select
          value={selectedGame}
          label="Choose Game"
          onChange={handleChange}
        >
          {games.map((game) => {
            return <MenuItem value={game.id}>{game.data}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
