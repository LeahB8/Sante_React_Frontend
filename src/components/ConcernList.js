import React from "react";
import Concern from "./Concern";

export default class ConcernList extends React.Component {
  render() {
    const { concerns, userConcerns } = this.props;

    return (
      <div className="card">
       <h4>Health and Dietary Concerns</h4>

        {/* <div> */}
          {/* {userConcerns.map(userConcern => (
            <p>{userConcern}</p>
          ))} */}
        {/* </div> */}

        <form>
          <select>
            {concerns.map(concern => (
              <option>{concern.problem}</option>
            ))}
          </select>
          <button type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}
