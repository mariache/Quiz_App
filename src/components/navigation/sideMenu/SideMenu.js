import React, { Component } from "react";
import classes from "./SideMenu.module.css";
import { NavLink } from "react-router-dom";
import BackDrop from "../../ui/button/backdrop/BackDrop";

const links = [
  { to: "/", label: "All quizes", exact: true },
  { to: "/auth", label: "Auth", exact: false },
  { to: "/quiz-creator", label: "Create new", exact: false },
];

export class SideMenu extends Component {
  clickHandler = () => {
    this.props.onClose();
  };

  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={classes.active}
            onClick={this.clickHandler}
          >
            {link.label}
          </NavLink>
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
