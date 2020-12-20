import React from 'react';
import './Home.scss';

import Header from '../../components/Header/Header';
import Work from '../../components/Work/Work';
import Skill from '../../components/Skill/Skill';
import Project from '../../components/Project/Project';
import Edu from '../../components/Edu/Edu';
import Cert from '../../components/Cert/Cert';
import Contact from '../../components/Contact/Contact';

const Home = () => (
    <div className='Home'>
        <Header />
        <Work />
        <Skill />
        <Project />
        <Edu />
        <Cert />
        <Contact />
    </div>
);

export default Home;