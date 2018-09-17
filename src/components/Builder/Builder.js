import React from 'react';
import './builder.css'
import { connect } from 'react-redux';
import Slider from 'rc-slider';

class Builder extends React.Component {

  render() {
    const verticalMarks = {
      120: '120',
      114: '114',
      108: '108',
      102: '102',
      96: '96',
      90: '90',
      84: '84',
      78: '78',
      72: '72',
      66: '66',
      60: '60',
      54: '54',
      48: '48',
      42: '42',
      36: '36',
    };

    const horizontalMarks = {
      48: '48',
      24: '24',
    };

    return (
      <div>
      <div className="builderOld">
        <Slider
          vertical={true}
          min={36}
          max={120}
          step={6}
          dots={true}
          marks={verticalMarks}
          value={this.props.builderHeight}
          onChange={this.props.onHeightChange}
          style={{height: '168px',display: 'inline-block', position: 'absolute', right: -20, zIndex: 1}}
        />
        <Slider
          min={24}
          max={48}
          step={24}
          dots={true}
          marks={horizontalMarks}
          value={this.props.builderWidth}
          onChange={this.props.onWidthChange}
          style={{width: '48px', display: 'inline-block', position: 'absolute', bottom: -20, right: 0, zIndex: 1}}
        />
        <div
          style={{
            width: this.props.builderWidth*2,
            height: this.props.builderHeight*2
          }}
          className="builder-item"
          >
          {this.props.builderHeight}x{this.props.builderWidth}
        </div>
      </div>
      <button onClick={this.props.onAddButton} className="add-btn">Add</button>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    builderWidth: state.builderWidth,
    builderHeight: state.builderHeight
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onWidthChange: (e) => dispatch({type: 'WIDTH_CHANGE', value: e}),
    onHeightChange: (e) => dispatch({type: 'HEIGHT_CHANGE', value: e}),
    onAddButton: () => dispatch({type: 'ADD_BUTTON'}),
    // onHeightChange: () => dispatch()
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Builder);
