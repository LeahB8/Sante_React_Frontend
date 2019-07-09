import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


import "./App.css";
import NavBar from "./containers/NavBar";
import ContentArea from "./containers/ContentArea";
import ReactDOM from "react-dom";

import { validate } from "./services/api";
import { withRouter } from "react-router-dom";

const baseUrl = "http://localhost:3001";

class App extends Component {
  state = {
    user: {},
    username: "",
    userConcerns: [],
    loggedIn: false
  };

  signinAndSetToken = userObj => {
    this.setState({
      user: { ...userObj.user },
      username: userObj.username,
      userConcerns: [...userObj.user_concerns],
      loggedIn: true
    });
    this.props.history.push("/profile");
    localStorage.setItem("token", userObj.token);
  };

  postUserInfoToServer = ({ updatedUser }) => {
    return fetch(baseUrl + `/users/${updatedUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedUser)
    }).then(this.setState({ user: { ...this.state.user, updatedUser } }));
  };

  signout = () => {
    this.setState({ user: {}, username: "", loggedIn: false });
    localStorage.removeItem("token");
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

  updateGoals = (user, goal) => {
    return fetch(baseUrl + `/users/${user.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user: { goals: goal } })
    }).then(goal =>
      this.setState({
        user: {
          goals: [goal]
        }
      })
    );
  };

  updateUserConcerns = (user, concernId) => {
    console.log(user, concernId);
    return fetch(baseUrl + `/users/${user.id}/concerns`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user_id: user.id, concern_id: concernId })
    }).then(concernObj =>
      this.setState({
        userConcerns: [...this.state.userConcerns, concernObj]
      })
    );
  };

  render() {
    const { username, user, userConcerns, loggedIn } = this.state;
    return (
      <div className="App">

//         <Route component={props => <NavBar {...props}
//         signout={this.signout} user={user} 
//         loggedIn={loggedIn} signinAndSetToken={this.signinAndSetToken} 
//         />}/>
//         <ContentArea 
//         updateUserConcerns={this.updateUserConcerns} 
//         postUserInfoToServer={this.postUserInfoToServer} 
//         username={username} user={user} key={user.id} userConcerns={userConcerns} 
//         signinAndSetToken={this.signinAndSetToken} 

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
        />
      </div>
    );
  }
}

export default withRouter(App);
