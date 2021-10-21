import React from "react";
import { BrowserRouter } from "react-router-dom";
import Box from "./Box";

const GameBody = () => {
  return (
    <div className="lp">
      <BrowserRouter>
        <Box />
      </BrowserRouter>
    </div>
  );
};

export default GameBody;
