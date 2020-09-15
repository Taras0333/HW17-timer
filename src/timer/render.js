import React from "react";
function Timer(props) {
  return (
    <div className="cont">
      <div className="timer">0:{props.sec}</div>
      <div
        className="bar"
        style={{ width: props.width, backgroundColor: props.color }}
      ></div>
    </div>
  );
}
export default Timer;
