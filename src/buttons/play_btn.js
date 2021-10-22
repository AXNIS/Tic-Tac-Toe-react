import React from "react";
import saveData from "../helpers /front";
import leaderBoard from "../helpers /ranking";
import { useHistory } from "react-router-dom";
import { setInitials } from "../helpers /game";

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

  const setInitialValue = () => {
    setInitials();
  };

  return (
    <div className="p3">
      <button
        id="submitButton"
        onClick={() => {
          func_sd();
          func_lb();
          Switching();
          setInitialValue();
        }}
        type="submit"
      >
        Play
      </button>
    </div>
  );
};

export default PlayButton;
