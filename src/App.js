import React, { Component } from 'react';
import './App.css';
import './normalize.css';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const Fixture = SortableElement(({value}) =>
  <div className="Fixture" style={{width: value.width, height: value.height}}>
    {value.height}" x {value.width}"
  </div>
);

const SortableList = SortableContainer(({items}) => {
  console.log(items);
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


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lozier Parts</h1>
        </header>
        <SortableComponent></SortableComponent>
        <p className="App-intro">
          Drag them around
        </p>
      </div>
    );
  }
}

export default App;
