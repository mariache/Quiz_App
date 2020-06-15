import React, { Component } from "react";
import classes from "./Layout.module.css";
import MenuToggle from "../../components/navigation/menuToggle/MenuToggle";
import SideMenu from "../../components/navigation/sideMenu/SideMenu";

export class Layout extends Component {
  state = { menu: false };

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };
  render() {
    return (
      <div className={classes.Layout}>
        <SideMenu isOpen={this.state.menu} />
        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
