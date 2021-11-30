import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Details.css'

const Details = () => {
    const { projectId } = useParams()
    console.log(projectId)

    const [projects, setProjects] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/projects/${projectId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProjects(data)
            })
    }, [])
    return (
        <Container className="details-section">
            <Row xs={1} md={3}>
                <Col md={2}></Col>
                <Col md={8}>
                    <div>
                        <img className="details-image" src={projects.img} alt="" />

                        <div className="d-flex details-images-section mt-3">
                            <div className="image-card me-1">
                                <img className="details-images" src={projects.img1} alt="" />
                            </div>
                            <div className="image-card me-1">
                                <img className="details-images" src={projects.img2} alt="" />
                            </div>
                            <div className="image-card">
                                <img className="details-images" src={projects.img3} alt="" />
                            </div>


                        </div>
                        <p className="mt-1 text-warning fw-bold fs-2">{projects.name}</p>
                        <p className="desc mt-3">- {projects.descOne}</p>
                        <p className="desc">- {projects.descTwo}</p>
                        <p className="desc">- {projects.descThree}
                            <a href={projects.link} target="_blank" rel="noopener noreferrer" className="text-warning text-decoration-none ms-3">live site</a>
                        </p>




                    </div>

                </Col>
                <Col md={2}></Col>

            </Row>

        </Container>
    );
};

export default Details;