import React from "react";
import { skillData } from "./SkillsData";
import SkillsItem from "./SkillsItem";
import classes from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={classes.skills}>
      <header>
        <h1 className={classes.heading}>Skills |</h1>
      </header>
      <div className={classes.skillItem}>
        {skillData.map((skill, index) => (
          <SkillsItem skill={skill} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
