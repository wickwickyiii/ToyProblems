import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import FizzBuzz from "./components/FizzBuzz";

export default (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/fizzbuzz" component={FizzBuzz} />
  </Switch>
);
