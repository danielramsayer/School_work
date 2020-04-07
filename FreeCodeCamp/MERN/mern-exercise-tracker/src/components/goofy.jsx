import React, { Component } from "react";
import { Link } from "react-router-dom";
import CheckAndRun from "./checkAndRun";
import Joke, { Joke1 } from "./jokes";
import Joken from "./inherit.js";
import Products from "./products";
import Checker from "./checker";
import App1 from "./App1";

export default class Goofy extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Goofy stuff</h3>
        <App1 />
      </div>
    );
  }
}
