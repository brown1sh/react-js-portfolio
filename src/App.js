import "./App.css";
import React from "react";
import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Pages/Home/NavBar"
import Home from "./Pages/Home/Homescreen";
import SnakeGame from "./Pages/Home/SnakeGame";

function App() 
{
  const [showGame, setShowGame] = useState(false);
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar onPlayGame={() => setShowGame(true)} />

          {showGame && (
          <div className="modal--overlay" onClick={() => {setShowGame(false);}}>
            <div className="modal--content" onClick={(e) => e.stopPropagation}>
              <button
                className="close-btn"
                onClick={() => setShowGame(false)}
                >
                X
              </button>

              <SnakeGame />
            </div>
          </div>
          )}  
          
          <Routes>
            <Route path=  "/" element= {<Home />}></Route>
            <Route path=  "*" element= {<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
