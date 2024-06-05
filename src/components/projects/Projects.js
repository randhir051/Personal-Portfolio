import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import nyc from "../../images/nyc.png";
import ci from "../../images/onboarding.png";
import hd from "../../images/hd.png";
import pp from "../../images/portfolio.png";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import * as PropTypes from "prop-types";

function ProjectCard(props) {
  return <Col md={3}>
    <Fade left>
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
          <img src={nyc} alt={nyc}/>
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
    language: String
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
            />
              <ProjectCard
                  key={2}
                  name={'Fiverr'}
                  description={'Freelance for multiple clients across the globe'}
                  language={'Procreate, After Effects & '}
              />
              <ProjectCard
                  key={3}
                  name={'JP Morgan & Chase'}
                  description={'Worked in Fundamental Research and Regulatory Reporting over a span of seven years'}
                  language={'JavaScript, Java, PL/SQl'}
              />
              <ProjectCard
                  key={4}
                  name={'JP Morgan & Chase'}
                  description={'Worked in Fundamental Research and Regulatory Reporting over a span of seven years'}
                  language={'JavaScript, Java, PL/SQl'}
              />
            {/*<Col md={3}>*/}
            {/*  <Fade bottom>*/}
            {/*    <div*/}
            {/*        key={1}*/}
            {/*        className="singleProject"*/}
            {/*        style={{*/}
            {/*          backgroundColor: "rgb(142 70 186 / 31%)",*/}
            {/*          border: "1px solid",*/}
            {/*        }}*/}
            {/*    >*/}
            {/*      <div className="projectContent">*/}
            {/*        <h5 id={"first"} style={{color: "#fbd9ad"}}>*/}
            {/*          Heart Disease Prediction*/}
            {/*        </h5>*/}
            {/*        <img src={hd} alt={hd}/>*/}
            {/*        <div className="project--showcaseBtn">*/}
            {/*          <a*/}
            {/*              href={*/}
            {/*                "https://github.com/MD-MAFUJUL-HASAN/Machine_Learning/tree/main/Heart%20Disease%20Prediction"*/}
            {/*              }*/}
            {/*              target="_blank"*/}
            {/*              rel="noreferrer"*/}
            {/*              className={"iconBtn"}*/}
            {/*              aria-labelledby={`code`}*/}
            {/*          >*/}
            {/*            <FaCode*/}
            {/*                id={`code`}*/}
            {/*                className={"icon"}*/}
            {/*                aria-label="Code"*/}
            {/*            />*/}
            {/*          </a>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*      <h6>*/}
            {/*        <p*/}
            {/*            className="project--desc"*/}
            {/*            style={{*/}
            {/*              background: "#fbd9ad",*/}
            {/*              color: "#b061df",*/}
            {/*              fontWeight: 600,*/}
            {/*            }}*/}
            {/*        >*/}
            {/*          Use of AI and Machine Learning: Artificial intelligence*/}
            {/*          and machine learning are already being used in healthcare*/}
            {/*          to help predict heart disease. In the future, these*/}
            {/*          technologies could become more advanced, enabling more*/}
            {/*          accurate predictions of heart disease risk.*/}
            {/*        </p>*/}
            {/*      </h6>*/}
            {/*      <div*/}
            {/*          className="project--lang"*/}
            {/*          style={{*/}
            {/*            background: "#fbd9ad",*/}
            {/*            color: "#b061df",*/}
            {/*            fontWeight: 600,*/}
            {/*          }}*/}
            {/*      >*/}
            {/*        Pandas, Matplotlib, Scikit-Learn*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </Fade>*/}
            {/*</Col>*/}
            {/*<Col md={3}>*/}
            {/*  <Fade bottom>*/}
            {/*    <div*/}
            {/*        key={1}*/}
            {/*        className="singleProject"*/}
            {/*        style={{*/}
            {/*          backgroundColor: "rgb(142 70 186 / 31%)",*/}
            {/*          border: "1px solid",*/}
            {/*        }}*/}
            {/*    >*/}
            {/*      <div className="projectContent">*/}
            {/*        <h5 id={"first"} style={{color: "#fbd9ad"}}>*/}
            {/*          Online Payroll Management System*/}
            {/*        </h5>*/}
            {/*        <img src={ci} alt={ci}/>*/}
            {/*        <div className="project--showcaseBtn">*/}
            {/*          <a*/}
            {/*              href={*/}
            {/*                "https://github.com/MD-MAFUJUL-HASAN/Online-Payroll-Management-System"*/}
            {/*              }*/}
            {/*              target="_blank"*/}
            {/*              rel="noreferrer"*/}
            {/*              className={"iconBtn"}*/}
            {/*              aria-labelledby={`code`}*/}
            {/*          >*/}
            {/*            <FaCode*/}
            {/*                id={`code`}*/}
            {/*                className={"icon"}*/}
            {/*                aria-label="Code"*/}
            {/*            />*/}
            {/*          </a>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*      <h6>*/}
            {/*        <p*/}
            {/*            className="project--desc"*/}
            {/*            style={{*/}
            {/*              background: "#fbd9ad",*/}
            {/*              color: "#b061df",*/}
            {/*              fontWeight: 600,*/}
            {/*            }}*/}
            {/*        >*/}
            {/*          A Payroll management System with feature like generate*/}
            {/*          payslip & reports. It manages salaries, leaves, branches,*/}
            {/*          employees, designations, shifts, holidays and employee*/}
            {/*          attendance. It has chat application so internal employees*/}
            {/*          can use that feature.*/}
            {/*        </p>*/}
            {/*      </h6>*/}
            {/*      <div*/}
            {/*          className="project--lang"*/}
            {/*          style={{*/}
            {/*            background: "#fbd9ad",*/}
            {/*            color: "#b061df",*/}
            {/*            fontWeight: 600,*/}
            {/*          }}*/}
            {/*      >*/}
            {/*        CSS, JavaScript, PHP, SCSS*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </Fade>*/}
            {/*</Col>*/}
            {/*<Col md={3}>*/}
            {/*  <Fade bottom>*/}
            {/*    <div*/}
            {/*        key={1}*/}
            {/*        className="singleProject"*/}
            {/*        style={{*/}
            {/*          backgroundColor: "rgb(142 70 186 / 31%)",*/}
            {/*          border: "1px solid",*/}
            {/*        }}*/}
            {/*    >*/}
            {/*      <div className="projectContent">*/}
            {/*        <h5 id={"first"} style={{color: "#fbd9ad"}}>*/}
            {/*          Personal Portfolio*/}
            {/*        </h5>*/}
            {/*        <img src={pp} alt={pp}/>*/}
            {/*        <div className="project--showcaseBtn">*/}
            {/*          <a*/}
            {/*              href={*/}
            {/*                "https://github.com/MD-MAFUJUL-HASAN/Personal-Portfolio"*/}
            {/*              }*/}
            {/*              target="_blank"*/}
            {/*              rel="noreferrer"*/}
            {/*              className={"iconBtn"}*/}
            {/*              aria-labelledby={`code`}*/}
            {/*          >*/}
            {/*            <FaCode*/}
            {/*                id={`code`}*/}
            {/*                className={"icon"}*/}
            {/*                aria-label="Code"*/}
            {/*            />*/}
            {/*          </a>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*      <h6>*/}
            {/*        <p*/}
            {/*            className="project--desc"*/}
            {/*            style={{*/}
            {/*              background: "#fbd9ad",*/}
            {/*              color: "#b061df",*/}
            {/*              fontWeight: 600,*/}
            {/*            }}*/}
            {/*        >*/}
            {/*          Welcome to my personal portfolio. Explore my work, skills,*/}
            {/*          and achievements in a concise and visually appealing*/}
            {/*          format. Get a glimpse of my expertise and creativity.*/}
            {/*        </p>*/}
            {/*      </h6>*/}
            {/*      <div*/}
            {/*          className="project--lang"*/}
            {/*          style={{*/}
            {/*            background: "#fbd9ad",*/}
            {/*            color: "#b061df",*/}
            {/*            fontWeight: 600,*/}
            {/*          }}*/}
            {/*      >*/}
            {/*        HTML, CSS, SCSS, React, JavaScript*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </Fade>*/}
            {/*</Col>*/}
          </Row>
          <div className="blog--viewAll">
            <Link to="/projectspage">
              <button className="btn btn-primary">
                View All
                <HiArrowRight className="viewArr"/>
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}
