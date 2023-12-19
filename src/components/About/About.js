import React from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.main}>
      <header className={classes.heading}>
        <h1>About Me | </h1>
      </header>
      <section className={classes.sectionOne}>
        <p>
          Full stack web developer leveraging a background in sales and
          marketing to provide the best user experience for web application
          development.
        </p>
      </section>

      <section>
        <p>
          Currently completing a Certificate in Full Stack Web Development at
          Monash University with skills in HTML, CSS, JavaScript, MongoDB,
          React, ExpressJs, NodeJS. Adaptive problem-solver who loves to develop
          apps with focus on mobile-first design and development. I have gained
          good understanding of computer science applied to JavaScript, browser
          based technologies HTML, CSS, JavaScript, JQuery and Git the version
          control system.
        </p>
      </section>

      <section>
        <p>
          Strengths in adaptability, detail-orientation, creativity,
          communication, problem-solving, teamwork, time-management, leadership,
          perseverance, and building projects from concept to completion.
        </p>
      </section>
    </div>
  );
};

export default About;
