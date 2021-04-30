import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Intern Java Software Developer [AIGHTEN]"
              date="October 2020 - February 2021"
              content={[
                "Project that is funded by the Korean government to build AI training data",
                "Developing an application that utilizes a trained AI model to show the calibrated body temperature on thermal cameras with less error",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Emo:)Tale"
              content={[
                "July 2020 - August 2020",
                "Sentence-based sentiment analysis based on KoBERT and Valence-Arousal",
              ]}
            />
            <Resumecontent
              title="SUNY Korea"
              content={[
                "TA for Computer Science II",
                "Tutor for Applied Mathematics and Statistics, Computer Science",
                "Assistant in Management Support Center, Computer Lab",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Timeline</h3>
            <Resumecontent
              title="SUNY Korea (SBU)"
              date="2016 - Present (LoA)"
              content={["Computer Science", `GPA: 3.75/4.0`]}
            />
            <Resumecontent
              title="Republic of Korea Army"
              date="2017 - 2019"
              content={["Managing network security", "Special forces"]}
            />
            <Resumecontent
              title="Byeongjeom High School (Korea)"
              date="2013 - 2016"
              content={["Liberal Arts"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
