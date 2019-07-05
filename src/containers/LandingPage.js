import React from "react";
import "../App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ConcernList from "../components/ConcernList";
import { getConcerns } from "../services/api";

import SignInForm from "../components/LogIn";
import SignUpForm from "../components/SignUp";

export default class LandingPage extends React.Component {
  state = {
    concerns: []
  };

  componentDidMount() {
    getConcerns().then(concernData => this.setState({ concerns: concernData }));
  }

  render() {
    const { concerns } = this.state;
    const { signinAndSetToken } = this.props;

    return (
      <div>
        <h3>Welcome to Santé</h3>
        <h4>An easy way to manage your health</h4>
        <Switch>
          <Route
            exact
            path="/signin"
            component={props => <SignInForm  signinAndSetToken={signinAndSetToken} {...props} />}
          />
          <Route
            exact
            path="/signup"
            component={props => <SignUpForm {...props} />}
          />
          <Route
            exact
            path="/concerns"
            component={props => <ConcernList {...props} concerns={concerns} />}
          />
        </Switch>
      </div>
    );
  }
}
