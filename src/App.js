import React, { Component } from 'react';
import './App.css';
import './normalize.css';
import 'rc-slider/assets/index.css';
import Fixtures from './components/Fixtures';
import Builder from './components/Builder';
import Parts from './components/Parts';
// import Diagram from './components/Diagram';

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
          <Fixtures></Fixtures>
        </div>
        <div className="row">
          <Parts />
        </div>
      </div>
    );
  }
}

export default App;
