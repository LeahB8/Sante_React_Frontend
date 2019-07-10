import React from "react";
import ReactCountdownClock from "react-countdown-clock";

export default class Timer extends React.Component {
  state = {
    timer: 0,
    paused: true
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ timer: event.target.timer.value, paused: false });
    event.target.timer.value = "";
  };

  handleClick = () => {
    this.setState({
      paused: !this.state.paused
    });
  };

  render() {
    return (
      <div className="card">
        <h2>Meditation Timer</h2>

        <form onSubmit={this.handleSubmit}>
          <input type="number" name="timer" placeholder="Enter Time In Secs" />
          <button>Select</button>
        </form>
        <br />
        <br />

        <ReactCountdownClock
          onClick={this.handleClick}
          seconds={this.state.timer}
          color="#D1CABE"
          size={200}
          showMilliseconds={false}
          paused={this.state.paused}
        />
      </div>
    );
  }
}
