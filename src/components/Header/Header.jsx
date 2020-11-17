import React from 'react';
import './Header.scss';

const Header = () => (
    <div className='Header'>
        <a className='nameContainer' href='#begin'>
            <h1 className='name'>Muhammed Ali Bursal</h1>
        </a>

        <p>bursalma@gmail.com | <a href='https://linkedin.com/in/bursalma'>linkedin.com/in/bursalma</a> | <a href='https://Github.com/bursalma'>github.com/bursalma</a> </p>
                
        <div className='options'>
            <a className='option' href='#work'>WORK EXPERIENCE</a>
            <a className='option' href='#skill'>SKILLS</a>
            <a className='option' href='#project'>PROJECTS</a>
            <a className='option' href='#edu'>EDUCATION</a>
            <a className='option' href='#cert'>CERTIFICATIONS</a>
            <a className='option' href='#contact'>CONTACT ME</a>
        </div>
    </div>
);

export default Header;