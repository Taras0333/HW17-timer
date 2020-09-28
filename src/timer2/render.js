import React from "react";
import TimerFunc from "./timerCount";
const Timer = (props) => {
  return (
    <div className="cont">
      <TimerFunc sec={props.sec} restartStatus={props.restartStatus} />
      <div
        className="bar"
        style={{ width: props.width, backgroundColor: props.color }}
      ></div>

      <button className="btn" onClick={props.toggle}>
        {props.state.status ? "start" : "stop"}
      </button>
      <button className="btn restart" onClick={props.restart}>
        restart
      </button>
    </div>
  );
};
export default Timer;
