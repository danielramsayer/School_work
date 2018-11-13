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
    return (
      <div>
        <p>This thing</p>
        <ReadDataIntoBrowser data={this.state.clients}/>
      </div>
    );
  }
}

export default App;
