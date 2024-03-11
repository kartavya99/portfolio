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
          A seasoned Full Stack Web Developer proficient in the MREN stack,
          combining a solid foundation in sales and marketing to enhance user
          experience in web application development. Demonstrated expertise in
          crafting seamless digital experiences that drive engagement and
          deliver exceptional results.
        </p>
      </section>

      <section>
        <p>
          completed a Certificate in Full Stack Web Development at Monash
          University, equipped with proficiency in HTML, CSS, JavaScript,
          MongoDB, React, ExpressJs, and NodeJS. Known for adaptive
          problem-solving skills, specializing in mobile-first design and
          development. Possesses a comprehensive understanding of computer
          science principles as applied to JavaScript and browser-based
          technologies, including HTML, CSS, JavaScript, JQuery, and Git version
          control system.
        </p>
      </section>

      <section>
        <p>
          I excel in adaptability, attention to detail, creativity, effective
          communication, problem-solving, teamwork, time-management, leadership,
          perseverance, and the ability to shepherd projects from conception to
          fruition.
        </p>
      </section>
    </div>
  );
};

export default About;
