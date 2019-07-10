import React from "react";

export default class ConcernList extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    // this.props.updateUserConcerns(
    //   this.props.user,
    //   event.target.concern.value
    // );
    if (
      this.props.userConcerns.find(
        userConcern => userConcern.id === Number(event.target.concern.value)
      )
    ) {
      alert("You have already added this concern.");
    } else {
      this.props
        .updateUserConcerns(this.props.user, event.target.concern.value)
        .then(() => this.props.setUserConcerns(this.props.user));
    }
  };

  handleClick = event => {
    this.props
      .deleteUserConcernsFromServer(event.target.value)
      .then(() => this.props.setUserConcerns(this.props.user));
  };

  render() {
    const { concerns, userConcerns, user } = this.props;

    return (
      <div className="card">
        <h2>Health and Dietary Concerns</h2>

        <form onSubmit={this.handleSubmit}>
          <select name="concern">
            {concerns.map(concern => (
              <option value={concern.id}>{concern.problem}</option>
            ))}
          </select>
          <button type="submit">Add</button>
        </form>
        {this.props.userConcerns.map(concern => (
          <p>
            {concern.problem}
            <button
              className="fa fa-remove"
              value={concern.id}
              onClick={this.handleClick}
            />
          </p>
        ))}
      </div>
    );
  }
}
