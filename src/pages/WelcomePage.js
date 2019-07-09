import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Logo from "../Logo.png";



export default class WelcomePage extends React.Component {

  render() {
    return (
      <div>
        <h1>Welcome to Santé</h1>
        <h3>An easy way to manage your health</h3>
        <h3>through a personalised nutrition and health conscious approach</h3>

        <img src={Logo} />
      </div>
    );
  }
}

