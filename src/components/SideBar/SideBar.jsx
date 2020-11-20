import React from "react";
import "./SideBar.css";
import Headroom from "react-headroom";
import Logo from "../Logo/Logo";
import Drawer from "../../modules/Drawer/Drawer";

const SideBar = () => {
  return (
    <div className="MainBar">
      <div>
        <Logo />
      </div>
      <div className="Drawer">
          <Drawer />
      </div>
    </div>
  );
};

export default SideBar;
