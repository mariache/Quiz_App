import React, { Component } from "react";
import classes from "./Layout.module.css";

export class Layout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
