import React, { useState } from "react";
import { Navbar } from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./views/home";
import { Game } from "./views/game";
import { Puzzle } from "./views/puzzle";
import { SignUp } from "./views/signUp";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<Home isLoaded={isLoaded} setIsLoaded={setIsLoaded} />}
            />
            <Route path="/home" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/puzzle" element={<Puzzle />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
