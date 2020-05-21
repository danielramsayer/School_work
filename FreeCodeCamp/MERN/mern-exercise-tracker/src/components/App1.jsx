import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./checkAndRun.scss";
import ReactDom from "react-dom";
import CheckAndRun from "./checkAndRun";
import Joke, { Joke1 } from "./jokes";
import Joken from "./inherit.js";
import Products from "./products";
import Checker from "./checker";
import Pokemon from "./pokemans";

class App1 extends React.Component {
  render() {
    return (
      <div>
        {/* <Header username="Josephine" /> <Greeting /> */}
        {/* <Header1 /> */}
        {/* <Testing1 /> */}
        {/* <CheckAndRun /> */}
        {/* <Joken /> */}
        {/* <Products /> */}
        {/* <LoggedIn /> */}
        {/* <Image /> */}
        {/* <Counter /> */}
        {/* <Checker /> */}
        {/* <Timer /> */}
        {/* <LogStatus /> */}
        {/* <ApiCall /> */}
        {/* <Forms /> */}
        {/* <FromArray /> */}
        {/* <OnUpdate /> */}
        {/* <TravelCheck /> */}
        {/* <Memu /> */}
        <Pokemon />
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
  return <div>Here is some really cool stuff.</div>;
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
        {this.state.isLoading ? <div>Loading...</div> : <Conditional />}
      </div>
    );
  }
}

class LogStatus extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }));
  }

  render() {
    return (
      <div>
        You are:{" "}
        <button onClick={this.handleClick}>
          {this.state.loggedIn ? <div>Logged in</div> : <div>Logged out</div>}
        </button>
      </div>
    );
  }
}

class ApiCall extends Component {
  constructor() {
    super();
    this.state = {
      thing: {}
    };
  }

  componentDidMount() {
    fetch("https://reqres.in/api/products/3")
      .then(response => response.json())
      .then(data => {
        console.log("CDM Data", data);
        this.setState({ thing: data });
        console.log("CDM Thing", this.state.thing);
      });
  }

  render() {
    return (
      <div>
        {console.log("Render Thing", this.state.thing)}
        {this.state.thing.data ? (
          <div>{this.state.thing.data.color}</div>
        ) : (
          <div>Loading....</div>
        )}
        {console.log("Render Thing 2", this.state.thing)}
      </div>
    );
  }
}

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Please write an essay about your favorite DOM element."
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("An essay was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <select>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option selected value="coconut">
            Coconut
          </option>
          <option value="mango">Mango</option>
        </select>
      </form>
    );
  }
}

class FromArray extends Component {
  render() {
    const arr = [
      "string",
      42,
      function() {
        return <>You found me!</>;
      }
    ];
    const arr2 = {
      firstn: "Jack",
      secondn: "Smalls",
      address: {
        street: "Madison",
        num: "123"
      }
    };
    return (
      <header>
        <p>
          Welcome, {arr[2]()}, {arr2.address.num}
        </p>
      </header>
    );
  }
}

