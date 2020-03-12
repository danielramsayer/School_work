import React, { Component } from "react";
import ReactDom from "react-dom";
import "./checkAndRun.scss";

class App1 extends React.Component {
  render() {
    return (
      <div>
        <Header username="Josephine" /> <Greeting />
        <Header1 />
        <Testing1 />
        <LoggedIn />
      </div>
    );
  }
}
export default App1;

class Header extends React.Component {
  render() {
    return (
      <header>
        <p>Welcome, {this.props.username}</p>
      </header>
    );
  }
}

class Greeting extends Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    if (hours < 12) {
      timeOfDay = "morning";
    } else if (hours >= 12 && hours <= 17) {
      timeOfDay = "afternoon";
    } else {
      timeOfDay = "night";
    }
    return (
      <div className={timeOfDay}>Good {timeOfDay} Theydy's and Gentlethems</div>
    );
  }
}

class Header1 extends React.Component {
  constructor() {
    super();
    this.state = {
      answer: "Yes"
    };
  }
  render() {
    return (
      <header>
        <p>Welcome, {this.state.answer}</p>
        <Child answer={this.state.answer} />
      </header>
    );
  }
}

function Child(props) {
  return (
    <div>
      Did you recieve the state from the previous component? {props.answer}
    </div>
  );
}

class Testing1 extends Component {
  constructor() {
    super();
    this.state = {
      name: "John",
      age: 13
    };
  }
  render() {
    return (
      <div>
        <h3>{this.state.name}</h3>
        <h4>{this.state.age}</h4>
      </div>
    );
  }
}

class LoggedIn extends Component {
  constructor() {
    super();
    this.state = {
      logged: true
    };
  }
  render() {
    return (
      <div>
        The user is:{" "}
        {this.state.logged ? <div>Logged In!</div> : <div>Logged out!</div>}
      </div>
    );
  }
}
