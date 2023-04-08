import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

export const SelectGame = ({ userId }: any) => {
  const [games, setGames] = useState([{ id: 0, data: "" }]);

  const handleChange = (event: any) => {
    console.log(event.target.value);
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
  });
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          //   value={}
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
