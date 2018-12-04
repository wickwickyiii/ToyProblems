import React, { Component } from "react";
import "./Problem.css";
import fizzbuzz from "../assets/images/FB.png";
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

        <img alt="FizzBuzz" src={fizzbuzz} className="fizz" />

        <div>
          <h3 className="problem"> Try it out! </h3>
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

/* <p className="problem">
            function fizzBuzz (N) <span>&#123;</span>
          </p>
          <p className="problem"> var arr = [ ] </p>
          <p className="problem">
            for ( var i=0 <span>&#59;</span> i <span>&#60;</span>{" "}
            <span>N.length</span> <span>&#59;</span> i++){" "}
          </p>
          <p className="problem">
            {" "}
            if (i % 5 === 0 && i % 3 === 0) <span>&#123;</span>
          </p>
          <p className="problem"> arr.push("FizzBuzz")</p>
          <p className="problem">
            <span>&#125;</span> if (i % 5 === 0) <span>&#123;</span>{" "}
          </p>
          <p className="problem"> arr.push("Fizz") </p>
          <p className="problem">
            <span>&#125;</span> if (i % 3 === 0) <span>&#123;</span>{" "}
          </p>
          <p className="problem"> arr.push("Buzz") </p>
          <p className="problem">
            {" "}
            <span> &#125; </span> else <span> &#123; </span>
          </p>
          <p className="problem"> arr.push(i) </p>
          <p className="problem">
            {" "}
            <span> &#125; </span>{" "}
          </p>

          <p className="problem"> return arr </p>
          <p className="problem">
            {" "}
            <span> &#125; </span>{" "}
          </p> */
