import React from "react";

export default class UserGoals extends React.Component {
  render() {
    const { goals, updateGoals, handleSubmit } = this.props;
    return (
      <div className="card">
        <h4>Fitness and Wellness Goals</h4>
        {/* { goals.map(goal => <p>{goal}</p>)} */}
        <form>
          <input name="goals" type="text" placeholder="Goal" />
          <button type="submit" onClick={updateGoals}>
            Add
          </button>
        </form>
      </div>
    );
  }
}
