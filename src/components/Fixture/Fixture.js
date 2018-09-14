import React from 'react';
import PropTypes from 'prop-types';
import './fixture.css'
import { SortableElement } from 'react-sortable-hoc';

const Fixture = SortableElement(({value}) =>
  <div
    className="Fixture"
    style={{
      width: (value.width*2),
      height: (value.height*2)
  }}>
    {value.height}" x {value.width}"
  </div>
);

Fixture.propTypes = {
  // title: PropTypes.string.isRequired,
};

Fixture.defaultProps = {
  // title: 'Hello World',
};

export default Fixture
