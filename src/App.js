import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';


const Fixture = SortableElement(({value}) =>
  <li style={{width: value.width}}>{value.name}</li>
);

const SortableList = SortableContainer(({items}) => {
  console.log(items);
  return (
    <ul>
      {items.map((value, index) => (
        <Fixture
          key={`item-${index}`}
          index={index}
          value={value}
        />
      ))}
    </ul>
  );
});

class SortableComponent extends Component {
  state = {
    // items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
    items: [{name: 'Item 1', width: 48},{name: 'Item 2', width: 36},{name: 'Item 3', width: 24},],
  };
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };
  render() {
    return (
      <SortableList
        axis={'x'}
        lockAxis={'x'}
        items={this.state.items}
        onSortEnd={this.onSortEnd}
        helperClass={'helper'}
      />
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SortableComponent></SortableComponent>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
