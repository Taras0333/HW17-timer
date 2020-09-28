import React from "react";
import Create from "./render";

class Timer extends React.Component {
  state = {
    min: 0,
    sec: 59,
    status: false,
    status2: false,
    width: 177,
    color: "#9acd32",
    restart: false,
  };

  componentDidMount() {
    this.timer = setInterval(this.changeTimer, 1000);
  }
  clear = () => {
    clearInterval(this.timer);
  };

  changeStyle = () => {
    if (this.state.sec <= 10) {
      return this.setState({
        width: this.state.width - 3,
        color: "#f44336",
      });
    } else {
      return this.setState({
        width: this.state.width - 3,
        restart: false,
      });
    }
  };

  changeTimer = () => {
    this.changeStyle();
    this.setState((prevState) => {
      if (this.state.sec <= 0) {
        this.clear();
      } else if (this.state.sec <= 10) {
        return {
          sec: "0" + (prevState.sec - 1),
        };
      } else {
        return {
          sec: prevState.sec - 1,
        };
      }
    });
  };
  toggle = () => {
    this.setState((prevState) => {
      return { status: !prevState.status };
    });
    return this.state.status
      ? (this.timer = setInterval(this.changeTimer, 1000))
      : this.clear();
  };
  restart = () => {
    this.setState({
      sec: 59,
      width: 177,
      restart: true,
    });
  };

  render() {
    return (
      <div className="wrap">
        <Create
          sec={this.state.sec}
          width={this.state.width}
          color={this.state.color}
          toggle={this.toggle}
          state={this.state}
          restart={this.restart}
          restartStatus={this.state.restart}
        />
      </div>
    );
  }
}
export default Timer;
