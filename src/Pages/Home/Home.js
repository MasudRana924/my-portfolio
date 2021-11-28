import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Email from '../Email/Email';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Skills></Skills>
            <Email></Email>
        </div>
    );
};

export default Home;