import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./App.css";
import NavBar from "./containers/NavBar";
import ContentArea from "./containers/ContentArea";
import ReactDOM from "react-dom";

import { validate, fetchUserInfo, getUserConcerns, getUserGoals } from "./services/api";
import { withRouter } from "react-router-dom";

const baseUrl = "http://localhost:3001";

class App extends Component {
  //----------------------- state and componentDidMount -------------------//

  state = {
    user: {},
    username: "",
    userGoals: [],
    userConcerns: [],
    loggedIn: false
  };

  componentDidMount() {
    if (localStorage.token) {
      validate().then(data => {
        if (data.error) {
          alert(data.error);
        } else {
          this.signinAndSetToken(data);
        }
      });
    }
  }

  //----------------------- signin and signout -------------------//

  signinAndSetToken = userObj => {
    this.setState({
      user: { ...userObj.user },
      username: userObj.username,
      userGoals: [...userObj.user_goals],
      userConcerns: [...userObj.user_concerns],
      loggedIn: true
    });
    this.props.history.push("/profile");
    localStorage.setItem("token", userObj.token);
  };

  signout = () => {
    this.setState({ user: {}, username: "", loggedIn: false });
    localStorage.removeItem("token");
  };

  //----------------------- server methods - posting and deleting -------------------//

  postUserInfoToServer = user => {
    return fetch(baseUrl + `/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(this.setState({ user: user }));
  };

  //----------------------- user concerns -------------------//

  updateUserConcerns = (user, concernId) => {
    return fetch(baseUrl + `/users/${user.id}/concerns`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user_id: user.id, concern_id: concernId })
    });
  };

  setUserConcerns = user => {
    getUserConcerns(user)
      .then(resp => resp.json())
      .then(data => this.setState({ userConcerns: data }));
  };

<<<<<<< HEAD
  deleteUserConcernsFromServer = userConcernId => {
    return fetch(
      baseUrl + `/users/${this.state.user.id}/concerns/${userConcernId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(
      this.setState({
        userConcerns: [
          ...this.state.userConcerns.filter(
            userConcern => userConcern.id !== userConcernId
          )
        ]
      })
    );
  };
=======


  deleteUserConcernsFromServer = (userConcernId) => {
    return fetch(baseUrl + `/users/${this.state.user.id}/concerns/${userConcernId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
  }
>>>>>>> 944f2b2be32923bbbbf951ab501d66fc8d0159ad

  //----------------------- user goals -------------------//

  updateGoals = (user, goal) => {
    return fetch(baseUrl + `/goals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user_id: user.id, content: goal })
    })
      .then(resp => resp.json())
      .then(goalObj =>
        this.setState({ userGoals: [...this.state.userGoals, goalObj] })
      );
  };

    setUserGoals = (user) => {
    getUserGoals(user)
    .then(resp => resp.json())
    .then(data => this.setState({ userGoals: data }))
  }

  deleteGoalFromServer = goalID => {
    return fetch(baseUrl + `/goals/${goalID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
<<<<<<< HEAD
    }).then(
      this.setState({
        userGoals: [...this.state.userGoals.filter(goal => goal.id !== goalID)]
      })
    );
  };
=======
    })
  }
>>>>>>> 944f2b2be32923bbbbf951ab501d66fc8d0159ad

  //----------------------- rendering -------------------//

  render() {
    const { username, user, userConcerns, loggedIn, userGoals } = this.state;
    return (
      <div className="App">
        <NavBar
          signout={this.signout}
          user={user}
          loggedIn={loggedIn}
          signinAndSetToken={this.signinAndSetToken}
        />
        <ContentArea
          updateUserConcerns={this.updateUserConcerns}
          postUserInfoToServer={this.postUserInfoToServer}
          username={username}
          user={user}
          userConcerns={userConcerns}
          signinAndSetToken={this.signinAndSetToken}
          updateGoals={this.updateGoals}
          deleteUserConcernsFromServer={this.deleteUserConcernsFromServer}
          userGoals={userGoals}
          deleteGoalFromServer={this.deleteGoalFromServer}
          setUserConcerns={this.setUserConcerns}
          setUserGoals={this.setUserGoals}
        />
      </div>
    );
  }
}

export default withRouter(App);
