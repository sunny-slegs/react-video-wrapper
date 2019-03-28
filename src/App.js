import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Player from './Player.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Player />
      </div>
    );
  }
}

export default App;
