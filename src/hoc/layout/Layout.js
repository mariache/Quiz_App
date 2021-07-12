import React, { useState } from "react";
import classes from "./Layout.module.css";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import SideMenu from "../../components/Navigation/SideMenu/SideMenu";
import { connect } from "react-redux";

const Layout = (props) => {
  const [menu, setMenu] = useState(false);

  const toggleMenuHandler = () => {
    setMenu(!menu);
  };

  const menuCloseHandler = () => {
    setMenu(false);
  };

  return (
    <div className={classes.Layout}>
      <SideMenu
        isOpen={menu}
        onClose={menuCloseHandler}
        isAuthenticated={props.isAuthenticated}
      />

      <MenuToggle onToggle={toggleMenuHandler} isOpen={menu} />

      <main>{props.children}</main>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token,
  };
}

export default connect(mapStateToProps)(Layout);
