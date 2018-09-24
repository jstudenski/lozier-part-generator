import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import DeleteButton from '../DeleteButton';

const getItemStyle = (isDragging, draggableStyle, details) => ({
  width: details.width * 2,
  height: details.height * 2,
  background: isDragging ? '#9e9e9e' : null,
  // styles neede to apply on draggables
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
          className='fixture'
          ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style,
            details
          )}>
          <DeleteButton click={click} />
          {details.width}x{details.height}
        </div>
      )}
    </Draggable>
  )
};

// Fixture.propTypes = {
//   width: PropTypes.number.isRequired,
//   height: PropTypes.number.isRequired,
// };

Fixture.defaultProps = {
  index: 0,
  group: 0,
  details: {width: 48, height: 48},
};



export default Fixture;