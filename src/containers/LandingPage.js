import React from "react";
import "../App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import SignInForm from "../components/LogIn";
import SignUpForm from "../components/SignUp";

export default class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <h3>Welcome to Santé</h3>
        <h4>An easy way to manage your health</h4>
        <Switch>
          <Route
            exact
            path="/signin"
            component={props => <SignInForm {...props} />}
          />
          <Route
            exact
            path="/signup"
            component={props => <SignUpForm {...props} />}
          />
        </Switch>
      </div>
    );
  }
}
