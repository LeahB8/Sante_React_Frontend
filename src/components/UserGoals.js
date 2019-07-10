import React from "react";

export default class UserGoals extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    let goal = event.target.goals.value;

    this.props.updateGoals(this.props.user, goal);
  };

  handleDeleteGoal = event => {
    this.props.deleteGoalFromServer(event.target.value);
  };

  render() {
    const { userGoals, updateGoals, handleSubmit, user } = this.props;
    return (
      <div className="card">
        <h4>Fitness and Wellness Goals</h4>

        <form onSubmit={this.handleSubmit}>
          <input name="goals" type="text" placeholder="Goal" />
          <button type="submit">Add</button>
        </form>
        {userGoals.map(goal => (
          <p>
            {goal.content}

            <button
              value={goal.id}
              className="delete-btn"
              onClick={this.handleDeleteGoal}
            >
              X
            </button>
            <input type="checkbox" />
          </p>
        ))}
      </div>
    );
  }
}
