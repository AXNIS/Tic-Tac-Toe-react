import React from "react";
import Leaderboard from "./components/Leaderboard";
import GameBody from "./components/GameArea/GameBody";
function App() {
  return (
    <div className="whole">
      <GameBody />
      <Leaderboard />
    </div>
  );
}

export default App;
