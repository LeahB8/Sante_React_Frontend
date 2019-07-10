import React from "react";
import ReactCountdownClock from "react-countdown-clock";

export default class Timer extends React.Component {

handleSubmit = (event) => {
    event.preventDefault()
    ReactCountdownClock.props.seconds = event.target.timer.value
}

  render() {
    return (
      <div className="card">
        <h2>Meditation Timer</h2>

        <form onSubmit={this.handleSubmit}>
            <input type='number' name="timer" />
            <button>Select</button>
            </form>
            <br></br>
            <br></br>


        <ReactCountdownClock 
                seconds={500}
                color="#D1CABE"
                size={200}
                showMilliseconds={false}
                paused={true}
        />
  
      </div>
    );
  }
}