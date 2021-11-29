import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import img from '../../Images/240572998_533542581061695_4729435655243464880_n-removebg-preview-removebg-preview.jpg'
import resume from '../../Images/resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Banner.css'

const Banner = () => {
    const phone = <FontAwesomeIcon icon={faPhone} />
    const email = <FontAwesomeIcon icon={faEnvelope} />
    return (
        <Container fluid className="banner mt-5 pt-5 pb-5">
            <Row xs={1} md={2}>


                <Col xs={12} md={6} className="pt-5">
                    <div className="mt-5">
                        <h4 className="text-secondary text-start  ps-5 ms-5">Hello it's Me </h4>
                        <h1 className="text-white text-start  ps-5 ms-5  mt-3 fs-1">Masud Rana</h1>
                        <p className="phone text-secondary  text-start  ps-5 ms-5">Front-End Web Developer</p>
                        <p className="phone text-secondary  text-start  ps-5 ms-5">{phone} +8801952254063</p>
                        <p className="phone text-secondary  text-start  ps-5 ms-5">{email} masud15-924@diu.edu.bd</p>
                      
                        <a href={resume} download>
                            <Button size="sm" className="resume-btn ">Download Resume</Button>
                        </a>
                      
                        

                    </div>
                </Col>

                <Col xs={12} md={6} className="pt-5 ">
                    <img src={img} className="mt-3 main-img" alt="" />
                </Col>
            </Row>

        </Container>
    );
};

export default Banner;