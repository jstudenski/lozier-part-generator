import React from 'react';
import './fixture.css'
import { SortableElement } from 'react-sortable-hoc';
import PropTypes from 'prop-types';

const Fixture = SortableElement(({value}) =>
  <div
    className="Fixture"
    style={{
      width: (value.width*2),
      height: (value.height*2)
  }}>
    {value.height} x {value.width}
  </div>
);

// Fixture.propTypes = {
//   width: PropTypes.number.isRequired,
//   height: PropTypes.number.isRequired,
// };

Fixture.defaultProps = {
  // title: 'Hello World',
};

export default Fixture
