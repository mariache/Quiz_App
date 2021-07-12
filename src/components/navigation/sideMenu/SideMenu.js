import React from "react";
import classes from "./SideMenu.module.css";
import { NavLink } from "react-router-dom";
import BackDrop from "../../UI/BackDrop/BackDrop";

const SideMenu = (props) => {
  const clickHandler = () => {
    props.onClose();
  };

  const renderLinks = (links) => {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={classes.active}
            onClick={clickHandler}
          >
            {link.label}
          </NavLink>
        </li>
      );
    });
  };

  const cls = [classes.SideMenu];

  if (!props.isOpen) {
    cls.push(classes.close);
  }

  const links = [{ to: "/", label: "All quizes", exact: true }];

  console.log("Auth", props.isAuthenticated);

  if (props.isAuthenticated) {
    links.push({ to: "/quiz-creator", label: "Create a quiz", exact: false });
    links.push({ to: "/logout", label: "Log out", exact: false });
  } else {
    links.push({ to: "/auth", label: "Autorization", exact: false });
  }

  return (
    <>
      <nav className={cls.join(" ")}>
        <ul>{renderLinks(links)}</ul>
      </nav>
      {props.isOpen ? <BackDrop onClick={props.onClose} /> : null}
    </>
  );
};

export default SideMenu;
