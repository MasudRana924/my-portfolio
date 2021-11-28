import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const Footer = () => {
    return (
        <Container fluid className="mt-5 pt-5">
            <Row xs={1} md={3}>
                <Col></Col>
                <Col>
                


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