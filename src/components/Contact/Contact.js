import React from "react";
import { Link } from "react-router-dom";
import classes from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className={classes.mainContact}>
      <div>
        <header className={classes.heading}>
          <h1>Contact Me |</h1>
        </header>
      </div>

      <div>
        <p className={classes.title}>Let's Get in Touch !!!</p>
      </div>

      <section className={classes.section}>
        <p className={classes.text}>
          Thank you looking through my work. I am currently open to mid-level
          .NET and full stack roles with remote or hybrid option and I an always
          happy to talk about interesting projects.
        </p>
        <p className={classes.text}>
          The quickest way to reach me is by email.
        </p>
      </section>

      <footer className={classes.footer}>
        <div className="d-flex justify-content-center">
          <Link
            to="https://github.com/kartavya99"
            target="__blank"
            rel="noopener noreferrer"
            className={classes.icons}
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              className="p-2 mx-2 text-light"
            />
          </Link>
          <Link
            to="https://www.linkedin.com/in/kartavya99"
            target="__blank"
            rel="noopener noreferrer"
            className={classes.icons}
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              className="p-2 mx-2 text-light"
            />
          </Link>
          <Link
            to="mailto:kartavyas@gmail.com"
            target="__blank"
            rel="noopener noreferrer"
            className={classes.icons}
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2x"
              className="p-2 mx-2 text-light"
            />
          </Link>
          <Link
            to="tel:+61410742021"
            target="__blank"
            rel="noopener noreferrer"
            title="(0410) 742-021"
            className={classes.icons}
          >
            <FontAwesomeIcon
              icon={faPhone}
              size="2x"
              className="p-2 mx-2 text-light"
            />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
