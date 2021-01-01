import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <HeaderContainer>
    <a className='nameContainer' href='#begin'>
      <h1 className='name'>Muhammed Ali Bursal</h1>
    </a>

    <p>bursalma@gmail.com | <a href='https://linkedin.com/in/bursalma'>linkedin.com/in/bursalma</a> | <a href='https://github.com/bursalma'>github.com/bursalma</a> </p>

    <div className='options'>
      <a className='option' href='#work'>WORK EXPERIENCE</a>
      <a className='option' href='#skill'>SKILLS</a>
      <a className='option' href='#project'>PROJECTS</a>
      <a className='option' href='#edu'>EDUCATION</a>
      <a className='option' href='#cert'>CERTIFICATIONS</a>
    </div>
  </HeaderContainer>
);

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: fixed;
  width: 100%;
  transition: 0.2s;

  .nameContainer {
    margin-bottom: -30px;
    font-size: large;
  }
  
  .options {
    margin-top: 10px;
    margin-bottom: 20px;
    .option {
      padding: 10px 15px;
      cursor: pointer;
    }
  }
`

export default Header;