import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export class Logout extends Component {
  render() {
    return <Redirect to={"/"} />;
  }
}

export default Logout;
