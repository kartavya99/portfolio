import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/pic.jpg";
import classes from "./SideNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const SideNav = () => {
  return (
    <div className={classes.sideNav}>
      <img src={img} alt="beautiful view" className={classes.img} />
      <Link className={classes.navLink} to="/">
        KARTAVYA SAINI
      </Link>
      <li className={classes.navList}>
        <Link className={classes.navLink} to="about">
          About
        </Link>
        <Link className={classes.navLink} to="projects">
          Projects
        </Link>
        <Link className={classes.navLink} to="skills">
          Skills
        </Link>
        <Link className={classes.navLink} to="contact">
          Contact
        </Link>
        <Link className={classes.navLink}>
          Resume <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
        </Link>
      </li>
      <footer>
        <div>
          <ul className={classes.icon}>
            <Link
              to="https://github.com/kartavya99"
              target="__blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className={classes.iconLink}
              ></FontAwesomeIcon>
            </Link>
            <Link
              to="https://www.linkedin.com/in/kartavya99"
              target="__blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className={classes.iconLink}
              ></FontAwesomeIcon>
            </Link>
            <Link
              to="mailto:kartavyas@gmail.com"
              target="__blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2x"
                className={classes.iconLink}
              ></FontAwesomeIcon>
            </Link>
          </ul>
          <p className={classes.footerLine}>Have a nice day !!!!</p>
        </div>
      </footer>
    </div>
  );
};

export default SideNav;
