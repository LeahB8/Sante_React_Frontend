import React from "react";
import "../App.css";
import { Link } from 'react-router-dom'

import SignInForm from "../components/LogIn";
import SignUpForm from "../components/SignUp";

export default class HomePage extends React.Component {

  render() {
    return (
      <div>
        <h3>Welcome to Santé</h3>
        <h4>An easy way to manage your health</h4>
          
          <SignInForm />
          <SignUpForm />
      </div>
    );
  }
}
