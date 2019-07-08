import React from "react";
import Concern from "./Concern";

export default class ConcernList extends React.Component {
  
  handleClick = (event) => {
    event.preventDefault()
    this.props.updateUserConcerns(this.props.user, event.target.concern.value)
    }


  render() {
    const { concerns, userConcerns, user } = this.props;

    return (
      <div className="card">
       <h4>Health and Dietary Concerns</h4>

        {/* <div> */}
          {/* {userConcerns.map(userConcern => (
            <p>{userConcern}</p>
          ))} */}
        {/* </div> */}

        <form onSubmit={this.handleClick}>
          <select name="concern">
            {concerns.map(concern => (
              <option value={concern.id}>{concern.problem}</option>
            ))}
          </select>
          <button type="submit" >
            Add
          </button>
        </form>
      </div>
    );
  }
}
