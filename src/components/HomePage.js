import React from "react";
import classes from "./HomePage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomePage = () => {
  return (
    <div className={classes.background}>
      <div className={classes.button}>
        <button className={classes.menu}>
          <p className={classes.text}>MENU</p>
          <FontAwesomeIcon icon="fa-bars" size="3x" />{" "}
        </button>
      </div>
      <p className={classes.title}>
        Full stack web developer leveraging a background in sales and marketing
        to provide the best user experience for web application development.
      </p>
    </div>
  );
};

export default HomePage;
