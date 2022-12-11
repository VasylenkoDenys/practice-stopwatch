import React from "react";

function StartButton (props) {
  const {onClick} = props;
  return (
    <button className="btnStart" onClick={onClick}>Start</button>
  )
}

export default StartButton;