import React, { Component } from "react";
import classes from "./SideMenu.module.css";
import BackDrop from "../../ui/button/backdrop/BackDrop";

const links = [1, 2, 3];

export class SideMenu extends Component {
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <a href="!#">Link {link}</a>
        </li>
      );
    });
  }

  render() {
    const cls = [classes.SideMenu];

    if (!this.props.isOpen) {
      cls.push(classes.close);
    }

    return (
      <>
        <nav className={cls.join(" ")}>
          <ul>{this.renderLinks()}</ul>
        </nav>
        {this.props.isOpen && <BackDrop onClick={this.props.onClose} />}
      </>
    );
  }
}
export default SideMenu;
