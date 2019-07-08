import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { getConcerns } from "../services/api";
import ConcernList from "../components/ConcernList";
import FormControl from "@material-ui/core/FormControl";
import UserIcon from "../userIcon.jpg";
import UserGoals from "../components/UserGoals";
import { fetchUserInfo } from "../services/api";
import Consume from "../components/Consume";
import Avoid from "../components/Avoid";
export default class UserProfile extends React.Component {
  state = {
    firstName: "",
    weight: "",
    height: "",
    age: "",
    goals: [],
    userConcerns: []
  };

  state = {
    firstName: "",
    weight: "",
    height: "",
    age: "",
    goals: [],
    userConcerns: []
  };

  // componentDidMount() {
  //     fetchUserInfo(user)
  //     .then(data => this.setState({ firstName: data.firstName, weight: data.weight, height: data.height, age: data.age, goals: data.goals, userConcerns: data.concerns }))
  // }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  //   updateGoals = event => {
  //     event.preventDefault()
  //     event.persist()
  //     const { goals } = this.state;
  //     this.setState({goals: [...goals, event.target.value]})

  //     let userInfo = {
  //         firstName: firstName,
  //         weight: weight,
  //         height: height,
  //         age: age,
  //         goals: goals,
  //         userConcerns: userConcerns
  //       };
  //       postUserInfoToServer(userInfo);
  //   }

  updateGoals = event => {
    const { firstName, weight, height, age, goals, userConcerns } = this.state;
    event.preventDefault();
    event.persist();
    this.setState({ goals: [...goals, event.target.value] });

    let userInfo = {
      firstName: firstName,
      weight: weight,
      height: height,
      age: age,
      goals: goals,
      userConcerns: userConcerns
    };
    // postUserInfoToServer(userInfo);
  };

  render() {
    const { concerns, username, user } = this.props;
    const { handleInput, handleSubmit } = this;
    const { firstName, weight, height, age, userConcerns, goals } = this.state;

    return (
      <div>
        <h1>Welcome, {username}</h1>
        <img src={UserIcon} />
        <div>
          <ul>
            <li>Name: {firstName}</li>
            <li>Weight: {weight} KG</li>
            <li>Height: {height} CM</li>
            <li>Age: {age}</li>
          </ul>
        </div>

        <form>
          <input
            name="firstName"
            value={firstName}
            type="text"
            placeholder="First Name"
            onChange={handleInput}
          />
          <input
            name="weight"
            value={weight}
            type="number"
            placeholder="Weight (KG)"
            onChange={handleInput}
          />
          <input
            name="height"
            value={height}
            type="number"
            placeholder="Height (CM)"
            onChange={handleInput}
          />
          <input
            name="age"
            value={age}
            type="number"
            placeholder="Age"
            onChange={handleInput}
          />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>

        <ConcernList concerns={concerns} userConcerns={userConcerns} />
        <UserGoals
          goals={goals}
          updateGoals={this.updateGoals}
          handleSubmit={this.handleSubmit}
        />
        <Consume userConcerns={userConcerns} />
        <Avoid userConcerns={userConcerns} />
      </div>
    );
  }
}
