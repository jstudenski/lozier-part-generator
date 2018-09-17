import React from 'react';
import PropTypes from 'prop-types';
import './builder.css'
import { connect } from 'react-redux';
import Slider from 'rc-slider';

class Builder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verticalBound: 36,
      horizontalBound: 48,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  }

  render() {

    this.verticalBoundChange = (e) => {
      this.setState({ verticalBound: e });
    }
    this.horizontalBoundChange = (e) => {
      this.setState({ horizontalBound: e });
    }

    
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
          value={this.state.verticalBound}
          onChange={this.verticalBoundChange}
          style={{height: '168px',display: 'inline-block', position: 'absolute', right: -20, zIndex: 1}}
        />
        <Slider
          min={24}
          max={48}
          step={24}
          dots={true}
          marks={horizontalMarks}
          value={this.state.horizontalBound}
          onChange={this.horizontalBoundChange}
          style={{width: '48px', display: 'inline-block', position: 'absolute', bottom: -20, right: 0, zIndex: 1}}
        />
        <div
          style={{
            width: this.state.horizontalBound*2,
            height: this.state.verticalBound*2
          }}
          className="builder-item"
          >
          {this.state.verticalBound}x{this.state.horizontalBound}
        </div>
      </div>
      <button onClick={this.addFixture} className="add-btn">Add</button>
    </div>
    )
  }
}

Builder.propTypes = {
  // title: PropTypes.string.isRequired,
};

Builder.defaultProps = {
  // title: 'Hello World',
};

const mapStateToProps = state => {
  return {
    crt: state.counter
  };
}

export default connect(mapStateToProps)(Builder);
