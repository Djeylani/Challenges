import React, { Component } from 'react';
import './App.css';
import EightBall from "./component/EightBall";

class App extends Component {
  
  render(){
    return (
      <div className="container">
        <div className="App">
        <h1>Ask Eight Ball A Question</h1>
      </div>
      <EightBall />
      </div>
    );
  }
}

export default App;
