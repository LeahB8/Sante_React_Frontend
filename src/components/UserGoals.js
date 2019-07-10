import React from "react";

export default class UserGoals extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    let goal = event.target.goals.value;

    this.props.updateGoals(this.props.user, goal);
  };

  handleDeleteGoal = event => {
<<<<<<< HEAD
    this.props.deleteGoalFromServer(event.target.value);
  };
=======
    this.props.deleteGoalFromServer(event.target.value)
    .then(() => this.props.setUserGoals(this.props.user))
    
}
>>>>>>> 944f2b2be32923bbbbf951ab501d66fc8d0159ad

  render() {
    const { userGoals, updateGoals, handleSubmit, user } = this.props;
    return (
      <div className="card">
<<<<<<< HEAD
        <h4>Fitness and Wellness Goals</h4>

=======
        <h2>Fitness and Wellness Goals</h2>
        
>>>>>>> 944f2b2be32923bbbbf951ab501d66fc8d0159ad
        <form onSubmit={this.handleSubmit}>
          <input name="goals" type="text" placeholder="Goal" />
          <button type="submit">Add</button>
        </form>
<<<<<<< HEAD
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
=======
        { userGoals.map(goal =>
        <p>
        {goal.content}
        <button value={goal.id} className="fa fa-remove" onClick={this.handleDeleteGoal}></button>
        </p>)}
>>>>>>> 944f2b2be32923bbbbf951ab501d66fc8d0159ad
      </div>
    );
  }
}
