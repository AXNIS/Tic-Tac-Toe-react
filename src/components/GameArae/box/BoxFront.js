import React from "react";
import Headline from "./Headline";
import PlayButton from "../../../buttons/play_btn";
import "../../../styles/front.css";

const BoxFront = () => {
  return (
    <div className="lp_in">
      <Headline />
      <div className="ttt1">
        <div className="info">
          <form id="fm">
            <div className="p1">
              <label>
                Player 1:
                <input type="text" id="p_1" required />
              </label>
            </div>
            <div className="p2">
              <label>
                Player 2:
                <input type="text" id="p_2" required />
              </label>
            </div>
            <PlayButton />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BoxFront;
