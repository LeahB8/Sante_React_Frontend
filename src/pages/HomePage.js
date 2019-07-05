import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NavBar from "../containers/NavBar";
import SideMenu from "../containers/SideMenu";

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <SideMenu />
      </div>
    );
  }
}
