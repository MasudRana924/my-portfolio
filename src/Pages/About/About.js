import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import img from '../../Images/241886469_3075688522677532_3963189163640105276_n-removebg-preview-removebg-preview.jpg'
import './About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const About = () => {
    AOS.init({
        duration:400,
          offset: 420,
          
      })
    const arrow = <FontAwesomeIcon icon={faArrowDown} />
    const fb = <FontAwesomeIcon icon={faFacebook} className="icon"/>
    const git = <FontAwesomeIcon icon={faGithub}className="icon" />
    const linkedin = <FontAwesomeIcon icon={faLinkedin} className="icon"/>
    return (
        <div id="about">
            <Container fluid className="mt-5 pt-5">
                <Row xs={1} md={2}>
                    <Col md={6} className="pt-5 pt-5">
                        <div  data-aos="fade-right">
                        <img src={img} className=" main-img" alt="" />
                        </div>

                    
                    </Col>
                    <Col xs={12} md={6} order>
                        <div data-aos="fade-up" data-aos-offset="420" data-aos-easing="ease-in-sine" data-aos-duration="400" className="mt-5 pt-5">
                            <h2 className="text-white pb-5">About Me</h2>
                            <p className="phone text-start text-secondary">Eager to learning something new and develop my skills and always wants to work under a skillful mentor and i love to explore my skills in React.js</p>

                            <p className="text-start text-white">Also I am good at {arrow} </p>
                            <span className="skills-btn mt-1"> <Button size="sm" variant="outline-secondary" className=" me-1">HTML</Button>
                                <Button size="sm" variant="outline-secondary" className=" me-1">CSS</Button>
                                <Button size="sm" variant="outline-secondary" className=" me-1">Bootstrap</Button>
                                <Button size="sm" variant="outline-secondary" className=" me-1">Tailwind</Button>
                                <Button size="sm" variant="outline-secondary" className=" me-1">React.js</Button>
                            </span>
                            <br />
                            <span className="skills-btn">
                                <Button size="sm" variant="outline-secondary" className=" me-1 mt-1">JS</Button>
                                <Button size="sm" variant="outline-secondary" className=" me-1 mt-1">Node.js</Button>
                                <Button size="sm" variant="outline-secondary" className=" me-1 mt-1">MongoDB</Button>
                                <Button size="sm" variant="outline-secondary" className=" me-1 mt-1">Github</Button>
                                <Button size="sm" variant="outline-secondary" className=" me-1 mt-1">Firebase</Button>

                            </span>
                            <br />
                            <div className="link-list mt-3">
                            <a href="https://web.facebook.com/masud924" target="_blank" rel="noopener noreferrer"  >
                                    {fb}
                            </a>
                            <a href="https://github.com/MasudRana924" target="_blank" rel="noopener noreferrer"  >
                                    {git}
                            </a>
                            <a href="https://www.linkedin.com/in/masud-rana-673b3821b/" target="_blank" rel="noopener noreferrer"  >
                                    {linkedin}
                            </a>
                            </div>
                           
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default About;