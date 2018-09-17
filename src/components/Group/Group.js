import React from 'react';
import './group.css';
import { connect } from 'react-redux';
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

const mapStateToProps = state => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // onWidthChange: (e) => dispatch({type: 'WIDTH_CHANGE', value: e}),
    // onHeightChange: (e) => dispatch({type: 'HEIGHT_CHANGE', value: e}),
    // onAddButton: () => dispatch({type: 'ADD_BUTTON'}),
    // onHeightChange: () => dispatch()
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Group);
