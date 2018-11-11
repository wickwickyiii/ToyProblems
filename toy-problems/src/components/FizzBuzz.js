import React, { Component } from "react";

export default class FizzBuzz extends Component {
  constructor() {
    super();
  }

  fizzBuzz(num) {
    var arr = [];

    for (var i = 0; i < arr.length; i++) {
      if (i % 5 === 0 && i % 3 === 0) {
        arr.push("FizzBuzz");
      } else if (i % 3 === 0) {
        arr.push("Fizz");
      } else if (i % 5 === 0) {
        arr.push("Buzz");
      } else {
        arr.push(i);
      }
    }
    return arr;
  }

  render() {
    var fizzBuzz1 = "var numbers = N => {";
    var fizzBuzz2 = "var arr = [];";
    var fizzBuzz3 = "for (var i = 1; i <= N; i++) {";
    var fizzBuzz4 = "if (i % 5 === 0 && i % 3 === 0) {";
    var fizzBuzz5 = "arr.push('FizzBuzz');";
    var fizzBuzz6 = "} else if (i % 3 === 0) {";
    var fizzBuzz7 = "arr.push('Fizz');";
    var fizzBuzz8 = "} else if (i % 5 === 0) {";
    var fizzBuzz9 = "arr.push('Buzz');";
    var fizzBuzz10 = "} else {";
    var fizzBuzz11 = "arr.push(i);";
    var fizzBuzz12 = "}";
    var fizzBuzz13 = "}";
    var fizzBuzz14 = "return arr;";
    var fizzBuzz15 = "};";

    return (
      <div>
        <h1>FizzBuzz</h1>

        <p>
          Return an array containing the numbers from 1 to N, where N is the
          parametered value. N will never be less than 1.
        </p>

        <p>
          Replace certain values however if any of the following conditions are
          met:
        </p>

        <p>
          If the value is a multiple of 3: use the value 'Fizz' instead If the
          value is a multiple of 5: use the value 'Buzz' instead If the value is
          a multiple of 3 5: use the value 'FizzBuzz' instead
        </p>

        <div>
          <div>{fizzBuzz1}</div>
          <div>{fizzBuzz2}</div>
          <div>{fizzBuzz3}</div>
          <div>{fizzBuzz4}</div>
          <div>{fizzBuzz5}</div>
          <div>{fizzBuzz6}</div>
          <div>{fizzBuzz7}</div>
          <div>{fizzBuzz8}</div>
          <div>{fizzBuzz9}</div>
          <div>{fizzBuzz10}</div>
          <div>{fizzBuzz11}</div>
          <div>{fizzBuzz12}</div>
          <div>{fizzBuzz13}</div>
          <div>{fizzBuzz14}</div>
          <div>{fizzBuzz15}</div>
        </div>
      </div>
    );
  }
}
