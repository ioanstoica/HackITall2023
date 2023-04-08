import React from "react";
import { Navbar } from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./views/home";
import { Game } from "./views/game";

function App() {
  return (
    <div>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/form" element={<Game />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
