import React from "react";
import BoxFront from "./box/BoxFront";
import BoxGame from "./box/BoxGame";
import { Route, Switch } from "react-router-dom";

const Box = () => {
  return (
    <Switch>
      <Route exact path="/" component={BoxFront} />
      <Route exact path="/game" component={BoxGame} />
    </Switch>
  );
};

export default Box;
