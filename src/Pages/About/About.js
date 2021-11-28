import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown} from '@fortawesome/free-solid-svg-icons'

const About = () => {
    const arrow = <FontAwesomeIcon icon={faArrowDown} />
    return (
        <Container fluid className="mt-5 pt-5">
            <Row xs={1} md={3}>
                <Col md={3}>
                </Col>
                <Col xs={12} md={6}>
                    <div>
                        <h2 className="text-white pb-5">About Me</h2>
                        <p className="phone text-start text-secondary">Eager to learning something new and develop my skills and always wants to work under a skillful mentor and i love to explore my skills in React.js</p>

                        <p className="text-start text-white">Also I am good at {arrow} </p>
                        <span> <Button size="sm" variant="secondary" className=" me-1">HTML</Button>
                            <Button size="sm" variant="secondary" className=" me-1">CSS</Button>
                            <Button size="sm" variant="secondary" className=" me-1">Bootstrap</Button>
                            <Button size="sm" variant="secondary" className=" me-1">Tailwind</Button>
                            <Button size="sm" variant="secondary" className=" me-1">React.js</Button>

                        </span>
                    
                        
                        <span>
                            <Button size="sm" variant="secondary" className=" me-1 ">JS</Button>
                            <Button size="sm" variant="secondary" className=" me-1 ">Node.js</Button>
                            <Button size="sm" variant="secondary" className=" me-1 ">MongoDB</Button>
                            <Button size="sm" variant="secondary" className=" me-1 mt-1">Github</Button>
                            <Button size="sm" variant="secondary" className=" me-1 mt-1">Firebase</Button>

                        </span>
                    </div>
                </Col>
                <Col md={3}>
                </Col>
            </Row>

        </Container>
    );
};

export default About;