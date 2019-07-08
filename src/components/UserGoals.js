import React from "react";

export default class UserGoals extends React.Component {
  render() {
    const { goals, updateGoals, handleSubmit } = this.props;
    return (
      <div>
        <h1>Fitness and Wellness Goals</h1>
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
