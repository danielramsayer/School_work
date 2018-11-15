import React, { Component } from 'react';
import { CLIENTS } from './test_stuff/test_data';
import ReadDataIntoBrowser from './components/ReadDataIntoBrowser';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: CLIENTS,
    };
  }

  render() {
    const Tester = props => {
      console.log(props.thing);
      return (<h1>{props.thing}</h1>);
    }
    //let Rall = "This other thing!";
    return (
      <div>
        <p>This thing</p>
          <ReadDataIntoBrowser data={this.state.clients}/>
          <Tester thing="This additional thing!"/>
      </div>
    );
  }
}

export default App;
