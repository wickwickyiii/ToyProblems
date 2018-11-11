import React, { Component } from "react";
import route from "../route";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Eric's Toy Problem Practice</h1>
        <div>
          <Link to="/fizzbuzz">
            <p>FizzBuzz</p>
          </Link>
        </div>
      </div>
    );
  }
}
