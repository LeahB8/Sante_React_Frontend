import React, { Component } from "react";
import "./App.css";
import LandingPage from "./containers/LandingPage";
import SignInForm from "./components/LogIn";
import Header from "./pages/Header";
import SignUpForm from "./components/SignUp";
import ConcernList from "./components/ConcernList";

import { validate } from "./services/api";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default class App extends Component {
  state = {
    username: ""
  };

  signinAndSetToken = user => {
    this.setState({ username: user.username });
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
    return (
      <div className="App">
        {/* <NavBar /> */}
        <Header />
        <Route
          exact
          path="/"
          component={props => (
            <LandingPage
              {...props}
              signinAndSetToken={this.signinAndSetToken}
            />
          )}
        />
      </div>
    );
  }
}
