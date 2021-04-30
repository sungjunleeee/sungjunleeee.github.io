import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I'm <span className="purple">Sungjun Lee </span>
            from <span className="purple"> Korea, Republic of.</span>
            <br />
            I'm taking a break to focus more on personal projects after three
            years of studying Computer Science in SUNY Korea.
            <br />
            <br />
            I'll be graduating in Stony Brook University after Fall 2022.
            <br />
            <br />
            When I'm not in front of my desk, I do
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> workout every morning
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> watch YouTube
              documentary
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> pursue minimalism
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
