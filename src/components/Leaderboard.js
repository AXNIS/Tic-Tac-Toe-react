import React, { useEffect } from "react";
import leaderBoard from "../helpers /ranking";

const Leaderboard = () => {
  useEffect(() => {
    leaderBoard();
  });

  return (
    <div className="lb">
      <div className="lbh">Leaderboard</div>
      <div className="ranking" id="rank"></div>
    </div>
  );
};

export default Leaderboard;

/*

Alternate way 

const Leaderboard = () => {
  let localStorageArray = [];
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) !== "p_1" && localStorage.key(i) !== "p_2") {
      let obj = {
        userName: localStorage.key(i),
        wins: parseInt(localStorage.getItem(localStorage.key(i))),
      };
      localStorageArray.push(obj);
    }
  }
  let sortedArray = localStorageArray.sort((a, b) => {
    return b.wins - a.wins;
  });

  useEffect(() => {
    leaderBoard();
  });

  return (
    <div className="lb">
      <div className="lbh">Leaderboard</div>
      <div className="ranking" id="rank">
        {sortedArray.map((item, idx) => (
          <div className="rows">
            <div className="serialNumber">{idx + 1}</div>
            <div className="user_name">{item.userName}</div>
            <div className="pts">{item.wins}</div>
          </div>
        ))}
      </div>
    </div>
  );
};*/
