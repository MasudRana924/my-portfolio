import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Email from '../Email/Email';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <About></About>
            <Projects id="projects"></Projects>
            <Skills></Skills>
            <Email></Email>
        </div>
    );
};

export default Home;