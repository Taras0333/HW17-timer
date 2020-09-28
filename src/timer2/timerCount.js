import React, { Component } from "react";
class TimerCounter extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.sec.toString().slice(-1) === "0") {
      return true;
    } else if (nextProps.restartStatus) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    return <div className="timer">0:{this.props.sec}</div>;
  }
}
export default TimerCounter;
