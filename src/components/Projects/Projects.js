import React from "react";
import ProjectData from "./ProjectData";
import classes from "./Projects.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Figure, Card } from "react-bootstrap";

const Projects = () => {
  return (
    <div className={classes.mainProject}>
      <header>
        <h1 className={classes.headingPro}>Projects |</h1>
      </header>

      <section className={classes.projectCard}>
        {ProjectData.map((proj, ind) => (
          <Card
            className=" card custom-style box p-3 m-3"
            style={{ width: "18rem" }}
            key={ind}
          >
            <Figure>
              <Figure.Image
                width={255}
                height={180}
                alt="171x180"
                src={proj.img}
              />
            </Figure>
            <Card.Body style={{ backgroundColor: "white" }}>
              <Card.Title className={classes.proTitle}>{proj.title}</Card.Title>
              <Card.Text className={classes.proTech}>
                {proj.technology}
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link
                target="__blank"
                rel="noopener noreferrer"
                href={proj.gitHubUrl}
                className={classes.proLink}
              >
                Source Code
              </Card.Link>
              <Card.Link
                target="__blank"
                rel="noopener noreferrer"
                href={proj.liveUrl}
                className={classes.proLink}
              >
                Live URL
              </Card.Link>
            </Card.Body>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Projects;
