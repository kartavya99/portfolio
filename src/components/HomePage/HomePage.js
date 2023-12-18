import React from "react";
import classes from "./HomePage.module.css";
import pic from "../../assets/pic.jpg";

const HomePage = () => {
  return (
    <>
      <aside className={classes.sideNav}>
        <img src={pic} alt="a person in a boat" className={classes.img} />
        <h1 className={classes.name}>KARTAVYA SAINI</h1>
      </aside>
    </>
  );
};

export default HomePage;
