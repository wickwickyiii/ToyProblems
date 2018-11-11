import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import FizzBuzz from "./components/FizzBuzz";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/fizzbuzz" component={FizzBuzz} />
  </Switch>
);
