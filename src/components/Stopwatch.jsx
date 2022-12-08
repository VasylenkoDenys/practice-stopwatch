import React from "react";

class Stopwatch extends React.Component {
  state = {
      milliseconds: 0,
      seconds: 0,
      minutes: 0,
      lapTimer: 0,
      isStart: false,
    }
  
    startStopwatch = ()=> {
    const {milliseconds, seconds, minutes} = this.state;
      this.setState({milliseconds: milliseconds +1, isStart: true})
      if (milliseconds > 99) {
        this.setState({seconds: seconds+1, milliseconds: 0})
      }
      if (seconds > 59)
      this.setState ({minutes: minutes +1, seconds: 0})
    }
  
    startingStopwatch=()=>{
      this.timerId = setInterval(this.startStopwatch, 10);
  }
  
    pausedStopwatch=()=>{
      this.setState({isStart: false})
      clearInterval(this.timerId)
    }

    resetStopwatch = () => {
      clearInterval(this.timerId);
      this.setState({milliseconds: 0, seconds: 0, minutes: 0})
    }


    componentWillUnmount(){
      clearInterval(this.timerId);
    }

  render(){
    const {minutes, seconds, milliseconds} = this.state
    return(
      <section className="stopwatch">
        <div className="stopwatchDisplay">
          <h3>{minutes} : {seconds} : {milliseconds}</h3>
        </div>
        <div>
          <button className="btnStart" onClick={this.startingStopwatch}>Start</button>
          <button className="btnStart" onClick={this.pausedStopwatch}>Pause</button>
        </div>
      </section>
    )
  }
}

function StartButton () {
    return <button className="btn">Start</button>
  }


class StopButton extends React.Component {
  render(){
    return <button className="btn" >Stop</button>
  }
}

class StopwatchDisplay extends React.Component {

}

export default Stopwatch