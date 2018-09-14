import React, { Component } from 'react';
import './App.css';
import './normalize.css';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Fixture = SortableElement(({value}) =>
  <div className="Fixture" style={{width: (value.width*2), height: (value.height*2)}}>
    {value.height}" x {value.width}"
  </div>
);

const SortableList = SortableContainer(({items}) => {
  // console.log(items);
  return (
    <div className="SortableContainer">
      {items.map((value, index) => (
        <Fixture
          key={`item-${index}`}
          index={index}
          value={value}
        />
      ))}
    </div>
  );
});



class SortableComponent extends Component {
  state = {
    items:[
      {
        name: '4ft',
        width: 48,
        height: 36,
      },
      {
        name: '3ft',
        width: 36,
        height: 72,
      },
      {
        name: '2ft',
        width: 24,
        height: 120,
      },
    ]

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
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };
  render() {
    return (
      <div>
        <SortableList
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

const verticalMarks = {
  120: '120',
  114: '114',
  108: '108',
  102: '102',
  96: '96',
  90: '90',
  84: '84',
  78: '78',
  72: '72',
  66: '66',
  60: '60',
  54: '54',
  48: '48',
  42: '42',
  36: '36',
};

const horizontalMarks = {
  48: '48',
  24: '24',
};


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      verticalBound: 36,
      horizontalBound: 48,
    };
  }


  render() {
    this.verticalBoundChange = (e) => {
      this.setState({ verticalBound: e });
    }
    this.horizontalBoundChange = (e) => {
      this.setState({ horizontalBound: e });
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lozier Parts</h1>
        </header>
        <div className="row">
          <div className="builder">
            <Slider
              vertical={true}
              min={36}
              max={120}
              step={6}
              dots={true}
              marks={verticalMarks}
              value={this.state.verticalBound}
              onChange={this.verticalBoundChange}
              style={{height: '168px',display: 'inline-block', position: 'absolute', right: -20, zIndex: 1}}
            />
            <Slider
              min={24}
              max={48}
              step={24}
              dots={true}
              marks={horizontalMarks}
              value={this.state.horizontalBound}
              onChange={this.horizontalBoundChange}
              style={{width: '48px', display: 'inline-block', position: 'absolute', bottom: -20, right: 0, zIndex: 1}}
            />
            <div
              style={{
                width: this.state.horizontalBound*2,
                height: this.state.verticalBound*2
              }}
              className="builder-item"
              >
              {this.state.verticalBound}x{this.state.horizontalBound}
            </div>
          </div>
        </div>
        <div className="row">
        <SortableComponent></SortableComponent>
        </div>
        <p className="App-intro">
          Drag them around
        </p>
      </div>
    );
  }
}

export default App;
