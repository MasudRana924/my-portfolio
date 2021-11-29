import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

const Footer = () => {

    return (
        <Container fluid className="mt-5 pt-5">
            <Row xs={1} md={3}>
                <Col></Col>
                <Col>
                

                    <a href="https://web.facebook.com/masud924" target="_blank" rel="noopener noreferrer"  >
                        <FontAwesomeIcon icon={faFacebook} className="fb-icon mt-3" />
                    </a>

                    <FontAwesomeIcon icon={faInstagram} className="insta-icon ms-3 mt-3" />
                    <FontAwesomeIcon icon={faYoutube} className="youtube-icon ms-3 mt-3" />
                    <FontAwesomeIcon icon={faGoogle} className="google-icon ms-3 mt-3" />

                    <p className="text-center w-100 text-secondary">copyright © design in 2021 by
                        <a href="https://github.com/MasudRana924" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary"> Masud Rana </a>
                    </p>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
};

export default Footer;