import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import Fixture from './Fixture';
import DeleteButton from '../DeleteButton';

const getListStyle = (isDraggingOver, itemA) => ({
  background: isDraggingOver ? 'aquamarine' : 'lightgrey',
  margin: '8px 8px -4px 8px',
  display: 'inline-block',
  width: 'max-content',
  minWidth: 48 * 2,
  minHeight: 36 * 2,
  position: 'relative',
  verticalAlign: 'bottom',
});

class Fixtures extends Component {
  render() {
    return (
      <DragDropContext onDragEnd={this.props.onDragEnd}>
        {this.props.fixtures.map((itemA, indexA) => (
          <Droppable
            key={indexA}
            direction="horizontal"
            droppableId={`${indexA}`}
          >
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
                className='droppable-group'>
                <DeleteButton click={() => this.props.deleteSection(indexA)} />
                {itemA.map((itemB, indexB) => (
                  <Fixture click={() => this.props.deleteFixture([indexA, indexB])} group={indexA} details={itemB} index={indexB}></Fixture>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => {
  return {
    fixtures: state.fixtures,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDragEnd: (e) => dispatch({type: 'ON_DRAG_END', value: e}),
    deleteFixture: (e) => dispatch({type: 'DELETE_FIXTURE', value: e}),
    deleteSection: (e) => dispatch({type: 'DELETE_SECTION', value: e}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Fixtures);
