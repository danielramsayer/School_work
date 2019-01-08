import React, { Component } from 'react';
import { CLIENTS } from './test_stuff/test_data';
import ReadDataIntoBrowser from './components/ReadDataIntoBrowser';
import Posts from './components/posts';
import postForms from './components/postForms';

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
        <h1>Welcome to the Show</h1>
          <Posts />
          <ReadDataIntoBrowser data={this.state.clients}/>
          <Tester thing="This additional thing!"/>
      </div>
    );
  }
}

export default App;
