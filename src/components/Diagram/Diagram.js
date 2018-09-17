import React from 'react';
import { connect } from 'react-redux';
import Group from '../Group';

class Diagram extends React.Component {
  render() {
    return (
      <div>
        {this.props.items.map((value, index) => (
          <Group
            axis={'x'}
            lockAxis={'x'}
            onSortEnd={this.onSortEnd}
            helperClass={'helper'}
            items={value}
          />
        ))}
      </div>
    )
  }
}

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Diagram);
