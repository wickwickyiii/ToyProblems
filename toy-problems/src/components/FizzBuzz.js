import React, { Component } from "react";
import "./Problem.css";
import { Link } from "react-router-dom";

export default class FizzBuzz extends Component {
  constructor() {
    super();
    this.state = {
      userValue: 0
    };
  }

  fizzBuzz(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
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

  handleChange(e) {
    this.setState({
      userValue: e.target.value
    });
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
      <div className="container">
        <h2 id="toy">FizzBuzz</h2>

        <p className="question">
          Return an array containing the numbers from 1 to N, where N is the
          parametered value. N will never be less than 1.
        </p>

        <p className="question">
          Replace certain values however if any of the following conditions are
          met:
        </p>

        <p className="question">
          If the value is a multiple of 3: use the value 'Fizz' instead If the
          value is a multiple of 5: use the value 'Buzz' instead If the value is
          a multiple of 3 5: use the value 'FizzBuzz' instead
        </p>

        {/* THERE HAS GOT TO BE A BETTER WAY TO SHOW CODE AS A STRING ON A PAGE... MAYBE SNIPPETS OR A REPL.IT PICTURE... */}

        {/* COULD JUST USE AN IMAGE HERE AS A SNIPPET AND THEN HAVE THE INPUT EXECUTE THE CODE AND DISPLAY THE ANSWER FOR THE USER */}

        {/* EXTRA - HAVE THE CODE EXECUTE STEP BY STEP, I.E. HAVE THE ARGUMENT VISUALLY PASS THRU EACH PART OF THE FUNCTION AND THEN RETURN THE ANSWERS */}

        <p> function fizzBuzz (N) </p>
        <p> var arr = [] </p>
        <p> for ( var i=0; i < N.length; i++) </p>

        <div>
          <h3> Try it out! </h3>
        </div>
        <form>
          <input
            onChange={e => {
              this.handleChange(e);
            }}
          />
        </form>

        <div>
          <Link to="/">
            <h5> Go Back Home </h5>
          </Link>
        </div>
      </div>
    );
  }
}
