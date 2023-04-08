import React from "react";
import { Navbar } from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./views/home";
import { Game } from "./views/game";
import { Puzzle } from "./views/puzzle";

function App() {
  return (
    <div>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/puzzle" element={<Puzzle />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
