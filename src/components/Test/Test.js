import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import Fixture from '../Fixture';
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

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    margin: 8,
    display: 'inline-block',
    width: 'max-content',
});

const testStyle = itemB => ({
    height: itemB.height,
    width: itemB.width,
});

class App extends Component {
  render() {
    return (
      <DragDropContext onDragEnd={this.props.onDragEnd}>
        {this.props.test.map((itemA, indexA) => (
          <Droppable
            direction="horizontal"
            droppableId={`${indexA}`}
          >
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}>
                {itemA.map((itemB, indexB) => (
                  <Draggable
                    key={itemB.id}
                    draggableId={itemB.id}
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
                          // testStyle(itemB),
                        )}>
                        {/* <Fixture
                        value={{
                          width: 48,
                          height: 36,
                        }}> */}
                          {itemB.id}
                        {/* </Fixture> */}
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
    test: state.test,
    items: state.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDragEnd: (e) => dispatch({type: 'ON_DRAG_END', value: e}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
