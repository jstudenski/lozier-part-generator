import React from 'react';

// import { SortableElement } from 'react-sortable-hoc';
// import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import DeleteButton from '../DeleteButton';

const getItemStyle = (isDragging, draggableStyle, details) => ({
  userSelect: 'none',
  width: details.width * 2,
  height: details.height * 2,
  background: isDragging ? 'salmon' : 'grey',
  fontFamily: 'Roboto',
  textAlign: 'center',
  position: 'relative',
  // styles we need to apply on draggables
  ...draggableStyle
});


const Fixture = (props) => {
  const { group, index, details, click } = props;
  return (
    <Draggable
      key={group+''+index}
      draggableId={group+''+index}
      index={index}>
      {(provided, snapshot) => (
        <div
          className='test'
          ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style,
            details
          )}>
          <DeleteButton click={click} />
          {details.width} x {details.height}
        </div>
      )}
    </Draggable>
  )
};

export default Fixture;