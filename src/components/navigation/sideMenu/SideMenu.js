import React, { Component } from "react";
import classes from "./SideMenu.module.css";
import { NavLink } from "react-router-dom";
import Backdrop from "../../UI/Backdrop/Backdrop";

class SideMenu extends Component {
  clickHandler = () => {
    this.props.onClose();
  };

  renderLinks(links) {
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

    const links = [{ to: "/", label: "All quizes", exact: true }];

    console.log("Auth", this.props.isAuthenticated);

    if (this.props.isAuthenticated) {
      links.push({ to: "/quiz-creator", label: "Create a quiz", exact: false });
      links.push({ to: "/logout", label: "Log out", exact: false });
    } else {
      links.push({ to: "/auth", label: "Autorization", exact: false });
    }

    return (
      <>
        <nav className={cls.join(" ")}>
          <ul>{this.renderLinks(links)}</ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </>
    );
  }
}

export default SideMenu;
