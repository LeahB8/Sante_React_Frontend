import React from "react";
import "../App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ConcernList from "../components/ConcernList";
import { getConcerns } from "../services/api";
import { postUserInfoToServer } from "../services/api";

import SignInForm from "../pages/LogIn";
import SignUpForm from "../pages/SignUp";
import WelcomePage from "../pages/WelcomePage";
import UserProfile from "../pages/UserProfile";

export default class ContentArea extends React.Component {
  state = {
    concerns: []
  };

  componentDidMount() {
    getConcerns().then(concernData => this.setState({ concerns: concernData }));
  }

  render() {
    const { concerns } = this.state;
    const {
      signinAndSetToken,
      username,
      user,
      userConcerns,
      postUserInfoToServer,
      updateUserConcerns,
      updateGoals,
      deleteUserConcernsFromServer,
      userGoals,
      deleteGoalFromServer,
      setUserConcerns,
      setUserGoals
    } = this.props;

    return (
      <div>
        <Switch>
          <Route exact path="/" component={WelcomePage} />

          <Route
            exact
            path="/signin"
            component={props => (
              <SignInForm signinAndSetToken={signinAndSetToken} {...props} />
            )}
          />
          <Route
            exact
            path="/signup"
            component={props => <SignUpForm {...props} />}
          />
          <Route
            exact
            path="/profile"
            component={props => (
              <UserProfile
                {...props}
                concerns={concerns}
                userConcerns={userConcerns}
                key={user.id}
                user={user}
                username={username}
                postUserInfoToServer={postUserInfoToServer}
                updateUserConcerns={updateUserConcerns}
                updateGoals={updateGoals}
                deleteUserConcernsFromServer={deleteUserConcernsFromServer}
                userGoals={userGoals}
                deleteGoalFromServer={deleteGoalFromServer}
                setUserConcerns={setUserConcerns}
                setUserGoals={setUserGoals}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}
