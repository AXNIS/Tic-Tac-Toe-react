import React, { useEffect } from "react";
import Headline from "./Headline";
import RestartButton from "../../../buttons/restart_btn";
import "../../../styles/game.css";
import startGame from "../../../helpers /game";

const BoxGame = () => {
  useEffect(() => {
    startGame();
  });

  return (
    <div className="lp_in">
      <Headline />
      <div className="pname">
        <div className="p1n" id="p1msg"></div>
        <div className="score" id="smsg"></div>
        <div className="p2n" id="p2msg"></div>
      </div>
      <div className="ttt1">
        <div className="board" id="board">
          <div className="cell" data-cell></div>
          <div className="cell" data-cell></div>
          <div className="cell" data-cell></div>
          <div className="cell" data-cell></div>
          <div className="cell" data-cell></div>
          <div className="cell" data-cell></div>
          <div className="cell" data-cell></div>
          <div className="cell" data-cell></div>
          <div className="cell" data-cell></div>
        </div>
        <RestartButton />
      </div>
    </div>
  );
};

export default BoxGame;
