import React from "react";

export default class UserGoals extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    // event.persist();
    let goal = [event.target.goals.value];

    this.props.updateGoals(this.props.user, goal);
  };

  render() {
    const { goals, updateGoals, handleSubmit, user } = this.props;
    return (
      <div className="card">
        <h4>Fitness and Wellness Goals</h4>
        {/* { goals.map(goal => <p>{goal}</p>)} */}
        <form onSubmit={this.handleSubmit}>
          <input name="goals" type="text" placeholder="Goal" />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
