import React from 'react';
import './group.css';
import {SortableContainer, arrayMove} from 'react-sortable-hoc';
import Fixture from '../Fixture';

const Group = SortableContainer(({items}) => {
  this.onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };
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

export default Group;
