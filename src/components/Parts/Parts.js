import React from 'react';
// import PropTypes from 'prop-types';
import './parts.css';
import { connect } from 'react-redux';

class Parts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  render() {
    return (
      <div className='parts'>
        <p className="part-row">Fixtures:</p>
        {this.props.fixtures.map((itemA, indexA) => (
           <div>
            {itemA.map((itemB, indexB) => (
              <div className="part-row">
                width: {itemB.height} x height: {itemB.height}
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }
}

// Parts.propTypes = {
//   // title: PropTypes.string.isRequired,
// };

// Parts.defaultProps = {
//   // title: 'Hello World',
// };

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

export default connect(mapStateToProps, mapDispatchToProps)(Parts);
