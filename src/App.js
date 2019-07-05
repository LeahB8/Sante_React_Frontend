import React, { Component } from "react";
import "./App.css";
import LandingPage from "./containers/LandingPage";
import SignInForm from "./components/LogIn";
import Header from "./pages/Header";
import SignUpForm from "./components/SignUp";
// import NavBar from './containers/NavBar'
import ReactDOM from "react-dom";


import { validate } from "./services/api";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default class App extends Component {
  state = {
    username: ""
  };

  signin = user => {
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
          this.signin(data);
        }
      });
    }
  }

  render() {
    return (
      <div className="App">
        {/* <NavBar /> */}
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            path="/signin/"
            component={props => <SignInForm {...props} />}
          />
          <Route
            path="/signup/"
            component={props => <SignUpForm {...props} />}
          />
        </Switch>
      </div>
    );
  }
}
