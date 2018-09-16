import React from 'react';
import PropTypes from 'prop-types';
import './group.css'
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import Fixture from '../Fixture';

const Group = SortableContainer(({items}) => {
  console.log(items);

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

Group.propTypes = {
  // title: PropTypes.string.isRequired,
};

Group.defaultProps = {
  // title: 'Hello World',
};

export default Group
