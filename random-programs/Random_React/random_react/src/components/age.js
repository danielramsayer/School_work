import React, { Component } from 'react';


class Age extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: props.age,
      counter: 0
    }
    setTimeout(() => {
      this.setState({
        counter: 1
      });
    }, 3000);
  }

  increaseAge() {
    this.setState({
      age: this.state.age + 1
    });
  }


  render() {
    return (
      <div>
        <p>Meowie, Wowie! {this.state.age}</p>
        <button onClick={() => this.increaseAge()}>Increase Age By 1</button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default Age;
