import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <h1 id="home">Eric's Toy Problem Practice</h1>
        <div>
          <Link to="/fizzbuzz" className="link">
            <p>FizzBuzz</p>
          </Link>
        </div>
      </div>
    );
  }
}
