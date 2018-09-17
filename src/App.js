import React, { Component } from 'react';
import './App.css';
import './normalize.css';
import 'rc-slider/assets/index.css';
import Test from './components/Test';
import Builder from './components/Builder';
import Diagram from './components/Diagram';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lozier Parts</h1>
        </header>
        <div className="row">
          <Builder />
        </div>
        <div className="row">
          <Diagram />
        </div>
        <div className="row">
          <Test></Test>
          {/* <p className="App-intro">
            Drag them around
          </p> */}
        </div>
      </div>
    );
  }
}

export default App;
