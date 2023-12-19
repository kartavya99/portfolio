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
      <ul className={classes.navList}>
        <Link to="about">About</Link>
        <Link to="projects">Projects</Link>
        <Link>Skills</Link>
        <Link>Contact</Link>
        <Link>
          Resume <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
        </Link>
      </ul>
      <footer>
        <div>
          <ul className={classes.icon}>
            <Link>
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="p-2 mx-2 text-light"
              ></FontAwesomeIcon>
            </Link>
            <Link>
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="p-2 mx-2 text-light"
              ></FontAwesomeIcon>
            </Link>
            <Link>
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2x"
                className="p-2 mx-2 text-light"
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
