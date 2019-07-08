import React, { Component } from "react";

import "./App.css";
import NavBar from "./containers/NavBar";
import ContentArea from "./containers/ContentArea";
import ReactDOM from "react-dom";

import { validate } from "./services/api";
import { withRouter } from 'react-router-dom';


class App extends Component {
  state = {
    user: {},
    username: '',
    loggedIn: false
  };

  signinAndSetToken = user => {
    this.setState({ user: {...user}, username: user.username, loggedIn: true });
    this.props.history.push("/profile");
    localStorage.setItem("token", user.token);
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

  render() {
    const { username, user, loggedIn } = this.state;
    return (
      <div className="App">
        <NavBar signout={this.signout}  user={user} loggedIn={loggedIn} signinAndSetToken={this.signinAndSetToken} />
        <ContentArea username={username} user={user} signinAndSetToken={this.signinAndSetToken} />
      </div>
    );
  }
}

export default withRouter(App)