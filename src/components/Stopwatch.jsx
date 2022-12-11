import React from "react";
import PauseButton from "./PauseButton";
import StartButton from "./StartButton";
import StopButton from "./StopButton";

class Stopwatch extends React.Component {
  state = {
    milliseconds: 0,
    seconds: 0,
    minutes: 0,
    lapTimer: 0,
    isStart: false,
    lapTime: [],
  };

  tick = () => {
    const { milliseconds, seconds, minutes } = this.state;
    this.setState({ milliseconds: milliseconds + 1 });
    if (milliseconds > 99) {
      this.setState({ seconds: seconds + 1, milliseconds: 0 });
    }
    if (seconds > 59) this.setState({ minutes: minutes + 1, seconds: 0 });
  };

  startingStopwatch = () => {
    this.setState({ isStart: true });
    this.timerId = setInterval(this.tick, 10);
  };

  pausedStopwatch = () => {
    this.setState({ isStart: false });
    clearInterval(this.timerId);
  };

  resetStopwatch = () => {
    clearInterval(this.timerId);
    this.setState({ milliseconds: 0, seconds: 0, minutes: 0, isStart: false });
  };

  render() {
    const { minutes, seconds, milliseconds, isStart } = this.state;
    return (
      <section className="stopwatch">
        <div className="stopwatchDisplay">
          <h3>
            {minutes} : {seconds} : {milliseconds}
          </h3>
        </div>
        <div>
          {isStart ? (
            <StopButton onClick={this.resetStopwatch} />
          ) : (
            <StartButton onClick={this.startingStopwatch} />
          )}
          <PauseButton onClick={this.pausedStopwatch}/>
          <button className="btnPause" onClick={this.lapTimer}>
            Lap time
          </button>
          <ol>
            <lapTimer />
          </ol>
        </div>
      </section>
    );
  }
}

export default Stopwatch;
