import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Project = (props) => {
    const { id, name, img } = props.project
    return (
        <Col>

            <div className="hotels-card ms-1">
                <img className="hotel-image" src={img} alt="" />
                <Link to={`/details/${id}`} className="text-decoration-none">
                    <p className="mt-1 text-white fw-bold">{name}</p>
                </Link>
            </div>
        </Col>
    );
};

export default Project;