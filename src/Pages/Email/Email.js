import { Container, Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';

import './Email.css'

const Email = () => {
 
    return (
        <Container fluid className="mt-5 pt-5">
  
            <Row xs={1} md={3}>
                <Col md={2}></Col>

                <Col md={8}>
                    <div className="contact-form w-75 mx-auto">
                        
                                <div className="get-touch ">
                                    <p className="text-primary text-start">Get in touch</p>
                                    <Form className="">
                                        <Form.Group className=" mt-3 mb-3" controlId="formGroupEmail">

                                            <Form.Control type="email" placeholder="Enter name" />
                                        </Form.Group>
                                        <Form.Group className=" mt-3 mb-3" controlId="formGroupEmail">

                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                        <Form.Group className=" mt-3 mb-3" controlId="formGroupEmail">

                                            <Form.Control type="email" placeholder="Enter subject" />
                                        </Form.Group>
                                        <FloatingLabel controlId="floatingTextarea" label="Message" className="mb-3">
                                            <Form.Control as="textarea" placeholder="Leave a comment here" />
                                        </FloatingLabel>
                                        <Button variant="primary" size="sm" type="submit" className="w-50 mx-auto mb-3">Send Message</Button>
                                    </Form>

                                </div>
                           
                    </div>
                </Col>
                <Col md={2}></Col>

            </Row>


        </Container>
    );
};

export default Email;