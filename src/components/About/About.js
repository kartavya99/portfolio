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
          I am a full stack developer working across .NET and JavaScript based
          in Melbourne.
        </p>
      </section>

      <section>
        <p>
          For the past two years I have been at Cancer Council Victoria,
          maintaining a legacy C# external CMS platform and managing the front
          end of all Cancer Council Victoria's public-facing sites including
          CancerVic, SunSmart, Food for Health Alliance along side building
          fundraising pages for campaigns like Girls' Night In and Cancer
          Research Day under fixed delivery deadlines.
        </p>
      </section>

      <section>
        <p>
          Most my recent work has been on distributed systems. I have built two
          microservice platforms - one in .NET on Azure using AKS, Azure DevOps,
          API Management, Service Bus and Entra ID B2C and one in Node.js and
          typeScript with RabbitMQ, Redis and Elasticsearch. Working through
          patterns, containerisation and CI/CD pipelines on those is where most
          of my recent learning has gone.
        </p>
      </section>

      <section>
        <p>
          Australians citizen, currently looking for mid-level .NET of full
          stack roles with remote or hybrid options.
        </p>
      </section>
    </div>
  );
};

export default About;
