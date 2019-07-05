import React from "react";

import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Logo from "../Logo.png";

const Header = props => (
  <header className="App-header">
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <ul>
          <li>
            <Link className="LandingPage-link" to="/">
              Home Page
            </Link>
          </li>
          <li>
            <Link className="LandingPage-link" to="/signin">
              Log In
            </Link>
          </li>
          <li>
            <Link className="LandingPage-link" to="/signup">
              SignUp
            </Link>
          </li>
        </ul>

        <img src={Logo} className="App-logo" alt="logo" />
        <br />
      </div>
      <h1>Santé</h1>
    </nav>

    <h1 className="App-title">
      {props.username ? `Welcome back, ${props.username}!` : "Welcome!"}
      <br />
      {props.username && (
        <Button onClick={props.signout} variant="contained" color="secondary">
          SIGN OUT
        </Button>
      )}
    </h1>
  </header>
);

export default Header;
