import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Age from './components/age';
import {Header} from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <img src={logo} className="App-logo" alt="logo" align="left"/>
        <body>
          <div>
            <p>Their age is: <Age age={7}/></p>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
