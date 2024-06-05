import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

            <Fade>
              <lottie-player
                src="https://lottie.host/fbe547d2-4d40-436c-964b-9b39de958bfa/WV1ZZApcfr.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Fade>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple">Randhir</b>,
                I live in India and I love creating things.
                <br />
                <br />
                        I am proficient in languages to implement projects, such as
                  <b className="purple">
                    {" "}
                    JavaScript(React/Node), Java, Swift and DB tools.{" "}
                  </b>
                <br />
                <br />
                I also work on freelance illustration/animations projects via &nbsp;
                <a href={'https://www.fiverr.com/randhir051?up_rollout=true'}>
                  <b className="purple">
                    Fiverr{" "}
                  </b>
                </a>
                <br />
                <br />
                My aim in life is to leave a <b className="purple">positive impact</b> on the world.
                <br />
                <br />In my free time, I enjoy playing the <b className="purple">Sitar, Painting or Sculpting </b>
              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
