import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { getConcerns } from "../services/api";
import ConcernList from "../components/ConcernList";
import FormControl from "@material-ui/core/FormControl";
import UserIcon from "../userIcon.jpg";
import UserGoals from "../components/UserGoals";
import { fetchUserInfo } from "../services/api";
import Consume from "../components/Consume";
import "../App.css";


import Avoid from "../components/Avoid";

export default class UserProfile extends React.Component {



//   handleInput = event => {
//     this.props.postUserInfoToServer({
//       [event.target.name]: event.target.value
//     });
//   };


  handleSubmit = event => {
    event.preventDefault();
    // event.persist();
    let updatedUser = {
        firstName: event.target.firstName.value,
        weight: event.target.weight.value,
        height: event.target.height.value,
        age: event.target.age.value,
        id: this.props.user.id
    }

    this.props.postUserInfoToServer({
        updatedUser
      });

  };

  render() {
    const { username, user, userConcerns, postUserInfoToServer, concerns, updateUserConcerns } = this.props;
    const { handleInput, handleSubmit } = this;

    return (
      <div>
       <h1>Welcome, {user.username}</h1>
          <div className="flexbox-div">
            <div className="card">
                <img className="user-image" src={UserIcon} />
                   <div className="container">
                        <p>Name: <b>{user.firstName}</b></p>
                        <p>Weight: <b>{user.weight} kg</b> </p>
                        <p>Height: <b>{user.height} cm</b></p>
                        <p>Age: <b>{user.age}</b></p>
                    </div>
            </div>


        <form onSubmit={handleSubmit} className="card">
            <h4>Update my Info</h4>
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
          /><br></br>
          <input
            name="weight"
            type="number"
            placeholder="Weight (KG)"
          /><br></br>
          <input
            name="height"
            type="number"
            placeholder="Height (CM)"
          /><br></br>
          <input
            name="age"
            type="number"
            placeholder="Age"
          /><br></br>
          <button type="submit">
            Submit
          </button>
        </form>

            <ConcernList 
            user={user} updateUserConcerns={updateUserConcerns} 
            concerns={concerns} userConcerns={userConcerns} 
            />
            <UserGoals
            user={user}
            updateGoals={this.updateGoals}
            handleSubmit={this.handleSubmit}
            />
            <Consume userConcerns={userConcerns}  />
            <Avoid userConcerns={userConcerns} />
            </div>
      </div>
    );
  }
}
