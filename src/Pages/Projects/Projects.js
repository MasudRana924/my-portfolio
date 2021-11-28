import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import img from '../../Images/Screenshot (131).png'
import img2 from '../../Images/Screenshot (134).png'
import img3 from '../../Images/Screenshot (132).png'
import img4 from '../../Images/Screenshot (133).png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import './Projects.css'


const works = [
    {
        img: img,
        name: 'HotelResBD',

    },
    {
        img: img2,
        name: 'FoodHurry',

    },
    {
        img: img3,
        name: 'eaysShades',

    },
    {
        img: img4,
        name: 'TropBook',

    },
    {
        img: img3,
        name: 'eaysShades',

    },
    {
        img: img4,
        name: 'TropBook',

    }

]


const Projects = () => {

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
        <Container fluid className="mt-5 pt-5 pb-5" id="projects">
            <div className="container ">
                <h2 className="text-center ms-3 pt-3 text-white pb-5">Projects</h2>

                {
                    works.length === 0 ? < div className="spinner"> <Spinner animation="border" className="spinner" />
                    </div> :
                        <Slider {...Rsettings}>

                            {
                                works.map(project => (

                                    <div className="" >
                                        <div className="hotels-card ms-1">
                                            <img className="hotel-image" src={project.img} alt="" />
                                            <p className="mt-1 text-white fw-bold">{project.name}</p>


                                        </div>
                                    </div>

                                ))
                            }



                        </Slider>
                }

            </div>
        </Container>
    );
};

export default Projects;