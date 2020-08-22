import React, { Component } from 'react';
import './styles/App.css';

class App extends Component {

  // All stateful components require 2 main methods:

  // 1. constructor: where we initialize our state
  constructor() {
    super();
    this.state = {};
  }

  // 2. render: where we write our jsx

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}


export default App;