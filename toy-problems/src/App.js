import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import route from "./route";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Eric's Toy Problem Practice</h1>
        </header>

        <div>
          <ul>
            <Link to="/fizzbuzz">
              <li> Fizz Buzz </li>
            </Link>
          </ul>
        </div>
        {route}
      </div>
    );
  }
}

export default App;
