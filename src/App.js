import React, { Component } from 'react';
import './App.css';
import './normalize.css';
import 'rc-slider/assets/index.css';
import Group from './components/Group';
import Builder from './components/Builder';

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
          <Group
            axis={'x'}
            lockAxis={'x'}
            onSortEnd={this.onSortEnd}
            helperClass={'helper'}
          />
        </div>
        <div className="row">
          <p className="App-intro">
            Drag them around
          </p>
        </div>
      </div>
    );
  }
}

export default App;
