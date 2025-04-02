import React from "react";
import {Container, Row, Col, Fade} from "react-bootstrap";
import AboutmeContainer from "../../components/aboutme/aboutmeContainer";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaGoogle } from "react-icons/fa";
import Projects from "../../components/projects/Projects";
import Contactus from "../../components/contactus/Contactus";
import Collage from "./Collage";

export default function Home() {
  return (
    <section className="home-section">
      <div className='align-middle'>
        {/*<Particle />*/}
          <Row style={{marginBottom: '5%', alignItems: 'center', marginTop: '5%'}}>
              <Col md={1} style={{width: '5%'}}></Col>
              <Col md={6}>
                  <Container className="home-content">
                      <p
                          style={{paddingBottom: 15}}
                          className="heading"
                      >
                          Hi, my name is Randhir and I make stuff!
                      </p>
                      <h5
                          style={{paddingBottom: 15}}
                      >
                          A creator of solutions and experiences, Randhir is a co-founding member at Climate Diaries with a rich multi-disciplinary background.
                      </h5>

                      <div className="sociallink-home">
                          <ul className="homeaboutsociallinks">
                              <li className="socialicons">
                                  <a
                                      href="https://github.com/randhir051"
                                      target="_blank"
                                      rel="noreferrer"
                                      className="iconcolour  homesocialicons"
                                  >
                                      <AiFillGithub/>
                                  </a>
                              </li>
                              <li className="socialicons">
                                  <a
                                      href="https://www.linkedin.com/in/randhir051/"
                                      target="_blank"
                                      rel="noreferrer"
                                      className="iconcolour  homesocialicons"
                                  >
                                      <FaLinkedinIn/>
                                  </a>
                              </li>
                              <li className="socialicons">
                                  <a
                                      href="https://www.instagram.com/randhir.art/"
                                      target="_blank"
                                      rel="noreferrer"
                                      className="iconcolour homesocialicons"
                                  >
                                      <AiFillInstagram/>
                                  </a>
                              </li>
                              <li className="socialicons">
                                  <a
                                      href="mailto:randhirsingh051@gmail.com/"
                                      target="_blank"
                                      rel="noreferrer"
                                      className="iconcolour homesocialicons"
                                  >
                                      <FaGoogle/>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </Container>
              </Col>
              <Col md={5} style={{ paddingBottom: 20, marginTop: 10 }}>
                  <div className="img-home-main" style={{alignItems: "center", verticalAlign: 'middle', height: '100%'}} >
                              <img
                                  src="./me.jpg"
                                  alt="Randhir holding a sitar"
                                  className="img-fluid"
                                  height={'100%'}
                              />
                  </div>
              </Col>
          </Row>
      </div>
        <Collage />
        {/*<AboutmeContainer />*/}
        {/*<Certification />*/}
        <Projects/>
        <Contactus/>
    </section>
  );
}
