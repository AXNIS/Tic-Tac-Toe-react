import React from "react";
import saveData from "../helpers /front";
import leaderBoard from "../helpers /ranking";
import { useHistory } from "react-router-dom";

const PlayButton = () => {
  const func_sd = () => {
    saveData();
  };
  const func_lb = () => {
    leaderBoard();
  };

  const history = useHistory();
  const Switching = () => {
    history.push("/game");
  };

  return (
    <div className="p3">
      <button
        id="submitButton"
        onClick={() => {
          func_sd();
          func_lb();
          Switching();
        }}
        type="submit"
      >
        Play
      </button>
    </div>
  );
};

export default PlayButton;
