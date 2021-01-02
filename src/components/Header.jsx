import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <HeaderContainer id='header'>
    <NameContainer href='#begin'>
      <h1>Muhammed Ali Bursal</h1>
    </NameContainer>
 
    <p>
      <a 
        href='mailto:bursalma@gmail.com' 
        target='_blank' 
        rel='noreferrer noopener'>
        bursalma@gmail.com
      </a> | <a 
        href='https://linkedin.com/in/bursalma' 
        target='_blank' 
        rel='noreferrer noopener'>
        linkedin.com/in/bursalma
      </a> | <a 
        href='https://github.com/bursalma'
        target='_blank' 
        rel='noreferrer noopener'>
        github.com/bursalma
      </a>
    </p>
    
    <OptionsContainer>
      <a className='option' href='#work'>WORK EXPERIENCE</a>
      <a className='option' href='#skill'>SKILLS</a>
      <a className='option' href='#project'>PROJECTS</a>
      <a className='option' href='#edu'>EDUCATION</a>
      <a className='option' href='#cert'>CERTIFICATIONS</a>
    </OptionsContainer>
  </HeaderContainer>
);

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: sticky;
  top: 0;
  /* z-index: 1; */
  background-color: white;
  width: 100%;
  /* transition: 0.2s; */
  /* .smaller {
    color: blue;
  } */
`

const NameContainer = styled.a`
  margin-bottom: -30px;
  font-size: large;
`

const OptionsContainer = styled.a`
  margin-top: 10px;
  margin-bottom: 20px;

  .option {
    padding: 5px 10px;
    margin: 5px 5px;
    cursor: pointer;
    
    &:hover {
      background-color: black;
      color: white;
      border-radius: 5px;
    }
}
`

export default Header;