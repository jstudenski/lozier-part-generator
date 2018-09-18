import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
// import Fixture from '../Fixture';
import './test.css';

const grid = 8;

const getItemStyle = (isDragging, draggableStyle, itemB) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  width: itemB.width * 2,
  height: itemB.height * 2,
  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',
  textAlign: 'center',
  position: 'relative',
  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  margin: '8px 8px -4px 8px',
  display: 'inline-block',
  width: 'max-content',
  minWidth: 48 * 2,
  minHeight: 36 * 2,
  position: 'relative',
});

class App extends Component {
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
                style={getListStyle(snapshot.isDraggingOver)}>
                <button className="del-btn" onClick={() => this.props.deleteSection(indexA)}>&#215;</button>
                {itemA.map((itemB, indexB) => (
                  <Draggable
                    key={indexA+''+indexB}
                    draggableId={indexA+''+indexB}
                    index={indexB}>
                    {(provided, snapshot) => (
                      <div
                        className='test'
                        ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style,
                          itemB
                        )}>
                        <button className="del-btn" onClick={() => this.props.deleteFixture([indexA, indexB])}>&#215;</button>
                          {itemB.width} x {itemB.height}
                      </div>
                    )}
                  </Draggable>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