class OnUpdate extends Component {
  constructor() {
    super();
    this.state = {
      fName: "",
      lName: "",
      isRelevant: true,
      gender: "",
      favoriteColor: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checked"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }
  render() {
    return (
      <form
        onSubmit={
          this.handleSubmit
        } /* This ties in with possibly an external API*/
      >
        <input
          type="text"
          name="fName"
          value={this.state.fName}
          placeholder="first name"
          onChange={this.handleChange}
        ></input>
        <br />
        <input
          type="text"
          name="lName"
          value={this.state.lName}
          placeholder="last name"
          onChange={this.handleChange}
        ></input>
        <br />
        <textarea
          value={"Please enter your thoughts."}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="checkbox"
          name="isRelevant"
          checked={this.state.isRelevant}
          onChange={this.handleChange}
        />{" "}
        Relevant?
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="other"
            checked={this.state.gender === "other"}
            onChange={this.handleChange}
          />
          Other
        </label>
        <br />
        <select
          name="favoriteColor"
          value={this.state.favoriteColor}
          onChange={this.handleChange}
        >
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="purple">Purple</option>
        </select>
        <br />
        <div>
          {this.state.fName} {this.state.lName} {this.state.gender}{" "}
          {this.state.favoriteColor}
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

class TravelCheck extends Component {
  constructor() {
    super();
    this.state = {
      fName: "",
      lName: "",
      age: "",
      gender: "other",
      toLocation: "",
      diet: [],
      restrictions: [
        { key: "0", value: "Vegan ", isChecked: false },
        { key: "1", value: "Vegetarian ", isChecked: false },
        { key: "2", value: "Gluten Free ", isChecked: false }
      ]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  createAge = () => {
    const ageTable = [];
    for (let i = 0; i < 120; i++) {
      ageTable.push(<option value={i}>{i}</option>);
    }
    return ageTable;
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleCheckChildElement = event => {
    let restrictions = this.state.restrictions;
    restrictions.forEach(restriction => {
      if (restriction.value === event.target.value)
        restriction.isChecked = event.target.checked;
    });
  };

  render() {
    const CheckBox = props => {
      return (
        <>
          <input
            type="checkbox"
            key={props.id}
            onClick={props.handleCheckChieldElement}
            onChange={this.handleChange}
            checked={props.isChecked}
            value={props.value}
          />{" "}
          {props.value}
        </>
      );
    };
    return (
      <div>
        <form>
          <input
            type="text"
            name="fName"
            value={this.state.fName}
            placeholder="first name"
            onChange={this.handleChange}
          ></input>
          First Name
          <br />
          <input
            type="text"
            name="lName"
            value={this.state.lName}
            placeholder="last name"
            onChange={this.handleChange}
          ></input>
          Last Name
          <br />
          <select
            type="checkbox"
            name="age"
            checked={this.state.age}
            onChange={this.handleChange}
          >
            {this.createAge()}
          </select>
          Age
          <br />
          Gender
          <br />
          <input
            type="radio"
            name="gender"
            value="other"
            checked={this.state.gender === "other"}
            onChange={this.handleChange}
          ></input>{" "}
          Other{" "}
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          ></input>{" "}
          Female{" "}
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          ></input>{" "}
          Male <br />
          <select
            name="toLocation"
            value={this.state.toLocation}
            onChange={this.handleChange}
          >
            <option value="">Please select destination</option>
            <option value="burmuda">Burmuda</option>
            <option value="bahama">Bahama</option>
            <option value="cocamo">Cocamo</option>
          </select>
          Location
          <br />
          Food Restrictions?
          <br />
          {this.state.restrictions.map(restriction => {
            return (
              <CheckBox
                handleCheckChieldElement={this.handleCheckChildElement}
                {...restriction}
              />
            );
          })}
          <br />
          <h3>Name: </h3>
          {this.state.fName} {this.state.lName}
          <br />
          <h3>Gender:</h3>
          {this.state.gender} <br />
          <h3>Age:</h3>
          {this.state.age}
          <br />
          <h3>Destination:</h3>
          {this.state.toLocation}
          <br />
          <h3>Dietary Restrictions:</h3>
          {this.state.restrictions.map(restriction => {
            return restriction.isChecked ? restriction.value : "";
          })}
        </form>
      </div>
    );
  }
}

function MemuHeader() {
  return (
    <Container className="memuheader">
      <Row>
        <Col>
          <img
            src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
            alt="Troll Face image"
            width="200px"
          />
        </Col>
        <Col xs={8}>
          <h2>Meme Generator</h2>
        </Col>
      </Row>
    </Container>
  );
}

class Memu extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      imageURL: "https://i.imgflip.com/1bij.jpg",
      allMemeImages: [],
      random: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClickMeme = this.handleClickMeme.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleClickMeme(event) {
    event.preventDefault();
    const rando = Math.floor(Math.random() * this.state.allMemeImages.length);
    const randomImageURL = this.state.allMemeImages[rando].url;
    this.setState({
      imageURL: randomImageURL
    });
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({ allMemeImages: memes });
      });
  }

  render() {
    return (
      <div>
        <MemuHeader />
        <h1>MEME GENERATOR</h1>
        {this.state.random}
        <form onSubmit={this.handleClickMeme}>
          <input
            type="text"
            name="topText"
            value={this.state.topText}
            placeholder="Top Text"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            placeholder="Bottom Text"
            onChange={this.handleChange}
          ></input>

          <button>Generate Meme</button>

          <br />
          <div className="meme">
            <img
              src={this.state.imageURL}
              alt={
                this.state.allMemeImages[this.state.random]
                  ? this.state.allMemeImages[this.state.random].name
                  : "Meme image"
              }
            />
            <h2 className="top">{this.state.topText}</h2>
            <h2 className="bottom">{this.state.bottomText}</h2>
          </div>
        </form>
      </div>
    );
  }
}
