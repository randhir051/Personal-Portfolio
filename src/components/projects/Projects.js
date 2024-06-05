import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";
import jpm from "../../images/jp.jpg";
import fiverr from "../../images/fiverr.png";
import slice from "../../images/slicepay.jpg";
import coffee from "../../images/coffee.avif";

function ProjectCard(props) {
  return <Col md={3}>
    <Fade left delay={props.delay}>
      <div

          className="singleProject"
          style={{
            border: "1px solid",
          }}
      >
        <div className="projectContent">
          <h5 id={"first"} style={{color: "#fbd9ad"}}>
            {props.name}
          </h5>
          <img src={props.image} alt={props.image} style={{maxHeight: "100%", maxWidth: "100%"}} />
          <div className="project--showcaseBtn">
            {/*<a*/}
            {/*    href={*/}
            {/*      "https://github.com/MD-MAFUJUL-HASAN/Web_Programming/tree/main/New-Year-Countdown"*/}
            {/*    }*/}
            {/*    target="_blank"*/}
            {/*    rel="noreferrer"*/}
            {/*    className={"iconBtn"}*/}
            {/*    aria-labelledby={`code`}*/}
            {/*>*/}
            {/*  <FaCode*/}
            {/*      id={`code`}*/}
            {/*      className={"icon"}*/}
            {/*      aria-label="Code"*/}
            {/*  />*/}
            {/*</a>*/}
          </div>
        </div>
        <h6>
          <p
              className="project--desc"
              style={{
                background: "rgb(142 70 186 / 31%)",
                color: "#fbd9ad",
                fontWeight: 600,
              }}
          >
              {props.description}
          </p>
        </h6>
        <div
            className="project--lang"
            style={{
              background: "#fbd9ad",
              color: "#b061df",
              fontWeight: 600,
            }}
        >
            {props.language}
        </div>
      </div>
    </Fade>
  </Col>;
}

ProjectCard.propTypes = {
    name: String,
    description: String,
    language: String,
};
export default function Projects() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
                md={12}
                className="certificate-description d-flex justify-content-start"
            >
              <Fade>
                <h1 className="aboutme-heading">Works</h1>
              </Fade>
            </Col>
            <ProjectCard
                key={1}
                name={'JP Morgan & Chase'}
                description={'Worked in Fundamental Research and Regulatory Reporting over a span of seven years'}
                language={'JavaScript, Java, PL/SQl'}
                image={jpm}
                delay={100}
            />
              <ProjectCard
                  key={2}
                  name={'Fiverr'}
                  description={'Freelance for multiple clients across the globe'}
                  language={'Procreate, After Effects & '}
                  image={fiverr}
                  delay={300}
              />
              <ProjectCard
                  key={3}
                  name={'SlicePay'}
                  description={'Worked as an iOS app developer and created front-end solutions for the team'}
                  language={'Swift, iOS, X-code'}
                  image={slice}
                  delay={500}
              />
              <ProjectCard
                  key={4}
                  name={'Coffee Lab'}
                  description={'A personal project to help me make my morning coffee :)  '}
                  language={'Swift, iOS, X-code'}
                  image={coffee}
                  delay={700}
              />
          </Row>
          {/*<div className="blog--viewAll">*/}
          {/*  <Link to="/projectspage">*/}
          {/*    <button className="btn btn-primary">*/}
          {/*      View All*/}
          {/*      <HiArrowRight className="viewArr"/>*/}
          {/*    </button>*/}
          {/*  </Link>*/}
          {/*</div>*/}
        </Container>
      </Container>
    </div>
  );
}
