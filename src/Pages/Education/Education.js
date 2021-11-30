import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap} from '@fortawesome/free-solid-svg-icons'
import './Education.css'
const Education = () => {
    const cap = <FontAwesomeIcon icon={faGraduationCap} className="cap-icon"/>
    return (
        <Container fluid className="mt-5 pt-5 " >
             <h2 className="text-center  pt-3 text-warning pb-5">Graduation</h2>
            <Row xs={1} md={3}className="mt-3 " >
                <Col md={3}></Col>
                <Col md={6}>
                    <div className="education-section" data-aos="zoom-in" data-aos-offset="420" data-aos-duration="400">
                        <span >{cap}</span>
                        <p className="mt-1 text-secondary fs-3">Daffodil International University</p>
                        <p className=" text-secondary">Computer Science Engineering (ongoing)</p>
                    </div>
                </Col>
                <Col md={3}></Col>
            </Row>

        </Container>
    );
};

export default Education;