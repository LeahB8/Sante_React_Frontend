import React, { Component } from "react";

import "./App.css";
import ContentArea from "./containers/ContentArea";
import ReactDOM from "react-dom";
import NavBar from "./containers/NavBar";

import { validate } from "./services/api";
import { Route, Switch, withRouter } from "react-router-dom";

export default class App extends Component {
  state = {
    user: {},
    username: ""
  };

  signinAndSetToken = user => {
    this.setState({ user: { ...user }, username: user.username });
    this.props.history.push("/concerns");
    localStorage.setItem("token", user.token);
  };

  signout = () => {
    this.setState({ username: "" });
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

  render() {
    const { username, user } = this.state;
    return (
      <div className="App">
        <NavBar />
        <ContentArea
          username={username}
          user={user}
          signinAndSetToken={this.signinAndSetToken}
        />
      </div>
    );
  }
}
