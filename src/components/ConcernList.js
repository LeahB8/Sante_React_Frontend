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
<<<<<<< HEAD
      this.props
        .updateUserConcerns(this.props.user, event.target.concern.value)
        .then(this.props.setUserConcerns(this.props.user));
=======
      this.props.updateUserConcerns(
        this.props.user,
        event.target.concern.value
      ).then(() => this.props.setUserConcerns(this.props.user))
>>>>>>> 944f2b2be32923bbbbf951ab501d66fc8d0159ad
    }
  };

  handleClick = event => {
<<<<<<< HEAD
    this.props.deleteUserConcernsFromServer(event.target.value);
  };
=======
    this.props.deleteUserConcernsFromServer(event.target.value)
    .then(() => this.props.setUserConcerns(this.props.user))

  }
>>>>>>> 944f2b2be32923bbbbf951ab501d66fc8d0159ad

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
<<<<<<< HEAD
            {concern.problem}
            <button
              value={concern.id}
              className="delete-btn"
              onClick={this.handleClick}
            >
              x
            </button>
=======
          {concern.problem}
          <button className="fa fa-remove" value={concern.id} onClick={this.handleClick}>
</button>
>>>>>>> 944f2b2be32923bbbbf951ab501d66fc8d0159ad
          </p>
        ))}
      </div>
    );
  }
}
