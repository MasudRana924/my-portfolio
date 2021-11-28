import React from 'react';
import { Col, Container, Row ,Button} from 'react-bootstrap';
import img from '../../Images/240572998_533542581061695_4729435655243464880_n-removebg-preview-removebg-preview.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import './Banner.css'

const Banner = () => {
    const phone = <FontAwesomeIcon icon={faPhone} />
    const email = <FontAwesomeIcon icon={faEnvelope} />
    return (
        <Container fluid className="banner mt-5 pt-5">
            <Row xs={1} md={2}>
           
                
                <Col xs={12} md={6}>
                    <div className="mt-5">
                        <h4 className="text-secondary text-start  ps-5 ms-5">Hello it's Me </h4>
                        <h1 className="text-white text-start  ps-5 ms-5  mt-3 fs-1">Masud Rana</h1>
                        <p  className="phone text-secondary  text-start  ps-5 ms-5">Front-End Web Developer</p>
                        <p className="phone text-secondary  text-start  ps-5 ms-5">{phone} +8801952254063</p>
                        <p className="phone text-secondary  text-start  ps-5 ms-5">{email} masud15-924@diu.edu.bd</p>

                      <Button size="sm" className="hire-btn  w-25">Hire me</Button>
                      <a href="../../Images/resume.pdf" download>
                       <Button size="sm" className=" ms-1">Download Resume</Button>
                       </a>

                    </div>
                </Col>

                <Col xs={12} md={6}>
                    <img src={img} className="main-img" alt="" />
                </Col>
            </Row>

        </Container>
    );
};

export default Banner;