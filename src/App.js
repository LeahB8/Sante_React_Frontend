import React, { Component } from "react";


import "./App.css";
import NavBar from "./containers/NavBar";
import ContentArea from "./containers/ContentArea";
import ReactDOM from "react-dom";

import { validate } from "./services/api";
import { withRouter } from 'react-router-dom';

const baseUrl = "http://localhost:3001";

class App extends Component {

  state = {
    user: {},
    username: '',
    userConcerns: [],
    loggedIn: false
  };

  signinAndSetToken = userObj => {
    this.setState({ user: {...userObj.user}, username: userObj.username, userConcerns: [...userObj.user_concerns], loggedIn: true });
    this.props.history.push("/profile");
    localStorage.setItem("token", userObj.token);
  };

  postUserInfoToServer = ({updatedUser}) => {
    return fetch(baseUrl + `/users/${updatedUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedUser)
    }).then(this.setState({ user: {...this.state.user, updatedUser }}));
  }

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


  updateUserConcerns = (user, concernId) => {
    console.log(user, concernId)
    return fetch(baseUrl + `/users/${user.id}/concerns`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({user_id: user.id, concern_id: concernId})
    }).then(concernObj => this.setState({ userConcerns: [...this.state.userConcerns, concernObj ]}));
  }

  render() {
    const { username, user, userConcerns, loggedIn } = this.state;
    return (
      <div className="App">
        <NavBar signout={this.signout}  user={user} loggedIn={loggedIn} signinAndSetToken={this.signinAndSetToken} />
        <ContentArea updateUserConcerns={this.updateUserConcerns} postUserInfoToServer={this.postUserInfoToServer} username={username} user={user} userConcerns={userConcerns} signinAndSetToken={this.signinAndSetToken} />
      </div>
    );
  }
}

export default withRouter(App)