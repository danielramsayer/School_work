import React, { Component } from "react";
import ReactDom from "react-dom";
import "./checkAndRun.scss";
import Checker from "./checker";

class App1 extends React.Component {
  render() {
    return (
      <div>
        {/* <Header username="Josephine" /> <Greeting /> */}
        {/* <Header1 /> */}
        {/* <Testing1 /> */}
        {/* <LoggedIn /> */}
        {/* <Image /> */}
        {/* <Counter /> */}
        {/* <Checker /> */}
        <Timer />
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

class Image extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <img
        src="https://www.fillmurray.com/200/100"
        onMouseEnter={() => console.log("This is Bill Murray!")}
      />
    );
  }
}

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick1() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleClick2() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }

  render() {
    return (
      <div>
        <h2>Count is:</h2>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick1}>Increase!</button>
        <button onClick={this.handleClick2}>Decrease!</button>
      </div>
    );
  }
}

function Conditional(props) {
  if (props.isLoading === true) {
    return <h1>Loading....</h1>;
  } else {
    return <h1>Here is some really cool stuff.</h1>;
  }
}

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 1500);
  }

  render() {
    return (
      <div>
        <Conditional isLoading={this.state.isLoading} />
      </div>
    );
  }
}
