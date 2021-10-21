import React from "react";
import startGame from "../helpers /game";

const RestartButton = () => {
  const startAgain = () => {
    startGame();
  };

  return (
    <div className="winning-message" id="winningMessage">
      <div className="wmsg" data-winning-message-text></div>
      <button
        id="restartButton"
        onClick={() => {
          startAgain();
        }}
      >
        Restart
      </button>
    </div>
  );
};

export default RestartButton;
