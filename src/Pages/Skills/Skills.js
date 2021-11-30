import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faReact, faEnvira, faHtml5, faCss3, faNodeJs, faJsSquare } from '@fortawesome/free-brands-svg-icons'
import './Skills.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Skills = () => {
    const boot = <FontAwesomeIcon icon={faBootstrap} className="skill-icon" />
    const react = <FontAwesomeIcon icon={faReact} className="skill-icon" />
    const node = <FontAwesomeIcon icon={faEnvira} className="skill-icon" />
    const html = <FontAwesomeIcon icon={faHtml5} className="skills-icon" />
    const css = <FontAwesomeIcon icon={faCss3} className="skills-icon" />
    const reactjs = <FontAwesomeIcon icon={faReact} className="skills-icon" />
    const nodejs = <FontAwesomeIcon icon={faNodeJs} className="skills-icon" />
    const js = <FontAwesomeIcon icon={faJsSquare} className="skills-icon" />
    const db = <FontAwesomeIcon icon={faEnvira} className="skills-icon" />

    AOS.init({
        duration:400,
          offset: 420,
          
      })
    return (
        <div id="services">
            <Container fluid className="mt-5 pt-5 pb-5">
                <h2 className="text-center text-warning  pb-5">Services & Skills </h2>
                <Row xs={1} md={2}>
                    <Col className="mt-3">
                        <div>
                            <Row>
                                <Col>
                                    <div className="services-card">
                                        <p className="text-secondary mt-3">Expert</p>
                                        <span>{boot}</span>
                                        <h6 className="text-secondary mt-3">Bootstrap Design </h6>
                                        <p className="services-desc text-secondary ">I can design a website by only bootstrap</p>

                                    </div>
                                </Col>
                                <Col>
                                    <div className="services-card">
                                        <p className="text-secondary mt-3">Good</p>
                                        <span>{react} </span>
                                        <h6 className="text-secondary mt-3"> Design with React </h6>
                                        <p className="services-desc text-secondary ">If my boos or clients wants i can design a website with React</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="services-card">
                                        <p className="text-secondary mt-3">Standard</p>
                                        <span> {node} </span>
                                        <h6 className="text-secondary mt-3">MongoDB</h6>
                                        <p className="services-desc text-secondary ">If server site needed i know MongoDB</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col className="mt-3">
                        <div data-aos="zoom-in"  className="w-75 mx-auto">
                            <p className="text-start text-secondary">{html} HTML5</p>
                            <ProgressBar striped variant="warning" now={100} />
                            <p className="text-start text-secondary mt-1">{css} CSS</p>
                            <ProgressBar striped variant="warning" now={90} />
                            <p className="text-start text-secondary mt-1">{js} JavaScript</p>
                            <ProgressBar striped variant="warning" now={75} />
                            <p className="text-start text-secondary mt-1">{reactjs} React JS</p>
                            <ProgressBar striped variant="warning" now={90} />
                            <p className="text-start text-secondary mt-1">{nodejs} NodeJS</p>
                            <ProgressBar striped variant="warning" now={80} />
                            <p className="text-start text-secondary mt-1">{db} MongoDB</p>
                            <ProgressBar striped variant="warning" now={90} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Skills;