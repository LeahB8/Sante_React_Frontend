import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Logo from "../Logo.png";



export default class WelcomePage extends React.Component {

  render() {
    return (
      <div>
        <h3>Welcome to Santé</h3>
        <h4>An easy way to manage your health</h4>
        <img src={Logo} />
      </div>
    );
  }
}

