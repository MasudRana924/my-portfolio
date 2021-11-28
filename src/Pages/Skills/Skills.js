import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
    CircularProgressbar,

    buildStyles
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

import 'react-circular-progressbar/dist/styles.css';
import './Skills.css'

const Skills = () => {
    const percentage = 100;
    const css = 90;
    const rb = 100;
    const rj = 75;
    const js = 75;
    const nj = 100;

    return (
        <Container fluid className="mt-5 pt-5 pb-5">
            <h2 className="text-center text-white pb-5">Skills </h2>
            <Row xs={3} md={6}>
                <Col className="mt-3">
                    <CircularProgressbar value={percentage} text={`${percentage}%`} />
                    <p className="text-secondary html">HTML</p>

                </Col>
                <Col className="mt-3">

                    <CircularProgressbar
                        value={percentage}
                        text={`${css}%`}
                        styles={buildStyles({
                            textColor: "red",
                            pathColor: "gold",
                            trailColor: "gold"
                        })}
                    />
                     <p className="text-secondary html">CSS</p>

                </Col>
                <Col className="mt-3">
                <CircularProgressbar
                        value={percentage}
                        text={`${rb}%`}
                        styles={buildStyles({
                            textColor: "green",
                            pathColor: "seagreen",
                            trailColor: "gold"
                        })}
                    />
                     <p className="text-secondary html">React Boot</p>
                </Col>
                <Col className="mt-3">
                <CircularProgressbar
                        value={percentage}
                        text={`${rj}%`}
                        styles={buildStyles({
                            textColor: "palegreen",
                            pathColor: "PaleGreen",
                            trailColor: "gold"
                        })}
                    />
                     <p className="text-secondary html">React JS</p>
                </Col>
                <Col className="mt-3">
                <CircularProgressbar
                        value={percentage}
                        text={`${js}%`}
                        styles={buildStyles({
                            textColor: "seagreen",
                            pathColor: "LightSeaGreen",
                            trailColor: "gold"
                        })}
                    />
                     <p className="text-secondary html">JS</p>
                </Col>
                <Col className="mt-3">
                <CircularProgressbar
                        value={percentage}
                        text={`${nj}%`}
                        styles={buildStyles({
                            textColor: "gold",
                            pathColor: "Aquamarine",
                            trailColor: "gold",
                           border:"1px"
                        })}
                    />
                     <p className="text-secondary html">Node JS</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Skills;