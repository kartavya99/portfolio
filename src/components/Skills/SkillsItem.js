import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Skills.module.css";

const SkillsItem = ({ skill }) => {
  return (
    <div className="d-flex align-items-center my-4 skill-list-container">
      <div className={classes.icon}>
        <FontAwesomeIcon
          icon={skill.icon}
          size="3x"
          className="pe-3 me-3 text-light"
        />
      </div>
      <div>
        <h3 className={classes.skillTitle}>{skill.title}</h3>
        <p className={classes.skillText}>{skill.items.join(" / ")}</p>
      </div>
    </div>
  );
};

export default SkillsItem;
