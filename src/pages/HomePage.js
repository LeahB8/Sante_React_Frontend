import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
<<<<<<< HEAD
import getConcerns from "../services/api";
import ConcernList from "../components/ConcernList";
=======
import NavBar from "../containers/NavBar";
import SideMenu from "../containers/SideMenu";
>>>>>>> home

export default class HomePage extends React.Component {
  state = {
    concerns: []
  };

  componentDidMount() {
    getConcerns().then(concernData => this.setState({ concerns: concernData }));
  }

  render() {
    const { concerns } = this.state;
    return (
      <div>
<<<<<<< HEAD
        <ConcernList concerns={concerns} />
=======
        <NavBar />
        <SideMenu />
>>>>>>> home
      </div>
    );
  }
}
