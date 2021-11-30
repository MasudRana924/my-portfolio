import React, { useState,useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import './Projects.css'
import { Link } from 'react-router-dom';
const Projects = () => {
    
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('https://polar-basin-49676.herokuapp.com/projects')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProjects(data)
            })
    }, [])

    let Rsettings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,

                }
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ]
    };
    return (
        <div id="pojects">
            <Container fluid className="mt-5 pt-5 pb-5" >
                <div className="container mt-3 " >
                    <h2 className="text-center  pt-3 text-warning pb-5">My Projects</h2>

                    {
                        projects.length === 0 ? < div className="spinner"> <Spinner animation="border" className="spinner" />
                        </div> :
                            // <Row xs={1} md={3} className="">

                            //     {
                            //         works.map(project => <Project
                            //         key={project.id}
                            //         project={project}
                            //         ></Project>)
                            //     }
                            // </Row>
                            <Slider {...Rsettings}>

                                {
                                    projects.map(project => (

                                        <div className="" >
                                            <div className="hotels-card ms-1">
                                                <img className="hotel-image" src={project.img} alt="" />
                                                <Link to={`/details/${project._id}`} className="text-decoration-none">
                                                    <p className="mt-1 text-white fw-bold">{project.name}</p>
                                                </Link>



                                            </div>
                                        </div>

                                    ))
                                }



                            </Slider>


                    }

                </div>
            </Container>
        </div>
    );
};

export default Projects;


