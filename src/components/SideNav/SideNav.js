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
      <h1 className={classes.name}>KARTAVYA SAINI</h1>
      <li className={classes.navList}>
        <Link className={classes.navLink} to="about">
          About
        </Link>
        <Link className={classes.navLink} to="projects">
          Projects
        </Link>
        <Link className={classes.navLink}>Skills</Link>
        <Link className={classes.navLink}>Contact</Link>
        <Link className={classes.navLink}>
          Resume <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
        </Link>
      </li>
      <footer>
        <div>
          <ul className={classes.icon}>
            <Link>
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className={classes.iconLink}
              ></FontAwesomeIcon>
            </Link>
            <Link>
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className={classes.iconLink}
              ></FontAwesomeIcon>
            </Link>
            <Link>
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
