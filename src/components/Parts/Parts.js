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

    this.renderItems = this.renderItems.bind(this);
  }



  renderItems(element, index) {

    // we want to do something with that element
    // this is clean in my opinion, but I have to do the check
    // return cloneElement(element, {
    //   key: element.key || index, // this will fail if we dont put the check when element is null
    // })
    return (<h1>22</h1>)
  }


  render() {
    return (
      <div className='parts'>
      <h5>fixtures:</h5>
        {this.props.fixtures.map((itemA, indexA) => (
           <div>
            {itemA.map((itemB, indexB) => (
           //   console.log()
              <p>width: {itemB.height} x height: {itemB.height}</p>
            ))}
          </div>
        ))}

        {/* {this.props.fixtures.map((itemB) => (

          <p>{(itemB) ? itemB : null}</p>
        ))}; */}
        {/* {this.props.fixtures.map(this.props.fixtures, this.renderItems)} */}
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
