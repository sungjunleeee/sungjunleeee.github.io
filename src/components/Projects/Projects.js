import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import nomad from "../../Assets/Projects/nomad.png";
import thermal from "../../Assets/Projects/thermal.png";
import covid from "../../Assets/Projects/covid.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nomad}
              isBlog={false}
              title="Nomad Coders Translator"
              description="Nomad Coders is a online platform where all people can build their own project mainly by imitating popular web sites such as YouTube, AirBnB, and etc. I'm translating English into Korean to provide students their best learning experience."
              link="https://nomadcoders.co/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={thermal}
              isBlog={false}
              title="Java Development on Thermal Camera Error Correction"
              description="AI Dataset collection project funded by Ministry of Science and ICT (Korea). My team was provided an AI model which minimizes the error on a Dahua thermal camera and developed a Java application that shows corrected temperature running on Windows. "
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="Project on COVID-19 Pooled Testing"
              description="Built a website that provides streamlined COVID-19 pooled testing. In some circumstances, it is unnecesary or even expensive for each COVID-19 sample to be tested. This project is devised to provide a service for pooled testing so groups of samples can be tested at once and each individual can visit website to check test result."
              link=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
