import React from "react";

class StopButton extends React.Component {
  render(){
    const {onClick} = this.props
    return (
      <button className="btnStop" onClick={onClick}>Stop</button>
    )
  }
}

export default StopButton;