import React, { Component } from 'react';
import './App.css';
import './normalize.css';
import 'rc-slider/assets/index.css';
import Group from './components/Group';
import Builder from './components/Builder';

class SortableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[
        {
          name: '4ft',
          width: 48,
          height: 36,
        },
        {
          name: '2ft',
          width: 48,
          height: 120,
        },
      ]
  }

    // items:[[
    //   {
    //     name: '4ft',
    //     width: 48,
    //     height: 36,
    //   },
    //   {
    //     name: '3ft',
    //     width: 36,
    //     height: 72,
    //   },
    //   {
    //     name: '2ft',
    //     width: 24,
    //     height: 120,
    //   },
    // ],[
    //   {
    //     name: 'a',
    //     width: 48,
    //     height: 36,
    //   },
    //   {
    //     name: 'b',
    //     width: 36,
    //     height: 72,
    //   },
    //   {
    //     name: 'c',
    //     width: 24,
    //     height: 120,
    //   },
    // ]]
  };

  render() {
    return (
      <div>
        <Group
          axis={'x'}
          lockAxis={'x'}
          items={this.state.items}
          onSortEnd={this.onSortEnd}
          helperClass={'helper'}
        />
      </div>
    );
  }
}


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      verticalBound: 36,
      horizontalBound: 48,
      items: [
        {
          name: '4ft',
          width: 48,
          height: 36,
        },
        {
          name: '2ft',
          width: 24,
          height: 120,
        },
      ]
    };
    this.addFixture = this.addFixture.bind(this);
  }

  addFixture(e) {


    const temp = {
      width: this.state.horizontalBound,
      height: this.state.verticalBound,
    }
    console.log(temp)
    this.setState({ myArray: [...this.state.myArray, ...[1,2,3] ] })
    // this.setState({ items: [...this.state.items, temp] })
  }


  render() {
    // this.verticalBoundChange = (e) => {
    //   this.setState({ verticalBound: e });
    // }
    // this.horizontalBoundChange = (e) => {
    //   this.setState({ horizontalBound: e });
    // }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lozier Parts</h1>
        </header>
        <div className="row">
          <Builder />
        </div>
        <div className="row">
          <SortableComponent />
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
