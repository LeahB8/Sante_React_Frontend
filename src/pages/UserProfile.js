import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { getConcerns } from "../services/api";
import ConcernList from "../components/ConcernList";
import FormControl from "@material-ui/core/FormControl";
import UserIcon from "../userIcon.jpg";
import UserGoals from "../components/UserGoals";
import { fetchUserInfo } from "../services/api";
import Consume from "../components/Consume";
import Timer from "../components/Timer";
import "../App.css";
import ReactPlayer from "react-player";

import Avoid from "../components/Avoid";

export default class UserProfile extends React.Component {
  //   handleInput = event => {
  //     this.props.postUserInfoToServer({
  //       [event.target.name]: event.target.value
  //     });
  //   };

  handleSubmit = event => {
    event.preventDefault();
    let user = {
      firstName: event.target.firstName.value,
      weight: event.target.weight.value,
      height: event.target.height.value,
      age: event.target.age.value,
      image_url: event.target.image_url.value,
      id: this.props.user.id
    };
    this.props.postUserInfoToServer(user);
  };

  render() {
    const {
      username,
      user,
      userConcerns,
      postUserInfoToServer,
      concerns,
      updateUserConcerns,
      deleteUserConcernsFromServer,
      userGoals,
      deleteGoalFromServer,
      setUserConcerns,
      setUserGoals
    } = this.props;

    const { handleInput, handleSubmit } = this;

    return (
      <div>
        <h1>
          <strong>Welcome back, {user.username}</strong>
        </h1>
        <ReactPlayer
          className="mp3-player"
          height="20px;"
          width="100%;"
          playing="true"
          url="https://soundcloud.com/newagemusicgarden/3-hours-of-relaxing-music"
        />

        <div className="flexbox-div">
          <div className="card">
            <h2>My Info</h2>
            <img
              className="user-image"
              src={user.image_url === null ? UserIcon : user.image_url}
            />
            <div className="container">
              <p>
                Name: <b>{user.firstName}</b>
              </p>
              <p>
                Weight: <b>{user.weight} kg</b>
              </p>
              <p>
                Height: <b>{user.height} cm</b>
              </p>
              <p>
                Age: <b>{user.age}</b>
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="card">
            <h2>Update my Info</h2>
            <input name="firstName" type="text" placeholder="First Name" />
            <br />
            <input name="weight" type="number" placeholder="Weight (kg)" />
            <br />
            <input name="height" type="number" placeholder="Height (cm)" />
            <br />
            <input name="age" type="number" placeholder="Age" />
            <br />
            <input name="image_url" type="text" placeholder="Image Url" />
            <br />
            <button type="submit">Submit</button>
          </form>

          <ConcernList
            user={user}
            updateUserConcerns={updateUserConcerns}
            concerns={concerns}
            userConcerns={userConcerns}
            key={user.id}
            deleteUserConcernsFromServer={deleteUserConcernsFromServer}
            setUserConcerns={setUserConcerns}
          />
          <UserGoals
            user={user}
            userGoals={userGoals}
            updateGoals={this.props.updateGoals}
            handleSubmit={this.handleSubmit}
            key={user.id}
            deleteGoalFromServer={deleteGoalFromServer}
            setUserGoals={setUserGoals}
          />
          <Consume userConcerns={userConcerns} key={user.id} />
          <Avoid userConcerns={userConcerns} />
          <Timer />
        </div>
      </div>
    );
  }
}
