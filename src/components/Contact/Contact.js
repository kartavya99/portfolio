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
          Thank you for taking time to go through my portfolio! I am very
          passionate about learning new technologies and I hope that some of my
          projects would have created interest in you as Web developer.
        </p>
        <p className={classes.text}>
          Should you like to reach out me, please feel free to send me an email{" "}
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
