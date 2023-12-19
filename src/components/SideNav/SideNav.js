import React from "react";
import img from "../../assets/pic.jpg";
import classes from "./SideNav.module.css";

const SideNav = () => {
  return (
    <div className={classes.sideNav}>
      <img src={img} alt="beautiful view" className={classes.img} />
      <h1 className={classes.name}>KARTAVYA SAINI</h1>
    </div>
  );
};

export default SideNav;
